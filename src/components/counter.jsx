import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imgUrl: "https://picsum.photos/200",
    // tags: ["tag1", "tag2", "tag3"]
    tags: []
  };

  //   styles = {
  //     fontSize: 50,
  //     fontWeight: "bold"
  //   };

  //constructor inherits the 'this' object
  // constructor() {
  //   super();
  //   console.log("Constructor: ", this);
  //   this.incrementCount = this.incrementCount.bind(this);
  // }
  // incrementCount() {
  //   this.state.count++;
  // }

  incrementCount = () => {
    console.log("incement: ", this);
  };

  renderTags() {
    console.log(this.state.tags.length);
    if (this.state.tags.length === 0) {
      return <p>There are no tags!!</p>;
    } else {
      return (
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    }
  }
  render() {
    return (
      // <React.Fragment>
      <div>
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
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.incrementCount}
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please enter a new tag"}
        {this.renderTags()}
      </div>
      // </React.Fragment>
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
