import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class DsService {
    public data: string = "Hello world!";

    constructor() {}
}
