
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert,Text,SafeAreaView,Image,ScrollView,} from 'react-native';
import { khowledgehubpic } from '../assets/Images/khowledgehubpic.jpg';

import { Card, ListItem, Button, Icon,Divider  } from 'react-native-elements'



 class OwnStorePage extends Component {
 
    
   
    render() {
      return (
        <SafeAreaView >
        <ScrollView>
        <View style={styles.MainContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.HeaderText}>Create your own Bookstore </Text>

          </View>
          <View style={styles.ImgContainer}>
          <Image
                            source={require('../assets/Images/JamGo.png')}
                            style={styles.TalentLogo} 

                        />
          </View>
          <View style={styles.TextContainer}>
            <Text style={styles.TalentText}>
            “Jam Go is Your way to create your store easly and great Jam Go is Your way to create your store easly and great Jam Go is Your way to create your store easly and great Jam Go is Your way to create your store easly and great Jam Go is Your way to create your store easly and great ”

            </Text>
            <Text style={styles.subTitle}>-freelancer</Text>
            <Text style={styles.subTitle}>-Companies Team </Text>
            <Text style={styles.subTitle}>-Companies Team </Text>
            <Text style={styles.subTitle}>-Make Your freelancers Team</Text>
          </View>
          <View style={styles.buttonContainer}>
          <Button title="Let’s Start"  onPress={() => this.props.navigation.navigate('Loginscreen') }containerStyle={{width:250}}  buttonStyle={{borderRadius:15,color:'#FDB32C',backgroundColor:'#3E905A'}}/> 
          </View>
          </View>
          </ScrollView>
        </SafeAreaView>
   
      );
    }
  }
  export default OwnStorePage;


  const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:'#eee',
        height:'100%',
        flex:1,
      },
      headerContainer:{
          backgroundColor:'#3E905A',
          height:100,
          borderBottomLeftRadius:25,
          borderBottomRightRadius:25,
          alignItems:'center',
          justifyContent:'center'
      },
      HeaderText:{
        color:'#fff',
        fontSize:35,
        textAlign:'center'
      },
      ImgContainer:{
          justifyContent:'center',
          alignItems:'center'
      },
      TalentLogo:{
          width:250,
          height:130,
          resizeMode:'contain'
      },
      TextContainer:{
          margin:15
      },
      TalentText:{
          fontSize:17,
          color:'#5F5458',
          fontWeight:'bold'
      },
      subTitle:{
        color:'#5F5458'
      },
      buttonContainer:{
          alignItems:'center'
      }
    });