pipeline {
    agent any

    stages {
        stage('setupEnv') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('runCyTest') {
            steps {
                sh 'npm run cy:d-headless'
            }
        }
    }
}
