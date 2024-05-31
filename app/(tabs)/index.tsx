import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import Constants from 'expo-constants'
import GlobalStyles from '@/components/GlobalStyles';



export default function MainScreen() {

  const apple =(val: string)=>{
    console.warn(val)
  }
  return(<SafeAreaView style={GlobalStyles.droidSafeArea}>
    <View style={{flex:1, flexDirection:'column',}}>
   <View style={{alignSelf:'center'}}>
    <Text style={{fontSize:35,paddingBottom:10}}>Weather App</Text>
    <Text style={{marginTop:50,fontSize:25}}>City-Indore</Text>
    <Text style={{fontSize:25}}>Temperature-40C</Text>
    </View>
    <View style={{marginTop:550}}>
   <Button title='Update' onPress={()=>apple("Anirudh")} color={'steelblue'}/>
   </View>
    
    </View>

    
</SafeAreaView>
      
    
    
  );
}


