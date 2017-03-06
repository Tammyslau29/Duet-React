import React from 'react';
import {render} from 'react-dom';
import MyCoolComponent from './MyCoolComponent.jsx';
import { Button } from 'react-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
// import mapComponent from './map.jsx';
// import profilesComponent from '.profiles.jsx';
// import formComponent from '.form.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            showComponent: false,
        }
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({
            counter: this.state.counter+1,
        })
    }

    render() {
        let myComponent;
        if(this.state.showComponent){
            myComponent = <MyCoolComponent newNumber={this.state.counter} />;
        }
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Duet</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">Home</NavItem>
                        <NavItem eventKey={2} href="#">Map</NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Sign In</NavItem>
                        <NavItem eventKey={2} href="#">Create Profile</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
render(<App/>, document.getElementById('app'));