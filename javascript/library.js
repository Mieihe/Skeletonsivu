let myLibrary = [];

// Book's object constructor
function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return title+" by "+author+", "+pages+", "+read; 
  }
}


//Add books to page, with remove and edit buttons
let gameOfThrones = new book("A Game of Thrones", "By George R. R. Martin", "694", "Not read");
let theHobbit = new book("The Hobbit, or There and Back Again", "J.R.R. Tolkien", "295", "Not read");
let harryPotter = new book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", "223", "Read");
myLibrary.push(gameOfThrones, theHobbit, harryPotter);

let main = document.querySelector("#main");

let bookDivToAdd;
function addToBookShelf() {
  bookDivToAdd = document.createElement("div");
  bookDivToAdd.setAttribute('data-id', i);
  bookDivToAdd.classList.add("btnHolder");
  bookDivToAdd.innerHTML = '<svg class="closeBtn" type="button" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 16 16"><path d="M8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM12.2 10.8l-1.4 1.4-2.8-2.8-2.8 2.8-1.4-1.4 2.8-2.8-2.8-2.8 1.4-1.4 2.8 2.8 2.8-2.8 1.4 1.4-2.8 2.8 2.8 2.8z"></path></svg><div class="card"><h4>'+myLibrary[i].title+'</h4><p><i>By '+myLibrary[i].author+'</i></p><p>'+myLibrary[i].pages+' pages</p><p class="'+myLibrary[i].read+'"><b>'+myLibrary[i].read+'</b><button class="markBtn">Mark as read</button></p></div>';
  if (myLibrary[i].read == "Read") {
    bookDivToAdd.querySelector(".markBtn").textContent = "Mark as unread";
  }
  main.insertBefore(bookDivToAdd, main.firstChild);

  document.querySelector(".closeBtn").addEventListener("click", (e) => {
    e.currentTarget.parentNode.remove();
    delete myLibrary[e.currentTarget.parentNode.dataset.id];
  })

  document.querySelector(".markBtn").addEventListener("click", (e) => {
    if (e.target.textContent == "Mark as unread") {
      e.target.textContent = "Mark as read";
      e.target.parentNode.classList.toggle("Read");
      e.target.parentNode.classList.toggle("Not");
      e.target.parentNode.classList.toggle("read");
      myLibrary[e.target.parentNode.parentNode.parentNode.dataset.id].read = "Not read";
      e.target.previousSibling.textContent = "Not read";

    } else {
      e.target.textContent = "Mark as unread";
      e.target.parentNode.classList.toggle("Read");
      e.target.parentNode.classList.toggle("Not");
      e.target.parentNode.classList.toggle("read");
      myLibrary[e.target.parentNode.parentNode.parentNode.dataset.id].read = "Read";
      e.target.previousSibling.textContent = "Read";
    }

  })
}

for (i=0; i<myLibrary.length; i++) {
  addToBookShelf();
}



// Gets values from forms, adds book to array
function addBookToLibrary() {
  let newTitle = document.getElementById("title").value;
  let newAuthor = document.getElementById("author").value;
  let newPages = document.getElementById("pages").value;
  let newRead = document.querySelector('input[name=read]:checked').value ? "Read" : "Not read";
  let newBook = new book(newTitle, newAuthor, newPages, newRead);
  myLibrary.push(newBook);
}

document.getElementById("addBook").addEventListener("click", (e) => {
  addBookToLibrary();
  addToBookShelf();
  i++;
  document.getElementById("libraryForm").reset();
});



// "Add book" accordion
let accordion = document.getElementsByClassName("accordion");

for (j=0; j<accordion.length; j++) {
  accordion[j].addEventListener("click", function() {
    this.classList.toggle("active");
    document.querySelector(".plusIcon").classList.toggle("rotate");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}



//localStorage setup


// function populateStorage() {
//   localStorage.setItem('library', myLibrary);

//   setBooks();
// }


















