import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getData, filter } from '../redux/action';
import Allproducts from './Allproducts';
import '../styles/Store.css'
import Button from './Button';

function Store() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getData())
  }, );
  return (
    <>
    <div className='filter'>
      <h1>ALL PRODUCT</h1>
      <div className='filter-container'>
        <Button color="white" name="HEADPHONES" fn={filter("headphone")}/>
        <Button color="white" name="EARBUDS" fn={filter("earbuds")}/>
        <Button color="white" name="SPEAKERS" fn={filter("speakers")}/>
        <Button color="white" name="GAMING" fn={filter("gaming")}/>
      </div>
    </div>
      <Allproducts/>
    </>
  )
}

export default Store