import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState} from "react";
import { Link, useParams } from "react-router-dom";
import Book from "../components/ui/Book"
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";

const BookInfo = ({ books, addToCart }) => {
  const { id } = useParams();
  const book = books.find(book => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistsOnCart() {
    return Cart.find(book => book.id === +id )
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <Link to="/books" className="book__link">
              <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="books__selected--title">Books</h2>
              </Link>
            </div>
            <div className="books__selected">
              <figure className="books__selected--figure">
                <img 
                src={book.url} 
                alt=""
                 className="book__selected--img" 
                 />
                </figure>
                <div className="books__selected--description">
                  <h2 className="books__selected--title">
                    {book.title}
                    </h2>
                  <Rating rating={book.rating} />
                  <div className="books__selected--price">
                   <Price originalPrice={book.originalPrice} salePrice={book.salePrice} /> 
                </div>
                <div className="books__summary"></div>
                <h3 className="books__summary--title">Summary</h3>
                <p className="books__summary--para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="books__summary--para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
          </div>
          {bookExistsOnCart() ? (
          <button className="btn">Checkout</button> 
          ) : (
          <button className="btn" onClick={() => addBookToCart(book)}>
            Add to Cart
          </button>
          )}
        </div>
       </div>
       </div>
       <div className="books__container">
        <div className="row">
          <div className="book__selected--top">
            <h2 className="book__selected--title--top">
              Recommended Books
            </h2>
          </div>
          <div className="books">
            {books
            .filter((book) => book.rating === 5 && +book.id !== +id)
            .slice(0, 4)
            .map((book) => (
            <Book book={book} key={book.id} />
            ))}
          </div>
        </div>
       </div>
       </main>
       </div>
  );
};

export default BookInfo;