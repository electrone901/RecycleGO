import React, { Component } from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

class Collector extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);        
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    } 
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <img src={logo} className="figure-img img-fluid" alt="logo"/>
                        <h1>Want to Recycle?</h1>
                        <Link className="btn btn-primary btn-lg btn-block" to={`/`}>Get Started</Link><br/>
                        <Link className="btn btn-primary btn-lg btn-block" to={`/scanner`}>Scan</Link>
                    </div>
                </div>
            </div>
       )
    }
}
export default Collector;
