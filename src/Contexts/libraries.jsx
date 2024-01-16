"use client"
import { createContext, useState } from "react";

const LibraryContexts = createContext({});

export const LibrariesProvider = ({children}) => {
    const [libraries, setLibraries] = useState({});
    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const [bookBorrowRequest, setBookBorrowRequest] = useState([]);

    const handleSetLibraries = (libraries) =>{
        
        setLibraries(libraries);
        libraries.forEach(library => {
            const libraryBookBorrowRequest = [];
            const libraryBorrowedBooks = [];
            
            library.books.forEach(book=>{
                console.log(library.name, "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                if(book.isBorrowed){
                    libraryBorrowedBooks.push({...book, library:library.name, libraryID: library._id})
                }
                if(book.borrowRequest.length>0){
                    libraryBookBorrowRequest.push({...book, library:library.name, libraryID: library._id})
                }
            })
            setBookBorrowRequest([...libraryBookBorrowRequest])
            setBorrowedBooks([ ...libraryBorrowedBooks])
        });
    }
    return (
        <LibraryContexts.Provider value={({libraries, handleSetLibraries, borrowedBooks, bookBorrowRequest})}>
            {children}
        </LibraryContexts.Provider>
    )
}

export default LibraryContexts