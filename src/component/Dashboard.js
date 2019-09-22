import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../img/history.png';
import current from '../img/current.png';
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            previewPost: false,
            current: true,
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);        
    }

    getFavoritesDeals() {
        // toggle userDealsclass && favoriteclass to active
        if(this.state.current){
            this.setState({
                previewPost: true,
                current: false
            })
        }
        else {
            this.setState({
                previewPost: false,
                current: true,
            })
        }
    }

    render() {

        // const { width, height } = useWindowSize();

        let preview = <div className="container">
            <br/>
            <img src={history} className="figure-img img-fluid moreHeight" alt="logo"/> 
        </div>;

        let currentView = <div className="container">
            <br/>
            <img src={current} className="figure-img img-fluid" alt="bb"/> 
        </div>;
        
        return(
            <div className="container text-center">
                <Confetti
                    // width={width}
                    // height={height}
                />
                <h3>Dashboard</h3>

                <div className="text-center">
                    <button type="button" onClick={this.getFavoritesDeals.bind(this)}  class="btn btn-outline-secondary btn-sm">Pending </button>
                    <button type="button" onClick={this.getFavoritesDeals.bind(this)} class="btn btn-outline-secondary btn-sm">Previous </button>
                </div>
                {
                    this.state.previewPost ? preview: ""
                    
                }
                {
                    this.state.current ? currentView: ""
                }
                <Link className="btn btn-primary btn-lg btn-block" to={`/`}>Recycle more</Link>
            </div>
       )
    }
}
export default Dashboard;
