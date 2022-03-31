import {fetchCountries} from '../service/api'
import {Typography, NativeSelect} from '@material-ui/core'
import {useEffect,useState} from 'react'
const Countries=({handleCountryChange})=>
{
    const [countries, setCountries] = useState([]);
      useEffect(()=>
      {
          const fetchApi=async()=>
          {
            setCountries(await fetchCountries())
          }
          fetchApi();
      },[])

      return (
          <>
            <Typography variant="h5" color="textSecondary" style={{marginBottom:20,marginTop:20}}>Reported Cases or Deaths by Countries or Territory</Typography>
            <NativeSelect  onChange={(e)=>handleCountryChange(e.target.value)}>
                <option value="">United States</option>
                {countries.map((country,i)=>{
                       return (
                            <option key={i} value={country}>{country}</option>
                       )
                })}
            </NativeSelect>
          </>
      )
}

export default Countries;

