
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Card from './src/components/Card';
import axios from 'axios';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

export default function App() {
  const [images, setImages] = useState([])

  const fetchImages = async () => {
      try {
          const images = await axios.get(`https://api.unsplash.com/photos/?client_id=${key}&per_page=30`)
          // console.log("Images", images.data)
          setImages(images.data)
          return images.data
      } catch (error) {
          console.log("Error", error)
      }
  }

  useEffect(() => {
      fetchImages()
  }, [])

  return (
    <>
      <Card name='Agwenchez' image={images[1]?.urls.small} bio='Some bio goesh here' />
    </>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})