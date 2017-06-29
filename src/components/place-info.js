'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import InfoTable from './info-table';

class PlaceInfo extends Component {
    constructor(props) {
        super(props);
        this.place = props.hiking.current;
        this.activities = this.place.activities.map(el => {
            return el.activity_type_name;
        });
        this.state = {
            description: '...',
            show: false
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.hiking.current.name !== this.place.name) {
            this.place = nextProps.hiking.current;
            this.setState({description: '...', show: false});
            return true;
        } else if (nextState.show === true || nextState.show !== true) {
            return true;
        } else {
            return false;
        }
    }
    showDescription = () => {
        this.state.description === '...'
            ? this.setState({description: this.place.description, show: true})
            : this.setState({description: '...', show: false});
    }
    render() {
        return (<InfoTable data={{
            place: this.place,
            activities: this.activities,
            show: this.state.show,
            showDescription:this.showDescription,
            weather:this.props.weather
        }}/>)
    }
}

export default connect(({weather, hiking}) => ({weather, hiking}))(PlaceInfo)
