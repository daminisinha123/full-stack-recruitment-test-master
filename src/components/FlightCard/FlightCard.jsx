import React from 'react';
import FlightDuration from '../FlightDuration';
import globalStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from'./FlightCard.module.css';
import cx from 'classnames';

//Used helper functions for making readable time format and calculate duration
import {readableTimeFormat,calculateDuration} from '../../js/helper.js'


//Render components based on itineraries to avoid duplication of code
//Used the concept of props from Parent component Card
export default class FlightCard extends React.Component{
  constructor(props){
      super(props)
  }
render(){ 
    const itinerariesDetails =  this.props.itinerariesDetails;
    const details = JSON.parse(this.props.firstLegDetails);
    const deptTime = readableTimeFormat(details.departure_time);
    const arrivalTime = readableTimeFormat(details.arrival_time);
    const secondDetails = JSON.parse(this.props.secondLegDetails);
    const deptTimeSecond = readableTimeFormat(secondDetails.departure_time);
    const arrivalTimeSecond = readableTimeFormat(secondDetails.arrival_time);
    const durationFirst = calculateDuration(details.duration_mins);
    const durationSecond = calculateDuration(secondDetails.duration_mins)
    let imgFirstId = `https://logos.skyscnr.com/images/airlines/favicon/${details.airline_id}.png`; 
    let imgSecondId = `https://logos.skyscnr.com/images/airlines/favicon/${details.airline_id}.png`; 
    
    return(
     <div>
        <div className={cx(globalStyles["card"], styles["card-style__border"], globalStyles["col-*-12"])}>
            <div className={cx(globalStyles["card-block"], globalStyles["row"])}>
                <img src={imgFirstId} alt='logo' className={cx(globalStyles["col-*-2"],styles["logo-alignment"])}/>
                <div className={cx(globalStyles["col-*-3"])}>
                    <span className={cx(globalStyles["card-text"],styles["card-time_color"])}>{deptTime}</span><br/>
                    <span className={cx(globalStyles["card-text"],styles["card-text_color"])}>{details.departure_airport}</span>
                </div>
                <span className={cx(globalStyles["col-*-2"],styles["card-icon-style"])}><i className="fa fa-arrow-right"></i></span>
                <div className={cx(globalStyles["col-*-3"],styles["card-right-align"])}>
                    <span className={cx(globalStyles["card-text"],styles["card-time_color"])}>{arrivalTime}</span><br/>
                    <span className={cx(globalStyles["card-text"],styles["card-text_color"])}>{details.arrival_airport}</span>
                </div>
                <FlightDuration details_duration={durationFirst} details_stops={details.stops}/>
            </div>
            <div className={cx(globalStyles["card-block"],globalStyles["row"])}>
                <img src={imgSecondId} alt='logo' className={cx(globalStyles["col-*-2"],styles["logo-alignment"])}/>
                <div className={cx(globalStyles["col-*-3"])}>
                    <span className={cx(globalStyles["card-text"],styles["card-time_color"])}>{deptTimeSecond}</span><br/>
                    <span className={cx(globalStyles["card-text"],styles["card-text_color"])}>{secondDetails.departure_airport}</span>
                </div>
                <span className={cx(globalStyles["col-*-2"],styles["card-icon-style"])}><i className="fa fa-arrow-right"></i></span>
                <div className={cx(globalStyles["col-*-3"],styles["card-right-align"])}>
                    <span className={cx(globalStyles["card-text"],styles["card-time_color"])}>{arrivalTimeSecond}</span><br/>
                    <span className={cx(globalStyles["card-text"],styles["card-text_color"])}>{secondDetails.arrival_airport}</span>
                </div>
                <FlightDuration details_duration={durationSecond} details_stops={secondDetails.stops}/>
            </div>
            <div className={cx(globalStyles["row"])}>
                <div className={cx(globalStyles["col-*-8"],styles["div-price-width"])}>
                        <span className={cx(globalStyles["card-text"],styles["card-price-style"])}>{itinerariesDetails.price}</span><br/>
                        <span className={cx(globalStyles["card-text"],styles["card-agent-style"])}>{itinerariesDetails.agent}</span>
                </div>
                <div className={cx(globalStyles["col-*-4"],styles["div-button-select"])}>
                    <button className={cx(globalStyles["col-*-12"]),styles["button-select-style"]}>Select</button>
                </div>
            </div>
        </div>
    </div>

    )
}
}