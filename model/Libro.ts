import { IGetInfo } from "./IGetInfo";

export abstract class Libro implements IGetInfo
{
    private dataCreazione : Date;

    constructor(titolo:string, autore:string);
    constructor(titolo: string, autore: string, prezzo:number);
    
    constructor(public titolo: string,public autore: string, public prezzo?:number)
    {
        this.dataCreazione = new Date();
    }

    getInfo():string
    {
        if(this.prezzo === undefined) 
            return `${this.titolo} - ${this.autore}`;
        return `${this.titolo} - ${this.autore} - ${this.prezzo}€`
    }
}