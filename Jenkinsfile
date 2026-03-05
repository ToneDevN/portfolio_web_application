// ─────────────────────────────────────────────────────────────────────────────
//  Jenkinsfile  –  Profile Web Application
//  Pipeline: Checkout → Install → Build → Docker Build → Push → Deploy
// ─────────────────────────────────────────────────────────────────────────────

pipeline {
    agent any

    // ── Environment variables ──────────────────────────────────────────────────
    environment {
        // Docker Hub (or private registry) — set these in Jenkins Credentials
        DOCKER_REGISTRY   = 'docker.io'          // e.g. 'your-registry.com'
        DOCKER_IMAGE      = 'tonedev/profile-web' // <dockerhub-user>/<image-name>
        DOCKER_CREDS_ID   = 'dockerhub-credentials' // Jenkins credential ID

        // SSH deploy target — set in Jenkins Credentials (SSH Username with key)
        DEPLOY_SSH_ID     = 'deploy-server-ssh'
        DEPLOY_USER       = 'ubuntu'
        DEPLOY_HOST       = '192.168.1.100'       // Your server IP / hostname
        DEPLOY_PATH       = '/opt/profile-web-app' // Path on the server

        // Image tag: short Git SHA + build number for traceability
        IMAGE_TAG         = "${env.GIT_COMMIT?.take(7) ?: 'latest'}-${env.BUILD_NUMBER}"
    }

    // ── Pipeline options ────────────────────────────────────────────────────────
    options {
        timestamps()
        disableConcurrentBuilds()                  // prevent parallel deploys
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timeout(time: 30, unit: 'MINUTES')
    }

    // ── Triggers ────────────────────────────────────────────────────────────────
    triggers {
        // Poll SCM every 5 min, or use GitHub/GitLab webhook instead
        pollSCM('H/5 * * * *')
    }

    // ══════════════════════════════════════════════════════════════════════════
    stages {

        // ── 1. Checkout ─────────────────────────────────────────────────────────
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_COMMIT_SHORT = sh(
                        script: 'git rev-parse --short HEAD',
                        returnStdout: true
                    ).trim()
                    env.GIT_BRANCH_NAME = sh(
                        script: 'git rev-parse --abbrev-ref HEAD',
                        returnStdout: true
                    ).trim()
                    echo "🔀 Branch : ${env.GIT_BRANCH_NAME}"
                    echo "📝 Commit : ${env.GIT_COMMIT_SHORT}"
                }
            }
        }

        // ── 2. Install Dependencies ──────────────────────────────────────────────
        stage('Install') {
            agent {
                docker {
                    image 'oven/bun:1'
                    reuseNode true
                    args '--user root'
                }
            }
            steps {
                echo '📦 Installing dependencies with Bun...'
                sh 'bun install --frozen-lockfile'
            }
        }

        // ── 3. Build (Astro static site) ────────────────────────────────────────
        stage('Build') {
            agent {
                docker {
                    image 'oven/bun:1'
                    reuseNode true
                    args '--user root'
                }
            }
            steps {
                echo '🔨 Building Astro static site...'
                sh 'bun run build'
            }
            post {
                success {
                    // Archive the built artefacts so they're downloadable from Jenkins
                    archiveArtifacts artifacts: 'dist/**', fingerprint: true
                    echo '✅ Build artefacts archived.'
                }
            }
        }

        // ── 4. Docker Build & Push ───────────────────────────────────────────────
        stage('Docker Build & Push') {
            // Only run on main / master branch
            when {
                anyOf {
                    branch 'main'
                    branch 'master'
                }
            }
            steps {
                script {
                    def fullTag      = "${DOCKER_IMAGE}:${IMAGE_TAG}"
                    def latestTag    = "${DOCKER_IMAGE}:latest"

                    echo "🐳 Building Docker image: ${fullTag}"

                    docker.withRegistry("https://${DOCKER_REGISTRY}", DOCKER_CREDS_ID) {
                        def img = docker.build(fullTag, "--target runner .")

                        echo "📤 Pushing ${fullTag} and ${latestTag}..."
                        img.push()                      // push SHA-tagged image
                        img.push('latest')              // also update :latest
                    }

                    // Store the full tag for the Deploy stage
                    env.BUILT_IMAGE_TAG = fullTag
                }
            }
        }

        // ── 5. Deploy ────────────────────────────────────────────────────────────
        stage('Deploy') {
            when {
                anyOf {
                    branch 'main'
                    branch 'master'
                }
            }
            steps {
                script {
                    def builtTag = env.BUILT_IMAGE_TAG ?: "${DOCKER_IMAGE}:latest"

                    echo "🚀 Deploying ${builtTag} to ${DEPLOY_HOST}..."

                    sshagent(credentials: [DEPLOY_SSH_ID]) {
                        sh """
                            ssh -o StrictHostKeyChecking=no ${DEPLOY_USER}@${DEPLOY_HOST} '
                                set -e
                                cd ${DEPLOY_PATH}

                                echo "Pulling latest image: ${builtTag}"
                                docker pull ${builtTag}

                                echo "Updating docker-compose to use image tag ${builtTag}..."
                                export DEPLOY_IMAGE=${builtTag}

                                echo "Stopping old container..."
                                docker compose down --remove-orphans

                                echo "Starting new container..."
                                docker compose up -d app --wait

                                echo "Cleaning up dangling images..."
                                docker image prune -f
                            '
                        """
                    }
                }
            }
        }

    } // end stages

    // ══════════════════════════════════════════════════════════════════════════
    post {

        success {
            echo """
            ╔══════════════════════════════════════╗
            ║  ✅  Pipeline SUCCEEDED               ║
            ║  Branch  : ${env.GIT_BRANCH_NAME}
            ║  Commit  : ${env.GIT_COMMIT_SHORT}
            ║  Build # : ${env.BUILD_NUMBER}
            ╚══════════════════════════════════════╝
            """
        }

        failure {
            echo """
            ╔══════════════════════════════════════╗
            ║  ❌  Pipeline FAILED                  ║
            ║  Branch  : ${env.GIT_BRANCH_NAME}
            ║  Commit  : ${env.GIT_COMMIT_SHORT}
            ║  Build # : ${env.BUILD_NUMBER}
            ╚══════════════════════════════════════╝
            """
            // Uncomment to enable email notifications:
            // emailext(
            //     subject: "❌ Build #${env.BUILD_NUMBER} failed — ${env.JOB_NAME}",
            //     body: "Check console output at ${env.BUILD_URL}",
            //     to: 'you@example.com'
            // )
        }

        always {
            // Clean workspace to free disk space after each run
            cleanWs()
        }
    }
}
