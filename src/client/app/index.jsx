import React from 'react';
import { render } from 'react-dom';
import { Button } from 'react-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import MapComponent from './map.jsx';
import ProfilesComponent from './profiles.jsx';
import FormComponent from './form.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nav_bar_state: 'profiles',
        };

    }
    render() {
        let child;
        switch(this.state.nav_bar_state) {
            case 'profiles':
                child = <ProfilesComponent />;
                break;
            case 'map':
                child = <MapComponent />;
                break;
            case 'form':
                child = <FormComponent />;
                break;
        }

        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Duet</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="#" onClick={() => { this.setState({ nav_bar_state: 'profiles' }); }}>Home</NavItem>
                            <NavItem eventKey={2} href="#" onClick={() => { this.setState({ nav_bar_state: 'map' }); }}>Map</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Sign In</NavItem>
                            <NavItem eventKey={2} href="#" onClick={() => { this.setState({ nav_bar_state: 'form' }); }}>Create Profile</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {child}
            </div>
        );
    }
}
render(<App/>, document.getElementById('app'));