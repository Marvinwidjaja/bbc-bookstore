import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";
import {Big} from "big.js"
export class Country {
    id: number;
    name: string;
    iso3: string;
    numeric_code: string;
    iso2: string;
    phoneCode: string;
    capital: string;
    currency: string;
    currency_symbol:string;
    tld: string;
    _native: string;
    region: string;
    subregion: string;
    timezones: string;
    translations: string;
    latitude: Big;
    longitude: Big;
    emoji: string;
    emojiU: string;
    created_at: Date;
    updated_at: Date;
    flag: number;
    wiki: string;



}
