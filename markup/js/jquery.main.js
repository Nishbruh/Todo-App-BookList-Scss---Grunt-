// Book Class: Represents a Book
class Book {
  
  constructor(title, author, isbn) {
    
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: Handle UI Tasks
class UI {
  
  static displayBooks() {
    
    const StoredBooks = [
      {
        title: 'Book One',
        author: 'Nishbruh',
        isbn: '1235'
      },
      {
        title: 'Book Two',
        author: 'NishCrazy',
        isbn: '1542'
      }
    ];

    const books = StoredBooks;
  }
}

// Store Class: Handles Storage

// Event: Display Books

// Event: Add a Book

// Event: Remove a Book