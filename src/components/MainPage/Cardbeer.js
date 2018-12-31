import React from 'react';
import './Cardbeer.scss';
import { 
  Card, 
  CardTitle, 
  CardText,
  CardSubtitle, 
  CardBody, 
  Row, 
  Col 
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import PropTypes from 'prop-types';


 const Cardbeer = ({name,first_brewed,tagline,description,image_url,id}) => {
    return (
      <Zoom>
        <Link
          to={{
            pathname: '/beer-detail',
            state: {
              id:id,
            },
          }}
        >
          <Card  className="Cardbeer">
            <CardBody >
              <Row className="CardbeerTop">
                <Col lg={3}>
                  <img src={image_url} alt="imgbeer" className="CardbeerImg" />
                </Col>
                <Col lg={9}>
                  <CardTitle>{name}-{first_brewed}</CardTitle>
                </Col>  
              </Row>
              <CardSubtitle className='taglinefont'>{tagline}</CardSubtitle>
              <CardText className="CardbeerDescription">{description}</CardText>
            </CardBody>
          </Card>
          </Link>
        </Zoom>
    )
 }

 Cardbeer.propTypes = {
  name:PropTypes.string,
  first_brewed:PropTypes.string,
  tagline:PropTypes.string,
  description:PropTypes.string,
  image_url:PropTypes.string,
  id:PropTypes.number,
 }

 export default Cardbeer;