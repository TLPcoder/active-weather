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
        if (this.state.show && this.state.description !== null) {
            return (
                <div className='column is-3 floatLeft'>
                    <div className='description-popup' onClick={this.showDescription}>
                        <div className='description-title'>Description</div>
                        <hr/>
                        <div className='description-body'>{this.place.description}</div>
                    </div>
                    <div className='temp'>
                        <h2>{this.props.weather.locationData.currently.temperature+'°F'}</h2>
                    </div>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>City</th>
                                <td>{this.place.city}</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>{this.place.name}</td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>
                                    <button className='button is-inf' onClick={this.showDescription}>Read</button>
                                </td>
                            </tr>
                            <tr>
                                <th>Activities</th>
                                <td>{this.activities.join(', ')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (
                <div className='column is-3 floatLeft'>
                    <div className='temp'>
                        <h2>{this.props.weather.locationData.currently.temperature+'°F'}</h2>
                    </div>
                    <table className='table'>
                        <tbody>
                            <tr>
                                <th>City</th>
                                <td>{this.place.city}</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>{this.place.name}</td>
                            </tr>
                            <tr>
                                <th>Description</th>
                                <td>
                                    <button className='button is-inf' onClick={this.showDescription}>Read</button>
                                </td>
                            </tr>
                            <tr>
                                <th>Activities</th>
                                <td>{this.activities.join(', ')}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default connect(({weather, hiking}) => ({weather, hiking}))(PlaceInfo)
