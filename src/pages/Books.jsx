import React, { useState } from "react";
import Book from "../components/ui/Book";

const Books = ({ books: initialBooks }) => {
  const [books, setBooks] = useState(initialBooks);

  function filterBooks(filter) {
    if (filter === "Low_To_High") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (a.salePrice || a.originalPrice) -
              (b.salePrice || b.originalPrice)
          )
      );
    } else if (filter === "High_To_Low") {
      setBooks(
        books
          .slice()
          .sort(
            (a, b) =>
              (b.salePrice || b.originalPrice) -
              (a.salePrice || a.originalPrice)
          )
      );
    } else if (filter === "Rating") {
      setBooks(books.slice().sort((a, b) => b.rating - a.rating));
    } else if (filter === "DEFAULT") {
      setBooks(initialBooks);
    }
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title__books__header--title">
                  All Books
                  </h2>
                <select id="filter" defaultValue="DEFAULT" onChange={() => filterBooks(event.target.value)}> 
                  <option value="" disabled>
                    Sort
                  </option>
                  <option value="Low_To_High">Price, Low to High</option>
                  <option value="High_To_Low">Price, High to Low</option>
                  <option value="Rating">Rating</option>
                </select>
              </div>
              <div className="books">
                {books.map((book) => (
                  <Book book={book} key={book.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;