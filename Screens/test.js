
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert,Text,SafeAreaView,Image,ScrollView,} from 'react-native';
import { khowledgehubpic } from '../assets/Images/khowledgehubpic.jpg';

import { Card, ListItem, Button, Icon,Divider  } from 'react-native-elements'



 class EditPage extends Component {
 
    
   
    render() {
      return (
        <SafeAreaView >
        <ScrollView>
        <View style={styles.MainContainer}>
           <View style={styles.headerContainer}>
               <Text style={styles.headerText}>Profile</Text>
           </View>
           <View style={styles.FormStyle}>
               <Text>UserName</Text>
               <TextInput
                // Adding hint in Text Input using Place holder.
                placeholder="Enter User Name"
                // Making the Under line Transparent.
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />
                <Text>Name Surname</Text>
               <TextInput
                // Adding hint in Text Input using Place holder.
                placeholder="Enter User Name"
                // Making the Under line Transparent.
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />
                <Text>E-Mail Adress</Text>
               <TextInput
                // Adding hint in Text Input using Place holder.
                placeholder="Enter E-Mail Adress"
                // Making the Under line Transparent.
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />
                <Text>Country</Text>
               <TextInput
                // Adding hint in Text Input using Place holder.
                placeholder="Enter yoru Country"
                // Making the Under line Transparent.
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />
                <Text>Phone</Text>
               <TextInput
                // Adding hint in Text Input using Place holder.
                placeholder="Enter Phone "
                // Making the Under line Transparent.
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />
                <Text>PassWord</Text>
               <TextInput
                // Adding hint in Text Input using Place holder.
                placeholder="Enter PassWord"
                // Making the Under line Transparent.
                underlineColorAndroid='transparent'
                style={styles.TextInputStyleClass}
                />
           </View>
            <View style={{alignItems:'center'}}>
            <Button title="Sign Up" onPress={this.UserRegistrationFunction} color="#2196F3"  containerStyle={{width:250}} buttonStyle={{borderRadius:50,color:'#FDB32C',backgroundColor:'#146BA6'}} />
            </View>
   
          </View>
          </ScrollView>
        </SafeAreaView>
   
      );
    }
  }
  export default EditPage;


  const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:'#eee',
        height:'100%',
        flex:1,
      },
      headerContainer:{
          backgroundColor:'#146BA6',
          height:150,
          borderBottomLeftRadius:25,
          borderBottomRightRadius:25,
          justifyContent:'center'
      },
      headerText:{
          fontSize:35,
          color:'#eee',
          textAlign:'center',
          fontWeight:'bold'
        },
        FormStyle:{
            alignContent:'center',
            margin:15
        }

    });