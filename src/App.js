import React, { useState } from "react";
import axios from "axios";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'

function App() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);

  const handleSubmit = (e)=> {
    e.preventDefault();
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBTqzA7y7GNB80yEBwq6wIDdvneutZus00')
    .then(res=>setData(res.data.items))
    .catch(err=>console.log(err))
  }

  const onChange = (e)=> {
   setSearch(e.target.value)
  }

  return (
    <div className="App">
      <Header handleSubmit={handleSubmit} onChange={onChange} search={search}/>
      <div className='main-books'>
				{bookData.map((book, index) => (
						<Main
            key={index}
            imageLinks={book.volumeInfo.imageLinks?.thumbnail}
            title={book.volumeInfo?.title}
            authors={book.volumeInfo?.authors}
            description={book.volumeInfo?.description}
            pageCount={book.volumeInfo?.pageCount}
            link= {book.volumeInfo?.previewLink}
						/>
					))}
			</div>
      <Footer />
    </div>
  );
}

export default App;
