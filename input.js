var qlikdemosURL = "http://qlikdemos.qlikpoc.com/anon/";
var heirarchy = [
    {
        "type": "link",
        "title": "Microsite",
        "description": "Financial Services Resources",
        "icon": "home",
        "urls": ["finservmicrosite/index.html"],
        "breadcrumbs": "Home,FinServ Microsite"
    },
    {
        "type": "section",
        "title": "PLATFORM"
    },
    {
        "type": "parent",
        "title": "Associative Model",
        "icon": "arrows",
        "links":[
            {
                "type": "child",
                "title": "vs Query-Based Tools",
                "urls":[qlikdemosURL + "single/?appid=949c79c2-76a5-4060-b6cf-4b2031fa9604&sheet=3fd488b1-faff-4728-a8af-6b947d503948&opt=currsel"],
                "breadcrumbs":"PLATFORM,Associative Model,vs Query-Based Tools"
            },
            {
                "type": "child",
                "title": "Power of Gray",
                "urls":[qlikdemosURL + "single/?appid=949c79c2-76a5-4060-b6cf-4b2031fa9604&sheet=5681ade3-5809-405d-a9ea-bb6fddcfb668&opt=currsel"],
                "breadcrumbs":"PLATFORM,Associative Model,Power of Gray"
            },
            {
                "type": "child",
                "title": "Data Loss",
                "urls":[qlikdemosURL + "single/?appid=949c79c2-76a5-4060-b6cf-4b2031fa9604&sheet=NgDqCv&opt=currsel"],
                "breadcrumbs":"PLATFORM,Associative Model,Data Loss"
            }
        ]
    },    
    {
        "type": "parent",
        "title": "Self Service",
        "icon": "user-plus",
        "links":[
            {
                "type": "child",
                "title": "Ad-Hoc Reporting",
                "urls":[qlikdemosURL + "single/?appid=b5f879c3-58aa-4e04-a479-3cc422bf3fe0&sheet=cc3e6001-8e4e-49e3-9372-e38dbf7599e8&opt=currsel"],
                "breadcrumbs":"PLATFORM,Self Service,Ad-Hoc Reporting"
            },
            {
                "type": "child",
                "title": "Drag & Drop",
                "urls":["http://qlikdemos.qlikpoc.com/sense/app/b5f879c3-58aa-4e04-a479-3cc422bf3fe0/sheet/ChEKGhw/state/analysis"],
                "breadcrumbs":"PLATFORM,Customization,Drag & Drop"
            },
            {
                "type": "child",
                "title": "Collaboration",
                "urls":[qlikdemosURL + "single/?appid=b5f879c3-58aa-4e04-a479-3cc422bf3fe0&sheet=tfFhC&opt=currsel"],
                "breadcrumbs":"PLATFORM,Self Service,Collaboration"
            }
        ]
    },
    {
        "type": "parent",
        "title": "Customization",
        "icon": "tasks",
        "links":[
            {
                "type": "child",
                "title": "On the Fly Charts",
                "urls":["https://usnyc-pcl.qliktech.com/resources/chartgen/chartgen.html#"],
                "breadcrumbs":"PLATFORM,Customization,On the Fly Charts"
            },
            {
                "type": "child",
                "title": "iPortal",
                "urls":["https://qlikdemos.qlikpoc.com/iportal"],
                "breadcrumbs":"PLATFORM,Customization,Drag & Drop"
            },
            {
                "type": "child",
                "title": "Colorstyler",
                "urls":["http://localhost:4848/extensions/colorstyler/colorstyler.html"],
                "breadcrumbs":"PLATFORM,Customization,Drag & Drop"
            }
        ]
    },
  
    {
        "type": "parent",
        "title": "BIG DATA",
        "icon": "sort-amount-asc",
        "links":[
            {
                "type": "child",
                "title": "Cloudera Sense Server",
                "urls":["http://cloudera.qlik.com/"],
                "breadcrumbs":"PLATFORM,Big Data, Cloudera Integration"
            },
            {
                "type": "child",
                "title": "Solr On demand ",
                "urls":["http://cloudera.qlik.com:3000/?qlikTicket=MlE_kyfch72T6J1.&user=user_118"],
                "breadcrumbs":"PLATFORM,Big Data, Solr On demand"
            }
        ]
    },
    {
        "type": "parent",
        "title": "Management Consoles",
        "icon": "bars",
        "links":[
            {
                "type": "child",
                "title": "Sense QMC",
                "urls":["https://qlikdemos.qlikpoc.com/qmc/"],
                "breadcrumbs":"PLATFORM,Management Consoles,Sense QMC"
            },
            {
                "type": "child",
                "title": "Qlikview Governance",
                "urls":["https://qlikdemos.qlikpoc.com/qmc/"],
                "breadcrumbs":"PLATFORM,Management Consoles,Qlikview QMC"
            },
            {
                "type": "child",
                "title": "EA Powertools (coming soon)",
                "urls":["https://qlikdemos.qlikpoc.com:9945/qmcu/hworld"],
                "breadcrumbs":"PLATFORM,Management Consoles,EA Powertools"
            }
        ]
    },
    {
        "type": "link",
        "title": "Mobile",
        "description": "Responsive Design",
        "icon": "link",
        "urls": ["https://material.io/resizer/#url=https%3A%2F%2Fqlikdemos.qlikpoc.com%2Fanon%2Fsense%2Fapp%2Fff04ac7e-53cb-4736-9bcb-9770cc709045%2Fsheet%2F7be13d66-1f41-4e93-8062-a5eed744645b%2Fstate%2Fanalysis"],
        "breadcrumbs": "PLATFORM,Mobile"
    },
    {
        "type": "section",
        "title": "APPS"
    },
    {
        "type": "parent",
        "title": "Mortgage Sales",
        "icon": "dashboard",
        "links":[
            {
                "type": "child",
                "title": "Overview",
                "urls":[qlikdemosURL + "single/?appid=b5f879c3-58aa-4e04-a479-3cc422bf3fe0&identity=1&sheet=ChEKGhw&opt=currsel",qlikdemosURL + "single/?appid=b5f879c3-58aa-4e04-a479-3cc422bf3fe0&identity=1&sheet=tfFhC"],
                "breadcrumbs":"APPS,Mortgage Sales,Overview"
            },
            {
                "type": "child",
                "title": "What-If Scenario",
                "urls":[qlikdemosURL + "single/?appid=b5f879c3-58aa-4e04-a479-3cc422bf3fe0&sheet=CBHJtJ&opt=currsel"],
                "breadcrumbs":"APPS,Mortgage Sales,What-If Scenario"
            }
        ]
    },
    {
        "type": "parent",
        "title": "Insurance Claims",
        "icon": "dashboard",
        "links":[
            {
                "type": "child",
                "title": "Source Data",
                "urls":[qlikdemosURL + "single/?appid=92f95301-c45f-456a-afff-b12d91070040&sheet=WCdWUmh&opt=currsel"],
                "breadcrumbs":"APPS,Insurance Claims,Source Data"
            },
            {
                "type": "child",
                "title": "Chain Ladder Forecast",
                "urls":[qlikdemosURL + "single/?appid=92f95301-c45f-456a-afff-b12d91070040&sheet=895110cf-156a-49a1-a384-85f4b257007e&opt=currsel"],
                "breadcrumbs":"APPS,Insurance Claims,Chain Ladder Forecast"
            }
        ]
    },
    {
        "type": "parent",
        "title": "Sales Analytics",
        "icon": "dashboard",
        "links":[
            {
                "type": "child",
                "title": "Overview",
                "urls":[qlikdemosURL + "single/?appid=e09c2010-130a-4719-93d7-02ef24afb8b2&sheet=FcQKk&opt=currsel"],
                "breadcrumbs":"APPS,Sales Analytics,Overview"
            },
            {
                "type": "child",
                "title": "Opportunities",
                "urls":[qlikdemosURL + "single/?appid=e09c2010-130a-4719-93d7-02ef24afb8b2&sheet=TFMEjb&opt=currsel"],
                "breadcrumbs":"APPS,Sales Analytics,Opportunities"
            },
            {
                "type": "child",
                "title": "Pipeline Analysis",
                "urls":[qlikdemosURL + "single/?appid=e09c2010-130a-4719-93d7-02ef24afb8b2&sheet=mhSL&opt=currsel"],
                "breadcrumbs":"APPS,Sales Analytics,Pipeline Analysis"
            },
            {
                "type": "child",
                "title": "Regional Performance",
                "urls":[qlikdemosURL + "single/?appid=e09c2010-130a-4719-93d7-02ef24afb8b2&sheet=ydWhb&opt=currsel"],
                "breadcrumbs":"APPS,Sales Analytics,Regional Performance"
            },
            {
                "type": "child",
                "title": "Quota Analysis",
                "urls":[qlikdemosURL + "single/?appid=e09c2010-130a-4719-93d7-02ef24afb8b2&sheet=HDHeZ&opt=currsel"],
                "breadcrumbs":"APPS,Sales Analytics,Quota Analysis"
            },
            {
                "type": "child",
                "title": "Reporting",
                "urls":[qlikdemosURL + "single/?appid=e09c2010-130a-4719-93d7-02ef24afb8b2&sheet=d6fd20f5-c875-4a7c-9ad1-d33fc3c691cc&opt=currsel"],
                "breadcrumbs":"APPS,Sales Analytics,Reporting"
            }
        ]
    },
    {
        "type": "parent",
        "title": "Twitter Analysis",
        "icon": "dashboard",
        "links":[
            {
                "type": "child",
                "title": "Overview",
                "urls":[qlikdemosURL + "single/?appid=566583be-3c96-4848-bc69-70bac4333b48&sheet=316b0e2e-eb1f-4aa8-a7ac-5f4f0bca023d&opt=currsel"],
                "breadcrumbs":"APPS,Twitter Analysis,Overview"
            },
            {
                "type": "child",
                "title": "Tweet Analysis",
                "urls":[qlikdemosURL + "single/?appid=566583be-3c96-4848-bc69-70bac4333b48&sheet=BByDV&opt=currsel"],
                "breadcrumbs":"APPS,Twitter Analysis,Tweet Analysis"
            }
        ]
    },
    {
        "type": "section",
        "title": "MASHUPS"
    },
    {
        "type": "link",
        "title": "CIO Dashboard",
        "description": "Mashup Example",
        "icon": "cubes",
        "urls": ["http://webapps.qlik.com/CIO/index.html"],
        "breadcrumbs": "MASHUPS,CIO Dashboard"
    },
    {
        "type": "link",
        "title": "Sales Dashboard",
        "description": "Mashup Example",
        "icon": "cubes",
        "urls": ["https://webapps.qlik.com/salesforce/index.html#/dashboard/"],
        "breadcrumbs": "MASHUPS,Sales Dashboard"
    },
    {
        "type": "section",
        "title": "REPORTS"
    },
    {
        "type": "link",
        "title": "Fixed Income",
        "description": "NPrinting Report Example",
        "icon": "industry",
        "urls": ["reports/FixedIncome.pdf"],
        "breadcrumbs": "REPORTS,Fixed Income"
    },
    {
        "type": "link",
        "title": "Global Communications",
        "description": "NPrinting Report Example",
        "icon": "industry",
        "urls": ["reports/GlobalCommunication.pdf"],
        "breadcrumbs": "REPORTS,Global Communications"
    },
    {
        "type": "section",
        "title": "RESOURCES"
    },
    {
        "type": "link",
        "title": "FinServ Webinars",
        "description": "Financial Services On-Demand Webinars",
        "icon": "link",
        "urls": ["http://www.qlik.com/us/resource-library?search=financial+services+-+healthcare&Resource+Types=-1"],
        "breadcrumbs": "LINKS,FinServ Webinars"
    },
    {
        "type": "link",
        "title": "Top 12 Solutions",
        "description": "Top 12 Qlik Use Cases in Financial Services",
        "icon": "link",
        "urls": ["http://www.qlik.com/us/resource-library/top-12-qlik-solutions-in-fs"],
        "breadcrumbs": "LINKS,Top 12 Solutions"
    },
    {
        "type": "link",
        "title": "FinServ Blog",
        "description": "Financial Services Qlik Blog",
        "icon": "link",
        "urls": ["http://global.qlik.com/us/blog/topics/business-functions/financial-services"],
        "breadcrumbs": "LINKS,FinServ Blog"
    },
    {
        "type": "link",
        "title": "Telegram Bot",
        "icon": "link",
        "urls": ["https://web.telegram.org/#/im"],
        "directLink": true
    }
];
