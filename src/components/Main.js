import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai"

function Main({imageLinks, title, authors, description, pageCount, link }) {
  const [showModal, setShowModal] = useState(false);


  return (
    <>
    <div className="main">
      <div className="main-img">
        <img src={imageLinks} alt={title} />
      </div>

      <div className="small-info">
        <div className="title">{title}</div>
        <div className="author">{authors}</div>
        <button type="button" className="detail-btn" onClick={() => setShowModal(true)}>Details</button>
      </div>

    </div>
    
    {showModal && (
         <div className="overlay">
         <div className="overlay-inner">
             <button className="close" onClick={()=> setShowModal(false)}>
              <AiOutlineCloseCircle />
             </button>
             <div className="inner-box">
                 <img src={imageLinks} alt={title} />
                 <div className="info">
                     <h1>{title}</h1>
                     <h3>{authors}</h3>
                     <h4>{pageCount} pages</h4>
                     
                     <a href={link}><button>More</button></a>
                 </div>
             </div>
             <h4 className="description">{description}</h4>
         </div>
     </div>
      )}
    </>
  )
}

export default Main