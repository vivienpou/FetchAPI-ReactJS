import React from 'react';
import {fetchItems} from '../actions';
import {connect} from 'react-redux';
import {Col, Row} from 'reactstrap';
import '../components/MainPage/MainPage.scss';
import NavBar from '../components/NavBar';
import {API_SERVER} from '../constants';
import Tablebeer from '../components/MainPage/Tablebeer';
import {bindActionCreators} from 'redux';
import Cardbeer from '../components/MainPage/Cardbeer';
import Formular from '../components/MainPage/Formular';
import PropTypes from 'prop-types';


class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: '',
            word: '',
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        const {getItems} = this.props;
        getItems(`${API_SERVER}`);
    }

    handleSearch() {
        const {getItems} = this.props;
        if (this.state.word !== '') {
            switch (this.state.selectedOption) {
                case 'option1':
                    getItems(`${API_SERVER}?brewed_after=${this.state.word}`);
                    break;
                case 'option2':
                    getItems(`${API_SERVER}?brewed_before=${this.state.word}`);
                    break;
                case 'option3':
                    getItems(`${API_SERVER}?beer_name=${this.state.word}`);
                    break;
                default:
                    getItems(`${API_SERVER}`);
            }
        } else {
            getItems(`${API_SERVER}`);
        }
    }

    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        });
    }

    handleChange = (e) => {
        this.setState({
            word: e.target.value
        })
    }

    render() {
        const {items: {list, error}} = this.props;
        if (error) {
            return (<div className="error">{error}</div>)
        }
        return (
            <div className="MainPage">
                <NavBar/>
                <Formular
                    selectedOption={this.state.selectedOption}
                    handleOptionChange={this.handleOptionChange}
                    handleSearch={this.handleSearch}
                    handleChange={this.handleChange}/>

                <div className="wholetable">
                    <Row className='headtable'>
                        <Col>Name</Col>
                        <Col>First Brewed</Col>
                        <Col>In some words</Col>
                    </Row>
                    <div className="bodytable">
                        {list.map((item) => (
                            <Tablebeer
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                first_brewed={item.first_brewed}
                                tagline={item.tagline}
                            />
                        ))}
                    </div>
                    <Row className="cardList">
                        {list.map((item) =>
                            <Col lg={3} key={item.id}>
                                <Cardbeer
                                    name={item.name}
                                    first_brewed={item.first_brewed}
                                    image_url={item.image_url}
                                    description={item.description}
                                    tagline={item.tagline}
                                    id={item.id}
                                />
                            </Col>
                        )}
                    </Row>
                </div>
            </div>
        )
    }
}

MainPage.propTypes = {
    items: PropTypes.object,
}

const mstp = state => ({
    items: state.items,
});

const mdtp = dispatch => bindActionCreators({getItems: fetchItems}, dispatch);

export default connect(mstp, mdtp)(MainPage);
