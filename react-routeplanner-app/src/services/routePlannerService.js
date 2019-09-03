//import http from "./httpService";
//import { apiUrl } from "../config.json";

export const stations = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "East Putney" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Wimbledon" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Oxford Circus" }
];

//export const stations =
// { _id: "5b21ca3eeb7f6fbccd4yuyuu", name: "East Putney" },
// { _id: "5b21ca3eeb7f6fbccdqqqqqq", name: "Wimbledon" },
// { _id: "5b21ca3eeb7f6fbceeeeeeee", name: "Oxford Circus" }
//["Ford", "BMW", "Fiat"];

export function getStations() {
  return stations.filter(g => g);
}

export const result = {
  routeInfo: "\\nStart  Aldgate East\\nEnd    Blackfriars\\n"
};

export function getRouteInfo(start, destination) {
  return {
    _id: "ouo7895t7fg",
    currRouteStart: start,
    currRouteDest: destination,
    successfulLastSearch: true,
    routeInfo: "\\nStart  Aldgate East\\nEnd    Blackfriars\\n"
  };
}
