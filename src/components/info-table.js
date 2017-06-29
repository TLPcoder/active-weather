'use strict';
import React from 'react';

const InfoTable = props => {
    if (props.data.show && props.data.description !== null) {
        return (
            <div className='floatLeft'>
                <div className='description-popup' onClick={props.data.showDescription}>
                    <div className='description-title'>Description</div>
                    <hr/>
                <div className='description-body'>{props.data.place.description}</div>
                </div>
                <div className='temp'>
                    <h2>{String(props.data.weather.locationData.currently.temperature).split('.')[0] + '°F'}</h2>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>City</th>
                        <td>{props.data.place.city}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                        <td>{props.data.place.name}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>
                                <button className='button is-inf' onClick={props.data.showDescription}>Read</button>
                            </td>
                        </tr>
                        <tr>
                            <th>Activities</th>
                        <td>{props.data.activities.join(', ')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    } else if (props.data.show && props.data.description === null) {
        return (
            <div className='floatLeft'>
                <div className='description-popup' onClick={props.data.showDescription}>
                    <div className='description-title'>Description</div>
                    <hr/>
                <div className='description-body'>There is no description for this location.</div>
                </div>
                <div className='temp'>
                    <h2>{String(props.data.weather.locationData.currently.temperature).split('.')[0] + '°F'}</h2>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>City</th>
                        <td>{props.data.place.city}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                        <td>{props.data.place.name}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>
                                <button className='button is-inf' onClick={props.data.showDescription}>Read</button>
                            </td>
                        </tr>
                        <tr>
                            <th>Activities</th>
                        <td>{props.data.activities.join(', ')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }else {
        return (
            <div className='floatLeft'>
                <div className='temp'>
                    <h2>{String(props.data.weather.locationData.currently.temperature).split('.')[0] + '°F'}</h2>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>City</th>
                        <td>{props.data.place.city}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                        <td>{props.data.place.name}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>
                                <button className='button is-inf' onClick={props.data.showDescription}>Read</button>
                            </td>
                        </tr>
                        <tr>
                            <th>Activities</th>
                        <td>{props.data.activities.join(', ')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default InfoTable;
