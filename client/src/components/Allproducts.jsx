import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
import '../styles/Allproducts.css'
function Allproducts() {
    const article = useSelector((store)=>store)
  if (!article) {
    return <div>Loading...</div>;
  }
  return (
    <div className='car-container'  >
      {article.map((art)=>
      <div className='card'>
        <Link  to= {`/store/${art.id}`} >
          <div className='colorOne ' style={{backgroundColor:art.colorOne}}></div>
          <div className='colorTwo ' style={{backgroundColor:art.colorTwo}}></div>
          <div className='colorThree ' style={{backgroundColor:art.colorThree}}></div>
          <figure>
            <img src={art.image} alt="" />
            <h1 className='prod prodname'>{art.name}</h1>
          </figure>
        </Link>
      </div>
      )}
    </div>
  )
}

export default Allproducts