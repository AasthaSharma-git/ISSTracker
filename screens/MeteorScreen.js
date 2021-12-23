import React from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from 'axios'
export default class MeteorScreen extends React.Component {
  constructor(){
    super();
    this.state={
     meteors:{}
    }
  }
  getMeteorLocation=()=>{
   axios
    .get('https://api.nasa.gov/neo/rest/v1/feed?api_key=3WN5YGhfQFbdEWs7s3QqoSXktb8lTfd5zZBxwdDt')
        .then((response)=>{
          this.setState({
            meteors:response.data.near_earth_objects
          })
          
        })
       .catch((error)=>{
         alert(error.message)
       })

  }
  componentDidMount(){
    this.getMeteorLocation();
  }
  render() {
    if(Object.keys(this.state.meteors).length===0){
      return(
 
       <Text>Loading.....</Text>
      )
    }
    else{ 
     var meteor_arr=Object.keys(this.state.meteors).map(meteor_date=>{
        return this.state.meteors[meteor_date]
      })
     
      var meteors=[].concat.apply([],meteor_arr)
  
      meteors.forEach(function (element,index) {
       
        let diameter = (element.estimated_diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_max) / 2
        let threatScore = (diameter / element.close_approach_data[0].miss_distance.kilometers) * 1000000000
        element.threat_score = threatScore;
    });
    
     
      return (
        <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Text>Meteor Screen</Text>
        </View>
      )

    }
   ;
  }
}
