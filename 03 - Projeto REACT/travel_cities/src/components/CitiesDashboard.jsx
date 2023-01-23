import CitiesList from "./CitiesList";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import React from 'react'
import Forms from "./AddForms";
import SearchForm from "./SearchForm";
import Header from "./Header";
import Footer from "./Footer";
import Objetivos from "./Objetivos";


export default function CitiesDashboard() {


  const dispatch = useDispatch();

  useEffect(() => {
    (async function (){
      try {
        const resp = await fetch("cities.json");
        const data = await resp.json();
        dispatch({
          type: "VISITED_CITIES",
          payload: data.cities,
        });
      } catch (error) {
        console.log('Something wrong happened....')
      }
    })();
  }, [])
  
  

  return (
    <div>
      <Header>
      </Header>
      
      <SearchForm />
       <Forms/>   
      <CitiesList />
      <Footer/>
    </div>
  )
}
