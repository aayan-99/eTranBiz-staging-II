import caseStudyImage from '@/app/assets/images/rectangle.svg'
import clientImage from '@/app/assets/images/client_sample.webp'
import heroImg1 from '@/app/assets/images/landingpagecarousal/hero1.png'
import heroImg2 from '@/app/assets/images/landingpagecarousal/hero2.png'
import building from '@/app/assets/images/building.webp'

import case_study_01 from '@/app/assets/images/case_studies_01.png'

import oracleCloud from '@/app/assets/images/landingpremiumservices/01.png'
import oracleBusiness from '@/app/assets/images/landingpremiumservices/02.png'
import oracleDatabase from '@/app/assets/images/landingpremiumservices/03.png'
import oracleFusion from '@/app/assets/images/landingpremiumservices/04.png'

export const heroCarousalData = [
    {
        id: 1,
        image: heroImg1,
    },
    {
        id: 2,
        image: heroImg2,
    },
];

export const premiumServicesData = {
    id: 0,
    title: 'Your partner for expertise on Oracle Technologies & Digital Transformation',
    content: 'We offer services based on market-leading IT frameworks to streamline IT strategy, enterprise solutions, cloud transformation, smooth and effective digital transformation, and overall digital customer experience. We have over 11 years of experience in the IT industry and have amassed....',
    stats: [
        {
            id: 'stat_1',
            title: 'Team strength',
            stat: '100+',
        },
        {
            id: 'stat_2',
            title: 'Industries',
            stat: '12+',
        },
        {
            id: 'stat_3',
            title: 'Clientelles',
            stat: '50+',
        },
        {
            id: 'stat_4',
            title: 'Countries',
            stat: '8+',
        },
    ],
    serviceCards: [
        {
            id: 0,
            title: 'Enterprise Solutions',
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium voluptatum sed, illo architecto!`,
            image: building,
        },
        {
            id: 1,
            title: 'Cloud Solutions',
            content: `We assist you in enhancing scalability, maximising resource utilization, and controlling costs in managing your enterprise applications.`,
            image: building,
        },
        {
            id: 2,
            title: 'Cloud Platform',
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium voluptatum sed, illo architecto!`,
            image: building,
        },
    ]
};

// export const serviceDataLanding = [
//     {
//         id: 0,
//         title: 'Enterprise Applications',
//         content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium voluptatum sed, illo architecto!`,
//         image: enterprise,
//     },
//     {
//         id: 1,
//         title: 'Technology Transformation',
//         content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium voluptatum sed, illo architecto!`,
//         image: cardPattern,
//     },
//     {
//         id: 2,
//         title: 'Cloud Transformation',
//         content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium voluptatum sed, illo architecto!`,
//         image: cloudTransformation,
//     },
//     {
//         id: 3,
//         title: 'Digitalization',
//         content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium voluptatum sed, illo architecto!`,
//         image: cardPattern,
//     },
// ]

export const caseStudyCarousalData = [
    {
        id: 0,
        title: 'Income Tax Dept. Of India',
        sub_title: 'Support of Oracle E-Business Suite & Professional Services',
        content: 'Infosys, a leading IT services company, manages the IT operations within the Income Tax Department, covering a wide range of products, technologies, services, and processes. Key components include Java, Microservices, the e-filing portal, BO portal, Oracle Applications, PL SQL, database infrastructure, middleware, and integration systems.',
        image: case_study_01,
    },
    {
        id: 1,
        title: 'Income Tax Dept. Of India',
        sub_title: 'Support of Oracle E-Business Suite & Professional Services',
        content: 'Infosys, a leading IT services company, manages the IT operations within the Income Tax Department, covering a wide range of products, technologies, services, and processes. Key components include Java, Microservices, the e-filing portal, BO portal, Oracle Applications, PL SQL, database infrastructure, middleware, and integration systems.',
        image: case_study_01,
    },
    {
        id: 2,
        title: 'Income Tax Dept. Of India',
        sub_title: 'Support of Oracle E-Business Suite & Professional Services',
        content: 'Infosys, a leading IT services company, manages the IT operations within the Income Tax Department, covering a wide range of products, technologies, services, and processes. Key components include Java, Microservices, the e-filing portal, BO portal, Oracle Applications, PL SQL, database infrastructure, middleware, and integration systems.',
        image: case_study_01,
    },
];

export const clientsLandingData = [
    {
        id: 0,
        title: 'The Public Sector',
        content: [
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos eveniet ipsum suscipit illo laborum voluptate adipisci, reiciendis sapiente tempore provident delectus veniam blanditiis ipsam. Consequatur culpa illum, beatae placeat soluta tempora, voluptates delectus aut magni quis rerum vel quae!`,
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos eveniet ipsum suscipit illo laborum voluptate adipisci, reiciendis sapiente tempore provident delectus veniam blanditiis ipsam. Consequatur culpa illum, beatae placeat soluta tempora, voluptates delectus aut magni quis rerum vel quae! dynamic world of banking.`,
        ],
        image: clientImage,
    },
    {
        id: 1,
        title: 'Banking & Finance',
        content: [
            `Navigating the intricate terrain of the highly competitive banking industry, our journey has been marked by resilience and triumph. Having extended our services to encompass over 20 banks spanning a spectrum of nations, our expansive footprint attests to our global acumen.`,
            `Our modus operandi in problem-solving is characterized by a well-established foundation, ensuring stability, reinforced by a commitment to security, strength, and an unwavering dedication to results. This multifaceted approach positions us as a reliable and accomplished player in the dynamic world of banking.`,
        ],
        image: clientImage,
    },
    {
        id: 2,
        title: 'Retails',
        content: [
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos eveniet ipsum suscipit illo laborum voluptate adipisci, reiciendis sapiente tempore provident delectus veniam blanditiis ipsam. Consequatur culpa illum, beatae placeat soluta tempora, voluptates delectus aut magni quis rerum vel quae!`,
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos eveniet ipsum suscipit illo laborum voluptate adipisci, reiciendis sapiente tempore provident delectus veniam blanditiis ipsam. Consequatur culpa illum, beatae placeat soluta tempora, voluptates delectus aut magni quis rerum vel quae! dynamic world of banking.`,
        ],
        image: clientImage,
    },
    {
        id: 3,
        title: 'Aviation & Automotive',
        content: [
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos eveniet ipsum suscipit illo laborum voluptate adipisci, reiciendis sapiente tempore provident delectus veniam blanditiis ipsam. Consequatur culpa illum, beatae placeat soluta tempora, voluptates delectus aut magni quis rerum vel quae!`,
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. In dignissimos eveniet ipsum suscipit illo laborum voluptate adipisci, reiciendis sapiente tempore provident delectus veniam blanditiis ipsam. Consequatur culpa illum, beatae placeat soluta tempora, voluptates delectus aut magni quis rerum vel quae! dynamic world of banking.`,
        ],
        image: clientImage,
    },
];

export const industriesLandingData = [
    {
        id: 0,
        title: 'Banking',
    },
    {
        id: 1,
        title: 'Government & PSUs',
    },
    {
        id: 2,
        title: 'Oil & Gas',
    },
    {
        id: 3,
        title: 'Logistics',
    },
    {
        id: 4,
        title: 'Automotive',
    },
    {
        id: 5,
        title: 'Retail',
    },
    {
        id: 6,
        title: 'Manufacturing',
    },
];