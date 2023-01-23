import type Sample from "./sample";

export enum RealisationType {
    Ad = "Pub",
    Short = "Court-métrage",
    Trailer = "Trailer",
    Clip = "Clip",
}

export enum ImageRatio {
    "16/9" = "16/9",
    "2.35/1" = "2.35/1",
}

export default interface IRealisation {
    title: string;
    type: RealisationType;
    videoUrl?: string;
    /**
     * @param imageRatio default to 16/9
     */
    imageRatio?: ImageRatio;
    samples: Array<Sample>;
}
