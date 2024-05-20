export const navData = [
    {
        id: 1,
        title: 'Services',
        route: '#',
        subRoutes: [
            {
                id: 'srvs-1',
                title: `Enterprise Applications`,
                route: '/services/enterpriseApplications',
                services: [
                    {
                        id: 0,
                        title: 'Oracle Cloud Applications',
                        route: '/services/oracleServices/oracle-cloud',
                    },
                    {
                        id: 1,
                        title: 'Oracle E-Business Suite',
                        route: '/services/oracleServices/oracle-cloud',
                    },
                ],
            },
            {
                id: 'srvs-2',
                title: `Technology Transformation`,
                route: '/services/technologyTransformation',
                services: [
                    {
                        id: 0,
                        title: 'Oracle Database Services',
                        route: '/services/oracleServices/oracle-database',
                    },
                    {
                        id: 1,
                        title: 'Oracle Fusion Middleware',
                        route: '/services/oracleServices/oracle-fusion-middleware',
                    },
                    {
                        id: 2,
                        title: 'Application Integration',
                        route: '/services/oracleServices/application-integration',
                    },
                ],
            },
            {
                id: 'srvs-3',
                title: `Cloud Transformations`,
                route: '/services/cloudTransformations',
                services: [
                    {
                        id: 0,
                        title: 'Oracle Cloud Infrastructure',
                        route: '/services/cloudInfrastructure',
                    },
                ],
            },
            {
                id: 'srvs-4',
                title: `Professional Services`,
                route: '/services/professionalServices',
                services: null,
            },
            {
                id: 'srvs-5',
                title: `Managed Support Services`,
                route: '/services/supportServices',
                services: null,
            },
        ],
    },
    {
        id: 2,
        title: 'Expertise',
        route: '#',
        subRoutes: [
            {
                id: 'exprt-1',
                title: `Oracle Cloud Applications`,
                route: '/services/oracleServices/oracle-cloud',
                services: null,
            },
            {
                id: 'exprt-2',
                title: `Oracle E-Business Suite`,
                route: '/services/oracleServices/oracle-ebusiness',
                services: null,
            },
            {
                id: 'exprt-3',
                title: `Oracle Database Services`,
                route: '/services/oracleServices/oracle-database',
                services: null,
            },
            {
                id: 'exprt-4',
                title: `Oracle Fusion Middleware`,
                route: '/services/oracleServices/oracle-fusion-middleware',
                services: null,
            },
        ],
    },
    {
        id: 0,
        title: 'Case Studies',
        route: '#',
        subRoutes: null,
    },
    {
        id: 3,
        title: 'About Us',
        route: '/company',
        subRoutes: null,
    },
    {
        id: 4,
        title: 'Careers',
        route: '/careers',
        subRoutes: null,
    },
];



