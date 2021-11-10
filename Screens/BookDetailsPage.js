
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert,Text,SafeAreaView,Image,ScrollView,} from 'react-native';
import { khowledgehubpic } from '../assets/Images/khowledgehubpic.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button,Divider  } from 'react-native-elements'



 class BookDetailsPage extends Component {
 
    
   
    render() {
      return (
        <SafeAreaView >
        <ScrollView>
        <View style={styles.MainContainer}>
        <View style={styles.HeadConatianer}>
        <View style={styles.Imgcontainer}>
        
        <Image
                            source={require('../assets/Images/BOOK1.jpg')}
                            style={styles.UpAvtar} 

                        />
        <Text style={styles.BookTitle}>The Hypocrite world</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.BookWriter}>Uploaded By </Text>
        <Text style={styles.BookWriterName}>@Kiyosaki</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.PageNumber}>120 Page</Text>
        <Text style={styles.LanguageStyle}>English</Text>
        <View style={{flexDirection:'row',margin:10}}>
          
        <Image
                            source={require('../assets/Images/full_star1copy.png')}
                            style={styles.StarAvtar} 

                        />
        <Image
                            source={require('../assets/Images/full_star1copy.png')}
                            style={styles.StarAvtar} 

                        />
        <Image
                            source={require('../assets/Images/full_star1copy.png')}
                            style={styles.StarAvtar} 

                        />
        
         </View>
        
        </View>
        </View>
        
        



        </View>
        <View style={styles.SubTextContainer}>
                <Text style={styles.BookSubText}>is a 1997 book written by Robert Kiyosaki and Sharon Lechter. It advocates the importance of financial literacy (financial education), financial independence and building wealth through investing in assets, real estate investing, starting and owning businesses, as well as increasing one's financial intelligence (financial IQ).
                </Text>
                <Text style={styles.BookSubText}>Rich Dad Poor Dad is written in the style of a set of parables, ostensibly based on Kiyosaki's life.[1] The titular "rich dad" is purportedly his friend's father who accumulated wealth due to entrepreneurship and savvy investing, while the "poor dad" is claimed to be Kiyosaki's own father who he says worked hard all his life but never obtained financial security. However, no one has ever proven that Rich Dad, the man who supposedly gave Kiyosaki all his advice for wealthy living, ever existed. Nor has anyone ever documented any vast reserves of wealth earned by Kiyosaki prior to the publication of Rich Dad Poor Dad in 1997
                </Text>
        </View>
        <Divider
            orientation="horizontal"
            
            style={{height:10,backgroundColor:'#AAA5A7',marginVertical:10}}
            />
        <View>
        <View style={{flexDirection:'row',margin:10}}>
        <Text style={styles.ReadMoreText}>Read more from</Text>
        <Text style={styles.ReadMoreText2}> Robert Kiyosaki</Text>
        </View>
        <View style={{flexDirection:'row',margin:10}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image
                            source={require('../assets/Images/BOOK1.jpg')}
                            style={styles.BooksReadMore} 

                        />
        <Image
                            source={require('../assets/Images/BOOK1.jpg')}
                            style={styles.BooksReadMore} 

                        />
        <Image
                            source={require('../assets/Images/BOOK1.jpg')}
                            style={styles.BooksReadMore} 

                        />
        <Image
                            source={require('../assets/Images/BOOK1.jpg')}
                            style={styles.BooksReadMore} 

                        />
        <Image
                            source={require('../assets/Images/BOOK1.jpg')}
                            style={styles.BooksReadMore} 

                        />
        <Image
                            source={require('../assets/Images/BOOK1.jpg')}
                            style={styles.BooksReadMore} 

                        />
        <Image
                            source={require('../assets/Images/BOOK1.jpg')}
                            style={styles.BooksReadMore} 

                        />




                        </ScrollView>

        </View>
        </View>
        <Divider
            orientation="horizontal"
            
            style={{height:10,backgroundColor:'#AAA5A7',marginVertical:10}}
            />    

<View>
        <View style={{flexDirection:'row',margin:10}}>
        <Text style={styles.ReadMoreText}>Related Books</Text>
        
        </View>
        <View style={{flexDirection:'row',margin:10}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Image
                            source={require('../assets/Images/BOOK1.jpg')}
                            style={styles.BooksReadMore} 

                        />
        <Image
                            source={require('../assets/Images/BOOK1.jpg')}
                            style={styles.BooksReadMore} 

                        />
        <Image
                            source={require('../assets/Images/BOOK1.jpg')}
                            style={styles.BooksReadMore} 

                        />
         <Image
                            source={require('../assets/Images/BOOK1.jpg')}
                            style={styles.BooksReadMore} 

                        />
         <Image
                            source={require('../assets/Images/BOOK1.jpg')}
                            style={styles.BooksReadMore} 

                        />
                        </ScrollView>

        </View>
        </View>
        <Divider
            orientation="horizontal"
            
            style={{height:10,backgroundColor:'#AAA5A7',marginVertical:10}}
            />    


            
        <View style={{flexDirection:'row' , justifyContent:'center'}}>
        <Button icon={
    <Icon
            
      name="share-alt"
      size={15}
      color="white"
    />
  } 
  title=" Share"  onPress={() => this.props.navigation.navigate('Homescreen') }containerStyle={{width:120}} titleStyle={{color:'#fff'}} buttonStyle={{borderRadius:15,backgroundColor:'#1B73A0',margin:5}}/>

        <Button
        icon={
    <Icon
            
      name="book"
      size={15}
      color="#1B73A0"
    />
  } 
         title=" View"  onPress={() => this.props.navigation.navigate('Homescreen') }containerStyle={{width:120}} titleStyle={{color:'#1B73A0'}} buttonStyle={{borderRadius:15,backgroundColor:'#eee',margin:5,borderColor:'#1B73A0',borderWidth:2}}/>
         <Button icon={
    <Icon
            
      name="download"
      size={15}
      color="white"
    />
  } 
  title=" Download"  onPress={() => this.props.navigation.navigate('Homescreen') }containerStyle={{width:120}} titleStyle={{color:'#fff'}} buttonStyle={{borderRadius:15,backgroundColor:'#1B73A0',margin:5}}/>
        

        </View>

        </View>
        
          </ScrollView>
        </SafeAreaView>
   
      );
    }
  }
  export default BookDetailsPage;


  const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:'#EEEEEE',
      
      },
      HeadConatianer:{
        backgroundColor:'#5E5357',
      
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25
      },
      Imgcontainer:{
        alignItems:'center',
        marginTop:35
      },
      BookTitle:{
        color:'#fff',
        fontSize:29,
        fontFamily:'Open Sans'
      },
      BookWriter:{
        fontSize:15,
        color:'#fff',
        marginHorizontal:5
      },
      PageNumber:{
        fontSize:15,
        color:'#fff',
        margin:10
      },
      BookWriterName:{
        color:'#2499D6',
        fontWeight:'bold'
      },
      LanguageStyle:{
          color:'#2499D6',
          margin:10
      },
      StarAvtar:{
          width:15,
          height:15,
          margin:1
      },
      BookSubText:{
          margin:10,
          color:'#5E5357'
      },
      ReadMoreText:{
      
          fontSize:18,
          fontWeight:'500',
        
      },
      ReadMoreText2:{
        
          fontSize:18,
          fontWeight:'bold',
          color:'#2499D6'
      },
      BooksReadMore:{
          margin:5,
          borderRadius:25
      }
    });