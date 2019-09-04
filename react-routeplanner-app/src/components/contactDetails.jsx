import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi";

class ContactDetails extends Form {
  state = {};

  schema = {
    // _id: Joi.string(),
    // start: Joi.string()
    //   .required()
    //   .label("Start"),
    // destination: Joi.string()
    //   .required()
    //   .label("Destination")
  };

  doSubmit = () => {
    console.log("submitted contact details form");
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="main-content">
          <h2>Enter Contact Details</h2>

          <div className="main-content">
            <div className="row">
              <div className="dataBox">
                <div className="row">
                  <div className="col">
                    <h4>column 1 in here</h4>
                    <h4>column 1 in here</h4>
                    <h4>column 1 in here</h4>
                  </div>
                  <div className="col">
                    <h4>column 2 in here</h4>
                    <h4>column 2 in here</h4>
                    <h4>column 2 in here</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              {this.renderButton("Find Route", "btn btn-primary m-4")}
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default ContactDetails;
