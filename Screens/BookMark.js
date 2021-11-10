
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert,Text,SafeAreaView,Image,ScrollView,TouchableOpacity} from 'react-native';
import { khowledgehubpic } from '../assets/Images/khowledgehubpic.jpg';

import { Card, ListItem, Button, Icon,Divider,CheckBox  } from 'react-native-elements'



 class BookMark extends Component {
 
    
   
    render() {
      return (
        <SafeAreaView >
        <ScrollView>
        <View style={styles.MainContainer}>
           <View style={styles.imgContainer}>
            <Text style={styles.TitleText}>BookMarks</Text>
          </View>

          <View style={styles.CardsContainer}>
          <Card containerStyle={styles.MarkBooksCard} >
              <View style={styles.RowContainer}>
        <View style={styles.CardimgContainer}>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.Cardpng} 

                    />
         </View>
         <View style={styles.cardProudctText}>
          <Text style={styles.ProudcutTitle}>Rich Dad Poor Dad</Text>
          <Text style={styles.ProudcutUser}>@MoniemHr</Text>
          <Text style={styles.DateOfProduct}>Favorite Date : 10/09/2021</Text>
          </View>
          <View style={styles.CardIcon}>
          <Icon
            reverse
            
            name='chevron-forward-outline'
            type='ionicon'
            color='#517fa4'
            onPress={() => this.props.navigation.navigate('BookDetailsPage') }
            />
         </View>
          </View>
        </Card>
        

        </View>
        <View style={styles.CardsContainer}>
          <Card containerStyle={styles.MarkBooksCard} >
              <View style={styles.RowContainer}>
        <View style={styles.CardimgContainer}>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.Cardpng} 

                    />
         </View>
         <View style={styles.cardProudctText}>
          <Text style={styles.ProudcutTitle}>Rich Dad Poor Dad</Text>
          <Text style={styles.ProudcutUser}>@MoniemHr</Text>
          <Text style={styles.DateOfProduct}>Favorite Date : 10/09/2021</Text>
          </View>
          <View style={styles.CardIcon}>
          <Icon
            reverse
            
            name='chevron-forward-outline'
            type='ionicon'
            color='#517fa4'
            onPress={() => this.props.navigation.navigate('BookDetailsPage') }
            />
         </View>
          </View>
        </Card>
        

        </View>
        <View style={styles.CardsContainer}>
          <Card containerStyle={styles.MarkBooksCard} >
              <View style={styles.RowContainer}>
        <View style={styles.CardimgContainer}>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.Cardpng} 

                    />
         </View>
         <View style={styles.cardProudctText}>
          <Text style={styles.ProudcutTitle}>Rich Dad Poor Dad</Text>
          <Text style={styles.ProudcutUser}>@MoniemHr</Text>
          <Text style={styles.DateOfProduct}>Favorite Date : 10/09/2021</Text>
          </View>
          <View style={styles.CardIcon}>
          <Icon
            reverse
            
            name='chevron-forward-outline'
            type='ionicon'
            color='#517fa4'
            onPress={() => this.props.navigation.navigate('BookDetailsPage') }
            />
         </View>
          </View>
        </Card>
        

        </View>
        <View style={styles.CardsContainer}>
          <Card containerStyle={styles.MarkBooksCard} >
              <View style={styles.RowContainer}>
        <View style={styles.CardimgContainer}>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.Cardpng} 

                    />
         </View>
         <View style={styles.cardProudctText}>
          <Text style={styles.ProudcutTitle}>Rich Dad Poor Dad</Text>
          <Text style={styles.ProudcutUser}>@MoniemHr</Text>
          <Text style={styles.DateOfProduct}>Favorite Date : 10/09/2021</Text>
          </View>
          <View style={styles.CardIcon}>
          <Icon
            reverse
            
            name='chevron-forward-outline'
            type='ionicon'
            color='#517fa4'
            onPress={() => this.props.navigation.navigate('BookDetailsPage') }
            />
         </View>
          </View>
        </Card>
        

        </View>
        <View style={styles.CardsContainer}>
          <Card containerStyle={styles.MarkBooksCard} >
              <View style={styles.RowContainer}>
        <View style={styles.CardimgContainer}>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.Cardpng} 

                    />
         </View>
         <View style={styles.cardProudctText}>
          <Text style={styles.ProudcutTitle}>Rich Dad Poor Dad</Text>
          <Text style={styles.ProudcutUser}>@MoniemHr</Text>
          <Text style={styles.DateOfProduct}>Favorite Date : 10/09/2021</Text>
          </View>
          <View style={styles.CardIcon}>
          <Icon
            reverse
            
            name='chevron-forward-outline'
            type='ionicon'
            color='#517fa4'
            onPress={() => this.props.navigation.navigate('BookDetailsPage') }
            />
         </View>
          </View>
        </Card>
        

        </View>
        <View style={styles.CardsContainer}>
          <Card containerStyle={styles.MarkBooksCard} >
              <View style={styles.RowContainer}>
        <View style={styles.CardimgContainer}>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.Cardpng} 

                    />
         </View>
         <View style={styles.cardProudctText}>
          <Text style={styles.ProudcutTitle}>Rich Dad Poor Dad</Text>
          <Text style={styles.ProudcutUser}>@MoniemHr</Text>
          <Text style={styles.DateOfProduct}>Favorite Date : 10/09/2021</Text>
          </View>
          <View style={styles.CardIcon}>
          <Icon
            reverse
            
            name='chevron-forward-outline'
            type='ionicon'
            color='#517fa4'
            onPress={() => this.props.navigation.navigate('BookDetailsPage') }
            />
         </View>
          </View>
        </Card>
        

        </View>
        <View style={styles.CardsContainer}>
          <Card containerStyle={styles.MarkBooksCard} >
              <View style={styles.RowContainer}>
        <View style={styles.CardimgContainer}>
        <Image
                        source={require('../assets/Images/BOOK1.jpg')}
                        style={styles.Cardpng} 

                    />
         </View>
         <View style={styles.cardProudctText}>
          <Text style={styles.ProudcutTitle}>Rich Dad Poor Dad</Text>
          <Text style={styles.ProudcutUser}>@MoniemHr</Text>
          <Text style={styles.DateOfProduct}>Favorite Date : 10/09/2021</Text>
          </View>
          <View style={styles.CardIcon}>
          <Icon
            reverse
            
            name='chevron-forward-outline'
            type='ionicon'
            color='#517fa4'
            onPress={() => this.props.navigation.navigate('BookDetailsPage') }
            />
         </View>
          </View>
        </Card>
        

        </View>

        
         

          </View>
        
          </ScrollView>
        </SafeAreaView>
   
      );
    }
  }
  export default BookMark;


  const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:'#eee',
        height:'100%',
        flex:1
      },
    imgContainer:{
     
        width:'60%',
        height:100,
        backgroundColor:'#FDB32C',
        alignItems:'flex-start',
        borderBottomEndRadius:150,
        justifyContent:'center',
        
        
      },
      TitleText:{
          color:'#fff',
          fontSize:26,
          fontWeight:'bold',
          textAlign:'center',
          width:'80%'

      },
      MarkBooksCard:{
        width:'95%',
        height:100,
        borderRadius:25,
        margin:10,
        padding:1
      },
      Cardpng:{
        width:'50%',
        height:100,
        alignItems:'flex-start',
        
        marginHorizontal:10,
        resizeMode:'contain'
    },
    CardsContainer:{
        alignItems:'center',
        flexDirection:'row',
        marginLeft:5
        
    },
    ProudcutTitle:{
        width:'100%',
        fontWeight:'bold',
        textAlign:'left',
        marginTop:10,
    
        fontSize:20
    },
    ProudcutUser:{
        width:'100%',
        fontWeight:'bold',
        textAlign:'left',
        marginTop:2,
        color:'#2499D6',
    
        fontSize:15
    },
    DateOfProduct:{
        width:'100%',
        fontWeight:'bold',
        textAlign:'left',
        marginTop:10,
        color:'#000',
        opacity:0.5,
        fontSize:10
    },
    RowContainer:{
        flexDirection:'row'
    },
    CardimgContainer:{
        width:'30%',
       
        height:100,
        alignItems:'flex-start',
    },
    cardProudctText:{
        width:'50%',
        alignItems:'baseline',
    },
    CardIcon:{
        width:'20%',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        height:100
    }
    
     
    });