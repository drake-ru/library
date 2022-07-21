
    let myLibrary = [];

    function Book(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    
    // add a function that can take user’s input and store the new book objects into an array.
    
    function addToLibrary(book) {
        myLibrary.push(book);
        displayBooks(myLibrary);
    }
    
    const list = document.querySelector('ul');

    /* Write a function that loops through the array and displays each book on the page.  */
    //I HAVENT DONE A LOOP HERE, I'VE JUST ADDED ELEMENTS IN HTML INSTEAD, SO THEY DONT APPEAR EVERYTIME
    
    function displayBooks(library) {
        let listItem = document.createElement('li');
        list.appendChild(listItem);
        listItem.textContent = library[library.length-1].title;
        listItem.dataset.index = library.length-1;

        //ADDING A REMOVE BUTTON
        let removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        listItem.appendChild(removeButton);
    }
    
     const newBookBtn = document.querySelector('.new-book-btn');
     const submitBtn = document.querySelector('.submit-btn');
     const formPopUp = document.getElementById('form-popup');
    
     //NEW BOOK BUTTON
     newBookBtn.addEventListener('click', () => {
        document.getElementById('form-popup').style.display = "block";
        }
     )
    //SUBMIT BUTTON
    submitBtn.addEventListener('click', () => {
    
        let bookTitle = document.getElementById('title').value;
        let bookAuthor = document.getElementById('author').value;
        let bookPages = document.getElementById('pages').value;
        let bookRead = document.getElementById('read').value;
    
        let bookDetails = new Book(bookTitle, bookAuthor, bookPages, bookRead);
        addToLibrary(bookDetails);
        addRemoveButton();
        formPopUp.style.display = "none";
        bookTitle = '';
        bookAuthor = '';
        bookPages = '';
        bookRead = '';
        
    })

    

    
    
    //push books as list items
    //add remove buttons to side of each

