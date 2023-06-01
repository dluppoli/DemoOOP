import { Libro } from "./Libro";

export class LibroDigitale extends Libro
{
    constructor(titolo:string, autore:string, kb:number);
    constructor(titolo:string, autore:string, kb:number, prezzo:number);
    
    constructor(titolo: string, autore: string, public kb:number, prezzo?:number)
    {
        super(titolo,autore);
        //TEMPORANEO
        super.prezzo = prezzo;
    }

    override getInfo():string
    {
        return super.getInfo() + ` - ${this.kb}kb. `
    }
}