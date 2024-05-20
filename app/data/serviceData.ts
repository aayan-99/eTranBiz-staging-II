import enterprise from '@/app/assets/images/landingprimaryservices/01.png'
import enterpriseHero from '@/app/assets/images/services/primaryservices/enterprisehero.webp'
import oracleBusinessTab from '@/app/assets/images/services/premiumservices/oracleBusinessTab.webp'
import oracleCloudTab from '@/app/assets/images/services/premiumservices/oracleCloudTab.webp'
import oraclePeopleSoftTab from '@/app/assets/images/services/premiumservices/oraclePeopleSpotTab.webp'
import oracleCRMTab from '@/app/assets/images/services/premiumservices/oracleCRMTab.webp'

import cloudTransformations from '@/app/assets/images/landingprimaryservices/03.png'
import cloudTransformationsHero from '@/app/assets/images/services/primaryservices/cloudtransformationshero.webp'
import cloudTransformationPerson from '@/app/assets/images/cloudTransformationPerson.webp'

import techTransformation from '@/app/assets/images/landingprimaryservices/02.png'
import techTransformationHero from '@/app/assets/images/services/primaryservices/technologytransformationhero.webp'
import oracleDatabaseTab from '@/app/assets/images/services/premiumservices/oracledatabasetab.webp'
import oracleFusionTab from '@/app/assets/images/services/premiumservices/oraclefusionmiddlewaretab.webp'

import proServices from '@/app/assets/images/landingprimaryservices/04.png'
import professionalServicesHero from '@/app/assets/images/services/primaryservices/professionalServicesHero.webp'
import proServicesAboutImg from '@/app/assets/images/proServicesAboutImg.webp'
import staffingSolutions from '@/app/assets/images/staffingSolutions.webp'

import managedSupport from '@/app/assets/images/landingprimaryservices/05.png'
import supportServicesHero from '@/app/assets/images/services/primaryservices/supportServicesHero.webp'
import databaseSupport from '@/app/assets/images/services/primaryservices/databaseSupport.webp'
import applicationSupport from '@/app/assets/images/services/primaryservices/applicationSupport.webp'
import cloudSupport from '@/app/assets/images/services/primaryservices/cloudSupport.webp'
import customDevelopments from '@/app/assets/images/services/primaryservices/customDevelopments.webp'
import comprehensiveMonitoring from '@/app/assets/images/services/primaryservices/comprehensiveMonitoring.webp'
import incidentManagement from '@/app/assets/images/services/primaryservices/incidentManagement.webp'
import dataIntegrity from '@/app/assets/images/services/primaryservices/dataIntegrity.webp'

import oracleCloud from '@/app/assets/images/landingpremiumservices/01.png'
import oracleCloudHero from '@/app/assets/images/services/premiumservices/oracleCloudHero.webp'

import oracleBusiness from '@/app/assets/images/landingpremiumservices/02.png'
import oracleEBusinessHero from '@/app/assets/images/services/premiumservices/oracleEbusinessHero.webp'

import oracleDatabase from '@/app/assets/images/landingpremiumservices/03.png'
import oracleDatabaseHero from '@/app/assets/images/services/premiumservices/oracleDatabaseHero.webp'

import oracleFusion from '@/app/assets/images/landingpremiumservices/04.png'
import oracleFusionMiddlewareHero from '@/app/assets/images/services/premiumservices/oracleFusionMiddlewareHero.webp'
import applicationIntegrationHero from '@/app/assets/images/services/premiumservices/applicationIntegrationHero.webp'

import cloudInfrastructureHero from '@/app/assets/images/services/premiumservices/cloudInfrastructureHero.webp'

import { StaticImageData } from 'next/image'
import { EnterpriseApplicationData, ServiceData, TechnologyTransformationData } from '../types/serviceInterfaces'

interface ServicesList {
    primaryServices: {
        id: number;
        title: string;
        image: string | any;
        content: string;
        route: string | null;
    }[];
    specializedServices: {
        id: number;
        title: string;
        image: string | any;
        content: string;
        route: string;
    }[];
}


export const servicesList: ServicesList = {
    primaryServices: [
        {
            id: 0,
            title: 'Enterprise Applications',
            image: enterprise,
            content: 'uhedf uefh euf uehf uhfe uhfe fhe fheu feu efh efh dkjns',
            route: '/services/enterpriseApplications',
        },
        {
            id: 1,
            title: 'Technology Transformation',
            image: techTransformation,
            content: 'uhedf uefh euf uehf uhfe uhfe fhe fheu feu efh efh dkjns',
            route: '/services/technologyTransformation',
        },
        {
            id: 2,
            title: 'Cloud Transformations',
            image: cloudTransformations,
            content: 'uhedf uefh euf uehf uhfe uhfe fhe fheu feu efh efh dkjns',
            route: '/services/cloudTransformations',
        },
        {
            id: 3,
            title: 'Professional Services',
            image: proServices,
            content: 'uhedf uefh euf uehf uhfe uhfe fhe fheu feu efh efh dkjns',
            route: '/services/professionalServices',
        },
        {
            id: 4,
            title: 'Managed Support Services',
            image: managedSupport,
            content: 'uhedf uefh euf uehf uhfe uhfe fhe fheu feu efh efh dkjns',
            route: '/services/supportServices',
        },
    ],
    specializedServices: [
        {
            id: 0,
            title: 'Oracle Cloud Applications',
            image: oracleCloud,
            content: 'uhedf uefh euf uehf uhfe uhfe fhe fheu feu efh efh dkjns',
            route: '/services/oracleServices/oracle-cloud',
        },
        {
            id: 1,
            title: 'Oracle E-business Suite',
            image: oracleBusiness,
            content: 'uhedf uefh euf uehf uhfe uhfe fhe fheu feu efh efh dkjns',
            route: '/services/oracleServices/oracle-ebusiness',
        },
        {
            id: 2,
            title: 'Oracle Database Services',
            image: oracleDatabase,
            content: 'uhedf uefh euf uehf uhfe uhfe fhe fheu feu efh efh dkjns',
            route: '/services/oracleServices/oracle-database',
        },
        {
            id: 3,
            title: 'Oracle Fusion Middleware ',
            image: oracleFusion,
            content: 'uhedf uefh euf uehf uhfe uhfe fhe fheu feu efh efh dkjns',
            route: '/services/oracleServices/oracle-fusion-middleware',
        },
    ],
};

export const servicesData = {
    primaryServices: [
        {
            id: 0,
            title: 'Enterprise Applications',
            heroImage: enterpriseHero,
            aboutHeader: 'Scalable solutions for large-scale implementations',
            aboutText: `We specialize in custom enterprise solutions on the Oracle product suite. Our skilled consultants follow a comprehensive process, analyzing business flows and requirements to develop tailor-made solutions that enhance your company's operational efficiency & foster growth. We use cutting-edge tools and technologies to code, test, and deploy scalable IT solutions with ongoing support and maintenance.`,
            industryData: {
                title: 'Industries',
                about: `Our team's product knowledge enables us to determine the best solution for your unique needs, with successful projects across`,
                industries: [
                    {
                        id: 0,
                        title: 'Banking',
                        image: '',
                    },
                    {
                        id: 1,
                        title: 'Government & PSUs',
                        image: '',
                    },
                    {
                        id: 2,
                        title: 'Oil & Gas',
                        image: '',
                    },
                    {
                        id: 3,
                        title: 'Logistics',
                        image: '',
                    },
                    {
                        id: 4,
                        title: 'Automotive',
                        image: '',
                    },
                    {
                        id: 5,
                        title: 'Retail',
                        image: '',
                    },
                    {
                        id: 6,
                        title: 'Manufacturing',
                        image: '',
                    },
                ],
            },
            functionalAreas: {
                title: 'Functional Area',
                areas: [
                    {
                        id: 0,
                        title: 'Financial Management',
                        content: [
                            `Personalize customer experiences, enhance customer engagement, and improve marketing effectiveness.`
                        ]
                    },
                    {
                        id: 1,
                        title: 'Human Capital Management (HCM)',
                        content: [
                            `Personalize customer experiences, enhance customer engagement, and improve marketing effectiveness.`
                        ]
                    },
                    {
                        id: 2,
                        title: 'Supply Chain Management (SCM)',
                        content: [
                            `Personalize customer experiences, enhance customer engagement, and improve marketing effectiveness.`
                        ]
                    },
                    {
                        id: 3,
                        title: 'Customer Experience (CX)',
                        content: [
                            `Personalize customer experiences, enhance customer engagement, and improve marketing effectiveness.`
                        ]
                    },
                    {
                        id: 4,
                        title: 'Management',
                        content: [
                            `Personalize customer experiences, enhance customer engagement, and improve marketing effectiveness.`
                        ]
                    },
                ],
            },
            oracleServices: [
                {
                    id: 0,
                    title: 'Oracle e-business suite',
                    tabImage: oracleBusinessTab,
                    about: [
                        `We harness the power of Oracle E-Business Suite (EBS) to deliver customized solutions that meet the unique needs of your enterprise. EBS is an integrated set of business applications designed to streamline and automate your processes, providing a complete, end-to-end solution for managing your organization.`,
                        `Our EBS solutions are tailored to your specific industry requirements and include:`,
                    ],
                    services: [
                        {
                            id: 0,
                            service: `Financial Management: Optimize financial operations and ensure compliance.`,
                        },
                        {
                            id: 1,
                            service: `SCM: Improve supply chain management, reduce costs, and boost customer satisfaction.`,
                        },
                        {
                            id: 2,
                            service: `CRM: Manage customer relationships with marketing, sales, and customer service tools.`,
                        },
                        {
                            id: 3,
                            service: `HCM: Streamline HR processes, optimize talent management, and develop employees.`,
                        },
                        {
                            id: 4,
                            service: `PPM: Efficiently manage projects and portfolios, improving resource allocation and scheduling.`,
                        },
                        {
                            id: 5,
                            service: `Manufacturing: Set up & run complete pipeline management for your manufacturing unit from ERP to CRM`,
                        },
                    ],
                    conclusion: null,
                },
                {
                    id: 1,
                    title: 'Oracle Cloud Applications',
                    tabImage: oracleCloudTab,
                    about: [
                        `Explore our expertise in Oracle Cloud Applications, offering tailored solutions for your business in:`,
                    ],
                    services: [
                        {
                            id: 0,
                            service: `ERP: Transform financial processes with real-time data analysis, improving forecasting, and decision-making.`,
                        },
                        {
                            id: 1,
                            service: `HCM: Content to be added here.`,
                        },
                        {
                            id: 2,
                            service: `Customer Experience (CX): Manage customer experience throughout your pipeline from lead generation, to deal closing, and finally to support. `,
                        },
                        {
                            id: 3,
                            service: `Supply Chain Management (SCM): Content to be added here.`,
                        },
                    ],
                    conclusion: `Our team understands the unique challenges of various industries and will collaborate with you to develop a custom Oracle Cloud Application solution that drives growth and profitability. We can also assist companies in transforming their existing infrastructure into a future-proof, high-efficiency, cloud-run system through out Cloud Transformation services. Contact us today to discover our innovative, AI-driven solutions.`,
                },
                {
                    id: 2,
                    title: 'Oracle PeopleSoft Applications',
                    tabImage: oraclePeopleSoftTab,
                    about: [
                        `Oracle PeopleSoft Applications offer numerous advantages for businesses:`,
                    ],
                    services: [
                        {
                            id: 0,
                            service: `Broad functionality: Access to integrated Financials, HCM, SCM, and Campus Solutions.`,
                        },
                        {
                            id: 1,
                            service: `Customizable and flexible: Adaptable to meet unique business needs.`,
                        },
                        {
                            id: 2,
                            service: `User-friendly: Intuitive interfaces for increased productivity.`,
                        },
                        {
                            id: 3,
                            service: `Scalable: Designed for long-term growth and expansion.`,
                        },
                        {
                            id: 4,
                            service: `Integration-ready: Seamless integration with other applications.`,
                        },
                        {
                            id: 5,
                            service: `Secure and compliant: Robust security and regulatory compliance.`,
                        },
                        {
                            id: 6,
                            service: `Strong support: Backed by a large user community.`,
                        },
                    ],
                    conclusion: null,
                },
                {
                    id: 3,
                    title: 'Oracle Siebel CRM',
                    tabImage: oracleCRMTab,
                    about: [
                        `Oracle Siebel CRM is a powerful and versatile solution designed to help businesses manage their customer relationships, drive growth, and improve profitability. By implementing Oracle Siebel CRM, organizations can realize numerous benefits, including:`,
                    ],
                    services: [
                        {
                            id: 0,
                            service: `Sophisticated functionality: Comprehensive CRM features covering sales, marketing, customer service, and more.`,
                        },
                        {
                            id: 1,
                            service: `Deep analytics: In-depth analytics and reporting for robust customer insights and informed decision-making.`,
                        },
                        {
                            id: 2,
                            service: `Personalization: Tailored customer experiences based on individual preferences, behaviors, and context.`,
                        },
                        {
                            id: 3,
                            service: `Integration capabilities: Seamless integration with other Oracle and third-party applications.`,
                        },
                        {
                            id: 4,
                            service: `Scalability: Built to accommodate business growth and expansion.`,
                        },
                        {
                            id: 5,
                            service: `Security and compliance: Strong security features and continuous updates for regulatory compliance.`,
                        },
                    ],
                    conclusion: null,
                },
            ],
            scope: {
                title: 'Scope of Service',
                about: `Whether you're looking to upgrade or update your existing infrastructure or build robust frameworks to accelerate your company's growth, our team of expert consultants can assist you through any phase of your implementation.`,
                scopeList: [
                    {
                        id: 0,
                        content: 'Consulting & Advisory',
                    },
                    {
                        id: 1,
                        content: 'Professional Services',
                    },
                    {
                        id: 2,
                        content: 'Implementation',
                    },
                    {
                        id: 3,
                        content: 'Upgrades',
                    },
                    {
                        id: 4,
                        content: 'Integration & Interoperability',
                    },
                    {
                        id: 5,
                        content: 'Migrations',
                    },
                    {
                        id: 6,
                        content: 'Managed Support Services',
                    },
                    {
                        id: 7,
                        content: 'Extensions & Enhancements',
                    },
                    {
                        id: 8,
                        content: 'Reports, Interfaces, & Customization',
                    },
                ],
            },
        },
        {
            id: 1,
            title: 'Technology Transformation',
            image: techTransformationHero,
            about: [
                `At eTranBiz, we recognize the vital role that data plays in driving business success. Our technology transformation services are geared towards empowering organizations to effectively manage and harness their data for informed decision-making and growth.`,
                `Our database management solutions are customized to meet each client's specific requirements, ensuring secure storage, quick retrieval, and smooth integration with other systems. By leveraging cutting-edge technologies, Oracle’s robust tools, and best practices, we enable our clients to access accurate and up-to-date data at all times.`,
                `Let us help you unlock the full potential of your data with our comprehensive technology transformation services.`,
            ],
            oracleServices: [
                {
                    id: 0,
                    title: 'Oracle Database Services',
                    about: [
                        `Oracle Database is a powerful tool for managing and harnessing the potential of your data. With features such as high availability, disaster recovery, real-time data integration, and advanced security features, Oracle's database platform offers unparalleled performance and reliability.`,
                        `Whether you're looking to enhance your data management capabilities, improve your decision-making processes, or drive growth, Oracle's database platform can help you achieve your goals.`,
                    ],
                    services: [
                        {
                            id: 0,
                            title: 'Design and Architecture',
                            service: 'Planning and structuring of database and application systems.',
                        },
                        {
                            id: 1,
                            title: 'Installation and Configuration',
                            service: 'Setting up and configuring database and application systems.',
                        },
                        {
                            id: 2,
                            title: 'Database Support and Administration',
                            service: 'Ongoing maintenance and support for database systems.',
                        },
                        {
                            id: 3,
                            title: 'Oracle Apps Database Support and Administration',
                            service: 'Providing technical support and administration for Oracle Applications databases.',
                        },
                        {
                            id: 4,
                            title: 'Multi-Node Setup and DMZ Configuration',
                            service: 'Setting up and configuring a network for secure data transfer and access.',
                        },
                        {
                            id: 5,
                            title: 'Performance Tuning and Optimization',
                            service: 'Improving the efficiency and speed of database and application systems.',
                        },
                        {
                            id: 6,
                            title: 'Database Migration',
                            service: 'Moving data and applications from one system to another.',
                        },
                        {
                            id: 7,
                            title: 'Database Upgrade',
                            service: 'Upgrading database software to a newer version.',
                        },
                        {
                            id: 8,
                            title: 'Data Backup and Recovery',
                            service: 'Protecting data against loss and restoring it in case of data loss.',
                        },
                        {
                            id: 9,
                            title: 'Database and Application Cloning',
                            service: 'Creating copies of databases and applications for backup, testing, or development purposes.',
                        },
                        {
                            id: 10,
                            title: 'High Availability and Disaster Recovery (DR)',
                            service: 'Ensuring continuous operation and data availability in case of disruptions or failures.',
                        },
                        {
                            id: 11,
                            title: 'Oracle GoldenGate',
                            service: 'Real-time data integration and replication solution.',
                        },
                        {
                            id: 12,
                            title: 'Security and Compliance',
                            service: 'Protecting data and systems from unauthorized access and ensuring compliance with regulations.',
                        },
                        {
                            id: 13,
                            title: 'Data Integration',
                            service: 'Combining and transforming data from different sources.',
                        },
                        {
                            id: 14,
                            title: 'Automation Scripting',
                            service: 'Automating repetitive tasks and processes through scripting.',
                        },
                        {
                            id: 15,
                            title: 'RAC, ASM, Grid, and Clustering Administration',
                            service: 'Managing and administering Oracle Real Application Clusters, Automatic Storage Management, Grid Infrastructure, and Clustering.',
                        },
                    ],
                },
                {
                    id: 1,
                    title: 'Oracle Fusion Middleware Services',
                    about: [
                        `With features such as business process management, integration, and analytics, Oracle Fusion Middleware enables organizations to streamline their operations, improve their decision-making processes, and drive growth.`,
                        `Whether you're looking to build a custom application, integrate your existing systems, or leverage data analytics for informed decision-making, Oracle Fusion Middleware offers the tools and capabilities you need. Choose eTranBiz for expert Oracle Fusion Middleware Services that will help you achieve your premiums goals.`
                    ],
                    services: [
                        {
                            id: 0,
                            service: 'Installation and Configuration',
                        },
                        {
                            id: 1,
                            service: 'Oracle HTTP Server',
                        },
                        {
                            id: 2,
                            service: 'Upgrade Services',
                        },
                        {
                            id: 3,
                            service: 'Oracle OID, OAM, OUD',
                        },
                        {
                            id: 4,
                            service: 'Support and Maintenance',
                        },
                        {
                            id: 5,
                            service: 'Oracle Web-Center Sites, Portal, and Content',
                        },
                        {
                            id: 6,
                            service: 'Migration Services',
                        },
                        {
                            id: 7,
                            service: 'Oracle SOA Suite',
                        },
                        {
                            id: 8,
                            service: 'Fusion Middleware Infrastructure',
                        },
                        {
                            id: 9,
                            service: 'Oracle ODI',
                        },
                        {
                            id: 10,
                            service: 'Oracle WebLogic Server',
                        },
                        {
                            id: 11,
                            service: 'Forms and Reports Servers, ADF, and JDeveloper',
                        },
                    ],
                    otherSolutions: {
                        title: 'Other Solutions',
                        solutions: [
                            {
                                id: 0,
                                title: 'Single sign-on and Access Management Solutions',
                                content: `Boost team productivity and innovation with eTranBiz's knowledge management, content, and collaboration suites. Leveraging Oracle's WebCenter Content and WebCenter Portal, our solutions enable organizations to create, manage, and share information efficiently. Features such as document management, social collaboration, and content authoring tools streamline workflows and enhance collaboration across departments. Centralizing knowledge management with eTranBiz leads to improved information access, reduced redundancy, and fostered innovation.`,
                            },
                            {
                                id: 1,
                                title: 'Knowledge management, content, and collaboration suites',
                                content: `Boost team productivity and innovation with eTranBiz's knowledge management, content, and collaboration suites. Leveraging Oracle's WebCenter Content and WebCenter Portal, our solutions enable organizations to create, manage, and share information efficiently. Features such as document management, social collaboration, and content authoring tools streamline workflows and enhance collaboration across departments. Centralizing knowledge management with eTranBiz leads to improved information access, reduced redundancy, and fostered innovation.`,
                            },
                            {
                                id: 2,
                                title: 'Linux/Unix/Windows system administration',
                                content: `Boost team productivity and innovation with eTranBiz's knowledge management, content, and collaboration suites. Leveraging Oracle's WebCenter Content and WebCenter Portal, our solutions enable organizations to create, manage, and share information efficiently. Features such as document management, social collaboration, and content authoring tools streamline workflows and enhance collaboration across departments. Centralizing knowledge management with eTranBiz leads to improved information access, reduced redundancy, and fostered innovation.`,
                            },
                        ],
                    },
                }
            ],
        },
        {
            id: 2,
            title: 'Cloud Transformation',
            image: cloudTransformationsHero,
            basicServices: [
                {
                    id: 0,
                    title: 'Embrace the Future with Cloud Transformation',
                    about: [
                        `Rely on our seasoned cloud engineers and architects to guide your cloud transformation journey. With our extensive expertise in Oracle platforms, we design custom cloud solutions to address your unique requirements, ensuring a smooth migration and enablement process. Together, we'll unlock your organization's full cloud potential.`,
                        `Key benefits of eTranBiz's cloud transformation services include:`,
                    ],
                    services: [
                        {
                            id: 0,
                            service: 'Boosting operational efficiency and reducing costs',
                        },
                        {
                            id: 1,
                            service: 'Enhancing agility and scalability',
                        },
                        {
                            id: 2,
                            service: 'Strengthening security and compliance',
                        },
                        {
                            id: 3,
                            service: 'Leveraging cloud-native technologies',
                        },
                        {
                            id: 4,
                            service: 'Driving innovation and growth',
                        },
                    ],
                    conclusion: `Embark on a successful cloud transformation journey with eTranBiz's comprehensive services and unlock the true potential of the cloud for your business.`,
                },
                {
                    id: 1,
                    title: 'Expert-led Cloud Transformation Journey',
                    about: [
                        `Rely on our seasoned cloud engineers and architects to guide your cloud transformation journey. With our extensive expertise in Oracle platforms, we design custom cloud solutions to address your unique requirements, ensuring a smooth migration and enablement process. Together, we'll unlock your organization's full cloud potential.`,
                        `Key benefits of eTranBiz's cloud transformation services include:`,
                    ],
                    services: [
                        {
                            id: 0,
                            service: 'Boosting operational efficiency and reducing costs',
                        },
                        {
                            id: 1,
                            service: 'Enhancing agility and scalability',
                        },
                        {
                            id: 2,
                            service: 'Strengthening security and compliance',
                        },
                        {
                            id: 3,
                            service: 'Leveraging cloud-native technologies',
                        },
                        {
                            id: 4,
                            service: 'Driving innovation and growth',
                        },
                    ],
                    conclusion: `Embark on a successful cloud transformation journey with eTranBiz's comprehensive services and unlock the true potential of the cloud for your business.`,
                },
                {
                    id: 2,
                    title: 'Oracle Cloud Applications (SaaS)',
                    about: [
                        `Rely on our seasoned cloud engineers and architects to guide your cloud transformation journey. With our extensive expertise in Oracle platforms, we design custom cloud solutions to address your unique requirements, ensuring a smooth migration and enablement process. Together, we'll unlock your organization's full cloud potential.`,
                        `Key benefits of eTranBiz's cloud transformation services include:`,
                    ],
                    services: [
                        {
                            id: 0,
                            service: 'Boosting operational efficiency and reducing costs',
                        },
                        {
                            id: 1,
                            service: 'Enhancing agility and scalability',
                        },
                        {
                            id: 2,
                            service: 'Strengthening security and compliance',
                        },
                        {
                            id: 3,
                            service: 'Leveraging cloud-native technologies',
                        },
                        {
                            id: 4,
                            service: 'Driving innovation and growth',
                        },
                    ],
                    conclusion: `Embark on a successful cloud transformation journey with eTranBiz's comprehensive services and unlock the true potential of the cloud for your business.`,
                },
                {
                    id: 3,
                    title: 'Oracle Cloud Platform (PaaS)',
                    about: [
                        `Rely on our seasoned cloud engineers and architects to guide your cloud transformation journey. With our extensive expertise in Oracle platforms, we design custom cloud solutions to address your unique requirements, ensuring a smooth migration and enablement process. Together, we'll unlock your organization's full cloud potential.`,
                        `Key benefits of eTranBiz's cloud transformation services include:`,
                    ],
                    services: [
                        {
                            id: 0,
                            service: 'Boosting operational efficiency and reducing costs',
                        },
                        {
                            id: 1,
                            service: 'Enhancing agility and scalability',
                        },
                        {
                            id: 2,
                            service: 'Strengthening security and compliance',
                        },
                        {
                            id: 3,
                            service: 'Leveraging cloud-native technologies',
                        },
                        {
                            id: 4,
                            service: 'Driving innovation and growth',
                        },
                    ],
                    conclusion: `Embark on a successful cloud transformation journey with eTranBiz's comprehensive services and unlock the true potential of the cloud for your business.`,
                },
                {
                    id: 4,
                    title: 'Oracle Cloud Infrastructure (OCI)',
                    about: [
                        `Rely on our seasoned cloud engineers and architects to guide your cloud transformation journey. With our extensive expertise in Oracle platforms, we design custom cloud solutions to address your unique requirements, ensuring a smooth migration and enablement process. Together, we'll unlock your organization's full cloud potential.`,
                        `Key benefits of eTranBiz's cloud transformation services include:`,
                    ],
                    services: [
                        {
                            id: 0,
                            service: 'Boosting operational efficiency and reducing costs',
                        },
                        {
                            id: 1,
                            service: 'Enhancing agility and scalability',
                        },
                        {
                            id: 2,
                            service: 'Strengthening security and compliance',
                        },
                        {
                            id: 3,
                            service: 'Leveraging cloud-native technologies',
                        },
                        {
                            id: 4,
                            service: 'Driving innovation and growth',
                        },
                    ],
                    conclusion: `Embark on a successful cloud transformation journey with eTranBiz's comprehensive services and unlock the true potential of the cloud for your business.`,
                },
            ],
            specializedServices: [
                {
                    id: 0,
                    title: 'Oracle Cloud Implementation',
                    image: '',
                    content: [
                        `Our cloud implementation services help businesses harness the power of Oracle cloud offerings, which can include implementing Oracle cloud applications, developing custom applications, or implementing Oracle cloud infrastructure to manage existing applications or databases.`
                    ],
                },
                {
                    id: 1,
                    title: 'Oracle Cloud Lift and Shift',
                    image: '',
                    content: [
                        `Our Cloud Migration Services help businesses move their applications and data to the cloud. We offer multiple types of migration:`,
                        `1. Migrating of on-premises ERP, like Oracle E-Business Suite, to Oracle Cloud/Fusion Applications (SaaS).`,
                        `2. Migrating Oracle E-Business Suite and/or Oracle Database from on-premises to Oracle Cloud Infrastructure (OCI).`,
                        `3. Migration to custom development enterprise applications using Oracle APEX/VBCS.`,
                        `4. Migration from non-Oracle applications and databases to the cloud.`,
                    ],
                },
                {
                    id: 2,
                    title: 'Oracle Cloud-based Custom Developments',
                    image: '',
                    content: [
                        `Our cloud implementation services help businesses harness the power of Oracle cloud offerings, which can include implementing Oracle cloud applications, developing custom applications, or implementing Oracle cloud infrastructure to manage existing applications or databases.`
                    ],
                },
                {
                    id: 3,
                    title: 'Oracle Cloud Integration',
                    image: '',
                    content: [
                        `Our Cloud Migration Services help businesses move their applications and data to the cloud. We offer multiple types of migration:`,
                        `1. Migrating of on-premises ERP, like Oracle E-Business Suite, to Oracle Cloud/Fusion Applications (SaaS).`,
                        `2. Migrating Oracle E-Business Suite and/or Oracle Database from on-premises to Oracle Cloud Infrastructure (OCI).`,
                        `3. Migration to custom development enterprise applications using Oracle APEX/VBCS.`,
                        `4. Migration from non-Oracle applications and databases to the cloud.`,
                    ],
                },
            ],
        },
        {
            id: 3,
            title: 'Professional Services',
            image: enterprise,
            content: 'uhedf uefh euf uehf uhfe uhfe fhe fheu feu efh efh dkjns',
        },
        {
            id: 4,
            title: 'Managed Support Services',
            image: managedSupport,
            content: 'uhedf uefh euf uehf uhfe uhfe fhe fheu feu efh efh dkjns',
        },
    ],
    specializedServices: [
        {
            id: 0,
            title: 'Oracle Cloud Applications',
            image: oracleCloud,
            content: 'uhedf uefh euf uehf uhfe uhfe fhe fheu feu efh efh dkjns',
        },
        {
            id: 1,
            title: 'Oracle E-business Suite',
            image: oracleBusiness,
            content: 'uhedf uefh euf uehf uhfe uhfe fhe fheu feu efh efh dkjns',
        },
        {
            id: 2,
            title: 'Oracle Database Services',
            image: oracleDatabase,
            content: 'uhedf uefh euf uehf uhfe uhfe fhe fheu feu efh efh dkjns',
        },
        {
            id: 3,
            title: 'Oracle Fusion Middleware ',
            image: oracleFusion,
            content: 'uhedf uefh euf uehf uhfe uhfe fhe fheu feu efh efh dkjns',
        },
    ],
};



export const enterpriseApplicationData: EnterpriseApplicationData = {
    id: 0,
    pageTitle: 'Enterprise Applications',
    heroImage: enterpriseHero,
    title: 'Scalable solutions for large-scale implementations',
    about: `We specialize in custom enterprise solutions on the Oracle product suite. Our skilled consultants follow a comprehensive process, analyzing business flows and requirements to develop tailor-made solutions that enhance your company's operational efficiency & foster growth. We use cutting-edge tools and technologies to code, test, and deploy scalable IT solutions with ongoing support and maintenance.`,
    industryData: {
        title: 'Industries',
        about: `Our team's product knowledge enables us to determine the best solution for your unique needs, with successful projects across`,
        industries: [
            {
                id: 0,
                title: 'Banking',
                image: '',
            },
            {
                id: 1,
                title: 'Government & PSUs',
                image: '',
            },
            {
                id: 2,
                title: 'Oil & Gas',
                image: '',
            },
            {
                id: 3,
                title: 'Logistics',
                image: '',
            },
            {
                id: 4,
                title: 'Automotive',
                image: '',
            },
            {
                id: 5,
                title: 'Retail',
                image: '',
            },
            {
                id: 6,
                title: 'Manufacturing',
                image: '',
            },
        ],
    },
    functionalAreas: {
        title: 'Functional Area',
        areas: [
            {
                id: 0,
                title: 'Financial Management',
                content: [
                    `Streamline financial operations, improve financial reporting, and optimize resource allocation.`
                ]
            },
            {
                id: 1,
                title: 'Human Capital Management (HCM)',
                content: [
                    `Manage employees, enhance HR processes, and foster staff development with user-friendly tools.`
                ]
            },
            {
                id: 2,
                title: 'Supply Chain Management (SCM)',
                content: [
                    `Improve supply chain visibility, automate processes, and reduce costs with advanced tools.`
                ]
            },
            {
                id: 3,
                title: 'Customer Experience (CX)',
                content: [
                    `Personalize customer experiences, enhance customer engagement, and improve marketing effectiveness.`
                ]
            },
            {
                id: 4,
                title: 'Management',
                content: [
                    `Accelerate innovation, improve operational efficiency, and reduce costs with comprehensive manufacturing solutions.`
                ]
            },
        ],
    },
    oracleServices: [
        {
            id: 0,
            title: 'Oracle e-business suite',
            tabImage: oracleBusinessTab,
            about: [
                `We harness the power of Oracle E-Business Suite (EBS) to deliver customized solutions that meet the unique needs of your enterprise. EBS is an integrated set of business applications designed to streamline and automate your processes, providing a complete, end-to-end solution for managing your organization.`,
                `Our EBS solutions are tailored to your specific industry requirements and include:`,
            ],
            services: [
                {
                    id: 0,
                    service: `Financial Management: Optimize financial operations and ensure compliance.`,
                },
                {
                    id: 1,
                    service: `SCM: Improve supply chain management, reduce costs, and boost customer satisfaction.`,
                },
                {
                    id: 2,
                    service: `CRM: Manage customer relationships with marketing, sales, and customer service tools.`,
                },
                {
                    id: 3,
                    service: `HCM: Streamline HR processes, optimize talent management, and develop employees.`,
                },
                {
                    id: 4,
                    service: `PPM: Efficiently manage projects and portfolios, improving resource allocation and scheduling.`,
                },
                {
                    id: 5,
                    service: `Manufacturing: Set up & run complete pipeline management for your manufacturing unit from ERP to CRM`,
                },
            ],
            conclusion: null,
            route: '/services/oracleServices/oracle-ebusiness',
        },
        {
            id: 1,
            title: 'Oracle Cloud Applications',
            tabImage: oracleCloudTab,
            about: [
                `Explore our expertise in Oracle Cloud Applications, offering tailored solutions for your business in:`,
            ],
            services: [
                {
                    id: 0,
                    service: `ERP: Transform financial processes with real-time data analysis, improving forecasting, and decision-making.`,
                },
                {
                    id: 1,
                    service: `HCM: Content to be added here.`,
                },
                {
                    id: 2,
                    service: `Customer Experience (CX): Manage customer experience throughout your pipeline from lead generation, to deal closing, and finally to support. `,
                },
                {
                    id: 3,
                    service: `Supply Chain Management (SCM): Content to be added here.`,
                },
            ],
            conclusion: `Our team understands the unique challenges of various industries and will collaborate with you to develop a custom Oracle Cloud Application solution that drives growth and profitability. We can also assist companies in transforming their existing infrastructure into a future-proof, high-efficiency, cloud-run system through out Cloud Transformation services. Contact us today to discover our innovative, AI-driven solutions.`,
            route: '/services/oracleServices/oracle-cloud',
        },
        {
            id: 2,
            title: 'Oracle PeopleSoft Applications',
            tabImage: oraclePeopleSoftTab,
            about: [
                `Oracle PeopleSoft is a versatile ERP solution, offering financials, supply chain, HCM, and CRM modules. It simplifies and automates business processes, enhancing efficiency and decision-making. Its flexibility and scalability cater to large organizations' evolving needs, making it a popular choice for adapting to market changes and growth. `,
            ],
            services: [
                {
                    id: 0,
                    service: `Broad functionality: Access to integrated Financials, HCM, SCM, and Campus Solutions.`,
                },
                {
                    id: 1,
                    service: `Customizable and flexible: Adaptable to meet unique business needs.`,
                },
                {
                    id: 2,
                    service: `User-friendly: Intuitive interfaces for increased productivity.`,
                },
                {
                    id: 3,
                    service: `Scalable: Designed for long-term growth and expansion.`,
                },
                {
                    id: 4,
                    service: `Integration-ready: Seamless integration with other applications.`,
                },
                {
                    id: 5,
                    service: `Secure and compliant: Robust security and regulatory compliance.`,
                },
                {
                    id: 6,
                    service: `Strong support: Backed by a large user community.`,
                },
            ],
            conclusion: null,
            route: null,
        },
        {
            id: 3,
            title: 'Oracle Siebel CRM',
            tabImage: oracleCRMTab,
            about: [
                `Oracle Siebel CRM is a powerful and versatile solution designed to help businesses manage their customer relationships, drive growth, and improve profitability. By implementing Oracle Siebel CRM, organizations can realize numerous benefits, including:`,
            ],
            services: [
                {
                    id: 0,
                    service: `Sophisticated functionality: Comprehensive CRM features covering sales, marketing, customer service, and more.`,
                },
                {
                    id: 1,
                    service: `Deep analytics: In-depth analytics and reporting for robust customer insights and informed decision-making.`,
                },
                {
                    id: 2,
                    service: `Personalization: Tailored customer experiences based on individual preferences, behaviors, and context.`,
                },
                {
                    id: 3,
                    service: `Integration capabilities: Seamless integration with other Oracle and third-party applications.`,
                },
                {
                    id: 4,
                    service: `Scalability: Built to accommodate business growth and expansion.`,
                },
                {
                    id: 5,
                    service: `Security and compliance: Strong security features and continuous updates for regulatory compliance.`,
                },
            ],
            conclusion: null,
            route: null,
        },
    ],
    scope: {
        title: 'Scope of Service',
        about: `Whether you're looking to upgrade or update your existing infrastructure or build robust frameworks to accelerate your company's growth, our team of expert consultants can assist you through any phase of your implementation.`,
        scopeList: [
            {
                id: 0,
                content: 'Consulting & Advisory',
            },
            {
                id: 1,
                content: 'Professional Services',
            },
            {
                id: 2,
                content: 'Implementation',
            },
            {
                id: 3,
                content: 'Upgrades',
            },
            {
                id: 4,
                content: 'Integration & Interoperability',
            },
            {
                id: 5,
                content: 'Migrations',
            },
            {
                id: 6,
                content: 'Managed Support Services',
            },
            {
                id: 7,
                content: 'Extensions & Enhancements',
            },
            {
                id: 8,
                content: 'Reports, Interfaces, & Customization',
            },
        ],
    },
};

export const technologyTransformationData: TechnologyTransformationData = {
    id: 1,
    pageTitle: 'Technology Transformation',
    heroImage: techTransformationHero,
    title: 'At eTranBiz, we recognize the vital role that data plays in driving business success.',
    about: 'Our technology transformation services are geared towards empowering organizations to effectively manage and harness their data for informed decision-making and growth.',
    extraAboutText: [
        `Our database management solutions are customized to meet each client's specific requirements, ensuring secure storage, quick retrieval, and smooth integration with other systems. By leveraging cutting-edge technologies, Oracle’s robust tools, and best practices, we enable our clients to access accurate and up-to-date data at all times.`,
        `Let us help you unlock the full potential of your data with our comprehensive technology transformation services.`,
    ],
    oracleServices: [
        {
            id: 0,
            title: 'Oracle Database Services',
            tabImage: oracleDatabaseTab,
            about: [
                `Oracle Database is a powerful tool for managing and harnessing the potential of your data. With features such as high availability, disaster recovery, real-time data integration, and advanced security features, Oracle's database platform offers unparalleled performance and reliability.`,
                `Whether you're looking to enhance your data management capabilities, improve your decision-making processes, or drive growth, Oracle's database platform can help you achieve your goals.`,
            ],
            services: [
                {
                    id: 0,
                    service: `Design and Architecture`,
                },
                {
                    id: 1,
                    service: `Data Backup and Recovery`,
                },
                {
                    id: 2,
                    service: `Installation and Configuration`,
                },
                {
                    id: 3,
                    service: `Database and Application Cloning`,
                },
                {
                    id: 4,
                    service: `Database Support and Administration`,
                },
                {
                    id: 5,
                    service: `High Availability and Disaster Recovery (DR)`,
                },
                {
                    id: 6,
                    service: `Oracle Apps Database Support and Administration`,
                },
                {
                    id: 7,
                    service: `Oracle GoldenGate`,
                },
                {
                    id: 8,
                    service: `Multi-Node Setup and DMZ Configuration`,
                },
                {
                    id: 9,
                    service: `Security and Compliance`,
                },
                {
                    id: 10,
                    service: `Performance Tuning and Optimization`,
                },
                {
                    id: 11,
                    service: `Data Integration`,
                },
                {
                    id: 12,
                    service: `Database Migration`,
                },
                {
                    id: 13,
                    service: `Automation Scripting`,
                },
                {
                    id: 14,
                    service: `Database Upgrade`,
                },
                {
                    id: 15,
                    service: `RAC, ASM, Grid, and Clustering Administration`,
                },
            ],
            route: '/services/oracleServices/oracle-database',
            conclusion: null,
        },
        {
            id: 1,
            title: 'Oracle Fusion Middleware Services',
            tabImage: oracleFusionTab,
            about: [
                `With features such as business process management, integration, and analytics, Oracle Fusion Middleware enables organizations to streamline their operations, improve their decision-making processes, and drive growth.`,
                `Whether you're looking to build a custom application, integrate your existing systems, or leverage data analytics for informed decision-making, Oracle Fusion Middleware offers the tools and capabilities you need. Choose eTranBiz for expert Oracle Fusion Middleware Services that will help you achieve your business goals.`,
            ],
            services: [
                {
                    id: 0,
                    service: `Installation and Configuration`,
                },
                {
                    id: 1,
                    service: `Oracle HTTP Server`,
                },
                {
                    id: 2,
                    service: `Upgrade Services`,
                },
                {
                    id: 3,
                    service: `Oracle OID, OAM, OUD`,
                },
                {
                    id: 4,
                    service: `Support and Maintenance`,
                },
                {
                    id: 5,
                    service: `Oracle Web-Center Sites, Portal, and Content`,
                },
                {
                    id: 6,
                    service: `Migration Services`,
                },
                {
                    id: 7,
                    service: `Oracle SOA Suite`,
                },
                {
                    id: 8,
                    service: `Fusion Middleware Infrastructure`,
                },
                {
                    id: 9,
                    service: `Oracle ODI`,
                },
                {
                    id: 10,
                    service: `Oracle WebLogic Server`,
                },
                {
                    id: 11,
                    service: `Forms and Reports Servers, ADF, and JDeveloper`,
                },
            ],
            route: '/services/oracleServices/oracle-fusion-middleware',
            conclusion: null,
        },
    ],
    otherSolutions: [
        {
            id: 0,
            title: 'Application Integration',
            content: [`We understand the importance of seamless integration between different applications and systems. Our team of experienced consultants specialize in a wide range of integration solutions, that help businesses connect their applications and systems for optimal performance.`],
            route: '/services/oracleServices/application-integration',
        },
        {
            id: 1,
            title: 'Single sign-on and Access Management Solutions',
            content: [`Single sign-on (SSO) and access management solutions enable users to securely access multiple applications and systems with a single set of credentials. This streamlines the login process, reduces user frustration, and improves productivity. Oracle's access management solutions, such as OIM, OAM, and OIG, offer a comprehensive set of features for managing user identities, access policies, and authentication. With eTranBiz's expert SSO and access management services, organizations can design and implement a secure and efficient access management solution that meets their specific needs.`],
            route: null,
        },
        {
            id: 2,
            title: 'Knowledge management, content, and collaboration suites',
            content: [`Boost team productivity and innovation with eTranBiz's knowledge management, content, and collaboration suites. Leveraging Oracle's WebCenter Content and WebCenter Portal, our solutions enable organizations to create, manage, and share information efficiently. Features such as document management, social collaboration, and content authoring tools streamline workflows and enhance collaboration across departments. Centralizing knowledge management with eTranBiz leads to improved information access, reduced redundancy, and fostered innovation.`],
            route: null,
        },
        {
            id: 3,
            title: 'Linux/Unix/Windows system administration',
            content: [`eTranBiz's Linux, Unix, and Windows system administration services empower your organization with seamless, secure, and high-performing IT infrastructure. Our experienced system administrators are proficient in managing, maintaining, and optimizing diverse systems, ensuring optimal performance and reliability. Our comprehensive suite of services includes user account management, software updates, security patching, and system performance tuning, tailored to your organization's unique needs.`],
            route: null,
        },
    ],
};

export const cloudTransformation = {
    id: 1,
    pageTitle: 'Cloud Transformation',
    heroImage: cloudTransformationsHero,
    title: 'Embrace the Future with Cloud Transformation',
    about: `eTranBiz's cloud transformation services empower businesses of all sizes to modernize their IT infrastructure, enhance operational efficiency, and cut down on costs. Our tailored solutions unlock the cloud's potential, fostering growth and innovation.`,
    ourGuidance: {
        title: 'Expert-led Cloud Transformation Journey',
        image: cloudTransformationPerson,
        about: [
            `Rely on our seasoned cloud engineers and architects to guide your cloud transformation journey. With our extensive expertise in Oracle platforms, we design custom cloud solutions to address your unique requirements, ensuring a smooth migration and enablement process. Together, we'll unlock your organization's full cloud potential.`,
            `Key benefits of eTranBiz's cloud transformation services include:`,
            `Boosting operational efficiency and reducing costs`,
            `Enhancing agility and scalability`,
            `Strengthening security and compliance`,
            `Leveraging cloud-native technologies`,
            `Driving innovation and growth`,
        ],
        conclusion: `Embark on a successful cloud transformation journey with eTranBiz's comprehensive services and unlock the true potential of the cloud for your business.`,
    },
    services: [
        {
            id: 0,
            title: 'Oracle Cloud Applications (SaaS)',
            content: [
                `eTranBiz's Oracle Cloud Applications offerings empower businesses with advanced, AI-driven software solutions designed to automate processes, enhance productivity, and foster innovation.`,
            ],
            route: '/services/cloudInfrastructure',
        },
        {
            id: 1,
            title: 'Oracle Cloud Platform (PaaS)',
            content: [
                `Empowering Innovation and Accelerating Growth, Oracle's Cloud Platform (PaaS) provides a robust, secure, and scalable environment for developing, deploying, and managing applications, data, and analytics.`,
            ],
            route: '/services/cloudInfrastructure',
        },
        {
            id: 2,
            title: 'Oracle Cloud Infrastructure (OCI)',
            content: [
                `Oracle Cloud Infrastructure (OCI) offers a robust and secure cloud infrastructure that empowers businesses to innovate, scale, and reduce costs. Oracle OCI is the cornerstone of our cloud offerings, providing a wide range of services designed to meet the diverse needs of modern organizations.`,
            ],
            route: '/services/cloudInfrastructure',
        },
    ],
    specializedServices: [
        {
            id: 0,
            title: 'Oracle Cloud Implementation',
            contentAbout: 'Our cloud implementation services help businesses harness the power of Oracle cloud offerings, which can include implementing Oracle cloud applications, developing custom applications, or implementing Oracle cloud infrastructure to manage existing applications or databases.',
            about: null,
        },
        {
            id: 1,
            title: 'Oracle Cloud Lift and Shift',
            contentAbout: 'Our Cloud Migration Services help businesses move their applications and data to the cloud. We offer multiple types of migration',
            about: [
                `Migrating of on-premises ERP, like Oracle E-Business Suite, to Oracle Cloud/Fusion Applications (SaaS).`,
                `Migrating Oracle E-Business Suite and/or Oracle Database from on-premises to Oracle Cloud Infrastructure (OCI).`,
                `Migration to custom development enterprise applications using Oracle APEX/VBCS.`,
                `Migration from non-Oracle applications and databases to the cloud.`,
            ],
        },
        {
            id: 2,
            title: 'Oracle Cloud-based Custom Developments',
            contentAbout: `Our Custom Application Development service enables businesses to build and deploy custom applications quickly and easily using Oracle's cloud platform.`,
            about: null,
        },
        {
            id: 3,
            title: 'Oracle Cloud Integration',
            contentAbout: 'Our Cloud Integration Strategy service helps businesses develop a customized plan to integrate their cloud and on-premises applications.',
            about: null,
        },
    ],
};

export const professionalServices = {
    id: 1,
    pageTitle: 'Professional Services',
    heroImage: professionalServicesHero,
    title: 'At eTranBiz, we recognize the vital role that data plays in driving business success.',
    about: {
        title: 'Consult & Resolve',
        image: proServicesAboutImg,
        content: 'Our team of experienced consultants can provide expert guidance and support in a variety of areas, including',
    },
    services: [
        {
            id: 0,
            title: 'Extend your Team',
            content: [
                `Our team of talented and highly-tenured professionals can extend your team, providing you with the expertise and support you need to achieve your business goals.`,
            ],
        },
        {
            id: 1,
            title: 'Cloud and Data Migrations',
            content: [
                `We can help you move your applications and databases to cloud or other systems, reducing your time to implementation.`,
            ],
        },
        {
            id: 2,
            title: 'Interoperability and Integration',
            content: [
                `Our team can provide IT support with process analysis and solutions that future-proof your technology, assure interoperability, and enable composable ERP.`,
            ],
        },
        {
            id: 3,
            title: 'Security Strategy and Hardening',
            content: [
                `We can assess, design, and implement an innovative security strategy and IT roadmap to keep your business secure.`,
            ],
        },
        {
            id: 4,
            title: 'Technology Assessments',
            content: [
                `Our IT consultants can help you understand the root cause of issues or challenges and provide a path forward with deep dives into specific subjects.`,
            ],
        },
        {
            id: 5,
            title: 'Observability and Monitoring',
            content: [
                `We can provide health checks and implementation of monitoring solutions to identify potential risks and keep your business running smoothly.`,
            ],
        },
        {
            id: 6,
            title: 'Roadmap and Strategy',
            content: [
                `Our IT consultancy can analyze your IT environment, strategy, roadmap, and business goals to advise you on the best path forward for your business.`,
            ],
        },
        {
            id: 7,
            title: 'Custom Developments:',
            content: [
                `We can design and implement niche projects/customizations to provide desired functionality without the need to upgrade.`,
            ],
        },
    ],
    staffing: {
        title: 'Staffing Solutions',
        image: staffingSolutions,
        about: 'In addition to our consulting services, we also offer a range of staffing services designed to help businesses find and hire the right talent.',
        types: [
            {
                id: 0,
                title: 'Contract-to-Contract',
                content: [
                    'Contract-to-contract (C2C) staffing is a flexible staffing solution that allows businesses to hire service providers for specific work or time duration. The service provider is typically paid based on the person days they work, providing businesses with a cost-effective way to access the skills and expertise they need.',
                ],
            },
            {
                id: 1,
                title: 'Contract-to-Hire',
                content: [
                    'Contract-to-hire (C2H) staffing is a staffing solution that allows businesses to hire employees from us for a temporary basis, with the option to offer them permanent employment at the end of the temporary period. This allows businesses to evaluate the performance and fit of potential employees before making a long-term commitment, reducing the risk of hiring the wrong person.',
                ],
            },
        ],
        conclusion: 'At eTranBiz, we are committed to helping businesses find and hire the right talent. Our team of experienced recruiters will work closely with you to understand your staffing needs and then source, screen, and interview candidates on your behalf. We will only present you with candidates who meet your requirements, saving you time and effort in the hiring process.',
    },
};

export const supportServices = {

    id: 1,
    pageTitle: 'Managed Support Services',
    heroImage: supportServicesHero,
    title: 'Managed Support Services by eTranBiz: Support You Can Count On',
    about: '> Our Managed Support Services are designed to help businesses optimize the performance, security, and reliability of their Oracle environment, ensuring seamless operation of their system, and allowing them to focus on driving innovation and growth..',
    servicesList: [
        {
            id: 0,
            title: 'Database Support',
            tabImage: databaseSupport,
            about: [
                `We provide expert 24/7 support for Oracle Databases, ensuring high availability, performance, and security. Our team performs regular maintenance tasks, such as backups, patching, and tuning to maintain optimal performance and data integrity.`,
            ],
            services: [
                {
                    id: 0,
                    service: `Oracle Database upgrades`,
                },
                {
                    id: 1,
                    service: `Incident management & troubleshooting`,
                },
                {
                    id: 2,
                    service: `Database tuning and optimization`,
                },
                {
                    id: 3,
                    service: `High availability architecture & DR`,
                },
                {
                    id: 4,
                    service: `Backup and recovery`,
                },
                {
                    id: 5,
                    service: `RAC, ASM, Grid, & Clustering Administration`,
                },
                {
                    id: 6,
                    service: `Data integrity and security`,
                },
            ],
        },
        {
            id: 1,
            title: 'Application & Middleware Support',
            tabImage: applicationSupport,
            about: [
                `Our Managed Support Services include compre- hensive support for Oracle ERP applications, such as E-Business Suite, PeopleSoft, and others. We also provide support for Oracle Fusion Middleware, ensuring seamless integration between app-lications, databases, and infrastructure.`,
            ],
            services: [
                {
                    id: 0,
                    service: `Oracle application upgrades`,
                },
                {
                    id: 1,
                    service: `Integration with other Oracle & third-party applications`,
                },
                {
                    id: 2,
                    service: `Regular maintenance and updates`,
                },
                {
                    id: 3,
                    service: `Incident management and troubleshooting`,
                },
                {
                    id: 4,
                    service: `Performance tuning and optimization`,
                },
                {
                    id: 5,
                    service: `Support of RICE components`,
                },
            ],
        },
        {
            id: 2,
            title: 'Cloud Applications, Platform, & Infrastructure Support',
            tabImage: cloudSupport,
            about: [
                `eTranBiz offers managed support services for Oracle Cloud Applications, Platform, and Infrastructure, including Oracle ATP Database, custom applications, OCI, OIC, OAC, and more.`,
            ],
            services: [
                {
                    id: 0,
                    service: `Oracle Cloud Solutions, setup, configuration, and migration`,
                },
                {
                    id: 1,
                    service: `Regular maintenance and updates`,
                },
                {
                    id: 2,
                    service: `Performance optimization and capacity planning`,
                },
                {
                    id: 3,
                    service: `Security monitoring and incident response`,
                },
            ],
        },
        {
            id: 3,
            title: 'Custom Developments, & Integrations',
            tabImage: customDevelopments,
            about: [
                `Our team of experienced consultants and engineers specializes in customizing and integrating Oracle applications to meet unique business needs.`,
            ],
            services: [
                {
                    id: 0,
                    service: `Support for custom applications `,
                },
                {
                    id: 1,
                    service: `Support for custom reports and forms`,
                },
                {
                    id: 2,
                    service: `Support for integration solutions`,
                },
            ],
        },
        {
            id: 4,
            title: 'Comprehensive Monitoring & Maintenance',
            tabImage: comprehensiveMonitoring,
            about: [
                `Our managed support services encompass around-the-clock monitoring and maintenance, ensuring your technology infrastructure operates efficiently and seamlessly. We proactively detect and resolve issues, as well as perform regular updates and patching to maintain optimal performance and security.`,
            ],
            services: [
                {
                    id: 0,
                    service: `24/7 monitoring and maintenance`,
                },
                {
                    id: 1,
                    service: `Regular updates and patching`,
                },
                {
                    id: 2,
                    service: `Performance optimization and capacity planning`,
                },
                {
                    id: 3,
                    service: `Security monitoring and incident response`,
                },
            ],
        },
        {
            id: 5,
            title: 'Incident Management & Troubleshooting',
            tabImage: incidentManagement,
            about: [
                `Our skilled support specialists promptly address and resolve incidents, minimizing disruptions and downtime for your business. By leveraging our expertise, you can rest assured that your technology infrastructure is in capable hands.`,
            ],
            services: [
                {
                    id: 0,
                    service: `Incident management and troubleshooting`,
                },
                {
                    id: 1,
                    service: `Rapid response and resolution`,
                },
                {
                    id: 2,
                    service: `Root cause analysis and prevention`,
                },
            ],
        },
        {
            id: 6,
            title: 'Data Integrity & Security',
            tabImage: dataIntegrity,
            about: [
                `Our managed support services prioritize data integrity and safety. We perform regular backups, maintain data integrity, and ensure the highest level of security for your data and applications.`,
            ],
            services: [
                {
                    id: 0,
                    service: `Regular backups`,
                },
                {
                    id: 1,
                    service: `Data integrity maintenance`,
                },
                {
                    id: 2,
                    service: `Stringent security measures and incident response`,
                },
            ],
        },
    ],
};


export const oracleServices: ServiceData[] = [
    {
        id: 'oracle-cloud',
        pageTitle: 'Oracle Cloud Applications',
        heroImage: oracleCloudHero,
        title: 'Empowering Your Enterprise with a Complete, Integrated, and Connected Cloud Solution',
        about: `> Experience the power of Oracle's comprehensive, integrated, and scalable cloud-based application solution, tailored to your unique business needs by eTranBiz's expert consultants and developers.`,
        aboutOracle: [
            {
                id: 0,
                title: 'What is Oracle Cloud Applications?',
                image: null,
                contentAbout: 'Oracle Cloud Applications (OCA) is a comprehensive, integrated, and scalable Enterprise Resource Planning (ERP) solution designed to streamline business operations, enhance collaboration, and facilitate growth. OCA provides a wide range of functionalities, including:',
                content: [
                    `Financial management`,
                    `Procurement`,
                    `Project management`,
                    `Supply chain management`,
                    `Human resources management`,
                    `Customer Relationship Management.`,
                ],
            },
            {
                id: 1,
                title: 'Why Choose Oracle Cloud Applications?',
                image: null,
                contentAbout: null,
                content: [
                    `Complete, integrated, and scalable cloud-based ERP solution`,
                    `Comprehensive and modular design`,
                    `Rich functionalities and seamless integration`,
                    `Flexible customization and configuration options`,
                    `Robust reporting and analytics capabilities`,
                    `Proven track record and large user community`,
                ],
            },
            {
                id: 2,
                title: 'Scalability of Oracle Cloud Applications',
                image: null,
                contentAbout: 'Oracle Cloud Applications is a proven, industry-leading cloud-based ERP solution that offers unmatched functionality, flexibility, and scalability, making it an ideal choice for large enterprises. Oracle Cloud Applications is a highly scalable solution, designed to accommodate the growing needs of large enterprises. Its modular architecture allows for seamless addition and integration of new modules and functionalities.',
                content: null,
            },
            {
                id: 3,
                title: 'eTranBiz Oracle Cloud Applications Offerings',
                image: null,
                contentAbout: 'At eTranBiz, our team of experienced consultants specialize in designing, implementing, and supporting Oracle Cloud Applications solutions tailored to your unique business requirements.',
                content: [
                    `Oracle Cloud Applications implementation, customization, and configuration`,
                    `Integration with other Oracle and third-party applications`,
                    `Custom development, reporting, forms, and integration`,
                    `Training and knowledge transfer`,
                    `Ongoing support and maintenance`,
                ],
            },
        ],
    },
    {
        id: 'oracle-ebusiness',
        pageTitle: 'Oracle e-business suite',
        heroImage: oracleEBusinessHero,
        title: 'Empowering Your Enterprise with Unmatched Functionality and Scalability',
        about: `Discover the power of Oracle's comprehensive, integrated, and scalable enterprise application, tailored to your unique business needs by eTranBiz's expert consultants and developers.`,
        aboutOracle: [
            {
                id: 0,
                title: 'What is Oracle E-Business Suite?',
                image: '',
                contentAbout: 'Oracle E-Business Suite (EBS) is an integrated, modular, and scalable enterprise application designed to streamline business operations, enhance collaboration, and facilitate growth. EBS provides a wide range of functionalities, including financial management, procurement, project management, supply chain management, human resources management, and customer relationship management.',
                content: null,
            },
            {
                id: 1,
                title: 'Product Lines We Support',
                image: '',
                contentAbout: null,
                content: [
                    `HCM`,
                    `Manufacturing`,
                    `Financials`,
                    `Projects`,
                    `Order Management`,
                    `Procurement`,
                ],
            },
            {
                id: 2,
                title: 'Why Choose Oracle E-Business Suite?',
                image: '',
                contentAbout: null,
                content: [
                    `Comprehensive and modular design`,
                    `Complete, integrated, and scalable solution`,
                    `Rich functionalities across various business domains`,
                    `Seamless integration between modules and applications`,
                    `Robust reporting and analytics capabilities`,
                    `Scalable and customizable for large enterprises`,
                    `Proven track record and large user community`,
                    `Incomparable security standards.`,
                ],
            },
            {
                id: 3,
                title: 'Scalability of Oracle E-Business Suite for Large Enterprises',
                image: '',
                contentAbout: 'Oracle E-Business Suite is a highly scalable solution, designed to accommodate the growing needs of large enterprises. Its modular architecture allows for seamless addition and integration of new modules and functionalities.',
                content: [
                    `Modular and flexible architecture`,
                    `Robust security and access control`,
                    `High performance and scalability`,
                    `Seamless integration with other Oracle and third-party applications`,
                    `Support for global operations and multi-language environments`,
                ],
            },
            {
                id: 4,
                title: 'What we offer',
                image: '',
                contentAbout: 'At eTranBiz, our team of experienced consultants and developers specialize in designing, implementing, and supporting Oracle E-Business Suite solutions tailored to your unique business requirements.',
                content: [
                    `Oracle E-Business Suite implementation, customization, and configuration`,
                    `Integration with other Oracle and third-party applications`,
                    `Custom development, reporting, forms, and integration`,
                    `Upgrades and migrations`,
                    `Training and knowledge transfer`,
                    `Ongoing support and maintenance`,
                ],
            },
        ],
    },
    {
        id: 'oracle-database',
        pageTitle: 'Oracle Database Services',
        heroImage: oracleDatabaseHero,
        title: `Optimize Your Data Management with a Robust, Secure, and Scalable Database Solution`,
        about: `Expertly manage your enterprise's data with Oracle Database, leveraging the power and reliability of Oracle's robust, secure, and scalable database solution.`,
        aboutOracle: [
            {
                id: 0,
                title: 'What is Oracle Database?',
                image: '',
                contentAbout: 'Oracle Database is a comprehensive database management solution offering a wide range of features and capabilities designed to meet the demanding data management needs of large enterprises. With its robust functionalities, Oracle DB provides unparalleled performance, security, and scalability.',
                content: null,
            },
            {
                id: 1,
                title: 'Why Choose Oracle Database over other solutions?',
                image: '',
                contentAbout: 'Oracle Database is a proven, industry-leading database management solution that combines unmatched functionalities, flexibility, and scalability, making it an ideal choice for large enterprises.',
                content: [
                    `Robust and scalable database management solution`,
                    `High performance, availability, and security`,
                    `Flexible customization and configuration options`,
                    `Comprehensive reporting and analytics capabilities`,
                    `Proven track record and large user community`,
                ],
            },
            {
                id: 2,
                title: 'Scalability of Oracle Database for large enterprises',
                image: '',
                contentAbout: null,
                content: [
                    `Modular and flexible architecture that grows with your enterprise`,
                    `Unparalleled security and access control`,
                    `High performance on heavy load`,
                    `Seamless integration with other Oracle and third-party applications`,
                    `Support for global operations and multi-language environments`,
                ],
            },
            {
                id: 3,
                title: `Here's what you get when you choose eTranBiz`,
                image: '',
                contentAbout: 'Our team can assist you in designing, implementing, and supporting Oracle Database Services solutions tailored to your unique business requirements.',
                content: [
                    `Oracle Database Services implementation, customization, and configuration`,
                    `Integration with other Oracle and third-party applications`,
                    `Custom development, reporting, forms, and integration`,
                    `Training and knowledge transfer`,
                    `Ongoing support and maintenance`,
                ],
            },
        ],
    },
    {
        id: 'oracle-fusion-middleware',
        pageTitle: 'Oracle Fusion Middleware',
        heroImage: oracleFusionMiddlewareHero,
        title: `Leverage the full potential of Oracle Fusion Middleware with eTranBiz's expert software solutions.`,
        about: `> Our team of experienced developers will help you build, deploy, and manage your middleware infrastructure to optimize your business operations.`,
        aboutOracle: [
            {
                id: 0,
                title: 'Understanding Oracle Fusion Middleware',
                image: '',
                contentAbout: 'Oracle Fusion Middleware is a comprehensive suite of software products that helps businesses build, deploy, and manage their middleware infrastructure. It offers a wide range of tools and services for application development, integration, and management, enabling businesses to streamline their operations and improve their overall efficiency',
                content: null,
            },
            {
                id: 1,
                title: 'Why Choose Oracle Fusion Middleware?',
                image: '',
                contentAbout: 'Oracle Fusion Middleware provides a unified and integrated platform for application development and management, reducing the complexity and cost of managing multiple middleware products. Additionally, it offers a wide range of features and capabilities, including:',
                content: [
                    `Comprehensive application development tools`,
                    `Robust integration capabilities`,
                    `Advanced security features`,
                    `Scalability and high availability`,
                    `Support for cloud and on-premises deployments`,
                ],
            },
            {
                id: 2,
                title: 'Scalability for Large Enterprises',
                image: '',
                contentAbout: '',
                content: [
                    `Oracle Fusion Middleware is designed to scalability and can support even the largest enterprises.`,
                    `Its architecture enables businesses to easily add or remove resources as needed, ensuring that their middleware infrastructure can grow and evolve with their business`,
                    `Additionally, it offers advanced features such as high availability and failover, ensuring that businesses can rely on their middleware infrastructure even in the face of unexpected outages`,
                ],
            },
            {
                id: 3,
                title: `What eTranBiz Can Do for You`,
                image: '',
                contentAbout: 'At eTranBiz, we specialize in building and deploying software solutions on the Oracle Fusion Middleware platform. Our team of experienced consultants can help you:',
                content: [
                    `Build custom applications using Oracle's development tools`,
                    `Integrate your existing systems with Oracle's integration services`,
                    `Manage and maintain your middleware infrastructure`,
                    `Optimize your business processes using Oracle's process automation tools`,
                ],
            },
        ],
    },
    {
        id: 'application-integration',
        pageTitle: 'Application Integration',
        heroImage: applicationIntegrationHero,
        title: `We understand the importance of seamless integration between different applications and systems.`,
        about: `> Our team of experienced consultants specialize in a wide range of integration solutions, that help businesses connect their applications and systems for optimal performance.`,
        aboutOracle: [
            {
                id: 0,
                title: 'Integration Solutions',
                image: '',
                contentAbout: 'Integration of Third-Party Applications with Oracle Enterprise Applications',
                content: [
                    `Our team can help you integrate third-party applications with Oracle Enterprise Applications`,
                    `EBS, PeopleSoft, Siebel, etc`,
                ],
            },
            {
                id: 1,
                title: 'Database Integration',
                image: '',
                contentAbout: 'We can help you integrate two different databases with each other, ensuring that data is complete and up-to-date throughout. Each individual database is fed data by different sources, and our integration solutions ensure that data is accurately transferred between systems.',
                content: null,
            },
            {
                id: 2,
                title: 'SOA Suite',
                image: '',
                contentAbout: 'Our team specializes in using SOA Suite to integrate applications with mobile technology, providing businesses with the flexibility and mobility they need to stay competitive.',
                content: [
                    `Service Creation: SOA Suite includes tools for creating and deploying services, including web services, message-oriented middleware (MOM) services, and enterprise service bus (ESB) services.`,
                    `Service Integration: SOA Suite includes tools for integrating services with other systems, including adapters for popular enterprise applications and databases.`,
                    `Service Management: SOA Suite includes tools for managing services, including service-level agreements (SLAs), service monitoring, and service analytics.`,
                    `Service Composition: SOA Suite includes tools for composing services into more complex applications, including business process management (BPM) tools and human workflow tools.`,
                    `Service Security: SOA Suite includes tools for securing services, including authentication, authorization, and encryption.`,
                ],
            },
            {
                id: 3,
                title: `Oracle Data Integrator (ODI)`,
                image: '',
                contentAbout: 'Oracle Data Integrator (ODI) is a powerful data integration tool that we use to extract, transform, and load data between different systems. ODI provides a range of features and benefits, including:',
                content: [
                    `Data Mapping: ODI provides a visual interface for mapping data between different systems, making it easy to transfer data between systems.`,
                    `Data Transformation: ODI can transform data as it is transferred between systems, ensuring that data is accurate and up-to-date.`,
                    `Data Quality: ODI includes a range of data quality features, ensuring that data is accurate and reliable.`,
                ],
            },
            {
                id: 4,
                title: `Oracle Integration Cloud (OIC)`,
                image: '',
                contentAbout: `Oracle Integration Cloud (OIC) is a cloud-based integration platform that we use to connect applications and systems in the cloud. OIC provides a range of features and benefits`,
                content: [
                    `Pre-Built Integrations: OIC includes a range of pre-built integrations for popular cloud applications, making it easy to connect systems.`,
                    `API Management: OIC includes API management features, making it easy to create, manage, and monitor APIs.`,
                    `Process Automation: OIC includes process automation features, making it easy to automate business processes.`,
                ],
            },
        ],
    },
];

export const cloudInfrustructure = {
    id: 'cloud-infrastructure',
    pageTitle: 'OCI/IaaS and PaaS',
    heroImage: cloudInfrastructureHero,
    title: `> At eTranBiz, we specialize in helping businesses leverage the power of Oracle Cloud Infrastructure (OCI/IaaS) and Oracle PaaS`,
    about: `to build, deploy, and manage cloud-based applications and systems.`,
    aboutOracle: [
        {
            id: 0,
            title: 'Oracle OCI/IaaS',
            content: [
                {
                    id: 0,
                    title: 'WHAT IS IT?',
                    about: [
                        'Oracle Cloud Infrastructure (OCI) is a cloud-based infrastructure platform that provides businesses with the tools and services they need to build, deploy, and manage cloud-based applications and systems. OCI includes a range of features and services, including:',
                        `Storage: Block storage, object storage, and file storage, etc`,
                        `Network: Virtual cloud networks, load balancers, and VPNs, etc`,
                        `Database: Oracle Database, MySQL, and NoSQL databases, etc`,
                        `Management: Monitoring, logging, and automation tools, etc`,
                    ],
                },
                {
                    id: 1,
                    title: 'Cloud Assessment and Migration',
                    about: [
                        'Oracle Cloud Infrastructure (OCI) is a cloud-based infrastructure platform that provides businesses with the tools and services they need to build, deploy, and manage cloud-based applications and systems. OCI includes a range of features and services, including:',
                        `Assess your Current Infrastructure`,
                        `Develop a Migration Plan`,
                        `Execute the Migration`,
                    ],
                },
                {
                    id: 2,
                    title: 'Security of OCI',
                    about: [
                        'Security is a top priority for OCI, and the platform includes a range of security features and services to help businesses protect their applications and data. These features include:',
                        `Identity and Access Management`,
                        `Network Security`,
                        `Data Security`,
                        `Compliance`,
                    ],
                },
            ],
        },
        {
            id: 1,
            title: 'Oracle PaaS',
            content: [
                {
                    id: 0,
                    title: 'WHAT IS IT?',
                    about: [
                        'Oracle PaaS (Platform as a Service) is a cloud-based platform that offers a range of services for building, deploying, and managing applications and data in the cloud. Oracle PaaS provides businesses with a complete platform for developing, integrating, and deploying applications, enabling them to take advantage of the benefits of cloud computing while maintaining control over their data and applications',
                    ],
                },
                {
                    id: 1,
                    title: 'What is Oracle APEX?',
                    about: [
                        'Oracle Application Express (APEX) is a low-code development platform that enables businesses to build custom applications quickly and easily. With APEX, businesses can create custom applications using a simple, intuitive interface, without the need for extensive programming skills. APEX includes a range of features and tools, including:',
                        `A drag-and-drop interface for building custom applications`,
                        `Pre-built templates and themes for creating professional-looking applications`,
                        `Integration with Oracle databases and other data sources`,
                        `Built-in security features to protect applications and data`,
                        `Mobile-responsive design for building applications that work on any device`,
                    ],
                },
                {
                    id: 2,
                    title: 'Custom Integration Solutions',
                    about: [
                        'Oracle Integration Cloud (OIC) is a cloud-based integration platform that enables businesses to connect their applications and systems for optimal performance. With OIC, businesses can create custom integration solutions that connect their applications and data, enabling them to automate business processes, improve data accuracy, and enhance productivity. OIC includes a range of features and tools, including:',
                        `Pre-built connectors for popular applications and services`,
                        `A visual interface for building custom integrations`,
                        `Integration with Oracle databases and other data sources`,
                        `Built-in security features to protect applications and data`,
                        `Support for real-time and batch processing`,
                    ],
                },
                {
                    id: 3,
                    title: 'Oracle Analytics Cloud (OAC)',
                    about: [
                        'Oracle Analytics Cloud (OAC) is a cloud-based analytics platform that enables businesses to analyze and visualize their data. With OAC, businesses can gain insights into their data, identify trends and patterns, and make informed decisions. OAC includes a range of features and tools, including:',
                        `A drag-and-drop interface for building custom analytics dashboards`,
                        `Pre-built visualizations and reports for common use cases`,
                        `Integration with Oracle databases and other data sources`,
                        `Built-in machine learning and AI capabilities for predictive analytics`,
                        `Mobile-responsive design for building analytics dashboards that work on any device`,
                    ],
                },
            ],
        },
    ],
};