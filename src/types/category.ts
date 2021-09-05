import type IRealisation from "./realisation";

export default interface ICategory {
    path: string;
    title: string;
    realisations: IRealisation[];
    rank: number; // category position inside navbar
}
