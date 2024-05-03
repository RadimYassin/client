import { View, Text } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { Stack } from 'expo-router'
import Listings from '@/components/Listings'
import Header from '@/components/Header'
import axios from 'axios'

const index = () => {

const [category ,setCategory]=useState("destination")
const [data ,setData]=useState([])
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://172.20.10.10:8000/api/destinations/');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);




  const onDataChanged =(cat:string)=>{
setCategory(cat)
  }
  return (
    <View style={{flex:1,marginTop:115}}>

        <Stack.Screen options={{
            header:()=><Header onCategoryChanged={onDataChanged}/>
        }}  />
        <Listings listing={data} category={category}/>
    </View>
  )
}

export default index