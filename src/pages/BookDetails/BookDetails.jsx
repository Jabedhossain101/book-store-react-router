import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStore } from '../Utility/addTo';
import { ToastContainer, toast } from 'react-toastify';
const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find(book => book.bookId === bookId);

  const { bookName, image } = singleBook;

  const handleMarkAsRead = id => {
    //store with id
    //Where to store
    //array or like a collection
    //if book already exist the show a alert
    //if book not exist then push in the collection or array
    addToStore(id);
  };

  return (
    <div className=" w-2/3 mx-auto">
      <img className="w-48" src={image} alt="" />
      <h4>{bookName}</h4>
      <ToastContainer />
      <button
        onClick={() => handleMarkAsRead(id)}
        type="button"
        class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Mark as Read
      </button>
      <button
        type="button"
        class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Add to WashList
      </button>
    </div>
  );
};

export default BookDetails;
