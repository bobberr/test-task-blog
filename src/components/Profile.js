import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import UserPanel from '../containers/UserPanel';
import CommentPanel from '../containers/CommentPanel';

const Profile = () => {
    return (
        <Grid>
            <Row>
                <Col className="background" lg={6} lgOffset={3} md={6} mdOffset={3} sm={8} smOffset={2} xs={10} xsOffset={1}></Col>
            </Row>
            <Row>
                <Col className="profile" lg={6} lgOffset={3} md={6} mdOffset={3} sm={8} smOffset={2} xs={10} xsOffset={1}>
                    <UserPanel/>      
                    <CommentPanel/> 
                </Col>
            </Row>
        </Grid>
    )
}

module.exports = Profile;