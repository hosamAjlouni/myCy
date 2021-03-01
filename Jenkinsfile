pipeline {
    agent any

    stages {
        stage('pullRepo') {
            steps {
                git branch: 'main', credentialsId: 'c5367233-0670-4032-a4d2-de4cd292d1cc', url: 'https://github.com/hosamAjlouni/myCy.git'
            }
        }
        
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
