import React, { Component } from 'react';
import bottle from '../img/bottle.jpg';
import { Link } from 'react-router-dom';

class CollectorConfirmation extends Component {
    constructor() {
        super();
        this.state = {
            author: '',
            data: {
                name: "Bottle of Plastic",
                materials: "ProductDummy  Product ProductProductProduct", 
                type: "something safsgdf", 
                weight: "1 libs",
                location: "300 Broadway NY, NY 10045"
            }
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }
 
    render() {
        console.log('props', this.props)
        return(
            <div className="container">
                <p className="title">Product results and dropping off location</p>
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <img src={bottle} className="figure-img img-fluid" alt="bottle"/>
                    </div>
                </div><br/>

                <p> <span className="field-name">Name: </span>{this.state.data.name}</p>
                <p> <span className="field-name">Materials: </span>{this.state.data.materials}</p>
                <p> <span className="field-name">Type: </span>{this.state.data.type}</p>
                <p> <span className="field-name">Weight: </span>{this.state.data.weight}</p>
                <p> <span className="field-name">Dropping Off Location: </span>{this.state.data.location}</p>
                <Link className="btn btn-primary btn-lg btn-block" to={`/`}>Confirm</Link>
            </div>
       )
    }
}
export default CollectorConfirmation;
