class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages + "pg";
    this.read = read;
  }
}

class Library {
  constructor(newLibrary) {
    this.books = newLibrary; //is an array
  }

  addToLibrary(newBook) {
    if (!this.books.includes(newBook)) {
      this.books.push(newBook);
    }
  }

  listAllBooks() {
    // titles forEach console.log(Book.title)
    //forEach only works with an array so you must call an array
    // this.books = newLibrary
    this.books.forEach((book) => {
      console.log(book.title);
    });
  }

  removeFromLibrary(title) {
    this.books.forEach((book) => {
      if (book.title === title) {
        this.books.splice(this.books.indexOf(book), 1);
      }
    });
  }

  getAllBooks() {
    return this.books; //this returns the entire array of books
  }

  toggleRead(title) {
    this.books.forEach((book) => {
      if (book.title === title) {
        book.read = !book.read;
      }
    });
  }
}

function formReset() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("read").checked = false;
}

const library = new Library([]);

function addToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let book = new Book(title, author, pages, read);

  library.addToLibrary(book);
  library.listAllBooks();

  formReset();
}

const addBtn = document.getElementById("newBtn");
addBtn.addEventListener("click", function () {
  newBtn.style.display = "none";
  const form = document.getElementById("popUp");
  form.style.display = "block";
});

const update = document.getElementById("updateBtn");
update.addEventListener("click", function () {
  newBtn.style.display = "block";
  const form = document.getElementById("popUp");
  form.style.display = "none";

  addToLibrary();
  displayBooks();
  formReset();
});

function displayBooks() {
  const addedBooks = library.getAllBooks();
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  for (let i = 0; i < addedBooks.length; i++) {
    const book = addedBooks[i];

    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = "Author: " + book.author;

    const pages = document.createElement("p");
    pages.textContent = "Pages: " + book.pages;

    let readStatus = document.createElement("p");
    readStatus.id = "readOrNot";
    readStatus.textContent = "Read: " + (book.read ? "Yes" : "No");

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      library.removeFromLibrary(book.title);
      displayBooks();
    });

    //  const toggleReadBtn = document.createElement("button");
    //  // toggleReadBtn.className = "toggler";
    //  toggleReadBtn.textContent = "Toggle Read";
    //  toggleReadBtn.addEventListener("click", () => {
    //    library.toggleRead(book.title)
    //    if (readStatus.textContent === "yes"){
    //      readStatus.textContent === "no"
    //    }
    //      else (readStatus.textContent === "no"){
    //        readStatus.textContent === "yes"
    //      });

    let toggleReadBtn = document.createElement("button");
    toggleReadBtn.textContent = "Toggle Read";
    toggleReadBtn.addEventListener("click", () => {
      library.toggleRead(book.title);
      console.log("clicked");
      if (readStatus.innerHTML === "Yes") {
        readStatus.textContent = "No";
      } else if (readStatus.textContent === "No") {
        readStatus.textContent = "Yes";
      }
      displayBooks();
    });

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(readStatus);
    bookCard.appendChild(removeBtn);
    bookCard.appendChild(toggleReadBtn);
    bookList.appendChild(bookCard);
  }
}
