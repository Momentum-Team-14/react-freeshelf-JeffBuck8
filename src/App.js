import { useState } from "react"
import { books } from "./books"
import './App.css'


export const App = () => {
    return(
        <>
            <h1>Program Language Books!</h1>
            <div className="book-list">
                {books.map((book, index) => (
                    <Book title={book.title} author={book.author} url={book.url} shortDescription={book.shortDescription} coverImageUrl={book.coverImageUrl} publisher={book.publisher} publicationDate={book.publicationDate} detailedDescription={book.detailedDescription} 
                    />
                ))}
            </div>
        </>
    )
}

const Book = ({ title, author, url, shortDescription, coverImageUrl, publisher, publicationDate, detailedDescription }) => {
    const [expanded, setExpanded] = useState(false)

    const handleClick = () => {
        setExpanded(!expanded)
    }

    return(
        <div style={{ border: '2px solid grey', margin: '10px', padding: '5px',}}>
            <div className="mainInfo">
                <div>
                    { title ? <p className='title'> {title} </p> : "" }
                    { author ? <p> {author} </p> : "" }
                    { shortDescription ? <p> {shortDescription} </p> : "" }
                </div>
                <div>
                    { coverImageUrl ? <p className='cover'> <img src={coverImageUrl} alt=""></img> </p> : "" }
                </div>
            </div>
            <button onClick={() => handleClick()} aria-expanded={ expanded }>
                {expanded ? 'Less' : 'More'} info
            </button>
            {expanded && url ? <p>URL: <a href={url}>{url}</a></p> : ''}
            {expanded && publisher ? <p>Publisher: {publisher}</p> : ''}
            {expanded && publicationDate ? <p>Publication Date: {publicationDate}</p> : ''}
            {expanded && detailedDescription ? <p>Full Description: {detailedDescription}</p> : ''}
        </div>
    )
}