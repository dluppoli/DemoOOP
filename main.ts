import { Libro } from "./model/Libro";
import { LibroCartaceo } from "./model/LibroCartaceo";
import { LibroDigitale } from "./model/LibroDigitale";

//GESTIONALE PER BIBLIOTECHE
let libreria : Libro[] = [];

libreria.push( new LibroCartaceo('I promessi sposi','Alessando Manzoni',400) );
libreria.push( new LibroDigitale('La divina commedia','Dante Alighieri',500) );

libreria.forEach(l => console.log(l.getInfo()));

