
import React, { Component, useState } from 'react';
import { StyleSheet, TextInput, View, Alert,Text,SafeAreaView,Image,ScrollView,TouchableOpacity } from 'react-native';
import { khowledgehubpic } from '../assets/Images/khowledgehubpic.jpg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card, ListItem, Button, Icon,Divider  } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';






 class Homescreen extends Component {
       state = { user: ''}
  
    displayData = async ()=>{  
      try{  
        let user = await AsyncStorage.getItem('UserEmail');  
        alert(user);  
      }  
      catch(error){  
        alert(error)  
      }  
    }  
 
    render() {
    
      return (
        <SafeAreaView style={styles.MainContainer}>
        <ScrollView>
        <View style={styles.ImgContainer}>
        <Image
                        source={require('../assets/Images/home33.jpg')}
                        style={styles.homePic} 

                    />

        </View>
     

   
        <TouchableOpacity onPress={() => this.props.navigation.navigate('TemplatesPage') }>
        <Card containerStyle={styles.cardstyle}   >
        <View style={{flexDirection:'row' }}>
        <Image
                        source={require('../assets/Images/voicepng.png')}
                        style={styles.cardAvtar} 
                        
                    />
         
          <Text style={styles.CardText} >Templates  & Tools</Text>
          </View>
       
        </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('VideoPage') }>
        <Card containerStyle={styles.cardstyle} >
        <View style={{flexDirection:'row' }}>
        <Image
                        source={require('../assets/Images/videopng.png')}
                        style={styles.cardAvtar} 

                    />
          <Text style={styles.CardText} >Video & Audio</Text>
        </View>
        </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('BooksPage') }>
        <Card containerStyle={styles.cardstyle} >
        <View style={{flexDirection:'row' }}>
        <Image
                        source={require('../assets/Images/books2png.png')}
                        style={styles.cardAvtar} 

                    />
          <Text style={styles.CardText}>Books & UserGuides</Text>
        </View>
        </Card>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => this.props.navigation.navigate('DiscussionPage') }>
        <Card containerStyle={styles.cardstyle} >
        <View style={{flexDirection:'row'}}>
        <Image
                        source={require('../assets/Images/aricalspng.png')}
                        style={styles.cardAvtar} 

                    />
          <Text style={styles.CardText}>Discussion Forum</Text>
        </View>
        </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('EventsPage') }>
        <Card containerStyle={styles.cardstyle} >
        <View style={{flexDirection:'row' }}>
        <Image
                        source={require('../assets/Images/blogspng.png')}
                        style={styles.cardAvtar} 

                    />
          <Text style={styles.CardText}>Events & Meetups</Text>
        </View>
        </Card>
        </TouchableOpacity>

        <View style={styles.mostreadContainer}>
        <View style={styles.titleContainer}>

        <Divider
          orientation="horizontal"
          
          style={{height:10,backgroundColor:'#90C3E4',marginVertical:10}}
        />  





          <Text style={styles.titleStyle}>Most  Read  Books & Articles</Text>
          <Text style={styles.MoreStyle}>More</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BookDetailsPage') }>
        <Card containerStyle={styles.MostReadCardstyle} >
        <View style={{margin:10}}>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.BookStyle} 

                    />
          <Text style={styles.PriceText}>Free</Text>
          <Text style={styles.WriterText}>@layan123</Text>
        </View>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BookDetailsPage') }>
        <Card containerStyle={styles.MostReadCardstyle} >
        <View>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.BookStyle} 

                    />
          <Text style={styles.PriceText}>Free</Text>
          <Text style={styles.WriterText}>@layan123</Text>
        </View>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BookDetailsPage') }>
        <Card containerStyle={styles.MostReadCardstyle} >
        <View>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.BookStyle} 

                    />
          <Text style={styles.PriceText}>Free</Text>
          <Text style={styles.WriterText}>@layan123</Text>
        </View>
        </Card>
        </TouchableOpacity>
</ScrollView>
        </View>


        </View>

        <Divider
  orientation="horizontal"
  
  style={{height:10,backgroundColor:'#90C3E4',marginVertical:10}}
/>

        <View style={styles.recommenContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>Recommend Videos  & Podcast</Text>
          <Text style={styles.MoreStyle}>More</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card containerStyle={styles.RecommendCardstyle} >
        <View style={{margin:10}}>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.Book2Style} 

                    />
          <Text style={styles.PriceText}>Free</Text>
          <Text style={styles.WriterText}>@layan123</Text>
        </View>
        </Card>
        <Card containerStyle={styles.RecommendCardstyle} >
        <View>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.Book2Style} 

                    />
          <Text style={styles.PriceText}>Free</Text>
          <Text style={styles.WriterText}>@layan123</Text>
        </View>
        </Card>
        <Card containerStyle={styles.RecommendCardstyle} >
        <View>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.Book2Style} 

                    />
          <Text style={styles.PriceText}>Free</Text>
          <Text style={styles.WriterText}>@layan123</Text>
        </View>
        </Card>
</ScrollView>
        </View>

        <Divider
  orientation="horizontal"
  
  style={{height:10,backgroundColor:'#90C3E4',marginVertical:10}}
/>
        <View style={styles.mostreadContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>Recently added templates</Text>
          <Text style={styles.MoreStyle}>More</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('BookDetailsPage') }>
        <Card containerStyle={styles.MostReadCardstyle} >
        <View style={{margin:10}}>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.BookStyle} 

                    />
          <Text style={styles.PriceText}>Free</Text>
          <Text style={styles.WriterText}>@layan123</Text>
        </View>
        </Card>
</TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BookDetailsPage') }>
        <Card containerStyle={styles.MostReadCardstyle} >
        <View style={{margin:10}}>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.BookStyle} 

                    />
          <Text style={styles.PriceText}>Free</Text>
          <Text style={styles.WriterText}>@layan123</Text>
        </View>
        </Card>
</TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BookDetailsPage') }>
        <Card containerStyle={styles.MostReadCardstyle} >
        <View style={{margin:10}}>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.BookStyle} 

                    />
          <Text style={styles.PriceText}>Free</Text>
          <Text style={styles.WriterText}>@layan123</Text>
        </View>
        </Card>
</TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BookDetailsPage') }>
        <Card containerStyle={styles.MostReadCardstyle} >
        <View style={{margin:10}}>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.BookStyle} 

                    />
          <Text style={styles.PriceText}>Free</Text>
          <Text style={styles.WriterText}>@layan123</Text>
        </View>
        </Card>
</TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BookDetailsPage') }>
        <Card containerStyle={styles.MostReadCardstyle} >
        <View style={{margin:10}}>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.BookStyle} 

                    />
          <Text style={styles.PriceText}>Free</Text>
          <Text style={styles.WriterText}>@layan123</Text>
        </View>
        </Card>
</TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BookDetailsPage') }>
        <Card containerStyle={styles.MostReadCardstyle} >
        <View style={{margin:10}}>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.BookStyle} 

                    />
          <Text style={styles.PriceText}>Free</Text>
          <Text style={styles.WriterText}>@layan123</Text>
        </View>
        </Card>
</TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('BookDetailsPage') }>
        <Card containerStyle={styles.MostReadCardstyle} >
        <View style={{margin:10}}>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.BookStyle} 

                    />
          <Text style={styles.PriceText}>Free</Text>
          <Text style={styles.WriterText}>@layan123</Text>
        </View>
        </Card>
</TouchableOpacity>

        
    </ScrollView>
            </View>
            </View>
            <Divider
      orientation="horizontal"
      
      style={{height:10,backgroundColor:'#90C3E4',marginVertical:10}}
    />
    <View style={styles.idkContainer}>
    
    <View style={styles.titleContainer}>
              <Text style={styles.titleStyle}>I Dont Know What To Read ?</Text>
              <Text style={styles.MoreStyle}>More</Text>
            </View>
    <View style={{flexDirection:'row',justifyContent:'center'}}>

    <Card containerStyle={styles.Smallcardstyle} >
            <View style={{flexDirection:'row' ,justifyContent:'space-around'}}>
            <Image
                            source={require('../assets/Images/books2png.png')}
                            style={styles.SmallcardAvtar} 

                        />
              <Text style={styles.SmallCardText}>Books & UserGuides</Text>
            </View>
            </Card>
    <Card containerStyle={styles.Smallcardstyle} >
            <View style={{flexDirection:'row' ,justifyContent:'space-around'}}>
            <Image
                            source={require('../assets/Images/books2png.png')}
                            style={styles.SmallcardAvtar} 

                        />
              <Text style={styles.SmallCardText}>Books & UserGuides</Text>
            </View>
            </Card>
    </View>
    <View style={{flexDirection:'row',justifyContent:'center'}}>

    <Card containerStyle={styles.Smallcardstyle} >
            <View style={{flexDirection:'row' ,justifyContent:'space-around'}}>
            <Image
                            source={require('../assets/Images/books2png.png')}
                            style={styles.SmallcardAvtar} 

                        />
              <Text style={styles.SmallCardText}>Books & UserGuides</Text>
            </View>
            </Card>
    <Card containerStyle={styles.Smallcardstyle} >
            <View style={{flexDirection:'row' ,justifyContent:'space-around'}}>
            <Image
                            source={require('../assets/Images/books2png.png')}
                            style={styles.SmallcardAvtar} 

                        />

              <Text style={styles.SmallCardText}>Books & UserGuides</Text>
            </View>
            </Card>
    </View>



    </View>



            </View>
            <View style={styles.footer}>
      <Text style={styles.FooterText}> Powered by Jam Institute</Text>
    </View>



            </ScrollView>

            </SafeAreaView>
      
          );
        }
      }
      export default Homescreen;


      const styles = StyleSheet.create({
        MainContainer:{
          backgroundColor:'#eeee'
        },
        ImgContainer:{
          justifyContent:'center',
          backgroundColor:'#fff',
          alignItems:'center'
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
          fontSize:30,
          width:'55%',
          margin:10,
          marginTop:45,
          color:'#2499D6'
        },
        mostreadContainer:{
        margin:5
        },
        titleContainer:{
          flexDirection:'row',
          margin:10
        },
        titleStyle:{
          fontSize:20,
          fontWeight:'bold',
          color:'#2499D6'
        },
        MoreStyle:{
          fontSize:15,
          color:'#2499D6',
          marginLeft:50,
          marginTop:10,
          fontWeight:'600',
          textDecorationLine:'underline'
        },
        
        MostReadCardstyle:{
          justifyContent:'center',
          alignItems:'center',
          width:148,
          height:250,
          borderRadius:25,
          margin:5,
          padding:1
        },
        BookStyle:{
          justifyContent:'center',
          alignItems:'center',
          width:200,
          height:180,
          resizeMode:'contain',
          borderRadius:10,
          margin:1
        },
        PriceText:{
          fontSize:17,
          textAlign:'center',
          margin:5,
          marginBottom:0,

          color:'#3E905A'
        },
        WriterText:{
          fontSize:20,
          textAlign:'center',
          margin:5,
          marginTop:1,
          color:'#054D7E'
        },
        recommenContainer:{
          margin:2
        },
        RecommendCardstyle:{
          justifyContent:'center',
          alignItems:'center',
          width:200,
          borderRadius:10,
          padding:5

        },
        Book2Style:{
        
          width:190,
          height:155,
          resizeMode:'cover',
          borderRadius:10,

        },
        idkContainer:{
        padding:10
        },
        Smallcardstyle:{
          borderRadius:25,
          margin:10,
          width:'50%'
        },
        SmallcardAvtar:{
          width:'40%',
          height:100,
        },
        SmallCardText:{
          fontSize:15,
          width:'50%',
          margin:5,
          marginTop:30,
          color:'#2499D6'
        },
        footer:{
          height:30,
          width:'100%',
          backgroundColor:'#000',
          justifyContent:'center'
        },
        FooterText:{
          color:'#fff',
          textAlign:'center',
        }
        ,   
        TextComponentStyle: {
          fontSize: 20,
          color: "#000",
          textAlign: 'center', 
          marginBottom: 15
        }
        });