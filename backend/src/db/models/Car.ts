import {carDTO} from "../dto/carDTO";

export class Car{
    static async getAllCars(){
        return await carDTO.findAll({
            attributes:["id","model","year","number","color","type","isnew","vengine"]
        })
    };

    static async deleteCar(id){
        return await carDTO.destroy({
            where:{id:id}
        })
    }
}