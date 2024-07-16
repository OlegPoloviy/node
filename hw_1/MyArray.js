class MyArray{
    #_arr = [];

    constructor(arr){
        this.#_arr = arr;
    }

    getArr(){
        return this.#_arr;
    }

    setArr(arr){
        this.#_arr = arr;
    }

    printArr(){
        console.log(this.#_arr);
    }

    findMin(){
        return Math.min(...this.#_arr);
    }

    findMax(){
        return Math.max(...this.#_arr);
    }


    findSum(){
        let sum = 0;

        for(let i = 0; i <= this.#_arr.length - 1; i++){
            sum += this.#_arr[i];
        }

        return sum;
    }

    sortArr(){
        for(let i = 0; i <= this.#_arr.length; i++){
            for(let j = 0; j <= this.#_arr.length; j++){
                if(this.#_arr[j] > this.#_arr[j + 1]){
                    let t = this.#_arr[j];
                    this.#_arr[j] = this.#_arr[j + 1];
                    this.#_arr[j + 1] = t;
                }
            }
        }
        return this.#_arr;
    }
}

module.exports = MyArray