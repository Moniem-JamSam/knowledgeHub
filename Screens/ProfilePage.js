
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert,Text,SafeAreaView,Image,ScrollView,TouchableOpacity} from 'react-native';
import { khowledgehubpic } from '../assets/Images/khowledgehubpic.jpg';

import { Card, ListItem, Button, Icon,Divider  } from 'react-native-elements'



 class ProfilePage extends Component {
 
    
   
    render() {
      return (
        <SafeAreaView >
        <ScrollView>
        <View style={styles.MainContainer}>
        <View style={styles.headerContainer}>
        <View style={styles.ImgContainer}>
        <Image
                        source={require('../assets/Images/Profile.jpg')}
                        style={styles.homePic} 

                    />
        </View>
        <Text style={styles.UserName}>Layan Mask</Text>
        <Text style={styles.UserAccountName}>@Layan141</Text>

        <View style={styles.FollowersContainer}>
        <View style={{alignItems:'center'}}>
        <Text style={styles.FollowersText}>Reviews</Text>
        <Divider
            orientation="horizontal"
            
            style={{height:1,width:80,backgroundColor:'#000',borderColor:'#000'}}
            />  
        
        <Text style={styles.FollowersText}>145</Text>
        </View>
        <Divider
            orientation="vertical"
            
            style={{height:1,width:1,backgroundColor:'#000',borderColor:'#000'}}
            />  
        <View style={{alignItems:'center'}}>
        <Text style={styles.FollowersText}>Followers</Text>
        <Divider
            orientation="horizontal"
            
            style={{height:1,width:80,backgroundColor:'#000',borderColor:'#000'}}
            />  
        <Text style={styles.FollowersText}>547</Text>
        </View>
        <Divider
            orientation="vertical"
            
            style={{height:1,width:1,backgroundColor:'#000',borderColor:'#000'}}
            />  
        <View style={{alignItems:'center'}}>
        <Text style={styles.FollowersText}>Following</Text>
        <Divider
            orientation="horizontal"
            
            style={{height:1,width:80,backgroundColor:'#000',borderColor:'#000'}}
            />  
        <Text style={styles.FollowersText}>1237</Text>
        </View>
        
        
    
        
        </View>
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate('EditPage') }
        ><Text style={styles.EditText}>Edit Profile</Text></TouchableOpacity>
        
         
        </View>
        <View style={styles.CardsContainer}>
            <View style={styles.RowCardContainer}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchJobPage') }>
            <Card containerStyle={styles.MostReadCardstyle} >
        <View>
        <Image
                        source={require('../assets/Images/searchJob.png')}
                        style={styles.Cardpng} 

                    />
   
          <Text style={styles.titleText}>Search Job Or Your team</Text>
        </View>
        </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('OwnStorePage') }>
        <Card containerStyle={styles.MostReadCardstyle} >
        <View>
        <Image
                        source={require('../assets/Images/shopPng.png')}
                        style={styles.Cardpng} 

                    />
       
          <Text style={styles.titleText}>Create your own Bookstore </Text>
        </View>
        </Card>
        </TouchableOpacity>

            </View>
            <View style={styles.RowCardContainer}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('BookDetailsPage') }>
            <Card containerStyle={styles.MostReadCardstyle} >
        <View>
        <Image
                        source={require('../assets/Images/Favoritespng.png')}
                        style={styles.Cardpng} 

                    />
   
          <Text style={styles.titleText}>Favorites</Text>
        </View>
        </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('BookDetailsPage') }>
        <Card containerStyle={styles.MostReadCardstyle} >
        <View>
        <Image
                        source={require('../assets/Images/download-2-48.png')}
                        style={styles.Cardpng} 

                    />
       
          <Text style={styles.titleText}>Downloads</Text>
        </View>
        </Card>
        </TouchableOpacity>

            </View>
            <View style={styles.RowCardContainer}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('BookDetailsPage') }>
        <Card containerStyle={styles.MostReadCardstyle} >
        <View>
        <Image
                        source={require('../assets/Images/bookmark.png')}
                        style={styles.Cardpng} 

                    />
   
          <Text style={styles.titleText}>Bookmarks</Text>
        </View>
        </Card>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => this.props.navigation.navigate('BookDetailsPage') }>
        <Card containerStyle={styles.MostReadCardstyle} >
        <View>
        <Image
                        source={require('../assets/Images/uploadpng.png')}
                        style={styles.Cardpng} 

                    />
       
          <Text style={styles.titleText}>Uploads</Text>
        </View>
        </Card>
        </TouchableOpacity>

            </View>
   
 



            <View style={styles.RowCardContainer}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('PaymentScreen') }>
            <Card containerStyle={styles.MostReadCardstylePayment} >
            
           

            <Text style={styles.titleText}>Payment Details </Text>
            <Text style={styles.subtitlePayment}>Here you can see your Paid Dates and Payment ways </Text>
          
            </Card>
            </TouchableOpacity>
            </View>
            <Divider
                orientation="horizontal"
                
                style={{height:10,width:'100%',backgroundColor:'#AAA5A7',marginVertical:10}}
                />
         </View>
         <View style={styles.SettingContainer}>
            <Text style={styles.TextSet}>Help & Support</Text>
            <Image
                        source={require('../assets/Images/downarrow.png')}
                        style={styles.SettingLogo} 

                    />
            </View>
            <Divider
                orientation="horizontal"
                
                style={{height:10,width:'100%',backgroundColor:'#AAA5A7',marginVertical:10}}
                />
            <View style={styles.SettingContainer}>
            <Text style={styles.TextSet}>Setting & Privacy</Text>
            <Image
                        source={require('../assets/Images/downarrow.png')}
                        style={styles.SettingLogo} 

                    />
            </View>
            <Text style={styles.FooterText}> Powered by Jam Institute</Text>
          </View>
          </ScrollView>
        </SafeAreaView>
   
      );
    }
  }
  export default ProfilePage;


  const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:'#eeee',
        height:'100%',
        flex:1,
      
      },
      headerContainer:{
        backgroundColor:'#FDB32C',
        height:'100%',
        flex:1,
        height:280,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        alignItems:'center',
      },
      ImgContainer:{
          width:100,
          height:100,
          backgroundColor:'#eee',
          borderRadius:50,
          justifyContent:'center',
          alignItems:'center',
          marginTop:30
      },
      homePic:{
          width:100,
          height:100,
          borderRadius:50

      },
      UserName:{
          color:'#fff',
          fontSize:20
      },
      UserAccountName:{
          color:'#5E5357',
          fontSize:15
      },
      FollowersContainer:{
          flexDirection:'row'
      },
      FollowersText:{
          marginHorizontal:10,
          fontSize:16,
          color:'#000',
          marginVertical:5
      },
      EditText:{
          color:'#2499D6',
          marginVertical:10,
          textDecorationLine:'underline'
      },
      CardsContainer:{
          justifyContent:'center',
          alignItems:'center'
      },
      RowCardContainer:{
          flexDirection:'row',
          flex:2
      },
      Cardpng:{
          width:100,
          height:100,
          alignItems:'center',
          justifyContent:'center',
          marginHorizontal:10,
          resizeMode:'contain'
      },
      MostReadCardstyle:{
        justifyContent:'center',
        alignItems:'center',
        width:148,
        height:200,
        borderRadius:25,
        margin:5,
        padding:1
      },
      MostReadCardstylePayment:{
        justifyContent:'center',
        alignItems:'center',
        width:300,
        height:100,
        borderRadius:25,
        margin:5,
        padding:1
      },
      titleText:{
          color:'#2499D6',
          textAlign:'center',
          margin:5,
          fontSize:18
      },
      subtitlePayment:{
        color:'#000',
        textAlign:'center',
        
        fontSize:15
      },
      SettingContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        flex:3
      },
      TextSet:{
        fontSize:17,
        marginRight:40,
        marginLeft:5,
      },
      SettingLogo:{
          width:25,
          height:25,
          marginLeft:40,
          marginRight:5
      },
      FooterText:{
        color:'#fff',
        marginTop:15,
        textAlign:'center',
        backgroundColor:'#000'
      }

    });