import { View, Text ,Image, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function BoardInfo({ id, tel, sold}) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visible, setvisible]= useState(true);

  const ImagePickerAsync = async()=>{
    let result = await ImagePicker.launchImageLibraryAsync({allowsEditing:true, quality:1});
      
    if(!result.canceled)
    {
     setSelectedImage(result.assets[0].uri);
     setvisible(false)
   
        
    }else{
      console.log("Sorry no Image selected ");
    }
  };


  const CancelBtn =()=>{
    return false;
  }
  //open camera 
  const ImagePickerCamera = async()=>{
    let camera = await ImagePicker.launchCameraAsync({allowsEditing:true, quality:1});
    if(!camera.canceled)
    {
      setSelectedImage(camera.assets[0].uri);
      setvisible(false);
    }else{
      console.log("Sorry ")
    }

  }
  return (
    
    <View style={styles.container}>
    <View style={{flexDirection:'row', padding:2,margin:2,justifyContent:'space-between',
    alignItems:'center'
  
    }}>
      <TouchableOpacity onPress={()=>(Alert.alert('Profile Info','Change profile',[{
        text:'Choose a pic',
        onPress:()=>ImagePickerAsync()
      },
      {
        text:'Camera',
        onPress:()=>ImagePickerCamera()
      },
        {text:'Cancel',
          onPress:()=> CancelBtn()
        }
      ]
        ))} >
        {visible ? <Image source={require('../../assets/users/user.png')} style={{width:60,height:60,
            borderRadius:100}}/>:
         (

          <Image source={{uri:selectedImage}}style={{width:60,height:60,
            borderRadius:100
          }} />
      
         )
        }
    </TouchableOpacity>
       <Text style={{marginLeft:0,fontSize:18,fontWeight:'bold'}}>{id} </Text>
      
      </View>
      <Text style={styles.tel}>{tel}</Text>
      <TouchableOpacity>
      <View style={styles.money}>
       
      <Text style={styles.sold}>$ {sold}</Text>
      
      </View>
    </TouchableOpacity>
    </View>
  )
};

const styles =StyleSheet.create({
    money:{
    
        backgroundColor:'#fff',
      
        flexDirection:'row',
        paddingVertical:20,
        marginVertical:10,
        paddingHorizontal:10,
        margin:20,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#ddd',
        shadowOpacity:0.2,
        shadowColor:'#000',
        shadowOffset:{width:0,height:5}
  
    },
    tel:{
        fontSize:16,
        fontWeight:'100',
        padding:2,
        margin:1,

    },
    sold:{
        flex:1,
        textAlign:'center',
        fontSize:20,
        fontWeight:'200'

    },
    container:
    {
       
    }
})