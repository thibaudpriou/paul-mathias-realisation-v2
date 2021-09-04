export enum RealisationType {
  Ad = "Pub",
  Short = "Court-métrage",
  Trailer = "Trailer",
  Clip = "Clip",
}

export enum ImageRatio {
  "16/9" = "16/9",
}

export default interface IRealisation {
  title: string;
  type: RealisationType;
  videoUrl: string;
  /**
   * @param imageRatio default to 16/9
   */
  imageRatio?: ImageRatio;
  samples: Array<{
    alt: string;
    defaultImagePath: string;
    images: Array<{
      path: string;
      breakpoint: string;
    }>;
    rank: number; // image position inside realisation's carousel
  }>;
  rank: number; // realisation position inside related category page
  globalRank: number; // realisation position inside "All" page
}
