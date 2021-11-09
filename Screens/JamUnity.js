
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert,Text,SafeAreaView,Image,ScrollView,TouchableOpacity} from 'react-native';
import { khowledgehubpic } from '../assets/Images/khowledgehubpic.jpg';

import { Card, ListItem, Button, Icon,Divider,CheckBox  } from 'react-native-elements'



 class JamUnity extends Component {
 
    
   
    render() {
      return (
        <SafeAreaView >
        <ScrollView>
        <View style={styles.MainContainer}>
           <View style={styles.imgContainer}>
          <Image
                        source={require('../assets/Images/upLogo.png')}
                        style={styles.tinyLogo}

                    />
          <Image
                        source={require('../assets/Images/logoknow2.png')}
                        style={styles.tinyLogo}

                    />
          </View>
          <Image
                        source={require('../assets/Images/JamUNITY.png')}
                        style={styles.JamUNITYPng}

                    />
                      <Image
                        source={require('../assets/Images/JamUNITY.png')}
                        style={styles.JamUNITYPng}

                    />
                      <Image
                        source={require('../assets/Images/JamUNITY.png')}
                        style={styles.JamUNITYPng}

                    />
                      <Image
                        source={require('../assets/Images/JamUNITY.png')}
                        style={styles.JamUNITYPng}

                    />
                      <Image
                        source={require('../assets/Images/JamUNITY.png')}
                        style={styles.JamUNITYPng}

                    />
                      <Image
                        source={require('../assets/Images/JamUNITY.png')}
                        style={styles.JamUNITYPng}

                    />

          </View>
        
          </ScrollView>
        </SafeAreaView>
   
      );
    }
  }
  export default JamUnity;


  const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:'#2599D5',
        height:1000,
        flex:1,
      },
    imgContainer:{
     
        width:'100%',
        height:150,
        backgroundColor:'#eee',
        alignItems:'center',
        borderBottomEndRadius:150,
        borderBottomLeftRadius:150
      },
      CardContainer:{
          margin:30
      },
      tinyLogo: {
        
        width: 352,
        height: 70,
        resizeMode:'contain'
      },
     
      JamUNITYPng:{
        width:'100%',
        height:150,
        resizeMode:'contain',
        opacity:0.8
     
         },
        imgContainerPay:{
        width:300,
        height:150,
        borderRadius:25,
        backgroundColor:'#fff',
     
         },

    });