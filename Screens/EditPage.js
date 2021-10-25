import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

class EditPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getMovies() {
   
   
       fetch('https://hub.jamjoog.com/users/instapp.php',{
      method: 'post',
     headers: { 
       'Accept': 'application/json',
       'Content-type': 'application/json'
     },
     body:JSON.stringify({
      
}),
    }).then(response => response.json())
   .then(responseJson => {
     this.setState({isLoading:false})
       this.setState({
             data:responseJson,
             
           });
        
         })
         .catch(error => {
           console.error(error);
         });
    
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24,marginTop:40 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{flexDirection:'row'}}>
              <Text style={{fontWeight:'bold',marginRight:10}}>{item.id}</Text>
               <Text>Name :{item.name}</Text>
            </View>
            )}
          />
        )}
      </View>
    );
  }
};
export default EditPage;