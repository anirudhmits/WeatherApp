import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button,TextInput } from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import Constants from 'expo-constants'
import GlobalStyles from '@/components/GlobalStyles'
import exstyles from '../styles';





export default function MainScreen() {
  const[name,setName]=useState("");

  
  return(<SafeAreaView style={GlobalStyles.droidSafeArea}>
    <View style={{flex:1,flexDirection:'column'}}>
   <View style={{paddingTop:30,alignItems:'center'}}>
    <Text style={styles.heading}>Weather App</Text>
    <Text style={exstyles.text}>City-Indore</Text>
    <Text style={[exstyles.text]}>Temperature-40C</Text>
    <Text style={[exstyles.text]}>My name is:{name}</Text>
    <TextInput
    style={styles.InputBox}
    placeholder='Enter Your Name'
    
    onChangeText={(text=>setName(text))}
    value={name}
    />
    <Button title='Clear Value' onPress={()=>setName('')}/>
    

    
    </View>
   
    
     

    </View>
    

    
</SafeAreaView>
      
    
    
  );
}


const styles=StyleSheet.create({

  text:{
    color:'steelblue',
    fontSize:25,
    backgroundColor:'yellow',
    padding:10,
    marginBottom:10,
    borderRadius:10,
    borderWidth:3,
    borderColor:'black'

  },
  heading:{
      fontSize:50,
      fontWeight:'bold',
      
      
  },
  InputBox:{
    fontSize:18,
    borderWidth:2,
    color:"black",
    borderRadius:10,
    padding:10,
    marginBottom:10,
    
  }

})

