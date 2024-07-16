import { UrlClass } from "./UrlClass.js";
import { PathClass } from "./PathClass.js";

//working with url
const url = new UrlClass("https://username:password@nodejs.org:8080/docs/v20.15.0/api/path.html#section");

console.log(url.parseUrl());
console.log(url.getHash());
console.log(url.getHost());
console.log(url.getPassword());
console.log(url.getPort());
//working with path
const file = new PathClass("D:\\IT Step\\Node\\hw_1\\index.js");

console.log(file.getBasename());
console.log(file.getDirname());
console.log(file.getExtname());
console.log(file.checkAbsolute());
console.log(file.joinPath("D:\\IT Step\\Node\\ls_3_4\\package-lock.json"))