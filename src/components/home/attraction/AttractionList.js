import React, { Component } from "react"
import Attraction from "./Attraction"
import "./AttractionList.css"

class AttractionList extends Component {

  render() {
      console.log("props in attr list", this.props)
    return (
      <>
        <article className="attractionList">
          {
            this.props.attractions.map(ride =>
              <Attraction
                key={ride.id}                
                ride={ride} {...this.props}
              />)
          }
        </article>
      </>
    )
  }
}

export default AttractionList