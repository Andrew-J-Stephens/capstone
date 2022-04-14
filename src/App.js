
import './App.css';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Paper} from "@material-ui/core";
import React, {useState, useEffect} from 'react';
import FullChart from './components/FullChart';
import MapChart from './components/MapChart';
import Button from './components/Button';
import ReactDOM from "react-dom";
import ryersonLogo from './components/ryerson-logo-01.png';
import { Text, StyleSheet } from "react-native";

const useStyles = makeStyles((theme) => ({


  grid: {
    width: '100%',
    margin: '0px',
    height: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#9f62d9',
    background: '#f7f7f7',
    border: '2px solid #ededed',
  }
}));


const avgPH = 0;
const avgEcoli = 0;

function App() {

  const childFunc = React.useRef(null)

  const classes = useStyles();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [state, setState] = useState(3);
  const counter = React.useRef(0);
  
  

  return (
    <div style = {{fontWeight: 'bold', fontSize: '1.0rem'}}>
    <Grid container spacing ={2} className={classes.grid}>

      <Grid container spacing = {2} xs={3} className = {classes.grid}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>MJ03 Smart City</Paper>
          </Grid>
          <Grid item xs={12}>
            <Text style = {{fontWeight: 'bold', fontSize: 30}}>Source 1: <Text style = {{color: '#289623'}}>Stable</Text></Text>
          </Grid>
          <Grid item xs={12}>
          <Text style = {{fontWeight: 'bold', fontSize: 30}}>Source 2: <Text style = {{color: '#289623'}}>Stable</Text></Text>
          </Grid>
          <Grid item xs={12}>
          <Text style = {{fontWeight: 'bold', fontSize: 30}}>Source 3: <Text style = {{color: '#eb4034'}}>PH LOW</Text></Text>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>

              <b>Our Smart City Application:</b>
              Our application allows us to compare and contrast data quickly and accurately between different water sources through
              the use of the IOT Central platform. As a result, we can quickly receive warnings and address issues based on any concerns.
              Future plans would be to include prediction algorithms to be able to see in advance if a problem may occur
              


              <br /> <br />
              <img src={ryersonLogo} alt="ryersonLogo" width="150px"/>

            </Paper>
          </Grid>
      </Grid>
      <Grid container spacing = {2} xs={9} className = {classes.grid}>

        <Grid item xs={12}> 
          <Paper className={classes.paper}>

            <FullChart />

          </Paper>
        </Grid>

      </Grid>
    </Grid>
    </div>
  );
  
}

export default App;
