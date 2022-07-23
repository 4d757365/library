const $title = document.querySelector("#title");
const $author = document.querySelector("#author");
const $pages = document.querySelector("#pages");
const $read = document.querySelector("#read");
const $library = document.querySelector("#library");

const $form = document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    addBookToLibrary();
    updateDisplay();
    clear();
});

const $table = document.querySelector("table").addEventListener("click", (e) => {
    const currentTarget = e.target.parentNode.parentNode.childNodes[1];
    if (e.target.innerHTML == "delete") {
        deleteBook(find(myLibrary, currentTarget.innerText));
    }
    if (e.target.classList.contains("status")) {
      change(find(myLibrary, currentTarget.innerText));
    }
    updateDisplay();
  });

let myLibrary = [
    {
        title: "Game of Thrones",
        author: "George R. R. Martin",
        pages: 694,
        read: 'read'
    },

    {
        title: "Dune",
        author: "Frank Herbert",
        pages: 412,
        read: 'not read'
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

function updateDisplay() {
    $library.innerHTML = "";
    myLibrary.forEach((book) => {
      const b = `
        <tr>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.pages}</td>
          <td><button class="status">${book.read}</button></td>
          <td><button class="delete">delete</button></td>
        </tr>
        `;
      $library.insertAdjacentHTML("afterbegin", b);
    });
}

function find(library, title) {
    if(library.length === 0 || library === null) 
    {
        return;
    }
    else 
    {
        for (book of library)
        {
            if(book.title === title)
            {
                return library.indexOf(book);
            }
        }
    }
}

function deleteBook(book) {
    myLibrary.splice(book, book + 1);
}

function change(Book) {
    if(myLibrary[Book].read === "read") 
    {
        myLibrary[Book].read = "not read";
    }
    else 
    {
        myLibrary[Book].read = "read";
    }
}


