import {booksDTO} from "../dto/booksDTO.js";

export class Books{
    static async getAllBooks(){
        return await booksDTO.findAll({
            attributes:["id","title","author"]
        })
    };

    static async deleteAllBooks(){
        return await booksDTO.destroy({
            truncate:true,
        })
    }

    static async addBook(data) {
        const {title,author} = data;

        return await booksDTO.create(
            {
                title: title,
                author: author
            },
            {
                fields: ['title', 'author']
            }
        );
    }
    //single book
    static async getBook(id){
        return await booksDTO.findAll({where: {
            "id":id
            }})
    }

    static async deleteBook(id){
        return await booksDTO.destroy({where:{
            "id":id
            }})
    }

    static async updateBook(data,id){
        const {title,author} = data;

        return await booksDTO.update({
            title:title,
            author:author
        },{where:{"id":id}})
    }
}