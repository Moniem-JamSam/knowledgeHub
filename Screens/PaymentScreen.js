
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert,Text,SafeAreaView,Image,ScrollView,TouchableOpacity} from 'react-native';
import { khowledgehubpic } from '../assets/Images/khowledgehubpic.jpg';

import { Card, ListItem, Button, Icon,Divider  } from 'react-native-elements'



 class PaymentScreen extends Component {
 
    
   
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
            <TouchableOpacity onPress={() => this.props.navigation.navigate('BuyPage') }>
            <Card containerStyle={styles.cardstyle} >
        <View style={{flexDirection:'row' }}>
        <Image
                        source={require('../assets/Images/paymentPaid.png')}
                        style={styles.cardAvtar} 

                    />
          <Text style={styles.CardText}>Buy a membership</Text>
        </View>
        </Card>
        </TouchableOpacity>
            </View>
            <View style={styles.CardContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('BuyPage') }>
            <Card containerStyle={styles.cardstyle} >
        <View style={{flexDirection:'row' }}>
        <Image
                        source={require('../assets/Images/RecivePayment.png')}
                        style={styles.cardAvtar} 

                    />
          <Text style={styles.CardText}>Receive Your Payments</Text>
        </View>
        </Card>
        </TouchableOpacity>
            </View>
            <View style={styles.CardContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('PaymentScreen') }>
            <Card containerStyle={styles.cardstyle} >
        <View style={{flexDirection:'row' }}>
        <Image
                        source={require('../assets/Images/PaymentInfo.png')}
                        style={styles.cardAvtar} 

                    />
          <Text style={styles.CardText}>Information about payment policy</Text>
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
  export default PaymentScreen;


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
          margin:10
      },
      tinyLogo: {
        
        width: 352,
        height: 70,
        resizeMode:'contain'
      },
      cardstyle:{
        borderRadius:25,
    
      },
      homePic:{
      width:405,
        height: 300,
        resizeMode:'cover'
      },
      cardAvtar:{
        width:150,
        height:150,
        
      
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