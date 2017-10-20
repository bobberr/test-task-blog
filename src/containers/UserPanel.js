import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import * as actions from '../action-creators/action-creator';

var UserPanel = (props) => {
    const user = props.data[0];
    const popoverClick = (
        <Popover id="popover-trigger-click" title="Link to this page">
            <span>{window.location.href}</span>
        </Popover>
        );
    return (
            <div className="user-panel">
                <OverlayTrigger trigger="click" placement="bottom" overlay={popoverClick}>
                <button className="user-panel__link-button"></button>
                </OverlayTrigger>
                <div className="user-panel__info">
                    <img className="user-panel__thumbnail" src={user.thumbnail} alt="user image"/>
                    <div className="flex-container__column user-panel__name-location">
                        <div className="flex-container__row user-panel__position-container">
                            <p className="user-panel__name">{user.name}</p>
                            <button onClick={props.actions.like} className="user-panel__like"></button>
                        </div>
                        <p className="user-panel__location">{user.location}</p>
                    </div>
                </div>
                <div className="user-panel__stats flex-container__row">
                    <ul className="user-panel__list flex-container__row">
                        <li className="user-panel__item flex-container__column">
                            <p className="user-panel__stat-number">{user.likes}</p>
                            <p className="user-panel__stat-name">Likes</p>
                        </li>
                        <li className="user-panel__item flex-container__column pipes">
                            <p className="user-panel__stat-number">{user.following}</p>
                            <p className="user-panel__stat-name">Following</p>
                        </li>
                        <li className="user-panel__item flex-container__column">
                            <p className="user-panel__stat-number">{user.followers}</p>
                            <p className="user-panel__stat-name">Followers</p>
                        </li>
                    </ul>
                    <button className="user-panel__follow" onClick={props.actions.follow}>Follow</button>
                </div>
            </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

UserPanel = connect(mapStateToProps, mapDispatchToProps)(UserPanel);


module.exports = UserPanel;