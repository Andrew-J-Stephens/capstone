import React, {Component} from 'react'
import { Doughnut } from 'react-chartjs-2';
import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie } from 'recharts';
import {Grid, Paper} from "@material-ui/core";
import { Text, StyleSheet } from "react-native";
import Button from 'simple-react-button';



const FullChart = ({childFunc}) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [temp, setTemp] = useState([]);
  const [ph, setPh] = useState([]);
  const [moisture, setMoisture] = useState([]);
  const [test, setTest] = useState(1);
  

  useEffect(() => {
    getData()
    setData2()
  }, [])

  setInterval(function(){ 
    getData()
  }, 10000);

  function setData1() {
    getData()
    setCurrentData(data)
  }

  function setData2() {
    getData()
    setCurrentData(data2)
  }

  function setData3() {
    setCurrentData(data3)
  }




  function getData() {
      /*fetch("https://mqtt-1091.azureiotcentral.com/api/devices?api-version=1.0"*/
      fetch("https://mqtt-1091.azureiotcentral.com/api/devices/2l1bpr7l6jw/telemetry/Temperature?api-version=1.0"
          
          
      , { 
        method: 'GET', 
        headers: new Headers({
          "Authorization": "SharedAccessSignature sr=6cb474a0-fa2d-4a9c-a8fb-509e0a4987e9&sig=y4os%2FKi0tYPyIFoLY3zuttQhNcaWMYJOtkfBvkIBDr4%3D&skn=waterdata&se=1678568909551"
        }) 

      })
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setTemp(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )

        fetch("https://mqtt-1091.azureiotcentral.com/api/devices/2l1bpr7l6jw/telemetry/pH?api-version=1.0"


        , { 
          method: 'GET', 
          headers: new Headers({
            "Authorization": "SharedAccessSignature sr=6cb474a0-fa2d-4a9c-a8fb-509e0a4987e9&sig=y4os%2FKi0tYPyIFoLY3zuttQhNcaWMYJOtkfBvkIBDr4%3D&skn=waterdata&se=1678568909551"
          }) 
        
        })
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setPh(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )

        fetch("https://mqtt-1091.azureiotcentral.com/api/devices/2l1bpr7l6jw/telemetry/Moisture?api-version=1.0"


        , { 
          method: 'GET', 
          headers: new Headers({
            "Authorization": "SharedAccessSignature sr=6cb474a0-fa2d-4a9c-a8fb-509e0a4987e9&sig=y4os%2FKi0tYPyIFoLY3zuttQhNcaWMYJOtkfBvkIBDr4%3D&skn=waterdata&se=1678568909551"
          }) 
        
        })
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setMoisture(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
  
  }

  const data = [
    {
      name: 'Temperature (Degrees C)',
      value: temp.value,
    },
    {
      name: 'PH',
      value: ph.value
    },
    {
      name: 'Moisture',
      value: moisture.value
    }
  ];

  const data2 = [
    {
      name: 'Temperature (Degrees C)',
      value: 22.5,
    },
    {
      name: 'PH',
      value: 4.44
    },
    {
      name: 'Moisture',
      value: 1
    }
  ];

  const data3 = [
    {
      name: 'Temperature (Degrees C)',
      value: 21.1,
    },
    {
      name: 'PH',
      value: 1.00
    },
    {
      name: 'Moisture',
      value: 1
    }
  ];

  const PHPieData = [
    { name: 'Source 1', value: data[1].value },
    { name: 'Source 2', value: data2[1].value },
    { name: 'Source 3', value: data3[1].value },
  ];

  const TempPieData = [
    { name: 'Source 1', value: data[0].value },
    { name: 'Source 2', value: data2[0].value },
    { name: 'Source 3', value: data3[0].value },
  ];

  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];
  
  const [currentData, setCurrentData] = useState(data);

  return (
    <div>
    <ResponsiveContainer width = '95%' height={300}>
      <BarChart
          width={500}
          height={10}
          data={currentData}
          margin={{
            top: 5,
            right: 100,
            left: 100,
            bottom: 5,
          }}
          barSize={200}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 5, right: 5 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#ffbb00" background={{ fill: '#eee' }} />
        </BarChart>
    </ResponsiveContainer>

    <Button onClick={setData1}>
        Source 1
    </Button>
    <Button onClick={setData2} style = {{padding: 10}}>
        Source 2
    </Button>
    <Button onClick={setData3}>
        Source 3
    </Button>


    <div style = {{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
    <Grid>
      
    <div style = {{width: '45%', flexDirection: 'column', alignContent: 'center', alignItems: 'center', background: '#d6d6d6', margin: 40, padding: 40, borderRadius: 40, paddingLeft: -50}}> 
    <ResponsiveContainer width = {400} height={400}>
    <div>
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={PHPieData}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
    <Text>PH Comparison</Text>
    </div>
    </ResponsiveContainer>
    

    </div>
    <div style = {{width: '45%', flexDirection: 'column', alignContent: 'center', alignItems: 'center', background: '#d6d6d6', margin: 40, padding: 40, borderRadius: 40, paddingLeft: -50}}> 
    <ResponsiveContainer width = '100%' height={400}>
    <div>
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={TempPieData}
        cx={200}
        cy={200}
        outerRadius={80}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
    <Text>Temperature Comparison</Text>
    </div>
    </ResponsiveContainer>
    </div>
    </Grid>
    </div>

    </div>
  )
}

export default FullChart