import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from '../img/history.png';
import current from '../img/current.png';
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const config = {
    angle: 90,
    spread: 45,
    startVelocity: 45,
    elementCount: 50,
    dragFriction: 0.1,
    duration: "100",
    stagger: 0,
    width: "10px",
    height: "10px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            previewPost: false,
            current: true,
            time: false,
            currentCount: 3,
            numberC: 100
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);  
        this.intervalId = setInterval(this.timer.bind(this), 1000);
        console.log(this.state.currentCount)
        // useEffect();      
    }
    timer() {
        this.setState({
          currentCount: this.state.currentCount - 1
        })
        console.log(this.state.currentCount)
        if(this.state.currentCount < 1) { 
            console.log("stop")
            this.setState({
                numberC: 0
              })
        }
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

    // useEffect() {
    //     setCounter = 0;
    //     const interval = setInterval(() => {
    //         setCounter(0);
    //     }, 2000);

    //     return () => {
    //         clearInterval(interval);
    //         this.setState({
    //             time:false
    //         })
    //     }
    // }

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
                numberOfPieces={this.state.numberC}
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
