
import company_img from '@/app/assets/images/companypage/company.svg'

import quality_dark from '@/app/assets/icons/companyValuesIcons/quality_dark.svg'
import teamwork_dark from '@/app/assets/icons/companyValuesIcons/teamwork_dark.svg'
import ownership_dark from '@/app/assets/icons/companyValuesIcons/ownership_dark.svg'
import integrity_dark from '@/app/assets/icons/companyValuesIcons/integrity_dark.svg'
import respect_dark from '@/app/assets/icons/companyValuesIcons/respect_dark.svg'
import compassion_dark from '@/app/assets/icons/companyValuesIcons/compassion_dark.svg'


import quality_white from '@/app/assets/icons/companyValuesIcons/quality_white.svg'
import teamwork_white from '@/app/assets/icons/companyValuesIcons/teamwork_white.svg'
import ownership_white from '@/app/assets/icons/companyValuesIcons/ownership_white.svg'
import integrity_white from '@/app/assets/icons/companyValuesIcons/integrity_white.svg'
import respect_white from '@/app/assets/icons/companyValuesIcons/respect_white.svg'
import compassion_white from '@/app/assets/icons/companyValuesIcons/compassion_white.svg'

export const companyPageData = {
    title: 'The Company',
    heroContent: 'We aim to streamline, accelerate, and reduce the cost of your IT operations. We are rather adept in developing and deploying complex and mission-critical solutions particularly on Oracle Products and Technologies.',
    heroImage: company_img,
    typeWriterTextSection: {
        constant: 'We are here to make IT',
        variableWords: ['Simple.', 'Quick.', 'Economical.'],
    },
    about: {
        header: 'WHO ARE WE ?',
        para1: 'We are an IT consulting and services firm that specialises in Oracle Products and Technologies. eTranBiz was founded in 2011 in Bangalore, the IT capital of India. As of now, eTranBiz has more than a hundred full-time employees, not including the thirty freelance consultants working out of our offices located throughout India.',
        para2: 'Our ultimate goal is to develop lasting relationships with our clients, earning the status of',
        para3: 'Your partner for high-end expertise on Oracle Technologies and Digital Transformation.',
        goal: [
            {
                id: 'vision',
                title: 'Our Vision',
                content: [
                    `To be recognized as a one-stop shop for delivering cost-effective IT solutions and services, enabling our customers to achieve excellence and a sustainable competitive edge.`
                ],
            },
            {
                id: 'mission',
                title: 'Our Mission',
                content: [
                    `To provide innovative, economical, end-to-end solutions that bring in more than incremental benefit to our clients, partners, and vendors.`,
                    `To provide top-quality services to our clients, in the areas of consulting, technology, customer support, operations, and training.`,
                ],
            },
        ],
    },
    timeline: [
        {
            id: 0,
            year: '1995',
            content: 'Mastan Sab joins EWI IT Consulting Services as a Technical Manager.',
        },
        {
            id: 1,
            year: '2007',
            content: 'Mastan Sab starts consulting company, PeopleTalents.',
        },
        {
            id: 2,
            year: '2009',
            content: 'Mastan Sab opens up OraTalents Solutions and Services.',
        },
        {
            id: 3,
            year: '2017',
            content: 'eTranBiz was created as a sister company to OraTalents.',
        },
    ],
    industries: [
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
    ],
    values: {
        header: 'CORE VALUES',
        valuesData: [
            {
                id: 0,
                title: 'Quality',
                iconDark: quality_dark,
                iconWhite: quality_white,
                content: 'It is important to us that we give our clients services of the highest quality that meet their needs and expectations.',
            },
            {
                id: 1,
                title: 'Teamwork',
                iconDark: teamwork_dark,
                iconWhite: teamwork_white,
                content: 'lorem ipsum dolor sit amet zjakt kujest opanji helumn sicoro teraj depokl vajiuq pioghni ipsum amet ameremt jis kiojsw.',
            },
            {
                id: 2,
                title: 'Ownership',
                iconDark: ownership_dark,
                iconWhite: ownership_white,
                content: 'lorem ipsum dolor sit amet zjakt kujest opanji helumn sicoro teraj depokl vajiuq pioghni ipsum amet ameremt jis kiojsw.',
            },
            {
                id: 3,
                title: 'Integrity',
                iconDark: integrity_dark,
                iconWhite: integrity_white,
                content: 'lorem ipsum dolor sit amet zjakt kujest opanji helumn sicoro teraj depokl vajiuq pioghni ipsum amet ameremt jis kiojsw.',
            },
            {
                id: 4,
                title: 'Respect',
                iconDark: respect_dark,
                iconWhite: respect_white,
                content: 'lorem ipsum dolor sit amet zjakt kujest opanji helumn sicoro teraj depokl vajiuq pioghni ipsum amet ameremt jis kiojsw.',
            },
            {
                id: 5,
                title: 'Compassion',
                iconDark: compassion_dark,
                iconWhite: compassion_white,
                content: 'lorem ipsum dolor sit amet zjakt kujest opanji helumn sicoro teraj depokl vajiuq pioghni ipsum amet ameremt jis kiojsw.',
            }
        ],
    }
};