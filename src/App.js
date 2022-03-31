import React, { Component } from 'react'

import {Box , withStyles} from '@material-ui/core'

import logo from "./images/CoronaVirus.jpeg"

import Cards from "./components/Cards.jsx"
import { fetchData } from './service/api'

import {Typography} from '@material-ui/core'

import Countries from './components/Countries'

import Chart from './components/Chart.jsx'

const style={
  container:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column"
  },
  header:{
       background:"#f5f5f5",
       width:400,
       textAlign:"center",
       fontSize:20,
       padding:10,
       color:"#777"
  },
  lastUpdated:
  {
    color:"#777",
    fontSize:12
  }
}



export class App extends Component {

  state={
    data:{},
    country:""
  }

  async componentDidMount()
  {
        const fetchedData= await fetchData();
        this.setState({data:fetchedData});
        console.log(fetchedData);
  }


  handleCountryChange=async(country)=>
  {
    const fetchedData= await fetchData(country);
    this.setState({data:fetchedData, country:country});
    console.log(fetchedData);
  }

  render() {
    const {data} =this.state;
    return (
      <Box className={this.props.classes.container}>
           <Box className={this.props.classes.header}>Covid-19 CORONAVIRUS PANDEMIC</Box>
           <Typography className={this.props.classes.lastUpdated}>Last Updated: {data.lastUpdate && new Date(data.lastUpdate).toDateString()}</Typography>
           <img style={{width:350}} src={logo} alt="covid" />
           <Cards data={data}/>
           <Countries handleCountryChange={this.handleCountryChange}/>
            <Chart data={data}/>
      </Box>
    )
  }
}

export default withStyles(style)(App)


