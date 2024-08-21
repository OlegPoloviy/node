import {colorDTO} from "../dto/colorDTO";

export class Color{
    static async getAllColors(){
        return await colorDTO.findAll({
            attributes:["id","title"]
        });
    }
}