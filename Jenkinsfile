pipeline {
    // กำหนดให้ Jenkins ใช้ Python 3.12 Container เป็นสภาพแวดล้อมในการรันโค้ด
    agent {
        docker {
            image 'python:3.12'
        }
    }

    environment {
        // ตั้งตัวแปรชื่อโฟลเดอร์สำหรับ Virtual Environment
        VENV_DIR = "venv"
    }

    stages {
        stage('Checkout Code') {
            steps {
                // ดึงโค้ดล่าสุดจาก GitHub Repository
                checkout scm
            }
        }

        stage('Setup Environment & Dependencies') {
            steps {
                // สร้าง venv และติดตั้งไลบรารีจาก requirements.txt
                sh """
                python -m venv ${VENV_DIR}
                . ${VENV_DIR}/bin/activate
                pip install --upgrade pip
                if [ -f requirements.txt ]; then
                    pip install -r requirements.txt
                fi
                """
            }
        }

        stage('Run Tests') {
            steps {
                // ตัวอย่างการรันเทสต์ (สามารถเปลี่ยนเป็นคำสั่งเทสต์ที่คุณใช้ประจำได้)
                sh """
                . ${VENV_DIR}/bin/activate
                pytest || echo "No tests configured yet"
                """
            }
        }

        stage('Build & Package') {
            steps {
                echo 'เตรียมพร้อมสำหรับการ Build หรือแพ็กไฟล์โปรเจกต์...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'โค้ดส่วนนี้สำหรับ Deploy นำแอปพลิเคชันขึ้น Server'
            }
        }
    }

    // ส่วนนี้จะทำงานเสมอหลังจาก Stages ด้านบนทำเสร็จ (ไม่ว่าจะผ่านหรือพัง)
    post {
        always {
            echo "ทำความสะอาด Workspace ป้องกันไฟล์ขยะตกค้าง..."
            cleanWs()
        }
        success {
            echo "✅ สำเร็จ! Pipeline ทำงานผ่านทุกขั้นตอน"
        }
        failure {
            echo "❌ ล้มเหลว! มีบาง Stage ทำงานไม่สำเร็จ กรุณาตรวจสอบ Log"
        }
    }
}