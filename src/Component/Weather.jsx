import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Weathercard from './Weathercard';
import Spinner from './Spinner'
import WeatherForcast from './WeatherForcast'
let footercg = document.getElementsByTagName("footer")
let mapp = document.getElementsByClassName("gmap_canvas")
export default function Weather(props) {

    let [locations, setlocations] = useState("")
    let [lrc, setlrc] = useState([])
    let [forcst, setforcst] = useState([])
    let [search, setsearch] = useState("")
    const [lcl, setlcl] = React.useState("");
    let [temp, settemp] = useState("nill")
    let [spinner, setspinner] = useState("")
    let [spinnerr, setspinnerr] = useState("")

    function handleChange(e) {
        setlcl(e.target.value)
    };
    function Getdata(e) {
        setlocations(e.target.value)


    }
    async function Getlocation(e) {
        e.preventDefault()
        setspinner(<Spinner />)
        const locationpass = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${props.api}`,
                'X-RapidAPI-Host': 'geoapify-address-autocomplete.p.rapidapi.com'
            }
        };
        if (locations === "") {
            alert("Field must not be blank")
        }
        else {
            try {

                let rawdata = await fetch(`https://geoapify-address-autocomplete.p.rapidapi.com/v1/geocode/autocomplete?text=${locations}`, locationpass)
                let result = await rawdata.json()
                setlrc(result.features)
            }
            catch (error) {

            }
        }
        setspinner("")
    }

    async function GetWeather(e) {
        setspinner(<Spinner />)
        try {


            const woption = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': `${props.api}`,
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };

            let mapdata = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${lcl}`, woption)
            let mapresult = await mapdata.json()
            settemp(mapresult)
            footercg[0].classList.remove("fixed-bottom")
            mapp[0].classList.add("hhh")
        }
        catch (error) {
        }
        setspinner("")
        setsearch(lcl)
    }

    async function Forecast(e) {
        e.preventDefault()
        setspinnerr(<Spinner />)
        try {


            const opt = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': `${props.api}`,
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };
            let fordata = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${lcl}&days=3`, opt)
            let forresult = await fordata.json()
            setforcst(forresult.forecast.forecastday)
        }
        catch (error) {

        }
        setspinnerr("")

    }
    useEffect(() => {
        if (lcl !== "") {
            GetWeather()
            setforcst([])
        }

    }, [lcl])
    return (
        <>
            <div className="m-auto container-fluid">

                <Grid container spacing={.2} width="100%">
                    <Grid item md={6} xs={12}>
                        <h5 className="bgc p-3 mt-1 text-light text-center dark"> Enter place or city to search weather</h5>
                        <TextField
                            onChange={Getdata}
                            className="w-100 m-auto"
                            id="standard-text-input"
                            label="Enter location name"
                            type="text"
                            name="locations"
                            autoComplete="Location"
                            variant="standard"
                        />
                        <Button onClick={Getlocation} className="w-100 m-auto mt-2 btnn dark" variant="contained">Search Places</Button>

                        {
                            lrc.length === 0 ? "" :
                                <Box sx={{ minWidth: 120 }} className="mt-3 dark">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label" >Select places</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={lcl}
                                            label="Locations"
                                            name="lcl"
                                            onChange={handleChange} className="mt-2"
                                        >
                                            <MenuItem value="" defaultChecked>
                                                <em>None</em>
                                            </MenuItem>
                                            {
                                                lrc.map((item, index) => {
                                                    let details = item.properties.formatted
                                                    let cord = item.properties.lat + "," + item.properties.lon
                                                    return <MenuItem key={index} value={cord}>{details}</MenuItem>

                                                })

                                            }

                                        </Select>
                                    </FormControl>

                                </Box>


                        }

                        {/* Get weather btn */}
                        <div className="myspinner">{spinner}</div>
                        {
                            temp === "nill" ? "" : <Weathercard
                                temper={parseInt(temp.current.temp_c)}
                                wind={temp.current.wind_kph}
                                cloudpr={temp.current.cloud}
                                precip={temp.current.precip_mm}
                                txt={temp.current.condition.text}
                                pic={temp.current.condition.icon}
                                time={temp.location.localtime}
                                name={temp.location.name}
                            />

                        }

                    </Grid>

                    <Grid item md={6} xs={12} width="100%">



                        <div className="gmap_canvas mt-2 mb-2">
                            <iframe title="map" width="100%" height="100%" id="gmap_canvas" src={`https://maps.google.com/maps?q=${search}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                            </iframe>

                        </div>
                    </Grid>
                </Grid>
                {
                    temp === "nill" ? "" :
                        <Button className="w-100 m-auto mt-2 btnn mb-2 dark" variant="contained" onClick={Forecast}> Show 3 day Forecast</Button>

                }
                <div className="myspinner">{spinnerr}</div>


                <div className="mb-2 mt-1 container-fluid">
                    {

                        forcst.length === 0 ? "" : forcst.map((item, index) => {
                            return <WeatherForcast
                                key={index}
                                date={item.date}
                                start={parseInt(item.day.mintemp_c)}
                                end={parseInt(item.day.maxtemp_c)}
                                txt={item.day.condition.text}
                                pic={item.day.condition.icon}
                                precip={item.day.totalprecip_mm}
                                wind={item.day.maxwind_kph}
                                humidity={item.day.avghumidity}
                                cloudpr={item.day.daily_chance_of_rain}
                                hourly={item.hour}

                            />
                        })
                    }
                </div>
            </div>


        </>
    )
}
