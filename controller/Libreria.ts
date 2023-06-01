import { Libro } from "../model/Libro";

export class Libreria
{
    private dati : Libro[] = [];

    Add(libro : Libro) { this.dati.push(libro); }

    get Elenco(): Libro[]{ return this.dati }

    Cerca(termine:string) : Libro[] {
        //return this.dati.filter( l=> l.includes(termine));
        return this.dati.filter( l => l.titolo.includes(termine) || l.autore.includes(termine) )
    }
}