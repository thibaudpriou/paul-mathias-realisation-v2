export default interface Sample {
    alt: string;
    defaultImagePath: string;
    images: Array<{
        path: string;
        breakpoint: string;
    }>;
    rank: number; // image position inside realisation's carousel
}