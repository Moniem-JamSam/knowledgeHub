
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert,Text,SafeAreaView,Image,ScrollView,} from 'react-native';
import { khowledgehubpic } from '../assets/Images/khowledgehubpic.jpg';

import { Card, ListItem, Button, Icon,Divider  } from 'react-native-elements'



 class RegistrationIntro1 extends Component {
 
    
   
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
            <View style={styles.introPic}>

            <Image
                        source={require('../assets/Images/regIntroPic.png')}
                        style={styles.introPicStyle}

                    />
                    <Text style={{alignItems:'center',fontSize:40,color:'#fff',textAlign:'center',fontStyle:'italic',}}>Welcome</Text>
            </View>
            <View style={styles.interoductionText}>
            <Text style={styles.introtext}>you are a new member in 
              Knowledge Hub.</Text>
            <Text style={styles.introtext}>Let’s see What You can do 
              with us .</Text>
            <Text style={styles.introtext}>We Hope you find your 
              way to progress</Text>
              <Button title="Let’s Start"  onPress={() => this.props.navigation.navigate('RegistrationIntro2') }containerStyle={{width:250}}  buttonStyle={{borderRadius:15,color:'#FDB32C',backgroundColor:'#FDB32C'}}/>
              <Text style={styles.skipText}> Skip</Text>
            </View>
            <Text style={styles.FooterText}> Powered by Jam Institute</Text>
          </View>
          </ScrollView>
        </SafeAreaView>
   
      );
    }
  }
  export default RegistrationIntro1;


  const styles = StyleSheet.create({
    MainContainer:{
      backgroundColor:'#2499D6',
      alignItems:'center'
      },
    imgContainer:{
      
      width:'100%',
      height:230,
      backgroundColor:'#eee',
      alignItems:'center',
      borderBottomEndRadius:250,
      borderBottomLeftRadius:250
      },
      tinyLogo: {
        
        width: 352,
        height: 100,
        resizeMode:'contain'
      },
      introPic:{
        width: 352,
         
      },
      introPicStyle:{
        width: 352,
        height:200,
        resizeMode:'contain'
      },
      interoductionText:{
        justifyContent:'center',
        alignItems:'center',
        margin:20,
        padding:20,
        backgroundColor:'#1B73A0',
        borderRadius:15
      },
      introtext:{
        fontSize:25,
        color:'#fff',
        fontStyle:'italic',
        textAlign:'center',
        margin:10
      },
      skipText:{
          margin:5,
          color:'#fff',
          textDecorationLine:'underline'
      },
      FooterText:{
        color:'#fff',
        marginTop:15,
        textAlign:'center'
      }

    });