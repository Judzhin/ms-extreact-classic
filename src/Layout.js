import React, { Component } from 'react'
import { Viewport, Container } from '@extjs/reactor/classic';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { medium, large } from './responsiveFormulas';

/**
 * The main application view and routes
 */
class Layout extends Component {

    render() {
        
        return (
            <Viewport layout="border">
                
                <Container region="west">
                    Left Sidebar Menu
                </Container>

                <Container region="center">
                    Hello World!
                </Container>
            </Viewport>
        );
    }
}

export default withRouter(Layout);