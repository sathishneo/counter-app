import React, { Component } from "react";

class Counter extends Component {
  //   Removing the state from here since we need to have the
  //  'Single source of truth' which is the truth from the
  //   parent to this component
  //   state = {
  //     value: this.props.counter.value,
  //     imgUrl: "https://picsum.photos/200",
  //     // tags: ["tag1", "tag2", "tag3"]
  //     tags: []
  //   };

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

  // Commenting the below methods to create a single source of truth
  //   handleIncrement = () => {
  //     // console.log("incement: ", this);
  //     this.setState({ value: this.state.value + 1 });
  //   };

  //   handleDecrement = () => {
  //     this.setState({ value: this.state.value - 1 });
  //   };
  //   handleDecrementBtn = () => {
  //     if (this.state.value === 0) {
  //       return true;
  //     }
  //     return false;
  //   };

  //   renderTags() {
  //     console.log(this.state.tags.length);
  //     if (this.state.tags.length === 0) {
  //       return <p>There are no tags!!</p>;
  //     } else {
  //       return (
  //         <ul>
  //           {this.state.tags.map(tag => (
  //             <li key={tag}>{tag}</li>
  //           ))}
  //         </ul>
  //       );
  //     }
  //   }

  render() {
    console.log(this.props);
    return (
      // <React.Fragment>
      <div>
        {/* <img src={this.state.imgUrl} alt="" /> */}

        {/* <span style={this.styles} className="badge badge-primary m-2"> */}
        {/* {this.formatCount()} */}
        {/* </span> */}
        {/* {this.props.children} */}
        {/* <h4>Counter #{this.props.counter.id}</h4> */}
        <span
          style={{ fontsize: 10, fontWeight: "bold" }}
          //   className="badge badge-primary m-2"
          //   className={this.formatClass()}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
        >
          +
        </button>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => {
            this.props.onDecrement(this.props.counter);
          }}
          disabled={this.props.onEmpty(this.props.counter)}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => {
            this.props.onDelete(this.props.counter.id);
          }}
        >
          Delete
        </button>
        {/* <p>{this.state.tags.length === 0 && "Please enter a new tag"}</p> */}
        {/* {this.renderTags()} */}
      </div>
      // </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount = () => {
    const { value } = this.props.counter; //object destructuring
    return value === 0 ? "Zero" : value;
  };
  //   formatClass() {
  //     if (this.state.count === 0) {
  //       return "badge badge-warning m-2";
  //     } else {
  //       return "badge badge-primary m-2";
  //     }
  //   }
}

export default Counter;
