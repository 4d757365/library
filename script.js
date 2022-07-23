const $title = document.querySelector("#title");
const $author = document.querySelector("#author");
const $pages = document.querySelector("#pages");
const $read = document.querySelector("#read");
const $form = document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    addBookToLibrary();
    clear();
});

let myLibrary = [
    {
        title: "Game of Thrones",
        author: "George R. R. Martin",
        pages: 694,
        read: false
    },

    {
        title: "Dune",
        author: "Frank Herbert",
        pages: 412,
        read: false
    }
];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary() {
    if($title.value.length === 0 || $author.value.length === 0 || $pages.value.length === 0) {
        alert("Please fill all required fields");
        return;
    }
    else {
        const newBook = new Book($title.value, $author.value, $pages.value, $read.value);
        myLibrary.push(newBook);
    }

    
}

function clear() {
    $title.value = '';
    $author.value = '';
    $pages.value = '';
    $read.selectedIndex = 0;
}

