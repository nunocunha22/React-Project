import React, {useState} from 'react'
import { useDispatch } from 'react-redux';



export default function Cities({city}) {

 const {id,place, country,visited, imageSmall, imageMap, details } = city;

 const dispatch = useDispatch();

 const handleDelete = () => {
  dispatch({
    type:"DELETE_MESSAGE",
    id,
  })
 }

 {/*const handleAddCity = (city) => {
   dispatch({
     type: "ADD_CITY",
    
   }) 
}
*/}

 {/*const handleMap = () => {
  dispatch({
    type:"SHOW_MAP",
    imageMap,
  })
*/}

const [hideMap, handleMap] = useState(false)
const [hideDetails, handleDetails] = useState(false)
  

  return (
   <article>
     <h2>{place}</h2>
     <h1>{country}</h1>
     <img src={'cities/'+imageSmall} />
     {
     hideMap?<img src={'cities/'+imageMap} />:null
    }
    {
     hideDetails?<p>{details} </p>:null
    }
     <p>Visited: {visited ? '✅' : '❌'}</p>
     <div>
     <button onClick={handleDelete}>Delete</button>
     <button onClick={() => handleMap (!hideMap)}>Map</button>
     <button onClick={() => handleDetails (!hideDetails)}>Details</button>
     
     </div>
   </article>
  )
}
 
