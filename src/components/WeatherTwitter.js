import React, { Component } from "react";
import styled from "styled-components";
// import "../bootstrap.css";
import { Timeline } from "react-twitter-widgets";

class WeatherTwitter extends Component {
  constructor(props) {
    super();
    console.log(props.city);
  }

  render() {
    return (
        <Container>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: this.props.city
        }}
        options={{
          username: "TwitterDev",
          height: "300px",
          width:"100%"        
        }}
        onLoad={() => console.log("Timeline is loaded!")}
      />
      </Container>
    );
  }
}
const Container = styled.div`
margin-left:5%;
margin-top:5%;
`
export default WeatherTwitter;
