import React from 'react';
import {connect} from 'react-redux';

const PlaceInfo = props => {
    console.log(props);
    return (<div>place info</div>)
}

export default connect(({weather})=>({weather}))(PlaceInfo)
