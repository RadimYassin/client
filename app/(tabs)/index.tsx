import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Stack } from 'expo-router'
import Listings from '@/components/Listings'
import Header from '@/components/Header'



const data = [
  {
    id: 1,
    name: "Paris",
    location: "France",
    description: "The City of Light, known for its art, fashion, gastronomy, and culture.",
    rating: 4.8,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 2,
    name: "Kyoto",
    location: "Japan",
    description: "Famous for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses.",
    rating: 4.7,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 3,
    name: "New York City",
    location: "United States",
    description: "The city that never sleeps, known for its iconic skyline, Broadway shows, and diverse neighborhoods.",
    rating: 4.5,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 4,
    name: "Rome",
    location: "Italy",
    description: "The Eternal City, famous for its rich history, art, architecture, and cuisine.",
    rating: 4.6,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 5,
    name: "Cairo",
    location: "Egypt",
    description: "Home to the ancient pyramids of Giza, the Sphinx, and other archaeological wonders.",
    rating: 4.3,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 6,
    name: "Sydney",
    location: "Australia",
    description: "A vibrant city with iconic landmarks such as the Sydney Opera House and Harbour Bridge.",
    rating: 4.9,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 7,
    name: "Rio de Janeiro",
    location: "Brazil",
    description: "Famous for its beautiful beaches, carnival celebrations, and iconic Christ the Redeemer statue.",
    rating: 4.7,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 8,
    name: "Tokyo",
    location: "Japan",
    description: "A bustling metropolis known for its cutting-edge technology, fashion, and cuisine.",
    rating: 4.8,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 9,
    name: "Venice",
    location: "Italy",
    description: "Renowned for its romantic canals, historic architecture, and art.",
    rating: 4.6,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 10,
    name: "Dubai",
    location: "United Arab Emirates",
    description: "A city of superlatives, known for its skyscrapers, luxury shopping, and extravagant lifestyle.",
    rating: 4.5,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 11,
    name: "London",
    location: "United Kingdom",
    description: "A global city known for its history, culture, and landmarks such as Big Ben and the Tower of London.",
    rating: 4.7,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 12,
    name: "Santorini",
    location: "Greece",
    description: "Famous for its stunning sunsets, white-washed buildings, and crystal-clear waters.",
    rating: 4.9,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 13,
    name: "Istanbul",
    location: "Turkey",
    description: "A city that bridges Europe and Asia, known for its rich history, architecture, and cuisine.",
    rating: 4.6,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 14,
    name: "Amsterdam",
    location: "Netherlands",
    description: "Famous for its picturesque canals, historic architecture, and vibrant cultural scene.",
    rating: 4.8,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 15,
    name: "Prague",
    location: "Czech Republic",
    description: "A fairy-tale city with stunning architecture, charming streets, and a rich history.",
    rating: 4.7,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 16,
    name: "Barcelona",
    location: "Spain",
    description: "Known for its unique architecture, vibrant street life, and rich cultural heritage.",
    rating: 4.8,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 17,
    name: "Singapore",
    location: "Singapore",
    description: "A modern city-state with a mix of cultures, renowned for its cleanliness, safety, and culinary scene.",
    rating: 4.7,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 18,
    name: "Hong Kong",
    location: "China",
    description: "A dynamic city with skyscrapers, a bustling harbor, and a mix of Eastern and Western cultures.",
    rating: 4.6,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 19,
    name: "Florence",
    location: "Italy",
    description: "A Renaissance city famous for its art, architecture, and historic significance.",
    rating: 4.7,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 20,
    name: "Bali",
    location: "Indonesia",
    description: "An island paradise known for its lush landscapes, beautiful beaches, and vibrant culture.",
    rating: 4.8,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 21,
    name: "Machu Picchu",
    location: "Peru",
    description: "An ancient Incan citadel set high in the Andes Mountains, renowned for its mysterious beauty and archaeological significance.",
    rating: 4.9,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 22,
    name: "Dubrovnik",
    location: "Croatia",
    description: "A medieval city on the Adriatic Sea, known for its well-preserved city walls, historic architecture, and stunning coastal views.",
    rating: 4.7,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 23,
    name: "Great Barrier Reef",
    location: "Australia",
    description: "The world's largest coral reef system, famous for its breathtaking marine biodiversity and vibrant underwater ecosystem.",
    rating: 4.8,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 24,
    name: "Hawaii",
    location: "United States",
    description: "A tropical paradise consisting of six main islands, known for their stunning beaches, lush landscapes, and volcanic activity.",
    rating: 4.6,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 25,
    name: "Banff National Park",
    location: "Canada",
    description: "A majestic national park in the Canadian Rockies, renowned for its stunning alpine scenery, crystal-clear lakes, and abundant wildlife.",
    rating: 4.8,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 26,
    name: "Serengeti National Park",
    location: "Tanzania",
    description: "A vast savannah ecosystem and UNESCO World Heritage Site, known for its annual wildebeest migration, diverse wildlife, and breathtaking landscapes.",
    rating: 4.9,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 27,
    name: "Grand Canyon",
    location: "United States",
    description: "A steep-sided canyon carved by the Colorado River, known for its immense size, intricate rock formations, and breathtaking vistas.",
    rating: 4.7,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 28,
    name: "Marrakech",
    location: "Morocco",
    description: "A vibrant city known for its bustling souks, historic medina, and stunning Moorish architecture.",
    rating: 4.6,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 29,
    name: "Edinburgh",
    location: "United Kingdom",
    description: "Scotland's capital city, famous for its historic castle, charming Old Town, and vibrant arts scene.",
    rating: 4.7,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 30,
    name: "Kruger National Park",
    location: "South Africa",
    description: "One of Africa's largest game reserves, known for its diverse wildlife, including lions, elephants, and rhinos, in their natural habitat.",
    rating: 4.8,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 31,
    name: "Petra",
    location: "Jordan",
    description: "An ancient city carved into the red-rock cliffs, renowned for its archaeological treasures, including the iconic Treasury and Monastery.",
    rating: 4.9,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 32,
    name: "Reykjavik",
    location: "Iceland",
    description: "The capital and largest city of Iceland, known for its stunning natural beauty, geothermal hot springs, and vibrant cultural scene.",
    rating: 4.7,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 33,
    name: "Mont Saint-Michel",
    location: "France",
    description: "A medieval island commune in Normandy, famous for its stunning abbey, narrow streets, and dramatic tides.",
    rating: 4.8,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 34,
    name: "Zhangjiajie National Forest Park",
    location: "China",
    description: "A UNESCO World Heritage Site known for its towering sandstone pillars, lush vegetation, and breathtaking natural landscapes.",
    rating: 4.7,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 35,
    name: "Santorini",
    location: "Greece",
    description: "Renowned for its stunning sunsets, white-washed buildings, and crystal-clear waters.",
    rating: 4.9,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 36,
    name: "Venice",
    location: "Italy",
    description: "Famous for its romantic canals, historic architecture, and art.",
    rating: 4.8,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 37,
    name: "Barcelona",
    location: "Spain",
    description: "Known for its unique architecture, vibrant street life, and rich cultural heritage.",
    rating: 4.8,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 38,
    name: "Prague",
    location: "Czech Republic",
    description: "A fairy-tale city with stunning architecture, charming streets, and a rich history.",
    rating: 4.7,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 39,
    name: "Amsterdam",
    location: "Netherlands",
    description: "Famous for its picturesque canals, historic architecture, and vibrant cultural scene.",
    rating: 4.8,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  },
  {
    id: 40,
    name: "Singapore",
    location: "Singapore",
    description: "A modern city-state with a mix of cultures, renowned for its cleanliness, safety, and culinary scene.",
    rating: 4.7,
    image: "https://cf.bstatic.com/xdata/images/hotel/square600/474656748.webp?k=c580916c78350030307b130c9423901454e28032f6dfa26a747e0b0104fedf78&o="
  }
];








const index = () => {

const [category ,setCategory]=useState("destination")

const items=useMemo(()=>data as any ,[])

  const onDataChanged =(cat:string)=>{
setCategory(cat)
  }
  return (
    <View style={{flex:1,marginTop:115}}>

        <Stack.Screen options={{
            header:()=><Header onCategoryChanged={onDataChanged}/>
        }}  />
        <Listings listing={items} category={category}/>
    </View>
  )
}

export default index