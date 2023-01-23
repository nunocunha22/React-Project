import React, { useState } from 'react'

export default function AddForm(props) {

    const [place, setPlace] = useState('');
    const [country, setCountry] = useState('');
    const [imageSmall, setImageSmall] = useState('');
    const [details, setDetails] = useState('');
    const [visited, setVisited] = useState('');


    const handleSubmit = (e) => {

        let id = new Date().getTime();
        
        let newCity = {
            id,
            place,
            country,
            imageSmall,
            details,
            visited,
        }

        props.onFormSubmit(newCity);

        setPlace('');
        setCountry('');
        setImageSmall('');       
        setDetails('');
        setVisited(false);

        
        e.preventDefault();
    }

    console.log (place);
    console.log (country);
    console.log (imageSmall);
    console.log (details);
    console.log (visited);
    

  return (

    
    <section id="addForm">
        <form id="addCity" action="" autoComplete='off'>
            <div>
                <label htmlFor="place">Place</label>
                <input type="text" placeholder='Insert City Name' id="place" value={place} onChange={ ({target:{value}})=>setPlace(value) }  />
            </div>
            <div>
                <label htmlFor="country">Country</label>
                <input type="text" placeholder='Insert Country Name' id="country" value={country} onChange={ (e)=>setCountry(e.target.value)}  />
            </div>
            <div>
                <label htmlFor="imageSmall">Picture</label>
                <input type="text" placeholder='Insert picture folder path'id="imageSmall" value={imageSmall} onChange={ (e)=>setImageSmall(e.target.value)} />
            </div>
            <div>
                <label htmlFor="details">Details</label>
                <input type="text" placeholder='Insert details
                ' id="details" value={details} onChange={ (e)=>setDetails(e.target.value)} />
            </div>
            <div>
                <input type="checkbox" id="visted" checked={visited}  onChange={({target:{checked}}) => setVisited(checked)}/>
                <label htmlFor="visited">Visited</label>
            </div>
            <button id='addFormButton' onClick={handleSubmit}>Add New City</button>
        </form>
    </section>
  )
}
