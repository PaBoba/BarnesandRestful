import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME, SAVE_BOOK } from '../api/queries'; // Import GET_ME and SAVE_BOOK queries

function SearchBooks() {
  const { loading, data } = useQuery(GET_ME);
  const [saveBook] = useMutation(SAVE_BOOK);

  const handleSaveBook = async (bookData) => {
    try {
      const { data: savedBookData } = await saveBook({
        variables: { input: bookData },
        refetchQueries: [{ query: GET_ME }], // Refetch GET_ME query to update data after book saving
      });
      // Handle success, e.g., show a message
    } catch (error) {
      console.error(error);
    }
  };

  // Render search results and handle saving books

  return (
    <div>
      {/* Render search results */}
      {/* Example: */}
      {/* <ul>
            {searchResults.map((book) => (
              <li key={book.bookId}>
                <div>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                  <button onClick={() => handleSaveBook(book)}>Save Book</button>
                </div>
              </li>
            ))}
          </ul> */}
    </div>
  );
}

export default SearchBooks;
