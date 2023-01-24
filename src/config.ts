import {ImageRatio, RealisationType} from "./types/realisation";

import type ICategory from "./types/category";
import type Sample from "./types/sample";

const realisations: {[id: string]: ICategory["realisations"][0]} = {
    "id-armagnac": {
        title: "Château Garreau Armagnac",
        type: RealisationType.Ad,
        videoUrl: "https://vimeo.com/510700451",
        imageRatio: ImageRatio["2.35/1"],
        samples: [
            {
                alt: "Échantillon publicité Château Garreau Armagnac 1",
                defaultImagePath: "imgs/realisations/armagnac/chateau-garreau-armagnac-1.jpeg",
                images: [
                    {
                        path: "imgs/realisations/armagnac/chateau-garreau-armagnac-1.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/armagnac/chateau-garreau-armagnac-1.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 1,
            },
            {
                alt: "Échantillon publicité Château Garreau Armagnac 2",
                defaultImagePath: "imgs/realisations/armagnac/chateau-garreau-armagnac-2.jpeg",
                images: [
                    {
                        path: "imgs/realisations/armagnac/chateau-garreau-armagnac-2.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/armagnac/chateau-garreau-armagnac-2.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 2,
            },
            {
                alt: "Échantillon publicité Château Garreau Armagnac 3",
                defaultImagePath: "imgs/realisations/armagnac/chateau-garreau-armagnac-3.jpeg",
                images: [
                    {
                        path: "imgs/realisations/armagnac/chateau-garreau-armagnac-3.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/armagnac/chateau-garreau-armagnac-3.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 3,
            },
        ],
    },
    "id-skydrone": {
        title: "Skydrone - Red Balloon",
        type: RealisationType.Ad,
        videoUrl: "https://vimeo.com/430446941/84060ea81a",
        imageRatio: ImageRatio["2.35/1"],
        samples: [
            {
                alt: "Échantillon publicité Skydrone 1",
                defaultImagePath: "imgs/realisations/skydrone/skydrone-1.jpeg",
                images: [
                    {
                        path: "imgs/realisations/skydrone/skydrone-1.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/skydrone/skydrone-1.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 1,
            },
            {
                alt: "Échantillon publicité Skydrone 2",
                defaultImagePath: "imgs/realisations/skydrone/skydrone-2.jpeg",
                images: [
                    {
                        path: "imgs/realisations/skydrone/skydrone-2.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/skydrone/skydrone-2.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 2,
            },
            {
                alt: "Échantillon publicité Skydrone 3",
                defaultImagePath: "imgs/realisations/skydrone/skydrone-3.jpeg",
                images: [
                    {
                        path: "imgs/realisations/skydrone/skydrone-3.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/skydrone/skydrone-3.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 3,
            },
        ],
    },
    "id-steampunk": {
        title: "Mini Steampunk",
        type: RealisationType.Ad,
        videoUrl: "https://vimeo.com/294859635",
        samples: [
            {
                alt: "Échantillon publicité Mini Streampunk 1",
                defaultImagePath: "imgs/realisations/steampunk/mini-steampunk-1.jpeg",
                images: [
                    {
                        path: "imgs/realisations/steampunk/mini-steampunk-1.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/steampunk/mini-steampunk-1.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 1,
            },
            {
                alt: "Échantillon publicité Mini Streampunk 2",
                defaultImagePath: "imgs/realisations/steampunk/mini-steampunk-2.jpeg",
                images: [
                    {
                        path: "imgs/realisations/steampunk/mini-steampunk-2.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/steampunk/mini-steampunk-2.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 2,
            },
            {
                alt: "Échantillon publicité Mini Streampunk 3",
                defaultImagePath: "imgs/realisations/steampunk/mini-steampunk-3.jpeg",
                images: [
                    {
                        path: "imgs/realisations/steampunk/mini-steampunk-3.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/steampunk/mini-steampunk-3.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 3,
            },
        ],
    },
    "id-ctlm": {
        title: "C'était le monde",
        type: RealisationType.Short,
        videoUrl: "https://vimeo.com/294310830",
        samples: [
            {
                alt: "Échantillon de C'était le Monde 1",
                defaultImagePath: "imgs/realisations/ctlm/c-etait-le-monde-1.jpeg",
                images: [
                    {
                        path: "imgs/realisations/ctlm/c-etait-le-monde-1.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/ctlm/c-etait-le-monde-1.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 1,
            },
            {
                alt: "Échantillon de C'était le Monde 2",
                defaultImagePath: "imgs/realisations/ctlm/c-etait-le-monde-2.jpeg",
                images: [
                    {
                        path: "imgs/realisations/ctlm/c-etait-le-monde-2.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/ctlm/c-etait-le-monde-2.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 2,
            },
            {
                alt: "Échantillon de C'était le Monde 3",
                defaultImagePath: "imgs/realisations/ctlm/c-etait-le-monde-3.jpeg",
                images: [
                    {
                        path: "imgs/realisations/ctlm/c-etait-le-monde-3.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/ctlm/c-etait-le-monde-3.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 3,
            },
        ],
    },
    "id-elbde": {
        title: "Et le Bourgeon devint Étincelle",
        type: RealisationType.Short,
        videoUrl: "https://vimeo.com/294310912",
        samples: [
            {
                alt: "Échantillon de Et le bourgeon devint Étincelle 1",
                defaultImagePath: "imgs/realisations/elbde/et-le-bourgeon-devint-etincelle-1.jpeg",
                images: [
                    {
                        path: "imgs/realisations/elbde/et-le-bourgeon-devint-etincelle-1.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/elbde/et-le-bourgeon-devint-etincelle-1.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 1,
            },
            {
                alt: "Échantillon de Et le bourgeon devint Étincelle 2",
                defaultImagePath: "imgs/realisations/elbde/et-le-bourgeon-devint-etincelle-2.jpeg",
                images: [
                    {
                        path: "imgs/realisations/elbde/et-le-bourgeon-devint-etincelle-2.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/elbde/et-le-bourgeon-devint-etincelle-2.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 2,
            },
            {
                alt: "Échantillon de Et le bourgeon devint Étincelle 3",
                defaultImagePath: "imgs/realisations/elbde/et-le-bourgeon-devint-etincelle-3.jpeg",
                images: [
                    {
                        path: "imgs/realisations/elbde/et-le-bourgeon-devint-etincelle-3.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/elbde/et-le-bourgeon-devint-etincelle-3.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 3,
            },
        ],
    },
    "id-horloger": {
        title: "L'Horloger",
        type: RealisationType.Short,
        videoUrl: "https://vimeo.com/294550528",
        imageRatio: ImageRatio["2.35/1"],
        samples: [
            {
                alt: "Échantillon de L'Horloger 1",
                defaultImagePath: "imgs/realisations/horloger/l-horloger-1.jpeg",
                images: [
                    {
                        path: "imgs/realisations/horloger/l-horloger-1.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/horloger/l-horloger-1.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 1,
            },
            {
                alt: "Échantillon de L'Horloger 2",
                defaultImagePath: "imgs/realisations/horloger/l-horloger-2.jpeg",
                images: [
                    {
                        path: "imgs/realisations/horloger/l-horloger-2.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/horloger/l-horloger-2.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 2,
            },
            {
                alt: "Échantillon de L'Horloger 3",
                defaultImagePath: "imgs/realisations/horloger/l-horloger-3.jpeg",
                images: [
                    {
                        path: "imgs/realisations/horloger/l-horloger-3.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/horloger/l-horloger-3.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 3,
            },
        ],
    },
    "id-rage": {
        title: "Rage",
        type: RealisationType.Trailer,
        videoUrl: "https://vimeo.com/245090431",
        samples: [
            {
                alt: "Échantillon de Rage 1",
                defaultImagePath: "imgs/realisations/rage/rage-1.jpeg",
                images: [
                    {
                        path: "imgs/realisations/rage/rage-1.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/rage/rage-1.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 1,
            },
            {
                alt: "Échantillon de Rage 2",
                defaultImagePath: "imgs/realisations/rage/rage-2.jpeg",
                images: [
                    {
                        path: "imgs/realisations/rage/rage-2.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/rage/rage-2.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 2,
            },
        ],
    },
    "id-tetepleine": {
        title: "Dosla - La tête Pleine",
        type: RealisationType.Clip,
        videoUrl: "https://www.youtube.com/watch?v=I7ixz5rmmQE",
        imageRatio: ImageRatio["2.35/1"],
        samples: [
            {
                alt: "Échantillon du clip La tête Pleine 1",
                defaultImagePath: "imgs/realisations/tetepleine/la-tete-pleine-1.jpeg",
                images: [
                    {
                        path: "imgs/realisations/tetepleine/la-tete-pleine-1.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/tetepleine/la-tete-pleine-1.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 1,
            },
            {
                alt: "Échantillon du clip La tête Pleine 2",
                defaultImagePath: "imgs/realisations/tetepleine/la-tete-pleine-2.jpeg",
                images: [
                    {
                        path: "imgs/realisations/tetepleine/la-tete-pleine-2.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/tetepleine/la-tete-pleine-2.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 2,
            },
            {
                alt: "Échantillon du clip La tête Pleine 3",
                defaultImagePath: "imgs/realisations/tetepleine/la-tete-pleine-3.jpeg",
                images: [
                    {
                        path: "imgs/realisations/tetepleine/la-tete-pleine-3.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/tetepleine/la-tete-pleine-3.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 3,
            },
        ],
    },
    "id-esje": {
        title: "Charlie M - Et si j'intéresse encore",
        type: RealisationType.Clip,
        videoUrl: "https://www.youtube.com/watch?v=zywUSUdgXu0",
        samples: [
            {
                alt: "Échantillon du clip Et si j'intéresse encore 1",
                defaultImagePath: "imgs/realisations/esje/et-si-j-interesse-encore-1.jpeg",
                images: [
                    {
                        path: "imgs/realisations/esje/et-si-j-interesse-encore-1.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/esje/et-si-j-interesse-encore-1.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 1,
            },
            {
                alt: "Échantillon du clip Et si j'intéresse encore 2",
                defaultImagePath: "imgs/realisations/esje/et-si-j-interesse-encore-2.jpeg",
                images: [
                    {
                        path: "imgs/realisations/esje/et-si-j-interesse-encore-2.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/esje/et-si-j-interesse-encore-2.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 2,
            },
            {
                alt: "Échantillon du clip Et si j'intéresse encore 3",
                defaultImagePath: "imgs/realisations/esje/et-si-j-interesse-encore-3.jpeg",
                images: [
                    {
                        path: "imgs/realisations/esje/et-si-j-interesse-encore-3.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/esje/et-si-j-interesse-encore-3.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 3,
            },
        ],
    },
    "id-tpm": {
        title: "TPM - Think Positive Music",
        type: RealisationType.Clip,
        videoUrl: "https://www.youtube.com/watch?v=6XuLEIjBreA",
        samples: [
            {
                alt: "Échantillon du clip TPM - Think Positive Music 1",
                defaultImagePath: "imgs/realisations/tpm/tpm-1.jpg",
                images: [
                    {
                        path: "imgs/realisations/tpm/tpm-1.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/tpm/tpm-1.jpg",
                        type: "image/jpeg",
                    },
                ],
                rank: 1,
            },
            {
                alt: "Échantillon du clip TPM - Think Positive Music 2",
                defaultImagePath: "imgs/realisations/tpm/tpm-2.jpg",
                images: [
                    {
                        path: "imgs/realisations/tpm/tpm-2.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/tpm/tpm-2.jpg",
                        type: "image/jpeg",
                    },
                ],
                rank: 2,
            },
            {
                alt: "Échantillon du clip TPM - Think Positive Music 3",
                defaultImagePath: "imgs/realisations/tpm/tpm-3.jpg",
                images: [
                    {
                        path: "imgs/realisations/tpm/tpm-3.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/tpm/tpm-3.jpg",
                        type: "image/jpeg",
                    },
                ],
                rank: 3,
            },
        ],
        imageRatio: ImageRatio["2.35/1"],
    },
    "id-guevn-voler": {
        title: "Guevn - Voler",
        type: RealisationType.Clip,
        videoUrl: "https://www.youtube.com/watch?v=t69xwlUDXeI",
        samples: [
            {
                alt: "Échantillon du clip Guevn - Voler 1",
                defaultImagePath: "imgs/realisations/guevn/voler-1.jpeg",
                images: [
                    {
                        path: "imgs/realisations/guevn/voler-1.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/guevn/voler-1.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 1,
            },
            {
                alt: "Échantillon du clip Guevn - Voler 2",
                defaultImagePath: "imgs/realisations/guevn/voler-2.jpeg",
                images: [
                    {
                        path: "imgs/realisations/guevn/voler-2.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/guevn/voler-2.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 2,
            },
            {
                alt: "Échantillon du clip Guevn - Voler 3",
                defaultImagePath: "imgs/realisations/guevn/voler-3.jpeg",
                images: [
                    {
                        path: "imgs/realisations/guevn/voler-3.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/guevn/voler-3.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 3,
            },
            {
                alt: "Échantillon du clip Guevn - Voler 4",
                defaultImagePath: "imgs/realisations/guevn/voler-4.jpeg",
                images: [
                    {
                        path: "imgs/realisations/guevn/voler-4.webp",
                        type: "image/webp",
                    },
                    {
                        path: "imgs/realisations/guevn/voler-4.jpeg",
                        type: "image/jpeg",
                    },
                ],
                rank: 4,
            },
        ],
        imageRatio: ImageRatio["2.35/1"],
    },
    "id-tangocharlie": {
        title: "Tango Charlie",
        type: RealisationType.Trailer,
        videoUrl: "https://vimeo.com/715563257",
        samples: [
            {
                // TODO jpeg
                alt: "Échantillon du trailer Tango Charlie 1",
                defaultImagePath: "imgs/realisations/tango-charlie/tango-charlie-1.png",
                images: [
                    {
                        path: "imgs/realisations/tango-charlie/tango-charlie-1.png",
                        type: "image/png",
                    },
                ],
                rank: 1,
            },
            {
                // TODO jpeg
                alt: "Échantillon du trailer Tango Charlie 2",
                defaultImagePath: "imgs/realisations/tango-charlie/tango-charlie-2.png",
                images: [
                    {
                        path: "imgs/realisations/tango-charlie/tango-charlie-2.png",
                        type: "image/png",
                    },
                ],
                rank: 2,
            },
            {
                // TODO jpeg
                alt: "Échantillon du trailer Tango Charlie 3",
                defaultImagePath: "imgs/realisations/tango-charlie/tango-charlie-3.png",
                images: [
                    {
                        path: "imgs/realisations/tango-charlie/tango-charlie-3.png",
                        type: "image/png",
                    },
                ],
                rank: 3,
            },
        ],
        imageRatio: ImageRatio["2.35/1"],
    },
    "id-ivory": {
        title: "Ivory",
        type: RealisationType.Ad,
        videoUrl: undefined,
        samples: [
            {
                // TODO jpeg
                alt: "Échantillon publicité Ivory 1",
                defaultImagePath: "imgs/realisations/ivory/ivory-1.png",
                images: [
                    {
                        path: "imgs/realisations/ivory/ivory-1.png",
                        type: "image/png",
                    },
                ],
                rank: 1,
            },
            {
                // TODO jpeg
                alt: "Échantillon publicité Ivory 2",
                defaultImagePath: "imgs/realisations/ivory/ivory-2.png",
                images: [
                    {
                        path: "imgs/realisations/ivory/ivory-2.png",
                        type: "image/png",
                    },
                ],
                rank: 2,
            },
            {
                // TODO jpeg
                alt: "Échantillon publicité Ivory 3",
                defaultImagePath: "imgs/realisations/ivory/ivory-3.png",
                images: [
                    {
                        path: "imgs/realisations/ivory/ivory-3.png",
                        type: "image/png",
                    },
                ],
                rank: 3,
            },
            {
                // TODO jpeg
                alt: "Échantillon publicité Ivory 4",
                defaultImagePath: "imgs/realisations/ivory/ivory-4.png",
                images: [
                    {
                        path: "imgs/realisations/ivory/ivory-4.png",
                        type: "image/png",
                    },
                ],
                rank: 3,
            },
        ],
        imageRatio: ImageRatio["2.35/1"],
    },
    // TODO: [Nome Diva] videoUrl, images + fix imageRatio
    // "id-nome-diva": {
    //     title: "Nome Diva - Hybrid Form of Humanity",
    //     type: RealisationType.Clip,
    //     videoUrl: undefined,
    //     samples: [],
    //     imageRatio: ImageRatio["2.35/1"],
    // }
    "id-guevn-droguedouce": {
        title: "Guevn - Drogue Douce",
        type: RealisationType.Clip,
        videoUrl: "https://www.youtube.com/watch?v=LDvtIJ8_D0Y",
        samples: [
            {
                // TODO jpeg
                alt: "Échantillon du clip Guevn - Drogue Douce 1",
                defaultImagePath: "imgs/realisations/guevn/drogue-douce-1.png",
                images: [
                    {
                        path: "imgs/realisations/guevn/drogue-douce-1.png",
                        type: "image/png",
                    },
                ],
                rank: 1,
            },
            {
                // TODO jpeg
                alt: "Échantillon du clip Guevn - Drogue Douce 2",
                defaultImagePath: "imgs/realisations/guevn/drogue-douce-2.png",
                images: [
                    {
                        path: "imgs/realisations/guevn/drogue-douce-2.png",
                        type: "image/png",
                    },
                ],
                rank: 2,
            },
            {
                // TODO jpeg
                alt: "Échantillon du clip Guevn - Drogue Douce 3",
                defaultImagePath: "imgs/realisations/guevn/drogue-douce-3.png",
                images: [
                    {
                        path: "imgs/realisations/guevn/drogue-douce-3.png",
                        type: "image/png",
                    },
                ],
                rank: 3,
            },
        ],
        imageRatio: ImageRatio["2.35/1"],
    },
    "id-rebecca-divague": {
        title: "Rebecca - Divague en rêve",
        type: RealisationType.Clip,
        videoUrl: "https://www.youtube.com/watch?v=gXgkSZEWiyw",
        samples: [
            {
                // TODO jpeg
                alt: "Échantillon du clip Rebecca - Divague en rêve 1",
                defaultImagePath: "imgs/realisations/rebecca/divague-1.png",
                images: [
                    {
                        path: "imgs/realisations/rebecca/divague-1.png",
                        type: "image/png",
                    },
                ],
                rank: 1,
            },
            {
                // TODO jpeg
                alt: "Échantillon du clip Rebecca - Divague en rêve 2",
                defaultImagePath: "imgs/realisations/rebecca/divague-2.png",
                images: [
                    {
                        path: "imgs/realisations/rebecca/divague-2.png",
                        type: "image/png",
                    },
                ],
                rank: 2,
            },
            {
                // TODO jpeg
                alt: "Échantillon du clip Rebecca - Divague en rêve 3",
                defaultImagePath: "imgs/realisations/rebecca/divague-3.png",
                images: [
                    {
                        path: "imgs/realisations/rebecca/divague-3.png",
                        type: "image/png",
                    },
                ],
                rank: 3,
            },
        ],
        imageRatio: ImageRatio["2.35/1"],
    },
};

// sorted list of realisations IDs to display for each pages
const realisationsOrder: string[] = [
    "id-guevn-voler",
    "id-ivory",
    // "id-nome-diva",
    "id-armagnac",
    "id-guevn-droguedouce",
    "id-skydrone",
    "id-rebecca-divague",
    // Sergio Alexjandro - Donde Estas
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
    // Sergio Alexjandro - Donde Estas
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
