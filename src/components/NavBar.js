import React from "react";
import {Row,Col} from 'reactstrap';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="NavBar">
            <Row className=" no-gutters">
                <NavLink to='/'>
                    <Col lg={{ size: 'auto'}}><h1 className="text-white">Beershop</h1></Col>
                </NavLink>
                <Col lg={{ size: '1', offset: 9 }} className="d-flex align-items-center">
                        <NavLink to='/admin'>
                            <i className="AdminRoom fas fa-user-cog fa-2x"></i>
                        </NavLink>
                </Col>
                
            </Row>
        </div>
    )
}

export default NavBar;