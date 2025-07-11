import React from 'react';

const Modal = ({ show, item, onClose }) => {
  if (!show || !item) return null;

  const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;

  return (
    <div className="overlay">
      <div className="overlay-inner">
        <button className="close" onClick={onClose}>
          <i className="innerclose"> X</i>
        </button>
        <div className="inner-box">
          <img src={thumbnail} alt="" />
          <div className="info">
            <h1>{item.volumeInfo.title}</h1>
            <h3>{item.volumeInfo.authors?.join(', ')}</h3>
            <h4>
              {item.volumeInfo.publisher}
              <span>{item.volumeInfo.publishedDate}</span>
            </h4>
            <br />
            <a href={item.volumeInfo.previewLink} target="_blank" rel="noreferrer">
              <button>More</button>
            </a>
          </div>
        </div>
        {/* <h4 className="description">{item.volumeInfo.description}</h4> */}
      </div>
    </div>
  );
};

export default Modal;