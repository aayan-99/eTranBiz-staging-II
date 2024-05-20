import { StaticImageData } from "next/image";

export interface Service {
    id: number;
    title: string;
    tabImage: any | string;
    about: string[];
    services: {
        id: number;
        service: string;
    }[];
    route: string | null;
    conclusion?: string | null;
}

interface Industry {
    id: number;
    title: string;
    image: string; // Adjust the type as per your image source type
}

interface FunctionalArea {
    id: number;
    title: string;
    content: string[];
}

interface OtherSoliutions {
    id: number;
    title: string;
    content: string[];
    route: string | null;
}

export interface EnterpriseApplicationData {
    id: number;
    pageTitle: string;
    heroImage: StaticImageData | string; // Adjust the type as per the actual type of enterpriseHero
    title: string;
    about: string;
    industryData: {
        title: string;
        about: string;
        industries: Industry[];
    };
    functionalAreas: {
        title: string;
        areas: FunctionalArea[];
    };
    oracleServices: Service[];
    scope: {
        title: string;
        about: string;
        scopeList: { id: number; content: string; }[];
    };
}

export interface TechnologyTransformationData {
    id: number;
    pageTitle: string;
    heroImage: StaticImageData | string; // Adjust the type as per the actual type of enterpriseHero
    title: string;
    about: string;
    extraAboutText: string[],
    oracleServices: Service[];
    otherSolutions: OtherSoliutions[],
}

export interface ServiceData {
    id: string;
    pageTitle: string;
    heroImage: string | StaticImageData;
    title: string;
    about: string;
    aboutOracle: AboutOracle[];
}

export interface AboutOracle {
    id: number;
    title: string;
    image?: string | null | StaticImageData;
    contentAbout?: string | null;
    content?: string[] | null;
}
