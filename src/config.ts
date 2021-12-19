import type ICategory from "./types/category";
import type Sample from "./types/sample";
import {ImageRatio, RealisationType} from "./types/realisation";

const categories: ICategory[] = [
    {
        title: "Publicités",
        path: "commercials",
        rank: 1,
        realisations: [
            {
                title: "Château Garreau Armagnac",
                type: RealisationType.Ad,
                videoUrl: "https://vimeo.com/510700451",
                imageRatio: ImageRatio["2.35/1"],
                samples: [
                    {
                        alt: "Échantillon publicité Château Garreau Armagnac 1",
                        defaultImagePath: "imgs/realisations/chateau-garreau-armagnac-1.jpeg",
                        images: [],
                        rank: 1,
                    },
                    {
                        alt: "Échantillon publicité Château Garreau Armagnac 2",
                        defaultImagePath: "imgs/realisations/chateau-garreau-armagnac-2.jpeg",
                        images: [],
                        rank: 2,
                    },
                    {
                        alt: "Échantillon publicité Château Garreau Armagnac 3",
                        defaultImagePath: "imgs/realisations/chateau-garreau-armagnac-3.jpeg",
                        images: [],
                        rank: 3,
                    },
                ],
                rank: 1,
                globalRank: 1,
            },
            {
                title: "Skydrone",
                type: RealisationType.Ad,
                videoUrl: "https://vimeo.com/386964358",
                imageRatio: ImageRatio["2.35/1"],
                samples: [
                    {
                        alt: "Échantillon publicité Skydrone 1",
                        defaultImagePath: "imgs/realisations/skydrone-1.jpeg",
                        images: [],
                        rank: 1,
                    },
                    {
                        alt: "Échantillon publicité Skydrone 2",
                        defaultImagePath: "imgs/realisations/skydrone-2.jpeg",
                        images: [],
                        rank: 2,
                    },
                    {
                        alt: "Échantillon publicité Skydrone 3",
                        defaultImagePath: "imgs/realisations/skydrone-3.jpeg",
                        images: [],
                        rank: 3,
                    },
                ],
                rank: 2,
                globalRank: 2,
            },
            {
                title: "Mini Steampunk",
                type: RealisationType.Ad,
                videoUrl: "https://vimeo.com/294859635",
                samples: [
                    {
                        alt: "Échantillon publicité Mini Streampunk 1",
                        defaultImagePath: "imgs/realisations/mini-steampunk-1.jpeg",
                        images: [],
                        rank: 1,
                    },
                    {
                        alt: "Échantillon publicité Mini Streampunk 2",
                        defaultImagePath: "imgs/realisations/mini-steampunk-2.jpeg",
                        images: [],
                        rank: 2,
                    },
                    {
                        alt: "Échantillon publicité Mini Streampunk 3",
                        defaultImagePath: "imgs/realisations/mini-steampunk-3.jpeg",
                        images: [],
                        rank: 3,
                    },
                ],
                rank: 3,
                globalRank: 7,
            },
        ],
    },
    {
        title: "Fictions",
        path: "films",
        rank: 3,
        realisations: [
            {
                title: "C'était le monde",
                type: RealisationType.Short,
                videoUrl: "https://vimeo.com/294310830",
                samples: [
                    {
                        alt: "Échantillon de C'était le Monde 1",
                        defaultImagePath: "imgs/realisations/c-etait-le-monde-1.jpeg",
                        images: [],
                        rank: 1,
                    },
                    {
                        alt: "Échantillon de C'était le Monde 2",
                        defaultImagePath: "imgs/realisations/c-etait-le-monde-2.jpeg",
                        images: [],
                        rank: 2,
                    },
                    {
                        alt: "Échantillon de C'était le Monde 3",
                        defaultImagePath: "imgs/realisations/c-etait-le-monde-3.jpeg",
                        images: [],
                        rank: 3,
                    },
                ],
                rank: 1,
                globalRank: 5,
            },
            {
                title: "Et le Bourgeon devint Étincelle",
                type: RealisationType.Short,
                videoUrl: "https://vimeo.com/294310912",
                samples: [
                    {
                        alt: "Échantillon de Et le bourgeon devint Étincelle 1",
                        defaultImagePath: "imgs/realisations/et-le-bourgeon-devint-etincelle-1.jpeg",
                        images: [],
                        rank: 1,
                    },
                    {
                        alt: "Échantillon de Et le bourgeon devint Étincelle 2",
                        defaultImagePath: "imgs/realisations/et-le-bourgeon-devint-etincelle-2.jpeg",
                        images: [],
                        rank: 2,
                    },
                    {
                        alt: "Échantillon de Et le bourgeon devint Étincelle 3",
                        images: [],
                        defaultImagePath: "imgs/realisations/et-le-bourgeon-devint-etincelle-3.jpeg",
                        rank: 3,
                    },
                ],
                rank: 2,
                globalRank: 4,
            },
            {
                title: "L'Horloger",
                type: RealisationType.Short,
                videoUrl: "https://vimeo.com/294550528",
                imageRatio: ImageRatio["2.35/1"],
                samples: [
                    {
                        alt: "Échantillon de L'Horloger 1",
                        images: [],
                        defaultImagePath: "imgs/realisations/l-horloger-1.jpeg",

                        rank: 1,
                    },
                    {
                        alt: "Échantillon de L'Horloger 2",
                        images: [],
                        defaultImagePath: "imgs/realisations/l-horloger-2.jpeg",

                        rank: 2,
                    },
                    {
                        alt: "Échantillon de L'Horloger 3",
                        images: [],
                        defaultImagePath: "imgs/realisations/l-horloger-3.jpeg",

                        rank: 3,
                    },
                ],
                rank: 3,
                globalRank: 6,
            },
            {
                title: "Rage",
                type: RealisationType.Trailer,
                videoUrl: "https://vimeo.com/245090431",
                samples: [
                    {
                        alt: "Échantillon de Rage 1",
                        images: [],
                        defaultImagePath: "imgs/realisations/rage-1.jpeg",

                        rank: 1,
                    },
                    {
                        alt: "Échantillon de Rage 2",
                        images: [],
                        defaultImagePath: "imgs/realisations/rage-2.jpeg",

                        rank: 2,
                    },
                ],
                rank: 4,
                globalRank: 9,
            },
        ],
    },
    {
        title: "Clips",
        path: "music-videos",
        rank: 2,
        realisations: [
            {
                title: "Dosla - La tête Pleine",
                type: RealisationType.Clip,
                videoUrl: "https://www.youtube.com/watch?v=I7ixz5rmmQE",
                imageRatio: ImageRatio["2.35/1"],
                samples: [
                    {
                        alt: "Échantillon du clip La tête Pleine 1",
                        images: [],
                        defaultImagePath: "imgs/realisations/la-tete-pleine-1.jpeg",

                        rank: 1,
                    },
                    {
                        alt: "Échantillon du clip La tête Pleine 2",
                        images: [],
                        defaultImagePath: "imgs/realisations/la-tete-pleine-2.jpeg",

                        rank: 2,
                    },
                    {
                        alt: "Échantillon du clip La tête Pleine 3",
                        images: [],
                        defaultImagePath: "imgs/realisations/la-tete-pleine-3.jpeg",

                        rank: 3,
                    },
                ],
                rank: 2,
                globalRank: 3,
            },
            {
                title: "Charlie M - Et si j'intéresse encore",
                type: RealisationType.Clip,
                videoUrl: "https://www.youtube.com/watch?v=zywUSUdgXu0",
                samples: [
                    {
                        alt: "Échantillon du clip Et si j'intéresse encore 1",
                        images: [],
                        defaultImagePath: "imgs/realisations/et-si-j-interesse-encore-1.jpeg",

                        rank: 1,
                    },
                    {
                        alt: "Échantillon du clip Et si j'intéresse encore 2",
                        images: [],
                        defaultImagePath: "imgs/realisations/et-si-j-interesse-encore-2.jpeg",

                        rank: 2,
                    },
                    {
                        alt: "Échantillon du clip Et si j'intéresse encore 3",
                        images: [],
                        defaultImagePath: "imgs/realisations/et-si-j-interesse-encore-3.jpeg",

                        rank: 3,
                    },
                ],
                rank: 3,
                globalRank: 11,
            },
            {
                title: "TPM - Think Positive Music",
                type: RealisationType.Clip,
                videoUrl: "https://www.youtube.com/watch?v=6XuLEIjBreA",
                samples: [
                    {
                        alt: "Échantillon du clip TPM - Think Positive Music 1",
                        images: [],
                        defaultImagePath: "imgs/realisations/tpm-1.jpg",

                        rank: 1,
                    },
                    {
                        alt: "Échantillon du clip TPM - Think Positive Music 2",
                        images: [],
                        defaultImagePath: "imgs/realisations/tpm-2.jpg",

                        rank: 2,
                    },
                    {
                        alt: "Échantillon du clip TPM - Think Positive Music 3",
                        images: [],
                        defaultImagePath: "imgs/realisations/tpm-3.jpg",

                        rank: 3,
                    },
                ],
                imageRatio: ImageRatio["2.35/1"],
                rank: 1,
                globalRank: 2.5,
            },
            {
                title: "Guevn - Voler",
                type: RealisationType.Clip,
                videoUrl: "https://www.youtube.com/watch?v=t69xwlUDXeI",
                samples: [
                    {
                        alt: "Échantillon du clip Guevn - Voler 1",
                        images: [],
                        defaultImagePath: "imgs/realisations/voler-1.jpeg",

                        rank: 1,
                    },
                    {
                        alt: "Échantillon du clip Guevn - Voler 2",
                        images: [],
                        defaultImagePath: "imgs/realisations/voler-2.jpeg",

                        rank: 2,
                    },
                    {
                        alt: "Échantillon du clip Guevn - Voler 3",
                        images: [],
                        defaultImagePath: "imgs/realisations/voler-3.jpeg",

                        rank: 3,
                    },
                    {
                        alt: "Échantillon du clip Guevn - Voler 4",
                        images: [],
                        defaultImagePath: "imgs/realisations/voler-4.jpeg",

                        rank: 4,
                    },
                ],
                imageRatio: ImageRatio["2.35/1"],
                rank: 0,
                globalRank: 0,
            },
        ],
    },
];

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
        alt: "Échantillon de la publicité Skydrone",
        defaultImagePath: "imgs/home-carousel/home-carousel-3_skydrone.jpeg",
        images: [],
        rank: 3,
    },
    {
        alt: "Échantillon du clip Voler",
        defaultImagePath: "imgs/home-carousel/home-carousel-4_voler.jpeg",
        images: [],
        rank: 4,
    },
    {
        alt: "Échantillon de la publicité Château Garreau Armagnac",
        defaultImagePath: "imgs/home-carousel/home-carousel-5_armagnac.jpeg",
        images: [],
        rank: 5,
    },
];

export {categories, homePageSamples};
