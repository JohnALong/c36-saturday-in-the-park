import React, { Component } from "react"
import Area from "./Area"
import "./AreaList.css"

class AreaList extends Component {

  render() {
    console.log("pk exp main view")
    console.log("area list", this.props)
    return (
      <>
        <article className="explorerList">
          {
            this.props.areas.map(area =>
              <Area
                key={area.id}                
                area={area}
                getAttractions={this.props.getAttractions}
              />)
          }
        </article>
      </>
    )
  }
}

export default AreaList