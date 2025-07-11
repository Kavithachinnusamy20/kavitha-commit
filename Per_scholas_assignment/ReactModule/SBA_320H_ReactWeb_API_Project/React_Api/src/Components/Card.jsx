import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState(null);
  
  return (
    <>
    {book.map((item, index) => {
      const thumbnail =  item.volumeInfo.imageLinks?.thumbnail;
      const amount = item.saleInfo.listPrice?.amount;
      
      if (thumbnail && amount) {
        return (
          <div
                  key={index}
                  className="card"
                  onClick={() => {
                    setShow(!show);
                    setItem(item);
                  }}
          >
               <img src={thumbnail} alt="" />
                <div className="bottom">
                    <h3 className="title">{item.volumeInfo.title}</h3>
                    <p className="amount">&#8377;{amount}</p>
                </div>
          </div>
        );
      }
      return null;
    })}
    <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
    </>
  );
};

export default Card;