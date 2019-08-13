import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  render() {
    // could use div, but React.Fragment omits the extra tier
    // <img src={this.state.imageUrl} alt="" />

    // also note the use of boostrap classes, in className (m-2 adds space)

    // styles
    // INLINE:  style={{ fontSize: 30 }}
    // REF class styles: <span style={this.styles} className="badge badge-primary m-2">

    //   styles = {
    //     fontSize: 10,
    //     fontWeight: "bold"
    //   };

    // <span className="badge badge-warning m-2">{this.formatCount()}</span>
    // <button className="btn btn-secondary btn-sm">Increment</button>

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
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
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
