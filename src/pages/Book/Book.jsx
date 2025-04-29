import React from 'react';

const Book = ({ singleBook }) => {
  // const data = use(bookPromise);
  // console.log(data);

  const { bookName, author, image, review } = singleBook;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="p-3">
        <img className="h-[166px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <h1>{author}</h1>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
