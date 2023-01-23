import React, {useState} from 'react'
import Objetivos from './Objetivos';

export default function Header() {

  const [objetivos, setObjetivos] = useState(false);

  return (
    <section id='headerSection'>
      
    <button className='headerButton' onClick={()=>setObjetivos(!objetivos)}>Objetivos</button>
        <h1 className='header'>My travelling collections</h1>
        { objetivos &&  <Objetivos />}
        {/*<div className='headerLogin'>Login</div>*/}
    </section>
  )
}
