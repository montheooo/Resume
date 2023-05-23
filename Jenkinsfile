pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/montheooo/Resume.git', branch: 'main')
      }
    }

    stage('list directory') {
      parallel {
        stage('list directory') {
          steps {
            sh 'ls -al'
          }
        }

        stage('front-end unit tests') {
          steps {
            sh 'npm install && npm test'
          }
        }

      }
    }

  }
}