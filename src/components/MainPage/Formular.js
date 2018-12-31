import React from 'react';
import {Row,Col,FormGroup,Label,Input,Button} from 'reactstrap';
import './Formular.scss';
import PropTypes from 'prop-types';


const Formular=({selectedOption,handleOptionChange,handleSearch,handleChange})=>{
    return(
        <FormGroup check  className="Formular">
            <Row className="d-flex justify-content-center">
                <Col lg={2}>
                    <Label check>
                    <Input 
                        type="radio" 
                        value="option1" 
                        checked={selectedOption === 'option1'} 
                        onChange={handleOptionChange} 
                        />{' '}
                        First brewed after
                    </Label>
                </Col>
                <Col lg={2} >
                    <Label check>
                    <Input 
                        type="radio" 
                        value="option2" 
                        name="option2" 
                        checked={selectedOption === 'option2'} 
                        onChange={handleOptionChange} 
                        />{' '}
                        First brewed before
                    </Label>
                </Col>
                <Col lg={2}>
                    <Label check>
                    <Input 
                        type="radio" 
                        value="option3" 
                        name="option3" 
                        checked={selectedOption === 'option3'} 
                        onChange={handleOptionChange} 
                        />{' '}
                        Name containing    
                    </Label>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col lg={2} >
                    <Button className="searchbutton" type="submit" onClick={handleSearch}>Search</Button>
                </Col>
                <Col lg={10} className="inputsearch">
                    <Input  onChange={handleChange}/>  
                </Col>
            </Row>
        </FormGroup>  
    )
}

Formular.propTypes = {
    selectedOption:PropTypes.string,
    handleOptionChange:PropTypes.func,
    handleSearch:PropTypes.func,
    handleChange:PropTypes.func
}

export default Formular;