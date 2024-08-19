import {dbConfig} from "../dbConfig";

class CarsModel{
    async getAllCars(){
        const cars = await dbConfig.query(
            "SELECT * FROM cars;"
        );
        return cars.rows;
    }

    async getSelected(data){
        const id = data;

        const car = await dbConfig.query(
            "SELECT * FROM cars WHERE id=$1",
            [id]
        )
        return car.rows;
    }
}

export default new CarsModel();