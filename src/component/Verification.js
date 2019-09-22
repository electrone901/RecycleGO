import React, { Component } from 'react';
import bottle from '../img/bottle.jpg';
import { Link } from 'react-router-dom';

class Verification extends Component {
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
                <p className="">Results of weight</p>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="text">Total  ammount of weight</label>
                                <textarea 
                                    type="text" 
                                    id="description" 
                                    min="5" 
                                    className='form-control form-control-lg'
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange} 
                                    rows="1"
                                    >
                                </textarea>
                            </div>
                            {/* <input type="submit" className="btn btn-info btn-block mt-4" /> */}
                        </form>

                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">Details</h6>
                        <p> <span className="field-name">Name: </span>{this.state.data.name}</p>
                        <p> <span className="field-name">Materials: </span>{this.state.data.materials}</p>
                        <p> <span className="field-name">Type: </span>{this.state.data.type}</p>
                        <p> <span className="field-name">Weight: </span>{this.state.data.weight}</p>
                        <p> <span className="field-name">Dropping Off Location: </span>{this.state.data.location}</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">Carbon Offset Calculation</h6>
                        <h6 className="card-subtitle mb-2 text-muted">5.56 Kgs</h6>

                    </div>
                </div>

                
                <Link className="btn btn-primary btn-lg btn-block" to={`/dashboard`}>Confirm</Link>
            </div>
       )
    }
}
export default Verification;
