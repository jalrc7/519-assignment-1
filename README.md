[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14178188&assignment_repo_type=AssignmentRepo)


# Github Actions for Deployment on Azure 

This repo provides an overview of using GitHub Actions to automate the deployment of applications on Azure. GitHub Actions offers CI/CD features directly from GitHub, allowing to automate deployment.


This repo contains three YML files for deploying an Azure Web App, Azure Function App and an Azure Container app. 
Utilize Microsoft Azure Platform Extension on VS Code or Azure CLI installment to authenticate log in for Azure account.

# Workflows


main_519assign1.yml utilizes Node.js to deploy Azure Web App. 
Installment of Node Verision >= 20 required.


azure-functions-app-nodejs.yml 
Deploys contents of the API1 folder to an Azure Function. Modifications to index.js to display current date in http trigger.

az-container.yml  
Utilizes Docker Desktop to deploy contents of API2 folder to an azure containers app.
