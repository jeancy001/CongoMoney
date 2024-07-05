import { View, Text } from 'react-native'
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker'

const ImageLoader = () => {
    const [selectedImage, setSelectedImage] =useState(null)
    const ImagePickerAnsyc =  async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({allowsEditing:true,quality:1});

    if(!result.canceled)
    {
       setSelectedImage(result.assets[0].uri) 
    }else{
        console.log("we are sorry")
    }
    
    }
  return (
    <View>
      <Text>ImageLoader</Text>
      
    </View>
  )
}

export default ImageLoader