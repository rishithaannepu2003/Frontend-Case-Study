import React, { useEffect, useState } from 'react'
import CardComponent from './Card'
import axios from "axios";
// import info from './data/data.json';

const CardWrapper = ({filteredData}) => {
    const[data,setData]=useState([]);
    console.log(filteredData);
    useEffect(() => {
        // Update data state when filteredData changes
        setData(filteredData);
    }, [filteredData]);
  return (
    <div><CardComponent data={data}/></div>
  )
}

export default CardWrapper