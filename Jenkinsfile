pipeline {
  agent any
  stages {
    stage('checkout code') {
      steps {
        git(url: 'https://github.com/montheooo/Resume.git', branch: 'main')
      }
    }

    stage('list directory') {
      steps {
        sh 'ls -al'
      }
    }

  }
}