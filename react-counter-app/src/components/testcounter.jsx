import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
    //tags: []
    //imageUrl: "https://picsum.photos/200"
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

    /* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button> */

    return (
      <React.Fragment>
        {this.renderTags()}
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </React.Fragment>
    );
  }

  handleIncrement() {
    console.log("handle increment..");
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>No tags available</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  //   getBadgeClasses() {
  //     let classes = "badge m-2 badge-";
  //     classes += this.state.count === 0 ? "warning" : "primary";
  //     return classes;
  //   }

  //   formatCount() {
  //     const { count } = this.state;

  //     return count === 0 ? "Zero" : count;
  //   }
}

export default Counter;
