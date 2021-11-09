
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert,Text,SafeAreaView,Image,ScrollView,TouchableOpacity} from 'react-native';
import { khowledgehubpic } from '../assets/Images/khowledgehubpic.jpg';

import { Card, ListItem, Button, Icon,Divider,CheckBox  } from 'react-native-elements'



 class InPutPayPal extends Component {
 
    
   
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
        <View style={styles.FormStyle}>
          <Text style={styles.FormText}>Name Surname</Text>
        
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter your Name Surname"

   
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
          <Text style={styles.FormText}>Card Number</Text>
        
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="1234 xxxx xxxx xxxx"

   
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
          <View style={{flexDirection:'row' }}>
            <View style={styles.smallInput2}>
                <Text style={styles.FormTextsmall}>Exp Date</Text>
                <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="10/20"

   
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.SmallInput}
        />
            </View>
            <View style={styles.smallInput2}>
                <Text style={styles.FormTextsmall}>Cvv</Text>
                <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="34x"

   
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.SmallInput}
        />
            </View>
          </View>
          <CheckBox
          title='I accept the Terms & Conditions'
  
        
          containerStyle={{backgroundColor:'#eee'}}
          checkedColor='blue'
          size={20}
        />
        <Button title="Sign Up" color="#2196F3"  containerStyle={{width:250,marginTop:20}} buttonStyle={{borderRadius:50,color:'#FDB32C',backgroundColor:'#146BA6'}} />
        <Text style={styles.TextToLogin}
        onPress={() => this.props.navigation.navigate('Loginscreen') } ></Text>
        </View>
       
          </View>
          </ScrollView>
        </SafeAreaView>
   
      );
    }
  }
  export default InPutPayPal;


  const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:'#2599D5',
        height:'100%',
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
      FormStyle:{
          alignItems:'center',
          margin:35
      },
      FormText:{
        fontSize:20,
        color:'#fff',
        textAlign:'left',
        justifyContent:'flex-start',
        width:300,
        margin:5,
        fontStyle: 'italic',
        
      },
      FormTextsmall:{
        fontSize:14,
        color:'#fff',

        marginVertical:5,
        fontStyle: 'italic',
        fontWeight:'bold'
      },
      
      TextInputStyleClass: {
       backgroundColor:'#fff',
      textAlign: 'center',
      marginBottom: 7,
  
      height: 40,
      width:300,
      borderWidth: 1,
      // Set border Hex Color Code Here.
       borderColor: '#fff',
       
       // Set border Radius.
       borderRadius: 5 ,
      
      },
      SmallInput: {
       backgroundColor:'#fff',
      textAlign: 'center',
      marginBottom: 7,
  
      height: 40,
      width:140,
      borderWidth: 1,
      // Set border Hex Color Code Here.
       borderColor: '#fff',
       
       // Set border Radius.
       borderRadius: 5 ,
      
      },
      smallInput2:{
          margin:10
      }

    });