import React from 'react';
import globalStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from'./FlightDuration.module.css';
import cx from 'classnames';

//Pure component to render duration and connectivity based on props passed
export default class FlightCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){ 
        return(
            <div className={cx(globalStyles["col-*-2"],styles["div-align"])}>
                <span className={cx(globalStyles["card-text"],styles["span-duration-style"])}>{this.props.details_duration}</span><br/>
               
                <span className={cx(globalStyles["card-text"],styles["card-text_color"])}>
                    {(this.props.details_stops===0)?<h5 className={cx(globalStyles["card-text"],styles["card-direct-color"])}>Direct</h5>
                    :<h5 className={cx(globalStyles["card-text"],styles["card-stop_color"])}>{this.props.details_stops} Stops</h5>}
                </span>
            </div>
        )
    }
}  