import React from 'react'

export default function Weathercard(props) {
  return (
  <>
  
  <div className="container-fluid w-fit m-auto">

    <div className="row d-flex justify-content-center align-items-center h-100 w-100 ">

        <div className="card dark " style={{color: "#4B515D", borderRadius: "20px"}}>
          <div className="card-body p-2">

            <div className="d-flex names">
              <h6 className="flex-grow-1">{props.name}</h6>
              <h6>{props.time}</h6>
            </div>

            <div className="d-flex flex-column text-center mt-3 mb-2">
              <h6 className="display-4 mb-0 font-weight-bold" style={{color: "#1C2331"}}> {props.temper}°C </h6>
              <span className="small" style={{color: "#868B94"}}>{props.txt}</span>
            </div>

            <div className="d-flex align-items-center">
              <div className="flex-grow-1" style={{fontSize: "1rem"}}>
                <div><i className="fas fa-wind fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> {props.wind}km/h
                  </span></div>
                <div><i className="fas fa-tint fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> {props.cloudpr}% </span>
                </div>
                <div><i className="fas fa-sun fa-fw" style={{color: "#868B94"}}></i> <span className="ms-1"> {props.precip}h </span>
                </div>
              </div>
              <div>
                <img src={props.pic}
                  width="100px" alt='weather'/>
              </div>
            </div>
          </div>

      </div>
    </div>

  </div>  
  
  </>
  )
}
