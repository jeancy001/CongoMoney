import { View, Text ,StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { ScrollView } from 'react-native'
import { pannel } from '../../constants/Allpannel'
import { Colors } from 'react-native/Libraries/NewAppScreen'
const index =0
export default function PannelPages() {

  return (
 <View>
     <Text style={styles.head}>All Pannel </Text>
     <ScrollView horizontal showsHorizontalScrollIndicator={false} > 
        
        {pannel.map((pannel, index) =>(
            
            <View style={{backgroundColor:index ===0?Colors.primary :'#fff',
            marginRight:15,
            padding:5,
            margin:10,
            paddingHorizontal:15,
            paddingVertical:18,
            borderRadius:7,
            marginVertical:16,
            shadowColor:'#000',
            shadowOpacity:0.5,
            shadowOffset:{width:0,height:4}
            }} key={index}>
             
                    <Text style={{
                    fontSize:20,
                    fontWeight:'600',
                    color:index ===0?'white':'black'
                }}>{pannel.tite}</Text>
               
            </View> 
              ))}
     </ScrollView>
     </View>
   
  )
}

const styles =StyleSheet.create({
    head:{
      textAlign:'left',
       fontSize:20,
       margin:5,
       color:'gray',
       fontWeight:'bold'
    },
    textPanel:{


   
    },

})