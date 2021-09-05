import type ICategory from "./types/category";
import { ImageRatio, RealisationType } from './types/realisation';

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
            defaultImagePath:
              "imgs/realisations/chateau-garreau-armagnac-1.jpeg",
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
        rank: 1,
        globalRank: 3,
      },
      // ! Adun
      // {
      //   title: "Adun",
      //   videoUrl: "TODO",
      //   type: RealisationType.Clip,
      //   imageRatio: ImageRatio["2.35/1"],
      //     samples: [
      //     // TODO
      //   ],
      //   rank: 2,
      //   globalRank: 10,
      // },
      {
        title: "Dosla - Dans ma tchop",
        type: RealisationType.Clip,
        videoUrl: "https://www.youtube.com/watch?v=Z6-l8f84HR4",
        imageRatio: ImageRatio["2.35/1"],
        samples: [
          {
            alt: "Échantillon du clip Dans ma tchop 1",
            images: [],
            defaultImagePath: "imgs/realisations/dans-ma-tchop-1.jpeg",

            rank: 1,
          },
          {
            alt: "Échantillon du clip Dans ma tchop 2",
            images: [],
            defaultImagePath: "imgs/realisations/dans-ma-tchop-2.jpeg",

            rank: 2,
          },
          {
            alt: "Échantillon du clip Dans ma tchop 3",
            images: [],
            defaultImagePath: "imgs/realisations/dans-ma-tchop-3.jpeg",

            rank: 3,
          },
        ],
        rank: 3,
        globalRank: 8,
      },
      // ! Pensando
      // {
      //   title: "Pensando",
      //   videoUrl: "TODO",
      //   type: RealisationType.Clip,
      //   imageRatio: ImageRatio["2.35/1"],
      //   samples: [
      //     // TODO
      //   ],
      //   rank: 4,
      //   globalRank: 12,
      // },
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
        rank: 5,
        globalRank: 11,
      },
    ],
  },
];

export {categories};
