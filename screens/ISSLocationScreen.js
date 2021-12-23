import axios from "axios";
import React from "react";
import { StyleSheet, Text, View,Image ,ImageBackground} from "react-native";
import MapView,{Marker} from 'react-native-maps'

export default class ISSLocationScreen extends React.Component {
  constructor(){
    super();
    this.state={
      location:{}
    }
  }
  getIssLocation=()=>{
   axios
    .get('https://api.wheretheiss.at/v1/satellites/25544')
        .then((response)=>{
          this.setState({
            location:response.data
          })
        })
       .catch((error)=>{
         alert(error.message)
       })
  }
  componentDidMount(){
    this.getIssLocation();
  }


  render() {
   if(Object.keys(this.state.location).length===0){
     return(

      <Text>Loading.....</Text>
     )
   }



else{

    return (
      <View style={{ flex: 1 }}>
         <View style={styles.mapContainer}>
         <MapView style={{width:'100%',height:'100%'}}
        region={{
          latitude: this.state.location.latitude,
          longitude: this.state.location.longitude,
          latitudeDelta: 100,
          longitudeDelta: 100
        }}
        
        >
          <Marker
          coordinate={{latitude:this.state.location.latitude,longitude:this.state.location.longitude}}
          >
            <Image source={require('../assets/iss_icon.png')} style={{width:30,height:30}}/>

          </Marker>






        </MapView>

         </View>
        
        
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Longitude:{this.state.location.longitude}</Text>
          <Text style={styles.infoText}>Latitude:{this.state.location.latitude}</Text>
          <Text style={styles.infoText}>Altitude:{this.state.location.altitude}</Text>
          <Text style={styles.infoText}>Velocity:{this.state.location.velocity}</Text>

          



        </View>








      </View>
    );
      }
  }
}

const styles=StyleSheet.create({
 infoContainer:{
  flex: 0.2,
  backgroundColor: 'white',
  marginTop: -10,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  padding: 30
 },
 infoText:{
  fontSize: 15,
  color: "black",
  fontWeight: "bold"
 },
 mapContainer:{
   flex:0.7
 }



})
