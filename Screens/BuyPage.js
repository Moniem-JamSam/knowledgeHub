
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert,Text,SafeAreaView,Image,ScrollView,TouchableOpacity} from 'react-native';
import { khowledgehubpic } from '../assets/Images/khowledgehubpic.jpg';

import { Card, ListItem, Button, Icon,Divider  } from 'react-native-elements'



 class BuyPage extends Component {
 
    
   
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
            <View style={styles.CardContainer}>

            <TouchableOpacity style={styles.cardContainerShadow} onPress={() => this.props.navigation.navigate('InPutPayPal') }>
            <Card containerStyle={styles.cardstyle} >

        <Image
                        source={require('../assets/Images/PaypalLogo.png')}
                        style={styles.cardAvtar} 

                    />
     

        </Card>
        </TouchableOpacity>
            </View>
            <View style={styles.CardContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('InPutPageVisa') }>
            <Card containerStyle={styles.cardstyle} >
        <View style={{flexDirection:'row' }}>
        <Image
                        source={require('../assets/Images/MasterCard.png')}
                        style={styles.cardAvtar} 

                    />
        <Image
                        source={require('../assets/Images/VisaBuy.png')}
                        style={styles.cardAvtar} 

                    />
     
        </View>
        </Card>
        </TouchableOpacity>
            </View>
            <View style={styles.CardContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('JamUnity') }>
            <Card containerStyle={styles.cardstyle} >
        <View style={{flexDirection:'row' }}>
        <Image
                        source={require('../assets/Images/JamUNITY.png')}
                        style={styles.cardAvtarUnity} 

                    />
      
        </View>
        </Card>
        </TouchableOpacity>
            </View>
        



          </View>
          </ScrollView>
        </SafeAreaView>
   
      );
    }
  }
  export default BuyPage;


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
          margin:5
      },
      tinyLogo: {
        
        width: 352,
        height: 70,
        resizeMode:'contain'
      },
      cardstyle:{
        borderRadius:25,
        alignItems:'center',
        backgroundColor:'#EEE',
        shadowColor:'black'
    
      },
      homePic:{
      width:405,
        height: 300,
        resizeMode:'cover'
      },
      cardAvtar:{
        width:170,
        height:150,
        resizeMode:'contain'
      
      },
      cardAvtarUnity:{
        width:300,
        height:150,
        resizeMode:'contain',
        borderRadius:15
      
      },
      CardText:{
          alignContent:'flex-end',
          justifyContent:'center',
          alignItems:'center',
          marginTop:40,
          marginLeft:30,
          fontSize:23,
          color:'#146BA6',
          fontWeight:'bold',
          width:180
   

      },
     

    });