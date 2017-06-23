'use strict';
import React from 'react';
import {connect} from 'react-redux';

const Weather = props =>{
    return(
        <div>weather</div>
    )
}

export default connect(({weather})=>({weather}))(Weather)
