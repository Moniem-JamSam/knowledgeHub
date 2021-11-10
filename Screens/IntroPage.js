
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert,Text,SafeAreaView,Image,ScrollView,} from 'react-native';
import { khowledgehubpic } from '../assets/Images/khowledgehubpic.jpg';

import { Card, ListItem, Button, Icon,Divider  } from 'react-native-elements'



 class IntroPage extends Component {
 
    
   
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
                        source={require('../assets/Images/intro1.png')}
                        style={styles.introPicStyle}

                    />
            </View>
            <View style={styles.PioneersTextContainer}>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <Text style={{fontSize:25,margin:10,marginRight:1,color:'#fff'}}>"We are</Text>
                <Text style={{fontSize:25,margin:10,marginLeft:1,fontWeight:'bold',color:'#FDB32C'}}> Pioneers" </Text>
            </View>
            <View style={{margin:5}}>
                <Text style={styles.SubText}>this software is to help the students,
                graduating students , Job seekers And Additional skills to find their documents easly and fast .</Text>
                <Text style={styles.SubText}>The Documents library allows the users to find and Download The documents .</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',margin:10}}>
            <Button title="Let’s Start"  onPress={() => this.props.navigation.navigate('Loginscreen') }containerStyle={{width:250}}  buttonStyle={{borderRadius:15,color:'#FDB32C',backgroundColor:'#FDB32C'}}/>
            <Text style={styles.skipText}> Skip</Text>
            
            </View>
            </View>




          </View>
          </ScrollView>
        </SafeAreaView>
   
      );
    }
  }
  export default IntroPage;


  const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:'#2599D5',
        height:679,
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
      tinyLogo: {
        
        width: 352,
        height: 70,
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
      PioneersTextContainer:{
          height:280,
          backgroundColor:'#1C73A0',
          margin:5,
          borderRadius:15
      },
      SubText:{
          fontSize:15,
          color:'#fff',
          marginVertical:5,
          marginLeft:20

      },
      skipText:{
          marginTop:5,
          color:'#fff',
          textDecorationLine:'underline'
      },
      FooterText:{
        color:'#fff',
        marginTop:15,
        textAlign:'center',
        backgroundColor:'#000'
      }

    });