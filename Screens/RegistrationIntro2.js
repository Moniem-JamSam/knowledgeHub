
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert,Text,SafeAreaView,Image,ScrollView,} from 'react-native';
import { khowledgehubpic } from '../assets/Images/khowledgehubpic.jpg';

import { Card, ListItem, Button, Icon,Divider  } from 'react-native-elements'



 class RegistrationIntro2 extends Component {
 
     
   
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

          
          <View style={styles.rowContainer}>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Image
                            source={require('../assets/Images/books2png.png')}
                            style={styles.SmallcardAvtar} 

                        />
          <View>
          <Text style={styles.titleText}>Templates & Tools</Text>
          <Text style={styles.SubTitleText}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature </Text>

          </View>


          </View>
          <View style={{flexDirection:'row',justifyContent:'center'}}>
         
          <View>
          <Text style={styles.titleText}>Video & Audio</Text>
          <Text style={styles.SubTitleText}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature </Text>

          </View>
          <Image
                            source={require('../assets/Images/videopng.png')}
                            style={styles.SmallcardAvtar} 

                        />

          </View>


          <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Image
                            source={require('../assets/Images/books2png.png')}
                            style={styles.SmallcardAvtar} 

                        />
          <View>
          <Text style={styles.titleText}>Books & UserGuides</Text>
          <Text style={styles.SubTitleText}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature </Text>

          </View>
          

          </View>
          
        </View> 
        <View style={{alignItems:'center'}}>
        <Button title="Let’s Start"  onPress={() => this.props.navigation.navigate('RegistrationIntro3') }containerStyle={{width:250}}  buttonStyle={{borderRadius:15,color:'#FDB32C',backgroundColor:'#FDB32C'}}/>
              <Text style={styles.skipText}> Skip</Text>

        </View>
        <Text style={styles.FooterText}> Powered by Jam Institute</Text>
          </View>
          </ScrollView>
        </SafeAreaView>
   
      );
    }
  }
  export default RegistrationIntro2;


  const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:'#2499D6',
 

      },
    imgContainer:{
      
     
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
      rowContainer:{
        margin:30,
      },
      SmallcardAvtar:{
        width:150,
        height:150,
      },
      titleText:{
        color:'#fff',
        fontSize:20,
        marginTop:40,
        textAlign:'center'
      },
      SubTitleText:{
        color:'#fff',
        fontSize:10,
        width:200,
        textAlign:'center'
       
      },
      FooterText:{
        color:'#fff',
        marginTop:15,
        textAlign:'center'
      }
     
    });