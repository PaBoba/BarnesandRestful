import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME, REMOVE_BOOK } from '../api/queries'; 

function SavedBooks() {
  const { loading, data } = useQuery(GET_ME);
  const [removeBook] = useMutation(REMOVE_BOOK);

  const handleDeleteBook = async (bookId) => {
    try {
      const { data: removedBookData } = await removeBook({
        variables: { bookId: bookId },
        refetchQueries: [{ query: GET_ME }], // Refetch GET_ME query to update data after book removal
      });
      // Handle success, e.g., show a message
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.me.savedBooks.map((book) => (
            <li key={book.bookId}>
              <div>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <button onClick={() => handleDeleteBook(book.bookId)}>Delete Book</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedBooks;
