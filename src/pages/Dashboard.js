import React, { Component } from "react";
// import "../bootstrap.css";
import styled from "styled-components";
import axios from "axios";
import WeatherDetail from "../components/WeatherDetail";
import WeatherWeek from "../components/WeatherWeek";
import WeatherTwitter from "../components/WeatherTwitter";

const HOST = "https://api.apixu.com/v1/forecast.json";
const KEY = "f2dbda67de814bf8bf895350192301";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = { data: null, city: "Sydney", isLoading: false };
  }

  fetchData = async () => {
    console.log("fetchdata....");
    axios
      .get(HOST + "?key=" + KEY + "&q=" + this.state.city + "&days=5")
      .then(res => {
        const data = res.data;

        this.setState({ data: data });
      })
      .catch(err => {
        console.warn(err);
      });
  };

  getData = value => {};
  componentDidMount() {
    this.fetchData();
  }

  handleChange = event => {
    //important！setState is async,must use call back
    this.setState({ city: event.target.value }, () => {
      this.fetchData();
    });
  };

  render() {
    const data = this.state.data;
    console.log("rendering" + data);
    return (
      <div>
        <BackgroundContainer>
          <BoardContainer class="col-md-12" >
            <TopContainer  class="row" > 
              <DetailContainer class="col-md-8"> 
                {data && data.current && (
                  <WeatherDetail
                    temp={data.current.temp_c}
                    humidity={data.current.humidity}
                    wind={data.current.wind_mph}
                    condition={data.current.condition.text}
                  />
                )}
              </DetailContainer>

              <CityContainer class="col-md-4" >
                <div className="form-group">
                  <h1> {this.state.city}</h1>
                  <select
                    className="form-control"
                    id="city"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                  >
                    <option value="Sydney">Sydney</option>
                    <option value="London">London</option>
                    <option value="Tokyo">Tokyo</option>
                    <option value="Pairs">Paris</option>
                  </select>
                </div>
              </CityContainer>
            </TopContainer>

            <BottomContainer class="row">
              <TweetContainer class="col-md-4">
                <WeatherTwitter city={this.state.city} />
              </TweetContainer>
              <Seperater></Seperater>

              <WeekContainer class="col-md-8">
                {data &&
                  data.forecast.forecastday.map((day, id) => (
                    <WeatherWeek
                      key={id}
                      date={day.date}
                      icon={day.day.condition.icon}
                      temp={day.day.avgtemp_c}
                      sum={day.day.condition.text}
                    />
                  ))}
              </WeekContainer>
            </BottomContainer>
          </BoardContainer>
        </BackgroundContainer>
      </div>
    );
  }
}

export default Dashboard;

const BackgroundContainer = styled.div`
  height: 100%;
  background-image: linear-gradient(66deg, deeppink, purple, blue);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoardContainer = styled.div`
  height: 90%;
  width: 80%;
  background-color: darkblue;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
//todo fix the % issues

const TopContainer = styled.div`
  height: 55%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
 
`;


const DetailContainer = styled.div`
  display: flex;
  justify-content: sp;
  align-items: center;
  flex: 3;
  min-width:300px;
  flex-wrap:wrap;
`;

const CityContainer = styled.div`
  margin-top: 10%;
  margin-right: 10%;
  flex: 2;

  display: flex;
  justify-content: center;
  color: white;
  text-decoration: underline;
`;

const BottomContainer = styled.div`
  height: 50%;
  width: 100%;
  margin-top: -5%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-shrink:1;
`;


const TweetContainer = styled.div`
  height: 100%;
  flex: 2;
`;

const WeekContainer = styled.div`
  height: 100%;
  flex: 3;
  display: flex;
  flex-direction: row;
  padding-left:2%;
`;

const Seperater = styled.div`
  margin-top:5%;
  height: 60%;
  width:3px;
  background-color:darkblue;
 
`;
