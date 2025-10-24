import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDb } from '../../utility/addToDb';

const BookDetails = () => {

    const { id } = useParams();
    const bookID = parseInt(id)
    const data = useLoaderData();
    console.log(data)
    const singleBook = data.find(book => book.bookId === bookID)
    const { bookName, image } = singleBook


    const handleMarkAsRead = id => {
        //store with Id 
        //Where to store
        //array or collection
        //if book already exist then show a alert
        //if book not exist then push in the collection of array
        addToStoreDb(id);
    }

    return (
        <div className='p-5 w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>
            <button onClick={()=>handleMarkAsRead(id)} className="btn btn-accent m-2">Mark as Read</button>
            <button className="btn btn-accent m-2">Add to Wishlist</button>
            

        </div>
    );
};

export default BookDetails;