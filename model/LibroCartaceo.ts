import { Libro } from "./Libro";

export class LibroCartaceo extends Libro
{
    constructor(titolo:string, autore:string, pagine:number);
    constructor(titolo:string, autore:string, pagine:number, prezzo:number);
    
    constructor(titolo: string, autore: string, public pagine:number, prezzo?:number)
    {
        super(titolo,autore);
        //TEMPORANEO
        super.prezzo = prezzo;
    }

    override getInfo():string
    {
        return super.getInfo() + ` - ${this.pagine}pagg. `
    }
}