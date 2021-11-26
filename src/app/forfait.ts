import { Hotel } from './hotel';

export interface Forfait {
    destination: string,
    villeDepart: string,
    hotel: Hotel,
    dateDepart: string,
    duree: number,
    prix: number,
    rabais: number,
    forfaitVedette: boolean,
}
