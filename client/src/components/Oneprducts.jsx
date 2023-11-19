import React,{useState,useEffect} from 'react'
import '../styles/Oneprducts.css'
import Button from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDollar } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
function Oneprducts() {
  const {id} = useParams()
  const article = useSelector((store)=>store)
  let obj = article.find((elt)=> elt.id == id )
  const arr = []
  for (let i = 0; i < obj.colorCount; i++) {
    // Add onclick to change the photo 
    arr.push(<button  style={{backgroundColor:obj.color[i]}} className='color' ></button>)
  }

  const [isTablet, setTablet] = useState(false);

  useEffect(() => {
    const mediaMatch = window.matchMedia('(max-width: 1000px)');
    const handler = (e) => setTablet(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  }, []);

  const backgroundImage = isTablet ? obj.tbgimage : obj.bgimage;
  return (    
    <div class="cardt" >
    <div className='card-item' style={{backgroundImage: `url(${backgroundImage})`}}></div>
      <div class="product-info">
        <div className='product-content'>
          <div class="details">
            <h3>{obj.name}</h3>
          </div>
          <div>
            <h4><FontAwesomeIcon icon={faDollar} className='i dollar' />{obj.price}</h4>
            {/* <h4 class="dis"><FontAwesomeIcon icon={faDollar}/>{obj.price}</h4> */}
          </div>
          <ul className='color-container'>
            {obj.colorCount>=1 ? <li>COLOR</li> : console.log("no color")}
            {arr} 
          </ul>
          <div className='foot-container'>
            <Button color="white" name="BUY NOW"/>
            <Button color="white" name="ADD TO CART"/>
          </div>
        </div>
      </div>
  </div>

  )
}

export default Oneprducts