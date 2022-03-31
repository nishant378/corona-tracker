
import React from 'react'

import {makeStyles, Typography, Box ,CircularProgress , Grid} from '@material-ui/core'

import Card from './Card.jsx'

const useStyles=makeStyles({
    component:{
        margin:"30px 0",
        flexDirection:"row",
        alignItems:"center",
        display:"flex"
    },
    container:{
             color:"Red",
             marginBottom:10
    }
})



const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    const classes=useStyles();

    if(!confirmed)
    {
        return <CircularProgress/>
    }
    return (
        <>
        <Box className={classes.component}>
        <Typography className={classes.container} variant="h4">Coronovirus Cases Globally</Typography> 
        </Box>

        <Grid container spacing={3} justifyContent="center">
              <Card cardTitle="Infected" value={confirmed.value} 
              desc="Number of Infected cases of covid-19" lastUpdate={lastUpdate}/>
              <Card cardTitle="Recovered" value={recovered.value}
               desc="Number of Recovered cases from covid-19" lastUpdate={lastUpdate}/>
              <Card cardTitle="Deaths" value={deaths.value}
               desc="Number of Death caused by covid-19" lastUpdate={lastUpdate}/>
        </Grid>
       </>
        
    )
}

export default Cards;

