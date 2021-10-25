
import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert,Text,SafeAreaView,Image,ScrollView,} from 'react-native';
import { khowledgehubpic } from '../assets/Images/khowledgehubpic.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, ListItem, Button,Divider  } from 'react-native-elements'



 class DiscussionPage extends Component {
 
    
   
    render() {
      return (
        <SafeAreaView >
        <ScrollView>
        <View style={styles.MainContainer}>
            <View style={styles.UpContainer}> 
            <View> 
                <Image
                            source={require('../assets/Images/aricalspng.png')}
                            style={styles.UpAvtar} 

                        />
                </View>
                <Text style={styles.TitleStyle}> Discussion Forum </Text>    
            </View>
            <Card containerStyle={styles.cardstyle} >
        <View style={{flexDirection:'row' }}>
        <View>
        <Image
                        source={require('../assets/Images/cardspic.png')}
                        style={styles.cardAvtar} 

                    />
                    </View>
                    <View>
          <Text style={styles.CardText}>WordPress Templates</Text>
          <Text style={styles.CardSubText}>Here you can find 
            tools and templates for wordpress   </Text>
        </View>
        </View>
        <View style={{flexDirection:'row' , justifyContent:'center'}}>
        <Button icon={
    <Icon
            
      name="share-alt"
      size={15}
      color="white"
    />
  } 
  title=" Share"  onPress={() => this.props.navigation.navigate('Loginscreen') }containerStyle={{width:150}} titleStyle={{color:'#fff'}} buttonStyle={{borderRadius:15,backgroundColor:'#1B73A0',margin:10}}/>

        <Button
        icon={
    <Icon
            
      name="book"
      size={15}
      color="#1B73A0"
    />
  } 
         title=" View"  onPress={() => this.props.navigation.navigate('Loginscreen') }containerStyle={{width:150}} titleStyle={{color:'#1B73A0'}} buttonStyle={{borderRadius:15,backgroundColor:'#eee',margin:10,borderColor:'#1B73A0',borderWidth:2}}/>
        

        </View>
        </Card>
            <Card containerStyle={styles.cardstyle} >
        <View style={{flexDirection:'row' }}>
        <View>
        <Image
                        source={require('../assets/Images/cardspic.png')}
                        style={styles.cardAvtar} 

                    />
                    </View>
                    <View>
          <Text style={styles.CardText}>WordPress Templates</Text>
          <Text style={styles.CardSubText}>Here you can find 
            tools and templates for wordpress   </Text>
        </View>
        </View>
        <View style={{flexDirection:'row' , justifyContent:'center'}}>
        <Button icon={
    <Icon
            
      name="share-alt"
      size={15}
      color="white"
    />
  } 
  title=" Share"  onPress={() => this.props.navigation.navigate('Loginscreen') }containerStyle={{width:150}} titleStyle={{color:'#fff'}} buttonStyle={{borderRadius:15,backgroundColor:'#1B73A0',margin:10}}/>

        <Button
        icon={
    <Icon
            
      name="book"
      size={15}
      color="#1B73A0"
    />
  } 
         title=" View"  onPress={() => this.props.navigation.navigate('Loginscreen') }containerStyle={{width:150}} titleStyle={{color:'#1B73A0'}} buttonStyle={{borderRadius:15,backgroundColor:'#eee',margin:10,borderColor:'#1B73A0',borderWidth:2}}/>
        

        </View>
        </Card>
            <Card containerStyle={styles.cardstyle} >
        <View style={{flexDirection:'row' }}>
        <View>
        <Image
                        source={require('../assets/Images/cardspic.png')}
                        style={styles.cardAvtar} 

                    />
                    </View>
                    <View>
          <Text style={styles.CardText}>WordPress Templates</Text>
          <Text style={styles.CardSubText}>Here you can find 
            tools and templates for wordpress   </Text>
        </View>
        </View>
        <View style={{flexDirection:'row' , justifyContent:'center'}}>
        <Button icon={
    <Icon
            
      name="share-alt"
      size={15}
      color="white"
    />
  } 
  title=" Share"  onPress={() => this.props.navigation.navigate('Loginscreen') }containerStyle={{width:150}} titleStyle={{color:'#fff'}} buttonStyle={{borderRadius:15,backgroundColor:'#1B73A0',margin:10}}/>

        <Button
        icon={
    <Icon
            
      name="book"
      size={15}
      color="#1B73A0"
    />
  } 
         title=" View"  onPress={() => this.props.navigation.navigate('Loginscreen') }containerStyle={{width:150}} titleStyle={{color:'#1B73A0'}} buttonStyle={{borderRadius:15,backgroundColor:'#eee',margin:10,borderColor:'#1B73A0',borderWidth:2}}/>
        

        </View>
        </Card>
            <Card containerStyle={styles.cardstyle} >
        <View style={{flexDirection:'row' }}>
        <View>
        <Image
                        source={require('../assets/Images/cardspic.png')}
                        style={styles.cardAvtar} 

                    />
                    </View>
                    <View>
          <Text style={styles.CardText}>WordPress Templates</Text>
          <Text style={styles.CardSubText}>Here you can find 
            tools and templates for wordpress   </Text>
        </View>
        </View>
        <View style={{flexDirection:'row' , justifyContent:'center'}}>
        <Button icon={
    <Icon
            
      name="share-alt"
      size={15}
      color="white"
    />
  } 
  title=" Share"  onPress={() => this.props.navigation.navigate('Loginscreen') }containerStyle={{width:150}} titleStyle={{color:'#fff'}} buttonStyle={{borderRadius:15,backgroundColor:'#1B73A0',margin:10}}/>

        <Button
        icon={
    <Icon
            
      name="book"
      size={15}
      color="#1B73A0"
    />
  } 
         title=" View"  onPress={() => this.props.navigation.navigate('Loginscreen') }containerStyle={{width:150}} titleStyle={{color:'#1B73A0'}} buttonStyle={{borderRadius:15,backgroundColor:'#eee',margin:10,borderColor:'#1B73A0',borderWidth:2}}/>
        

        </View>
        </Card>
            <Card containerStyle={styles.cardstyle} >
        <View style={{flexDirection:'row' }}>
        <View>
        <Image
                        source={require('../assets/Images/cardspic.png')}
                        style={styles.cardAvtar} 

                    />
                    </View>
                    <View>
          <Text style={styles.CardText}>WordPress Templates</Text>
          <Text style={styles.CardSubText}>Here you can find 
            tools and templates for wordpress   </Text>
        </View>
        </View>
        <View style={{flexDirection:'row' , justifyContent:'center'}}>
        <Button icon={
    <Icon
            
      name="share-alt"
      size={15}
      color="white"
    />
  } 
  title=" Share"  onPress={() => this.props.navigation.navigate('Loginscreen') }containerStyle={{width:150}} titleStyle={{color:'#fff'}} buttonStyle={{borderRadius:15,backgroundColor:'#1B73A0',margin:10}}/>

        <Button
        icon={
    <Icon
            
      name="book"
      size={15}
      color="#1B73A0"
    />
  } 
         title=" View"  onPress={() => this.props.navigation.navigate('Loginscreen') }containerStyle={{width:150}} titleStyle={{color:'#1B73A0'}} buttonStyle={{borderRadius:15,backgroundColor:'#eee',margin:10,borderColor:'#1B73A0',borderWidth:2}}/>
        

        </View>
        </Card>
            <Card containerStyle={styles.cardstyle} >
        <View style={{flexDirection:'row' }}>
        <View>
        <Image
                        source={require('../assets/Images/cardspic.png')}
                        style={styles.cardAvtar} 

                    />
                    </View>
                    <View>
          <Text style={styles.CardText}>WordPress Templates</Text>
          <Text style={styles.CardSubText}>Here you can find 
            tools and templates for wordpress   </Text>
        </View>
        </View>
        <View style={{flexDirection:'row' , justifyContent:'center'}}>
        <Button icon={
    <Icon
            
      name="share-alt"
      size={15}
      color="white"
    />
  } 
  title=" Share"  onPress={() => this.props.navigation.navigate('Loginscreen') }containerStyle={{width:150}} titleStyle={{color:'#fff'}} buttonStyle={{borderRadius:15,backgroundColor:'#1B73A0',margin:10}}/>

        <Button
        icon={
    <Icon
            
      name="book"
      size={15}
      color="#1B73A0"
    />
  } 
         title=" View"  onPress={() => this.props.navigation.navigate('Loginscreen') }containerStyle={{width:150}} titleStyle={{color:'#1B73A0'}} buttonStyle={{borderRadius:15,backgroundColor:'#eee',margin:10,borderColor:'#1B73A0',borderWidth:2}}/>
        

        </View>
        </Card>
            <Card containerStyle={styles.cardstyle} >
        <View style={{flexDirection:'row' }}>
        <View>
        <Image
                        source={require('../assets/Images/cardspic.png')}
                        style={styles.cardAvtar} 

                    />
                    </View>
                    <View>
          <Text style={styles.CardText}>WordPress Templates</Text>
          <Text style={styles.CardSubText}>Here you can find 
            tools and templates for wordpress   </Text>
        </View>
        </View>
        <View style={{flexDirection:'row' , justifyContent:'center'}}>
        <Button icon={
    <Icon
            
      name="share-alt"
      size={15}
      color="white"
    />
  } 
  title=" Share"  onPress={() => this.props.navigation.navigate('Loginscreen') }containerStyle={{width:150}} titleStyle={{color:'#fff'}} buttonStyle={{borderRadius:15,backgroundColor:'#1B73A0',margin:10}}/>

        <Button
        icon={
    <Icon
            
      name="book"
      size={15}
      color="#1B73A0"
    />
  } 
         title=" View"  onPress={() => this.props.navigation.navigate('Loginscreen') }containerStyle={{width:150}} titleStyle={{color:'#1B73A0'}} buttonStyle={{borderRadius:15,backgroundColor:'#eee',margin:10,borderColor:'#1B73A0',borderWidth:2}}/>
        

        </View>
        </Card>
        <Text style={styles.FooterText}> Powered by Jam Institute</Text>
        </View>
          </ScrollView>
        </SafeAreaView>
   
      );
    }
  }
  export default DiscussionPage;


  const styles = StyleSheet.create({
    MainContainer:{
        backgroundColor:'#5E5357',
       

      },
      UpContainer:{
          backgroundColor:'#2499D6',
          height:250,
          borderBottomEndRadius:20,
          borderBottomLeftRadius:20,
          alignItems:'center'
      },
      UpAvtar:{
          resizeMode:'contain',
          height:200,
          width:290
      },
      TitleStyle:{
          fontSize:30,
          color:'#fff',
      },
      cardstyle:{
        borderRadius:25,
        height:250
      },
    
      cardAvtar:{
        width:150,
        height:150,
      },
      CardText:{
        fontSize:20,
        fontWeight:'bold',
        width:150,
         marginTop:30,
        color:'#2499D6',
        textAlign:'center'
      },
      CardSubText:{
        fontSize:13,
        width:150,
        color:'#000',
        textAlign:'center'
      },
      FooterText:{
        color:'#fff',
        marginTop:15,
        textAlign:'center',
        backgroundColor:'#000'
      }
    });