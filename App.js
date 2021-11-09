import * as React from 'react';
import { Card, ListItem, Button,Divider  } from 'react-native-elements'
import { StyleSheet, TextInput, View, Alert,Text,SafeAreaView,Image,ScrollView,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './Screens/LoginPage';
import RegistrationScreen from './Screens/Registration';
import Homescreen from './Screens/Home';
import IntroPage from './Screens/IntroPage';
import RegistrationIntro1 from './Screens/RegistrationIntro1';
import RegistrationIntro2 from './Screens/RegistrationIntro2';
import RegistrationIntro3 from './Screens/RegistrationIntro3';
import TemplatesPage from './Screens/TemplatesPage';
import VideoPage from './Screens/VideoPage';
import BooksPage from './Screens/BooksPage';
import DiscussionPage from './Screens/DiscussionPage';
import EventsPage from './Screens/EventsPage';
import BookDetailsPage from './Screens/BookDetailsPage';
import ProfilePage from './Screens/ProfilePage';
import SearchJobPage from './Screens/SearchJobPage';
import OwnStorePage from './Screens/OwnStorePage';
import EditPage from './Screens/EditPage';
import PaymentScreen from './Screens/PaymentScreen';
import BuyPage from './Screens/BuyPage';
import InPutPayPal from './Screens/InPutPayPal';
import InPutPageVisa from './Screens/InPutPageVisa';
import JamUnity from './Screens/JamUnity';






const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        options={{headerStyle:{backgroundColor:'#2599D5'},
        headerTintColor:'#fff',
        title:'Knowledge Hub',
       
        
        }}
        
        name="IntroPage" component={IntroPage} />

        <Stack.Screen 
        options={{headerStyle:{backgroundColor:'#2599D5'},
        headerTintColor:'#fff',
        title:'Knowledge Hub',
        headerTitleStyle:{fontWeight:'bold',},
        headerShown: true,
        headerTransparent: true,
        headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      }
        
        }}
        
        name="Loginscreen" component={Loginscreen} />



        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />


        <Stack.Screen name="Homescreen" component={Homescreen}
        initialRouteName=""
       options={({navigation}) => ({
            headerTitle: () => <Image
                        source={require('./assets/Images/logoknow2.png')}
                        style={styles.tinyLogo}
                    />,
            headerRight: () => <Button title="My Profile" onPress={() => navigation.navigate('ProfilePage')} />,
          })}
        />
        
        
        
        <Stack.Screen name="RegistrationIntro1" component={RegistrationIntro1} />
        <Stack.Screen name="RegistrationIntro2" component={RegistrationIntro2} />
        <Stack.Screen name="RegistrationIntro3" component={RegistrationIntro3} />
        <Stack.Screen name="TemplatesPage" component={TemplatesPage} />
        <Stack.Screen name="VideoPage" component={VideoPage} />
        <Stack.Screen name="BooksPage" component={BooksPage} />
        <Stack.Screen name="DiscussionPage" component={DiscussionPage} />
        <Stack.Screen name="EventsPage" component={EventsPage} />
        <Stack.Screen name="BookDetailsPage" component={BookDetailsPage} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="SearchJobPage" component={SearchJobPage} />
        <Stack.Screen name="OwnStorePage" component={OwnStorePage} />
        <Stack.Screen name="EditPage" component={EditPage} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="BuyPage" component={BuyPage} />
        <Stack.Screen name="InPutPayPal" component={InPutPayPal} />
        <Stack.Screen name="InPutPageVisa" component={InPutPageVisa} />
        <Stack.Screen name="JamUnity" component={JamUnity} />


        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  tinyLogo:{
    width:50,
    height:50,
    resizeMode:'contain'
  }
});

  