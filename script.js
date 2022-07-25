
    let myLibrary = [];

    function Book(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }

    
    // add a function that can take user’s input and store the new book objects into an array.
    
    function addToLibrary(book) {
        removeBooks();
        myLibrary.push(book);
        displayBooks(myLibrary);
    }
    //Function that clears all books from the list
    function removeBooks() {
        while (list.firstChild) {
            list.removeChild(list.firstChild);
            }
        }

    /* Write a function that loops through the array and displays each book on the page.  */
    const list = document.querySelector('ul');

    function displayBooks(library) {
        for (let i = 0; i < library.length; i++) {
            let listItem = document.createElement('li');
            list.appendChild(listItem);
            listItem.textContent = library[i].title;
                
            //adding REMOVE button
            let removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            listItem.appendChild(removeButton);

            removeButton.addEventListener('click', () => {
                myLibrary.splice(i, 1);
                removeBooks();
                displayBooks(library);
            })

            //adding READ button
            let readButton = document.createElement('button');
            readButton.textContent = "Unread";
            listItem.appendChild(readButton);

            if (library[i].read === "read") {
                readButton.className = "read";
                readButton.textContent = "Read";
            }

            readButton.addEventListener('click', () => {
                if (library[i].read === "unread") {
                    library[i].read = "read";
                    readButton.className = "read";
                    readButton.textContent = "Read";
                } else {
                    library[i].read = "unread";
                    readButton.classList.remove("read");
                    readButton.textContent = "Unread";
                }
            })
        }
    }
    
     const newBookBtn = document.querySelector('.new-book-btn');
     const submitBtn = document.querySelector('.submit-btn');
     const formPopUp = document.getElementById('form-popup');
    
     //NEW BOOK BUTTON
     newBookBtn.addEventListener('click', () => {
        if (formPopUp.style.display === "block") {
            formPopUp.style.display = "none";
        } else {
            formPopUp.style.display = "block";
        }
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
        formPopUp.style.display = "none";
        bookTitle = '';
        bookAuthor = '';
        bookPages = '';
        bookRead = '';
    })
