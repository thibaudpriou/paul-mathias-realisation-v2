import type ICategory from "../types/category";
import type Sample from "../types/sample";
import { realisations } from "./realisations";

// sorted list of realisations IDs to display for each pages
const realisationsOrder: string[] = [
    "id-guevn-voler",
    "id-ivory",
    // "id-nome-diva",
    "id-armagnac",
    "id-guevn-droguedouce",
    "id-skydrone",
    "id-alejandro-donde-estas",
    "id-rebecca-divague",
    "id-elbde",
    "id-tpm",
    "id-tetepleine",
    "id-ctlm",
    "id-horloger",
    "id-steampunk",
    "id-tangocharlie",
    "id-rage",
    "id-esje",
];

const commercialsRealisationsOrder: string[] = [
    "id-ivory",
    "id-armagnac",
    "id-skydrone",
    "id-steampunk",
];

const filmsRealisationsOrder: string[] = [
    "id-elbde",
    "id-horloger",
    "id-ctlm",
    "id-tangocharlie",
    "id-rage",
];

const musicVideoRealisationsOrder: string[] = [
    "id-guevn-voler",
    // "id-nome-diva",
    "id-guevn-droguedouce",
    "id-alejandro-donde-estas",
    "id-rebecca-divague",
    "id-tpm",
    "id-tetepleine",
    "id-esje",
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