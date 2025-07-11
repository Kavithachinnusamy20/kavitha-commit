import React, { useState } from 'react';
import Card from '../Components/Card';
import axios from 'axios';

import '../style.css';

const SearchBook = () => {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([]);

  const searchBook = (event) => {
    if (event.key === 'Enter') {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAj2J21t8UCDF4ls9TGQcSB_p3ILkVAtao&maxResults=40`
        )
        .then((res) => {
          setData(res.data.items || []);
          console.log(res.data);
        })
        .catch((err) => console.error('API Error:', err));
    }
  };

  return (
    <div className="app">
      <h1>Search your favorite books</h1>
      <input
        type="text"
        placeholder="Search books"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={searchBook} // updated from onKeyPress (deprecated)
      />
      
        <div class="container1">
            <Card book={bookData} />
        </div>
      </div>
  );
};

export default SearchBook;