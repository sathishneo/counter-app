import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imgUrl: "https://picsum.photos/200"
  };

  //   styles = {
  //     fontSize: 50,
  //     fontWeight: "bold"
  //   };

  render() {
    return (
      <React.Fragment>
        {/* <img src={this.state.imgUrl} alt="" /> */}

        {/* <span style={this.styles} className="badge badge-primary m-2"> */}
        {/* {this.formatCount()} */}
        {/* </span> */}
        <span
          style={{ fontsize: 10, fontWeight: "bold" }}
          //   className="badge badge-primary m-2"
          //   className={this.formatClass()}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; //object destructuring
    return count === 0 ? "Zero" : count;
  }
  //   formatClass() {
  //     if (this.state.count === 0) {
  //       return "badge badge-warning m-2";
  //     } else {
  //       return "badge badge-primary m-2";
  //     }
  //   }
}

export default Counter;