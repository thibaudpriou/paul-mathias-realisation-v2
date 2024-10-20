export default interface Sample {
    alt: string;
    defaultImagePath: string;
    images: Array<{
        path: string;
        type: string;
    }>;
    rank: number; // image position inside realisation's carousel
    variation?: "inverted";
}
