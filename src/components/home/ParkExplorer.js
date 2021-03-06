import React, { Component } from "react"
import AreaList from "./area/AreaList"
import { isAuthenticated } from "../helpers/simpleAuth"
import AttractionList from "./attraction/AttractionList"
// import Attraction from "./attraction/Attraction"

class ParkExplorer extends Component {

  state = {
    areas: [],
    attractions: []
  }

  componentDidMount() {
    this.getParkAreas()
  }

  
  getParkAreas = () => {
    // get all park areas
    // set state with new data for park areas
    if (isAuthenticated()) {
      fetch("http://localhost:8000/parkareas", {
        "headers": {
          "Accept": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
        }
      })
      .then(response => response.json())
      .then(response => this.setState({ areas: response }))
    }
  }
  
  getAttractions = (areaId) => {
    // get all attractions for an area
    // set state of attractions for each park area
    if (isAuthenticated()) {
      fetch(`http://localhost:8000/attractions?area=${areaId}`, {
        "method": "GET",
        "headers": {
          "Accept": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("kennywood_token")}`
        }
      })
        .then(response => response.json())
        .then(attractions => this.setState({ attractions: attractions }))
    }
  }

  render() {
    return (
      <>
        <main className="explorer">
          <AreaList areas={this.state.areas} getAttractions={this.getAttractions} />
          <AttractionList attractions={this.state.attractions}/>
        </main>
      </>
    )
  }
}

export default ParkExplorer