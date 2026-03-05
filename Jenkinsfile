pipeline {
    agent any

    // ─── Global Options ──────────────────────────────────────────────────────
    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timeout(time: 20, unit: 'MINUTES')
        disableConcurrentBuilds()
        timestamps()
    }

    // ─── Environment Variables ───────────────────────────────────────────────
    environment {
        // Docker image name — change to your registry path if needed
        // e.g. 'ghcr.io/yourhandle/profile-web-app' or 'yourdockerhubuser/profile-web-app'
        IMAGE_NAME   = 'profile-web-app'
        IMAGE_TAG    = "${env.BRANCH_NAME}-${env.BUILD_NUMBER}"
        COMPOSE_FILE = 'docker-compose.yml'

        // GitHub credentials ID stored in Jenkins Credentials
        GIT_CREDENTIALS_ID = 'github-token'

        // Docker registry credentials ID (optional — remove if not pushing)
        // DOCKER_CREDENTIALS_ID = 'dockerhub-credentials'

        // SSH deployment target (optional — for remote server deploy)
        // DEPLOY_HOST = 'user@your-server.com'
        // DEPLOY_DIR  = '/opt/profile-web-app'
    }

    // ─── Pipeline Stages ─────────────────────────────────────────────────────
    stages {

        // 1. Checkout ─────────────────────────────────────────────────────────
        stage('Checkout') {
            steps {
                echo '📥 Cloning repository from GitHub...'
                checkout([
                    $class           : 'GitSCM',
                    branches         : [[name: "*/${env.BRANCH_NAME ?: 'main'}"]],
                    userRemoteConfigs: [[
                        url          : 'https://github.com/ToneDevN/portfolio_web_application.git',
                        credentialsId: "${GIT_CREDENTIALS_ID}"
                    ]],
                    extensions       : [
                        [$class: 'CleanBeforeCheckout'],
                        [$class: 'CloneOption', depth: 1, shallow: true]
                    ]
                ])
                echo "✅ Checked out branch: ${env.BRANCH_NAME} @ ${env.GIT_COMMIT?.take(7)}"
            }
        }

        // 2. Install Dependencies ─────────────────────────────────────────────
        stage('Install') {
            steps {
                echo '📦 Installing dependencies with Bun...'
                sh '''
                    bun install --frozen-lockfile
                '''
            }
        }

        // 3. Code Quality ─────────────────────────────────────────────────────
        stage('Lint & Type Check') {
            parallel {
                stage('TypeScript Check') {
                    steps {
                        echo '� Running TypeScript type check...'
                        sh '''
                            bun x tsc --noEmit --project tsconfig.json || true
                        '''
                    }
                }
                stage('Astro Check') {
                    steps {
                        echo '🔍 Running Astro check...'
                        sh '''
                            bun x astro check || true
                        '''
                    }
                }
            }
        }

        // 4. Build ────────────────────────────────────────────────────────────
        stage('Build') {
            steps {
                echo '🔨 Building Astro static site...'
                sh '''
                    bun run build
                '''
                echo '✅ Build complete — dist/ directory ready'
                // Archive build artifacts
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true, allowEmptyArchive: false
            }
        }

        // 5. Docker Build ─────────────────────────────────────────────────────
        stage('Docker Build') {
            steps {
                echo "🐳 Building Docker image: ${IMAGE_NAME}:${IMAGE_TAG}..."
                sh """
                    docker build \
                        --target runner \
                        --tag ${IMAGE_NAME}:${IMAGE_TAG} \
                        --tag ${IMAGE_NAME}:latest \
                        --label "git.commit=${env.GIT_COMMIT}" \
                        --label "git.branch=${env.BRANCH_NAME}" \
                        --label "build.number=${env.BUILD_NUMBER}" \
                        .
                """
                echo "✅ Docker image built: ${IMAGE_NAME}:${IMAGE_TAG}"
            }
        }

        // 6. Docker Push (optional — uncomment + configure registry) ──────────
        // stage('Docker Push') {
        //     when {
        //         branch 'main'
        //     }
        //     steps {
        //         echo '📤 Pushing Docker image to registry...'
        //         withCredentials([usernamePassword(
        //             credentialsId: "${DOCKER_CREDENTIALS_ID}",
        //             usernameVariable: 'DOCKER_USER',
        //             passwordVariable: 'DOCKER_PASS'
        //         )]) {
        //             sh """
        //                 echo "${DOCKER_PASS}" | docker login -u "${DOCKER_USER}" --password-stdin
        //                 docker push ${IMAGE_NAME}:${IMAGE_TAG}
        //                 docker push ${IMAGE_NAME}:latest
        //                 docker logout
        //             """
        //         }
        //     }
        // }

        // 7. Deploy ───────────────────────────────────────────────────────────
        stage('Deploy') {
            when {
                anyOf {
                    branch 'main'
                    branch 'master'
                }
            }
            steps {
                echo '🚀 Deploying to production with Docker Compose...'
                sh """
                    docker compose -f ${COMPOSE_FILE} pull  || true
                    docker compose -f ${COMPOSE_FILE} up -d --build --remove-orphans
                    docker compose -f ${COMPOSE_FILE} ps
                """
                echo '✅ Deployment complete — app running on port 8000'
            }
        }

        // 8. Health Check ─────────────────────────────────────────────────────
        stage('Health Check') {
            when {
                anyOf {
                    branch 'main'
                    branch 'master'
                }
            }
            steps {
                echo '❤️  Waiting for container to be healthy...'
                sh '''
                    for i in $(seq 1 12); do
                        STATUS=$(docker inspect --format="{{.State.Health.Status}}" profile-web-app 2>/dev/null || echo "not_found")
                        echo "  Attempt $i/12 — health: $STATUS"
                        if [ "$STATUS" = "healthy" ]; then
                            echo "✅ Container is healthy!"
                            exit 0
                        fi
                        sleep 5
                    done
                    echo "❌ Health check timed out"
                    docker logs profile-web-app --tail 50
                    exit 1
                '''
            }
        }

    } // end stages

    // ─── Post Actions ────────────────────────────────────────────────────────
    post {
        always {
            echo '🧹 Cleaning up dangling Docker images...'
            sh 'docker image prune -f || true'
        }
        success {
            echo """
╔══════════════════════════════════════╗
║  ✅  BUILD & DEPLOY SUCCEEDED        ║
║  Branch : ${env.BRANCH_NAME}
║  Build  : #${env.BUILD_NUMBER}
║  Commit : ${env.GIT_COMMIT?.take(7)}
╚══════════════════════════════════════╝
            """
        }
        failure {
            echo """
╔══════════════════════════════════════╗
║  ❌  PIPELINE FAILED                 ║
║  Branch : ${env.BRANCH_NAME}
║  Build  : #${env.BUILD_NUMBER}
╚══════════════════════════════════════╝
            """
            // Optional: send Slack/email notification
            // slackSend channel: '#deploys', color: 'danger',
            //     message: "❌ Build #${BUILD_NUMBER} failed on ${BRANCH_NAME}"
        }
        cleanup {
            cleanWs()
        }
    }

}
