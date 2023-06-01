import { Libreria } from "../controller/Libreria";
import * as rl from 'readline-sync'
import { Libro } from "../model/Libro";
import { LibroCartaceo } from "../model/LibroCartaceo";

export class UserInterface {
    private controller: Libreria;

    constructor() {
        this.controller = new Libreria();
    }

    start() {
        while (true) {
            console.log('1 - Inserimento libro')
            console.log('2 - Elenco libri')
            console.log('3 - Cerca libro')
            console.log('')
            console.log('9 - Esci')

            let scelta = rl.questionInt('Inserire la scelta');

            if (scelta == 1) {
                let titolo = rl.question('Titolo:');
                let autore = rl.question('Autore:');
                let pagine = rl.questionInt('Pagine:')
            /**/this.controller.Add(new LibroCartaceo(titolo, autore, pagine));
            }

            if (scelta == 2) {
                this.StampaInfo(this.controller.Elenco);
            }

            if( scelta == 3 )
            {
                let termine = rl.question('Termine da cercare:');
                this.StampaInfo(this.controller.Cerca(termine));
            }

            if( scelta == 9) break;
        }
    }

    private StampaInfo(elementi : Libro[]) : void
    {
        elementi.forEach(
            l => console.log(l.getInfo())
        );
    }
}