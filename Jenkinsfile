pipeline {
  agent any
  stages {
    stage('Test') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'fd708cf0-3852-4f64-83ea-f284efd49998',
          usernameVariable: 'PRACTICE_USERNAME',
          passwordVariable: 'PRACTICE_PASSWORD')]) {
          sh 'npm ci'
          sh 'npx playwright install --with-deps'
          sh 'npx playwright test'
        }
      }
    }
  }
}