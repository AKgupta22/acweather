import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Hourly from './Hourly'
import CloseIcon from '@mui/icons-material/Close';
export default function WeatherForcast(props) {
    let [hrs, sethrs] = useState([])
    function Hour(e) {
        e.preventDefault()
        sethrs(props.hourly)
    }
    return (
        <>

            <div className="row w-fit m-auto col-12">
                <div className="row d-flex justify-content-center align-items-centerh-100 w-100 ">

                    <div className="card mt-2 mb-1 dark" style={{ color: "#4B515D", borderRadius: "20px" }}>
                        <div className="card-body p-2 ">

                            <div className="d-flex names">
                                <h6 className="flex-grow-1">{props.date}</h6>
                                <h6>Humidity: {props.humidity}%</h6>
                            </div>

                            <div className="d-flex flex-column text-center mt-3 mb-2">
                                <h6 className="display-4 mb-0 font-weight-bold" style={{ color: "#1C2331" }}> {props.start}°C to {props.end} °C </h6>
                                <span className="small" style={{ color: "#868B94" }}>{props.txt}</span>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                                    <div><i className="fas fa-wind fa-fw" style={{ color: "#868B94" }}></i> <span className="ms-1"> Wind: {props.wind}km/h
                                    </span></div>
                                    <div><i className="fas fa-tint fa-fw" style={{ color: "#868B94" }}></i> <span className="ms-1">Rain: {props.cloudpr}% </span>
                                    </div>
                                    <div><i className="fas fa-sun fa-fw" style={{ color: "#868B94" }}></i> <span className="ms-1"> {props.precip}h </span>
                                    </div>
                                </div>
                                <div>
                                    <img src={props.pic}
                                        width="100px" alt='weather' />
                                </div>
                            </div>
                        </div>

                    </div>
                    {
                        hrs.length === 0 ? <Button onClick={Hour} className="w-100 m-auto mt-2 btnn dark" variant="contained">Get hourly weather for {props.date}</Button> : ""
                    }
                    {hrs.length === 0 ? "" :
                        <div>
                            <table className="table table-sm mt-2 m-auto dark">

                                <thead>
                                    <tr>
                                        <th scope="col">Date &amp; Time: </th>
                                        <th scope="col">Rain Chance : </th>
                                        <th scope="col">Temp: </th>
                                        <th scope="col">Humidity: </th>
                                    </tr>
                                </thead>

                                {
                                    hrs.map((item, index) => {
                                        return <Hourly
                                            key={index}
                                            date={item.time}
                                            chance={item.chance_of_rain}
                                            tmp={item.temp_c}
                                            hm={item.humidity}

                                        />
                                    })
                                }
                            </table>

                        </div>

                    }
                    {hrs.length === 0 ? "" :
                        <Button className="closed mt-2 btnn dark " onClick={() => sethrs([])} variant="contained"><CloseIcon></CloseIcon> </Button>
                    }
                </div>


            </div>


        </>

    )
}
