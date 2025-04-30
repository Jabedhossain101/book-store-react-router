import React from 'react';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router';
const Book = ({ singleBook }) => {
  // const data = use(bookPromise);
  // console.log(data);

  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,

    yearOfPublishing,
    publisher,
  } = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-full md:w-96 shadow-sm border p-6">
        <figure className="p-3 bg-gray-100 w-full md:w-2/3 mx-auto">
          <img
            className="h-[166px] object-contain w-full"
            src={image}
            alt={bookName}
          />
        </figure>

        <div className="card-body">
          {/* <div className="flex justify-center gap-10">
            {tags.map(tag => (
              <button>{tag}</button>
            ))}
          </div> */}
          <h2 className="card-title">
            {bookName}({yearOfPublishing})
          </h2>
          <h2>Book by:{publisher}</h2>
          <h1>{author}</h1>
          <p>
            A historical fiction book blends real historical events and settings
            with imaginative storytelling to bring the past to life through
            fictional characters.
          </p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-end">
            <button className="bg-black text-white rounded-2xl p-1">
              {category}
            </button>
            <div className="flex items-center">
              <p>{rating}</p>
              <FaStarHalfAlt className="ml-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
