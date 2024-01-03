require("dotenv").config();
const express = require('express');
const app = express();

//parse income request
app.use(express.json());

//sample data
let books = [
    {
    id: 1,
    titile: 'Book 1 ',
    author: 'Author 1'
    },

    {
        id: 2,
        titile: 'Book 2 ',
        author: 'Author 2'
    },

    {
        id: 3,
        titile: 'Book 3 ',
        author: 'Author 3'
    }

];

//route to get all books
app.get('/books',(req,res) => {
    res.json(books);
});

//get book by id
app.get('/books/:id',(req,res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if(!book) res.status(404).send('Book not found');
    res.json(book);
});

//create new book
app.post('/books',(req,res) => {
    const book = {
        id: books.length +1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(book);
    res.send(book);
});


//update
app.put('/books/:id',(req,res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if(!book) res.status(404).send('Book not found');
    book.titile = req.body.titile;
    book.author = req.body.author;
    res.json(book);
});

//delete
app.delete('/books/:id',(req,res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if(!book) res.status(404).send('Book not found');
    const index = books.indexof(book);
    books.splice(index, 1);
    res.json(book);
});

const port = process.env.PORT || 5000;
app.listen(port,() => console.log('Listening on port${port}......'));