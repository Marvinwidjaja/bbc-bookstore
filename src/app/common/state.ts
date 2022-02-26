import {Big} from "big.js"
export class State {
    id: number;
    name: string;
    code: string;
    fips_code: string;
    iso2: string;
    type: string;
    latitude: Big;
    longitude: Big;
    created_at: Date;
    updated_at: Date;
    flag: number;
    wiki: string;
}
