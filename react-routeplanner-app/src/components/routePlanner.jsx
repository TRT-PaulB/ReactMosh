import Form from "../common/form";
import React, { Component } from "react";
import { getStations, getRouteInfo } from "../services/routePlannerService";
import Joi from "joi";
class RoutePlanner extends Form {
  state = {
    data: {
      start: "",
      destination: "",
      successfulLastSearch: true,
      routeInfo: ""
    },
    stations: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    start: Joi.string()
      .required()
      // .default("<Select>")
      .label("Start"),
    destination: Joi.string()
      .required()
      // .default("<Select>")
      .label("Destination"),
    routeInfo: Joi.string(),
    successfulLastSearch: Joi.boolean()
  };

  async componentDidMount() {
    this.populateStations();
    // later along these lines:  await this.populateGenres();
    this.populateRouteQuery("startzz", "destzz");
  }

  async populateStations() {
    this.setState({ stations: getStations() });
  }

  populateRouteQuery(start, destination) {
    const routeData = getRouteInfo(start, destination);
    //const data = this.generateRoutePlannerMap(routeData);
    //this.setState({ data });
    this.setState({ data: this.generateRoutePlannerMap(routeData) });
  }

  generateRoutePlannerMap(routeQuery) {
    return {
      _id: routeQuery._id,
      start: routeQuery.currRouteStart,
      destination: routeQuery.currRouteDest,
      successfulLastSearch: routeQuery.successfulLastSearch,
      routeInfo: routeQuery.routeInfo
    };
  }

  doSubmit = () => {
    console.log("submitting form data");

    this.props.history.push("/route_planner");
  };

  render() {
    const { match, history } = this.props;
    console.log("STATE ROUTE INFO = ", this.state.data);
    return (
      <React.Fragment>
        <h1>Route Planner screen</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderSelect("start", "Start", false, this.state.stations)}

          {this.renderSelect(
            "destination",
            "Destination",
            false,
            this.state.stations
          )}

          {this.renderButton("Find Route Options")}

          {this.renderInput("routeInfo", "", false)}
        </form>
      </React.Fragment>
    );
  }
}

export default RoutePlanner;
