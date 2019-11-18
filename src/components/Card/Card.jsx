import React from 'react';
import globalStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import cx from 'classnames';
import FlightCard from '../FlightCard';
import flightObject from '../../flights.json';

//Component to render Cards
export default class Card extends React.Component{

constructor(props){
    super(props);
    this.displayDetails=this.displayDetails.bind(this)
} 

//Function to display details according to readable format
 displayDetails(){
    let flightDetails = [];
    const jsonObj= flightObject;
    const itinerariesDetails = jsonObj.itineraries;
    const legsDetails = jsonObj.legs;
    const legObj = {};
   //Making object for legs id based on itineraries to avoid On2 (2 inner loops)
    for(var i of legsDetails){
        let elementId = i.id
        legObj[elementId] = i;
    }
    //Getting the data required according the keys present in itineraries
    for (var i = 0; i < itinerariesDetails.length; i++) {
       
        let firstLegs = itinerariesDetails[i].legs[0]
        let secondLegs = itinerariesDetails[i].legs[1]
        let firstLegDetails = JSON.stringify(legObj[firstLegs]);
        let secondDetails = JSON.stringify(legObj[secondLegs]);
        flightDetails.push(
            <FlightCard  firstLegDetails={firstLegDetails} secondLegDetails={secondDetails} itinerariesDetails={itinerariesDetails[i]}/>
        );
    }
   return flightDetails;
  }
   render(){
       return(
         <div className={cx(globalStyles['card-group'])}>
            <div className={cx(globalStyles['col-*-8'])}>
                <div className={cx(globalStyles['card-deck'])}>
                    {displayDetails()}
                </div>
            </div>
         </div>
       )

    }
}