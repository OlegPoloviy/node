import path from "node:path";

export class PathClass{
    file;

    constructor(path){
        this.file = path;
    }

    //method gets the base name of a file
    getBasename(){
        return path.win32.basename(this.file);
    }

    //returns the name of directory
    getDirname(){
        return path.dirname(this.file);
    }

    //geths the extension of file
    getExtname(){
        return path.extname(this.file);
    }

    //checking if path is absolute
    checkAbsolute(){
        return path.isAbsolute(this.file);
    }

    //joins two path
    joinPath(path2){
        return path.join(this.file + path2);
    }
}