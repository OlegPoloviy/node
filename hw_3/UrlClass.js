import url from "node:url";
import { URL } from "node:url";

export class UrlClass{
    url;

    constructor(url){
        this.url = url;
    }

    //method returns object with params of url
    parseUrl(){
        const parsed = url.parse(this.url);
        return parsed;
    }

    //returns value after #
    getHash(){
        const url = new URL(this.url);
        return url.hash;
    }

    //returns host of url
    getHost(){
        const host = new URL(this.url);
        return host.host;
    }

    //getting the password from url
    getPassword(){
        const password = new URL(this.url);
        return password.password;
    }

    //returns the port of url
    getPort(){
        const port = new URL(this.url);
        return port.port;
    }
}