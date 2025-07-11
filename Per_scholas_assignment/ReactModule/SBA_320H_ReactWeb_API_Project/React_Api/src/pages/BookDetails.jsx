import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();

  return (
    <div className="book-details">
      <h2>Book Details</h2>
      <p>Showing details for Book ID: {id}</p>
      
    </div>
  );
};

export default BookDetails;