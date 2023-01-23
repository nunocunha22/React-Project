import React, {useState} from 'react'

export default function SearchForm() {
    
    const [query, setQuery] = useState("")

    console.log (query);
    
  return (
<section id='searchForm'>
    <form>
       <input type="text" id="searchInput" placeholder='Search city / country' className='Search' 
          onChange={(e) => setQuery(e.target.value)}>
       </input>
       </form>  
</section>
  )
}
