import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import confirmationImg from '../img/c.png';
 
class QrReaderComponet extends Component {
  state = {
    result: '',
    confirmationImg: true
  }
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data,
        confirmationImg: true
      })
    }
  }

  componentDidMount() {
    console.log("setTime")
    setTimeout(
      function() {
        this.props.history.push(`/collector-confirmation`)
      }.bind(this),
      3000
    )
  }
  handleError = err => {
    console.error(err);
  }
  render() {
    return (
      <div className="container">
        <br/><br/>
        {
          this.state.confirmationImg ? 
          <p className="title">Scanning completed <img src={confirmationImg} className="confirmationImg" alt="logo"/></p>: 
          <p className="title">Scanning...</p>
        }

          <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          className="qr-reader"
        />
      </div>
    )
  }
}
export default QrReaderComponet;