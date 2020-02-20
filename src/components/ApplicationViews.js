import { Route } from "react-router-dom"
import React, {Component } from "react"
import { withRouter } from "react-router-dom"
import ParkExplorer from "./home/ParkExplorer"
import Register from "./auth/Register"
import Login from "./auth/Login"
import ItineraryItemList from "./home/itinerary/ItineraryItemList"
import ItineraryItemForm from "./home/itinerary/ItineraryItemForm"
import ItineraryItemEditForm from "./home/itinerary/ItineraryItemEditForm"

class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={props => {
            console.log("props in /", props)
            return <ParkExplorer {...props} />
          }}
        />
        <Route path="/register" render={props => {
            return <Register {...props} />
          }}
        />
        <Route path="/login" render={props => {
            return <Login {...props} />
          }}
        />
        <Route exact path="/myitinerary" render={props => {
          return <ItineraryItemList {...props} />
        }}
        />
        <Route exact path="/myitinerary/new" render={props => {
          return <ItineraryItemForm {...props} />
        }}
        />
        
        <Route path="/myitinerary/:itemId(\d+)/edit" render={props => {
          return <ItineraryItemEditForm {...props} />
        }}
        />
      </React.Fragment>
    )
  }
}

export default withRouter(ApplicationViews)