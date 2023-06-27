
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages + 'pg';
  this.read = read;
}

function addToLibrary(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);

    formReset();
}

const addBtn = document.getElementById('newBtn');
    addBtn.addEventListener('click', function(){
        newBtn.style.display = 'none';
        const form = document.getElementById('popUp');
        form.style.display = 'block';
    });

    


const update = document.getElementById('updateBtn');
    update.addEventListener('click', function(){
        newBtn.style.display = 'block';
        const form = document.getElementById('popUp');
        form.style.display = 'none';

        addToLibrary();
        displayBooks();
        formReset();
   });

function displayBooks(){
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    for(let i = 0; i < myLibrary.length; i++){
        const book = myLibrary[i];

        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        const title = document.createElement('h3');
        title.textContent = book.title;

        const author = document.createElement('p');
        author.textContent = 'Author: ' + book.author;

        const pages = document.createElement('p');
        pages.textContent = 'Pages: ' + book.pages;

        const readStatus = document.createElement('p');
        readStatus.textContent = 'Read: ' + (book.read ? 'Yes' : 'No');

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => removeBook(i));

        const toggleReadBtn = document.createElement('button');
        toggleReadBtn.textContent = 'Toggle Read';
        toggleReadBtn.addEventListener('click', () => toggleReadStatus(i));

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(readStatus);
        bookCard.appendChild(removeBtn);
        bookCard.appendChild(toggleReadBtn);

        bookList.appendChild(bookCard);
    }
}


   function formReset(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#pages').value = '';   
        document.querySelector('#read').checked = false;
   }

   

// function addBookToLibrary() {
//   const title = document.querySelector('#title').value;
//   const author = document.querySelector('#author').value;
//   const pages = document.querySelector('#pages').value;
//   const read = document.querySelector('#read').checked;
// 
//   const book = new Book(title, author, pages, read);
//   myLibrary.push(book);
// 
//   clearForm();
//   displayBooks();
// }
// 
// function clearForm() {
//   document.querySelector('#title').value = '';
//   document.querySelector('#author').value = '';
//   document.querySelector('#pages').value = '';
//   document.querySelector('#read').checked = false;
// }
// 
// function displayBooks() {
//   const bookList = document.getElementById('book-list');
//   bookList.innerHTML = '';
// 
//   for (let i = 0; i < myLibrary.length; i++) {
//     const book = myLibrary[i];
// 
//     const bookCard = document.createElement('div');
//     bookCard.classList.add('book-card');
// 
//     const title = document.createElement('h3');
//     title.textContent = book.title;
// 
//     const author = document.createElement('p');
//     author.textContent = 'Author: ' + book.author;
// 
//     const pages = document.createElement('p');
//     pages.textContent = 'Pages: ' + book.pages;
// 
//     const readStatus = document.createElement('p');
//     readStatus.textContent = 'Read: ' + (book.read ? 'Yes' : 'No');
// 
//     const removeBtn = document.createElement('button');
//     removeBtn.textContent = 'Remove';
//     removeBtn.addEventListener('click', () => removeBook(i));
// 
//     const toggleReadBtn = document.createElement('button');
//     toggleReadBtn.textContent = 'Toggle Read';
//     toggleReadBtn.addEventListener('click', () => toggleReadStatus(i));
// 
//     bookCard.appendChild(title);
//     bookCard.appendChild(author);
//     bookCard.appendChild(pages);
//     bookCard.appendChild(readStatus);
//     bookCard.appendChild(removeBtn);
//     bookCard.appendChild(toggleReadBtn);
// 
//     bookList.appendChild(bookCard);
//   }
// }
// 
// document.getElementById('newBtn').addEventListener('click', function () {
//   const form = document.getElementById('popUp');
//   form.style.display = 'block';
// });
// 
// document.querySelector('form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   addBookToLibrary();
//   const form = document.getElementById('popUp');
//   form.style.display = 'none';
// });
// 
// function removeBook(index) {
//   myLibrary.splice(index, 1);
//   displayBooks();
// }
// 
// function toggleReadStatus(index) {
//   myLibrary[index].read = !myLibrary[index].read;
//   displayBooks();
// }
//