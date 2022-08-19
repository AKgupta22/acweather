import React from 'react'
import Grid from '@mui/material/Grid'
export default function Contact() {
    return (
        <>
            <div className="container-fluid">


                <Grid container spacing={2} width="98%">

                    <Grid item md={6} xs={12}>
                    <h5 className=' text-success text-center mt-1 mb-1 p-3 dark'>Conatct Us</h5>

                        <div className="container-fluid mt-2 ">

                            <div className="card dark">
                                <iframe title="map" width="100%" height="100%" id="gmap_canvas" src={`https://maps.google.com/maps?q=28.592189,77.309261&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"> </iframe>
                                <div className="card-body">
                                    <h5 className="card-title">Address: </h5>
                                    <p className="card-text">Shiv Mandir Block A,New Ashok Nagar ,DL-110096</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Mob: 8853049148</li>
                                    <li className="list-group-item">WhatsApp: 8853049148</li>
                                    <li className="list-group-item">Email- ag565609@gmail.com</li>
                                </ul>
                            </div>

                        </div>
                    </Grid>

                    <Grid item md={6} xs={12}>
                    <h5 className=' text-success text-center mt-1 mb-1 p-3 dark'>Reach Us</h5>

                        <div className="gmap_canvas mt-2 mb-2 dark">
                            <iframe title="map" width="100%" height="100%" id="gmap_canvas" src={`https://maps.google.com/maps?q=28.592189,77.309261&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                            </iframe>

                        </div>
                    </Grid>

                </Grid>
            </div>

        </>
    )
}
