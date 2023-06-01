import { IGetInfo } from "./IGetInfo";

export class Dvd implements IGetInfo
{
    constructor(public titolo:string, public regista:string){}

    getInfo(): string {
        return `${this.titolo} ${this.regista}`;
    }
}