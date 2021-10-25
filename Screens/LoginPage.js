import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert,Text,SafeAreaView,Image,ScrollView,} from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import { upLogo } from '../assets/Images/upLogo.png';
import { logoknow2 } from '../assets/Images/logoknow2.png';
import AsyncStorage from '@react-native-async-storage/async-storage';



  class Loginscreen extends Component {
    

    // Setting up Login Activity title.
    static navigationOptions =
     {
        title: 'Loginscreen',
     };

  constructor(props) {
      super(props)
      this.getData();
      this.state = {
        UserEmail: '',
        UserPassword: ''
      }
    }


  UserLoginFunction = () =>{
    
   const { UserEmail }  = this.state ;
   const { UserPassword }  = this.state ;
   
  fetch('https://hub.jamjoog.com/users/User_Login.php', {


    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: UserEmail,
      password: UserPassword
    })
   
  }).then((response) => response.json())
        .then((responseJson) => {
          const {message, userData} = responseJson;
          
          if (typeof message === "string" && message.toLowerCase().trim() === "data matched") {
            this.props.navigation.navigate("Homescreen", { userData });
            AsyncStorage.setItem('userName', JSON.stringify(responseJson.userData));
            this.onSumbit();
            console.log(responseJson.userData);
            } else {
            Alert.alert("Error:", responseJson.message);
            }
        }).catch((error) => {
          console.error(error);
        });
    }
    
    onSumbit = async () => {
      try{
      
        await AsyncStorage.setItem('UserEmail',this.state.UserEmail)
      }catch (err){
        console.log(err)
      }
    }

    getData = async () => {
      try {
        const UserEmail = await AsyncStorage.getItem('UserEmail')
        if(UserEmail !== null) {
          this.setState({ UserEmail })
          console.log(UserEmail);
        }
      } catch(e) {
        // error reading value
      }
    }
    render() {
      const oldVerify = (responseJson) => (responseJson === 'Data Matched');
  

      const newVerify = (responseJson) => (typeof responseJson === 'string' && responseJson.toLowerCase().trim() === 'data matched');
      
      const cases = ['Data Matched', 'Data matched', 'data MATCHED', '  data matched ', 'data matched'];
      
      cases.forEach((_case) => {
        console.log('======');
        console.log(`Case: "${_case}"`);
        console.log('Old verify:', oldVerify(_case));
        console.log('New verify:', newVerify(_case));
      });
      
      return (
   
  <SafeAreaView style={styles.MainContainer}>
  <ScrollView>
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
          <View style={styles.LoginFormContainer}>
          <Text style= {styles.TextComponentStyle}>Sign Up</Text>
          <Text style={styles.FormText}>UserName</Text>
        
          <TextInput
            
            // Adding hint in Text Input using Place holder.
            placeholder="Enter User Email"
            value={this.state.UserEmail}
            onChangeText={UserEmail => this.setState({UserEmail})}
   
            // Making the Under line Transparent.
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
          />
           <Text style={styles.FormText}>Password</Text>
          <TextInput
            
            // Adding hint in Text Input using Place holder.
            placeholder="Enter User Password"
   
            onChangeText={UserPassword => this.setState({UserPassword})}
   
            // Making the Under line Transparent.
            underlineColorAndroid='transparent'
   
            style={styles.TextInputStyleClass}
   
            secureTextEntry={true}
          />
          <View style={{marginTop:30,width:250}}> 
          <Button title="Click Here To Login" onPress={this.UserLoginFunction} color="#FDB32C" buttonStyle={{borderRadius:50,color:'#FDB32C',backgroundColor:'#FDB32C'}} />
          </View>
          <View style={styles.rowtext}>
            <Text style={{marginRight:90,color:'#fff'}}>forget password ?</Text>
            <Text style={{color:'#fff'}}>Need Help ?</Text>
          </View>
          </View>
          <View style={{margin:10,alignItems:'center'}}>
          <Button title="Click Here To Registration"  onPress={() => this.props.navigation.navigate('RegistrationScreen') } containerStyle={{width:250}}  buttonStyle={{borderRadius:50,color:'#FDB32C',backgroundColor:'#FDB32C'}}/>
        
          </View>
      
          <Text style={styles.FooterText}> Powered by Jam Institute</Text>
          </ScrollView>
  </SafeAreaView>
              
      );
    }
  }

  export default Loginscreen;
  const styles = StyleSheet.create({
 
    MainContainer :{
    backgroundColor:'#2499D6',
    justifyContent: 'center',
    flex:1,
    
    },
    imgContainer:{
      paddingTop:50,
      width:'100%',
      height:260,
      backgroundColor:'#eee',
      flex:2,
      alignItems:'center',
      borderBottomEndRadius:250,
      borderBottomLeftRadius:250
    },
    LoginFormContainer:{
      margin:20,
      height:380,
      backgroundColor:'#1B73A0',
      
      alignItems:'center',
      borderRadius:25
    },
    FormText:{
      fontSize:20,
      color:'#fff',
      textAlign:'left',
      right:80,
      margin:5,
      fontStyle: 'italic'
    },
    rowtext:{
      flexDirection:'row',
      margin:5
    },
    TextInputStyleClass: {
     backgroundColor:'#fff',
    textAlign: 'center',
    marginBottom: 7,

    height: 40,
    width:250,
    borderWidth: 1,
    // Set border Hex Color Code Here.
     borderColor: '#fff',
     
     // Set border Radius.
     borderRadius: 5 ,
    
    },
    tinyLogo: {
      
      width: 352,
      height: 100,
      resizeMode:'contain'
    }
    ,
    Button:{
      margin:50,


    },
     TextComponentStyle: {
       fontSize: 35,
       fontWeight:'bold',
      color: "#FFC444",
      textAlign: 'center', 
     margin:30,
     marginBottom:20
     },
     FooterText:{
       color:'#fff',
       marginTop:15,
       textAlign:'center',
       backgroundColor:'#000'
     }
    });