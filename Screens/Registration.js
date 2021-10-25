import React, { Component } from 'react';
 
import { AppRegistry, StyleSheet, TextInput, View,SafeAreaView,ScrollView, Alert,Image, Text } from 'react-native';
import { Button, ThemeProvider,CheckBox} from 'react-native-elements';
class RegistrationScreen extends Component {
 
constructor(props) {
 
    super(props)
 
    this.state = {
 
      UserName: '',
      UserEmail: '',
      UserphoneNumber:'',
      UserPassword: ''
 
    }
 
  }
 
  UserRegistrationFunction = () =>{
 
 
 const { UserName }  = this.state ;
 const { UserEmail }  = this.state ;
 const {phoneNumber} = this.state ;
 const { UserPassword }  = this.state ;
 
 
 
fetch('https://hub.jamjoog.com/users/user_registration5.php', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    name: UserName,
 
    email: UserEmail,

    phoneNumber: phoneNumber,
 
    password: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
// Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
        this.props.navigation.navigate('RegistrationIntro1');
 
      }).catch((error) => {
        console.error(error);
      });
 
 
  }
 
  render() {
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
        <Text style= {{ fontSize: 30, color: "#fff", textAlign: 'center', marginBottom: 15, fontStyle: 'italic' }}>Registration</Text>
      <View style={styles.TextInputContainer}>
        <Text style={styles.userTEXT}>UserName </Text>
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Name"
 
          onChangeText={UserName => this.setState({UserName})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
          <Text style={styles.userTEXT}>Email adress</Text>
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Email"
 
          onChangeText={UserEmail => this.setState({UserEmail})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
          <Text style={styles.userTEXT}>phoneNumber adress</Text>
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter phone Email"
 
          onChangeText={phoneNumber => this.setState({phoneNumber})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}
        />
        <Text style={styles.userTEXT}>Password </Text>
        <TextInput
          
          // Adding hint in Text Input using Place holder.
          placeholder="Enter User Password"
 
          onChangeText={UserPassword => this.setState({UserPassword})}
 
          // Making the Under line Transparent.
          underlineColorAndroid='transparent'
 
          style={styles.TextInputStyleClass}

          secureTextEntry={true}
        />
        <CheckBox
          title='I accept the Terms & Conditions'
          checked={this.state.checked}
          onPress={() => this.setState({checked: !this.state.checked})}
          containerStyle={{backgroundColor:'#FDB32C'}}
          checkedColor='blue'
          size={20}
        />
        </View>
        <View style={styles.BtnContainer}>
        <Button title="Sign Up" onPress={this.UserRegistrationFunction} color="#2196F3"  containerStyle={{width:250}} buttonStyle={{borderRadius:50,color:'#FDB32C',backgroundColor:'#2499D6'}} />
        <Text style={styles.TextToLogin}
        onPress={() => this.props.navigation.navigate('Loginscreen') } >
            
            I'm aleardy member</Text>

           
        </View>
        <Text style={styles.FooterText}> Powered by Jam Institute</Text>
        </ScrollView>

</SafeAreaView>
            
    );
  }
}
export default RegistrationScreen;

const styles = StyleSheet.create({
 
MainContainer :{
backgroundColor:'#FDB32C',
justifyContent: 'center',
flex:1,

},
userTEXT:{
  fontSize:15,
  color:'#000',
  textAlign:'left',
  margin:5,
  right:100,
  fontStyle: 'italic'
},
imgContainer:{
  width:'100%',
  height:230,
  backgroundColor:'#eee',
  flex:2,
  alignItems:'center',
  borderBottomEndRadius:250,
  borderBottomLeftRadius:250
},
tinyLogo: {
      
  width: 352,
  height: 100,
  resizeMode:'contain'
},
TextInputContainer:{
  justifyContent:'center',
  alignItems:'center',
},
BtnContainer:{
  margin:10,
  justifyContent:'center',
  alignItems:'center',
},
TextToLogin:{
  textDecorationLine:'underline',
  fontSize:15,
  fontStyle: 'italic'
}
,
TextInputStyleClass: {
 backgroundColor:'#fff',
textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
width:320,
// Set border Hex Color Code Here.
 borderColor: '#2196F3',

 // Set border Radius.
 borderRadius: 15 ,
 
// Set border Radius.
 //borderRadius: 10 ,
},
FooterText:{
  color:'#fff',
  marginTop:25,
  textAlign:'center',
  width:'100%',
 backgroundColor:'#000'
}
});
 
AppRegistry.registerComponent('MainProject', () => MainProject);



 