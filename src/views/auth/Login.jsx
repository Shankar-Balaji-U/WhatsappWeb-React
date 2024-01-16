import React, { Component } from 'react';


class Login extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isOnline: navigator.onLine,
  //   };
  // }

  render() {
  	return (
  		<h1>
  			Hello
  		</h1>
  	);
    // const status = this.state.isOnline ? false : "network";
    // return (
    //   <div className="alert-notify-container" data-status={status}>
    //     { status === "network" ? <>
    //       <span className="icon">
    //         <i className="ico-alert-internet"></i>
    //       </span>
    //       <div className="message">
    //         <span>Computer not connected</span>
    //         <span>Make sure your computer has an active Internet connection.</span>
    //       </div></> : <></> }
    //       {/*<button></button>*/}
    //     {/*<svg viewBox="0 0 48 48" height="48" width="48" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 48 48"><title>alert-computer</title><path fill="currentColor" d="M24.154,2C11.919,2,2,11.924,2,24.165S11.919,46.33,24.154,46.33 s22.154-9.924,22.154-22.165S36.389,2,24.154,2z M23.985,34.138L12.976,19.459c3.028-2.294,6.881-3.67,11.009-3.67 c4.129,0,7.982,1.376,11.009,3.67L23.985,34.138z M23.04,28.488h1.981v-1.981H23.04V28.488z M23.04,24.526h1.981v-5.017H23.04 V24.526z"></path></svg>*/}
    //     {/*{this.state.isOnline ? (
    //       <p>You are currently online.</p>
    //     ) : (
    //       <p>You are currently offline.</p>
    //     )}*/}
    //   </div>
    // );
  }
}

export default Login;