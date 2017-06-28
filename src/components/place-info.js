'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';

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
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.hiking.current.name !== this.place.name){
            this.place = nextProps.hiking.current;
            this.setState({
                description: '...',
                show: false
            });
            return true;
        }else if(nextState.show === true || nextState.show !== true){
            return true;
        }else{
            return false;
        }
    }
    showDescription = () => {
        this.state.description === '...'
            ? this.setState({description: this.place.description, show: true})
            : this.setState({description: '...', show: false});
    }
    render() {
        console.log(this.state);
        if (this.state.show) {
            return (
                <div className='table column is-3 floatLeft'>
                    <div className='description-popup' onClick={this.showDescription}>
                        <div className='description-title'>Description</div>
                        <div className='description-body'>{this.place.description}</div>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>City</th>
                                <tr>{this.place.city}</tr>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <tr>{this.place.name}</tr>
                            </tr>
                            <tr>
                                <th>Temp</th>
                                <tr>{this.props.weather.locationData.currently.temperature}</tr>
                            </tr>
                            <tr onClick={this.showDescription}>
                                <th>Description</th>
                                <tr>...</tr>
                            </tr>
                            <tr>
                                <th>Activities</th>
                                <tr>{this.activities.join(', ')}</tr>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div className='table column is-3 floatLeft'>
                    <table>
                        <tbody>
                            <tr>
                                <th>City</th>
                                <tr>{this.place.city}</tr>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <tr>{this.place.name}</tr>
                            </tr>
                            <tr>
                                <th>Temp</th>
                                <tr>{this.props.weather.locationData.currently.temperature}</tr>
                            </tr>
                            <tr onClick={this.showDescription}>
                                <th>Description</th>
                                <tr>{this.state.description}</tr>
                            </tr>
                            <tr>
                                <th>Activities</th>
                                <tr>{this.activities.join(', ')}</tr>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default connect(({weather, hiking}) => ({weather, hiking}))(PlaceInfo)
