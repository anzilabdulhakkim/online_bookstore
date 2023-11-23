function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}
  
Book.prototype.getBookInfo = function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: ₹${this.price}/-`);
    console.log('-------------------------');
};
  
const author1 = new Author('J.K. Rowling', 1965, 'British');
const author2 = new Author('Paulo Coelho', 1947, 'Brazil');
  
const book1 = new Book('Harry Potter', author1, 'Fantasy', 400);
const book2 = new Book('The Alchemist', author2, 'novel', 500);
  
book1.getBookInfo();
book2.getBookInfo();
  