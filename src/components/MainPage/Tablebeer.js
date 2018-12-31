import React from 'react';
import {Row,Col} from 'reactstrap';
import PropTypes from 'prop-types';


const Tablebeer = ({id,name,first_brewed,tagline}) => {
        return(
            <div className='Tablebeer'>
                            <Row key={id}>
                                <Col lg={4}>
                                    {name}
                                </Col>
                                <Col lg={4}>
                                    {first_brewed}
                                </Col>
                                <Col lg={4}>
                                    {tagline}
                                </Col>
                            </Row>
                    </div>
        )
}

Tablebeer.propTypes = {
    id:PropTypes.number,
    name:PropTypes.string,
    first_brewed:PropTypes.string,
    tagline:PropTypes.string,
}

export default Tablebeer;