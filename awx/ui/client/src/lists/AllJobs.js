/*************************************************
 * Copyright (c) 2015 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/


export default
    angular.module('AllJobsDefinition', ['sanitizeFilter', 'capitalizeFilter'])
    .value( 'AllJobsList', {

        name: 'jobs',
        basePath: 'unified_jobs',
        iterator: 'all_job',
        editTitle: 'All Jobs',
        index: false,
        hover: true,
        well: false,
        fields: {
            status: {
                label: '',
                searchLabel: 'Status',
                columnClass: 'col-lg-1 col-md-1 col-sm-2 col-xs-2 List-staticColumn--smallStatus',
                dataTipWatch: 'all_job.status_tip',
                awToolTip: "{{ all_job.status_tip }}",
                awTipPlacement: "right",
                dataTitle: "{{ all_job.status_popover_title }}",
                icon: 'icon-job-{{ all_job.status }}',
                iconOnly: true,
                ngClick:"viewJobDetails(all_job)",
                searchable: true,
                searchType: 'select',
                nosort: true,
                searchOptions: [
                ]
            },
            id: {
                label: 'ID',
                ngClick:"viewJobDetails(all_job)",
                searchType: 'int',
                columnClass: 'col-lg-1 col-md-1 col-sm-2 col-xs-2 List-staticColumnAdjacent',
                awToolTip: "{{ all_job.status_tip }}",
                dataPlacement: 'top',
                noLink: true
            },
            name: {
                label: 'Name',
                columnClass: 'col-lg-2 col-md-3 col-sm-4 col-xs-6',
                ngClick: "viewJobDetails(all_job)",
                defaultSearchField: true,
                searchDefault: true,
            },
            type: {
                label: 'Type',
                ngBind: 'all_job.type_label',
                link: false,
                columnClass: "col-lg-2 hidden-md hidden-sm hidden-xs",
                columnShow: "showJobType",
                searchable: true,
                searchType: 'select',
                searchOptions: []    // populated via GetChoices() in controller
            },
            finished: {
                label: 'Finished',
                noLink: true,
                searchable: false,
                filter: "longDate",
                columnClass: "col-lg-2 col-md-3 col-sm-3 hidden-xs",
                key: true,
                desc: true
            },
            failed: {
                label: 'Job failed?',
                searchSingleValue: true,
                searchType: 'boolean',
                searchValue: 'true',
                searchOnly: true,
                nosort: true
            },
            labels: {
                label: 'Labels',
                type: 'labels',
                nosort: true,
                showDelete: false,
                columnClass: 'List-tableCell col-lg-4 col-md-4 hidden-sm hidden-xs',
                searchType: 'related',
                sourceModel: 'labels',
                sourceField: 'name'
            },
        },

        actions: { },

        fieldActions: {

            columnClass: 'col-lg-2 col-md-2 col-sm-3 col-xs-4',
            "view": {
                mode: "all",
                ngClick: "viewJob(all_job.id)",
                awToolTip: "View the job",
                dataPlacement: "top"
            },
            submit: {
                icon: 'icon-rocket',
                mode: 'all',
                ngClick: 'relaunchJob($event, all_job.id)',
                awToolTip: 'Relaunch using the same parameters',
                dataPlacement: 'top',
                ngShow: "!(all_job.type == 'system_job') && all_job.summary_fields.user_capabilities.start"
            },
            cancel: {
                mode: 'all',
                ngClick: 'deleteJob(all_job.id)',
                awToolTip: 'Cancel the job',
                dataPlacement: 'top',
                ngShow: "(all_job.status === 'running'|| all_job.status === 'waiting' || all_job.status === 'pending') && all_job.summary_fields.user_capabilities.start"
            },
            "delete": {
                mode: 'all',
                ngClick: 'deleteJob(all_job.id)',
                awToolTip: 'Delete the job',
                dataPlacement: 'top',
                ngShow: "(all_job.status !== 'running' && all_job.status !== 'waiting' && all_job.status !== 'pending') && all_job.summary_fields.user_capabilities.delete"
            }
        }
    });
