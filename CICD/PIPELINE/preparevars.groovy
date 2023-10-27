def globalVariable(envName){
    //! Change config //
    env.project_group       = "do65003-smt" //projectID
    env.project_name        = "fe-gwe-web" //serviceID
    env.project_version     = "1.0"
    
    //! Git repository slug URL.
    //! A repository slug is a URL-friendly version of a repository name.
    //! Git repository slug url contains /group/sub_group_1/.../sub_group_N/project_name, /username/project_name
    //! Example: 
    //! 1. git-repo.com/group1/sub1/sub2/project_name_b
    //!     git_group_slug: group1/sub1/sub2/
    //!     git_group_slug: project_name_b
    //! 2. git-repo.com/username/project_name_c
    //!     git_group_slug: username/
    //!     git_group_slug: project_name_c
    //! 3. git-repo.com/project_group/project_name
    //!     git_group_slug: project_group/
    //!     git_group_slug: project_name
    env.git_group_slug      = "do65003-smt/"
    env.git_project_slug    = "fe-gwe-web"
    // Change config //

    env.application_language    = [ "python": false, "nodejs": true, "golang": false, "dotnet_core": false, "java": false, "php": false, "dotnet_fw": false ]
    env.deploy_type             = [ "oc": true, "aks": false, "eks": false, "azure_function": false, "appservice_srccode": false, "appservice_container": false ] // aks , aws , azure_function, oc
    env.unit_test_base_image    = "node:16.18.1" // Base image for unit test
    env.automate_test           = [ "api_test" : false, "ui_test" : true ]
    env.allow_failure           = [ "trivy" : true, "sonarqube" : true, "blackduck" : true, "owasp_zap"  : true , "coverity" : true , "performance_test" : true, "api_test" : true, "ui_test" : true]
    env.build_cmd               = "" // build source code before scanning example. "dotnet build", "go build ./cmd/web"
    env.coverityID              = "cov-jenkins"
    env.blkduckID               = "blkduck-jenkins"
    env.skip_stage              = [ "unit_test": false, "quality_analysis": false, "sca_black_duck": false, "sast_coverity": false, "image_scan_trivy": false, "dast_owasp_zap": false, "performance_test": false, "health_check_dev": false, "automate_test_dev": false, "health_check_sit": false, "automate_test_sit": false, "health_check_uat": false, "automate_test_uat": false, "health_check_prd": false]
    env.image_regitry_server    = [ "acr": false, "nexus": true, "ecr": false, "gar": false, "gcr": false ]

    url_env_1 = "https://${project_group}-${project_name}-dev.apps.ocpdev.pttdigital.com"
    url_env_2 = "https://${project_group}-${project_name}-sit.apps.ocpdev.pttdigital.com"
    url_env_4 = "https://${project_group}-${project_name}-prd.apps.ocpprd.pttdigital.com"
    url_path_env_1 = "/" // edit # Path for health check dev
    url_path_env_3 = "/" // edit # Path for health check uat
    url_path_env_4 = "/" // edit # Path for health check prd

    //! Container Registry //
    //! NEXUS Non Prod SERVER //
    nexus_non_prod_server_url = "nexus-registry.pttdigital.com"
    nexus_non_prod_credentials = "nexus-dgt-nonprd-user"
    //! End Non Prod NEXUS SERVER //
    //! NEXUS Prod SERVER //
    nexus_prod_server_url = "pttnexus-registry.pttdigital.com"
    nexus_prod_credentials = "ptt-nexus-jenkins-user"
    //! End Prod NEXUS SERVER //
    
    // Azure Config //
    //! Azure key vault Config // 
     env.keyVault_url        = "https://kv-pdsdevsecops-prd-001.vault.azure.net/"
     env.keyVault_credential = "vault-creds-for-jenkins-dgt"
    //! End Azure key vault Config //

    //! OpenShift Config //
    // DEV
    oc_credentials_env_1 = "openshift-ptt-non-prd-creds"
    oc_service_name_env_1 = "https://api.ocpdev.pttdigital.com:6443"
    // UAT
    oc_credentials_env_3 = "openshift-ptt-non-prd-creds"
    oc_service_name_env_3 = "https://api.ocpdev.pttdigital.com:6443"
    // PRD
    oc_credentials_env_4 = "openshift-ptt-prd-creds"
    oc_service_name_env_4 = "https://api.ocpprd.pttdigital.com:6443"
    // Custom Namespace
    custom_namespace_env_1    = ""
    custom_namespace_env_3    = ""
    custom_namespace_env_4    = ""
    //! End OpenShift Config //

    env.cicd_env_1 = "dev"
    env.cicd_env_3 = "uat"
    env.cicd_env_4 = "prd"

    switch (env.BRANCH_NAME) {

        case "develop":
            switch (envName) {
                case cicd_env_1 :
                    env.envName = cicd_env_1
                    // OC
                    env.oc_credentials            = oc_credentials_env_1
                    env.oc_service_name           = oc_service_name_env_1
                    // IMAGE
                    env.image_repo_server         = nexus_non_prod_server_url
                    env.image_credentials         = nexus_non_prod_credentials
                    env.image_name                = "${env.image_repo_server}/${project_group}-${project_name}"
                    // APP
                    env.url_application           = url_env_1
                    env.url_path                  = url_path_env_1
                    env.custom_namespace          = custom_namespace_env_1
                    break
            }
        case "hotfix":
        case "hotfix-deploy":
        case "master":
        case "main":
            switch (envName) {
                case cicd_env_3:
                    env.envName                   = cicd_env_3
                    // OC
                    env.oc_credentials            = oc_credentials_env_3
                    env.oc_service_name           = oc_service_name_env_3
                    // IMAGE
                    env.image_repo_server         = nexus_non_prod_server_url
                    env.image_credentials         = nexus_non_prod_credentials
                    env.image_name                = "${env.image_repo_server}/${project_group}-${project_name}"
                    // APP
                    env.url_application           = url_env_3
                    env.url_path                  = url_path_env_3
                    env.custom_namespace          = custom_namespace_env_3
                    break
                case cicd_env_4:
                    env.envName                   = cicd_env_4
                    // OC
                    env.oc_credentials            = oc_credentials_env_4
                    env.oc_service_name           = oc_service_name_env_4
                    // IMAGE
                    env.image_prev_repo_server    = nexus_non_prod_server_url
                    env.image_prev_credentials    = nexus_non_prod_credentials
                    env.image_repo_server         = nexus_prod_server_url
                    env.image_credentials         = nexus_prod_credentials
                    env.image_prev_name           = "${env.image_prev_repo_server}/${project_group}-${project_name}"
                    env.image_name                = "${env.image_repo_server}/${project_group}-${project_name}"
                    // APP
                    env.url_application           = url_env_4
                    env.url_path                  = url_path_env_4
                    env.custom_namespace          = custom_namespace_env_4
                    break
            }
    }
}

def clonePipelineVariable(){
    //! helm config //
    env.helmRepoCred            = "git-dgt-user"
    env.helmRepoUrl             = "https://git-dgt.pttdigital.com/devops/helm-charts-release/helm-chart-template.git"
    env.helmRepoBranch          = "main"
    env.helmWaitTimeout         = "5m0s"
    env.helmChartName           = "simple-generic-app-helm3"
    env.helmRelativeTargetDir   = "helm-chart"
    // helm config //
}

return this
