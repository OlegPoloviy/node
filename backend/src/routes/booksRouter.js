import {Router} from "express";
import {Books} from "../db/models/Books.js";

export const booksRouter = Router();

booksRouter.get('/books', (req,res) => {
    Books.getAllBooks()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        })
});

booksRouter.delete('/books', (req,res) => {
    Books.deleteAllBooks()
        .then(data => {
            res.send("deleted all books")
        })
        .catch(err =>{
            console.error(err);
            res.sendStatus(500)
        })
});

booksRouter.post("/books",(req,res) => {
    const data = req.body;

    Books.addBook(data)
        .then(data => {
            res.send(`added book :${JSON.stringify(data)}`)
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500)
        })
});

//work on single book
booksRouter.get("/books/:id",(req,res) => {
    const id = req.params.id;

    Books.getBook(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        })
})

booksRouter.delete("/books/:id",(req,res) => {
    const id = req.params.id;

    Books.deleteBook(id)
        .then(data => {
            res.send(`deleted book with id:${data}`)
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        })
})

booksRouter.patch("/books/:id",(req,res) => {
    const id = req.params.id;
    const data = req.body;

    Books.updateBook(data,id)
        .then(data => {
            res.send(`updated book:${JSON.stringify(data)}`)
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        })
})
