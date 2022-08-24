class Book {
    constructor(title, author, year) {
        this.title=title;
        this.author=author;
        this.year=year;
    }
}
document.addEventListener('DOMContentLoaded', savedBooks);
function savedBooks(){
    let saved = JSON.parse(localStorage.getItem('books'));
    if (!saved) return;
    newBooks.innerHTML =saved;
   

    

}
const clearBtn = document.querySelector("#clearList");
clearBtn.addEventListener('click',clearList)

function clearList (e) {
    e.preventDefault();
	localStorage.removeItem('books');
    newBooks.innerHTML = '';
}


const form  = document.querySelector("#app");
const titleEl = document.querySelector("#title");
const authorEl = document.querySelector("#author");
const yearEl = document.querySelector("#year");

const book = new Book(titleEl,authorEl,yearEl);

const newBooks =document.getElementById('newBooks')


form.addEventListener('submit', addBook);

function addBook(event) {
    event.preventDefault()

    let addedBooks = [];
    if(titleEl.value =='' || authorEl.value=='' || yearEl.value =='') {
        alert('please fill in all the fields')
    } else {
        addedBooks.push(Book);
        render();
    }
   
   
    titleEl.value =''
    authorEl.value=''
    yearEl.value=''
    localStorage.setItem('books', JSON.stringify(newBooks.innerHTML))
    
}

function render() {

    const newBookTitle= document.createElement('li');
    newBookTitle.textContent = titleEl.value;
    newBooks.append(newBookTitle)
    
    const newBookAuthor = document.createElement('span')
    newBookAuthor.textContent = authorEl.value;
    newBooks.append(newBookAuthor)

    const newBookYear = document.createElement('span')
    newBookYear.textContent = yearEl.value;
    newBooks.append(newBookYear)
   
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'X'
    removeBtn.classList.add('removebtn')
    newBooks.append(removeBtn)

    newBooks.classList.add('table')


    removeBtn.addEventListener("click", removeBook);

    function removeBook(event) {
    event.preventDefault();
    newBookTitle.remove();
    newBookAuthor.remove();
    newBookYear.remove();
    removeBtn.remove();
}

}
