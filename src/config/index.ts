import type ICategory from "../types/category";
import type Sample from "../types/sample";
import {realisations} from "./realisations";

// sorted list of realisations IDs to display for each pages
const realisationsOrder: string[] = [
    "id-guevn-voler",
    "id-ivory",
    "id-rebecca-oma",
    "id-garreau-armagnac",
    "id-guevn-drogue-douce",
    "id-nome-diva-hfoh",
    "id-skydrone",
    "id-alejandro-donde-estas",
    // "id-rebecca-divague",
    // "id-elbde",
    // "id-tpm-think-positive",
    "id-berry-province",
    // "id-dosla-tete-pleine",
    // "id-ctlm",
    "id-horloger",
    // "id-steampunk",
    "id-tango-charlie",
    // "id-rage",
    // "id-esje",
];

const commercialsRealisationsOrder: string[] = [
    "id-ivory",
    "id-garreau-armagnac",
    "id-skydrone",
    "id-berry-province",
    // "id-steampunk",
];

const musicVideoRealisationsOrder: string[] = [
    "id-guevn-voler",
    "id-rebecca-oma",
    "id-guevn-drogue-douce",
    "id-nome-diva-hfoh",
    "id-alejandro-donde-estas",
    // "id-rebecca-divague",
    // "id-tpm-think-positive",
    // "id-dosla-tete-pleine",
    // "id-esje",
];

const filmsRealisationsOrder: string[] = [
    //"id-elbde",
    "id-horloger",
    // "id-ctlm",
    "id-tango-charlie",
    // "id-rage",
];

function getRealisations(ids: string[]): ICategory["realisations"] {
    return ids.map(id => realisations[id]);
}

const categories: ICategory[] = [
    {
        title: "Publicités",
        path: "commercials",
        rank: 1,
        realisations: getRealisations(commercialsRealisationsOrder),
    },
    {
        title: "Fictions",
        path: "films",
        rank: 3,
        realisations: getRealisations(filmsRealisationsOrder),
    },
    {
        title: "Clips",
        path: "music-videos",
        rank: 2,
        realisations: getRealisations(musicVideoRealisationsOrder),
    },
];

const allRealisations: ICategory["realisations"] = getRealisations(realisationsOrder);

/**
 * Only used for mobile version of home page
 */
const homePageSamples: Sample[] = [
    {
        alt: "Échantillon du clip Voler",
        defaultImagePath: "imgs/home-carousel/home-carousel-1_voler.jpeg",
        images: [],
        rank: 1,
    },
    {
        alt: "Échantillon du clip Voler",
        defaultImagePath: "imgs/home-carousel/home-carousel-2_voler.jpeg",
        images: [],
        rank: 2,
    },
    {
        alt: "Échantillon du la publicité Ivory",
        defaultImagePath: "imgs/home-carousel/home-carousel-21_ivory.png",
        images: [],
        rank: 3,
    },
    {
        alt: "Échantillon de la publicité Skydrone",
        defaultImagePath: "imgs/home-carousel/home-carousel-3_skydrone.jpeg",
        images: [],
        rank: 4,
    },
    {
        alt: "Échantillon du clip Voler",
        defaultImagePath: "imgs/home-carousel/home-carousel-4_voler.jpeg",
        images: [],
        rank: 5,
    },
    {
        alt: "Échantillon de la publicité Château Garreau Armagnac",
        defaultImagePath: "imgs/home-carousel/home-carousel-5_armagnac.jpeg",
        images: [],
        rank: 6,
    },
];

export {allRealisations, categories, homePageSamples};
