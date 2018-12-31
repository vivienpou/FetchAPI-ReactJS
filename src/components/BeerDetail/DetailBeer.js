import React from 'react';
import './DetailBeer.scss';
import NavBar from '../NavBar';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

class DetailBeer extends React.Component{
    constructor(props){
        super(props)
        this.state={receivedId:1}
    }

    componentDidMount(){
        this.setState({receivedId:this.props.location.state.id});
    }

    render(){
        const {items} = this.props;
        const {receivedId} = this.state;
        const itemkeys = Object.keys(items[receivedId-1]);
        const itemvalues = Object.values(items[receivedId-1]);   
        return( 
            <div className="DetailBeer">
                <NavBar/>
                <Link to ={{pathname:'/'}} className='Home'>Home</Link>
                <Row className="DetailBeerResults no-gutters" >
                    <Col lg={9}>
                        {itemkeys.map((keys,index)=>{
                            const linkitemvalues = itemvalues[index];
                            return(    
                            <Row key={index} className={'itemline-'+(index%2?'r':'l')+' pb-3'}>
                                <Col lg={3} key={index+'_'} className='keysline' >{index===0?'':keys}</Col>
                                <Col lg={6} key={index+'-'}>{index===0?'':linkitemvalues===Object(linkitemvalues)?'null':linkitemvalues}</Col>
                            </Row>
                            )
                        })}
                    </Col>
                    <Col lg={3}>
                        <img src={items[receivedId-1].image_url} alt='imgdetail' className="imgbeer"></img>
                    </Col>
                </Row>
                       
            </div> 
        )
    }
}

const mstp = state => ({
    items: state.items.list,
  });

export default connect(mstp)(DetailBeer);
