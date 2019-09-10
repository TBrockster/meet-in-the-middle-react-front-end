import React from "react";
import Bars from "../Recommendations/Bars";
import Restaurants from "../Recommendations/Restaurants";
import Cafes from "../Recommendations/Cafes";
import Lodgings from "../Recommendations/Lodgings";
import Museums from "../Recommendations/Museums";
import Miscellaneous from "../Recommendations/Miscellaneous";

class MidlLocation extends React.Component {
  constructor(props) {
    super(props)
    this.style = this.style.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log(this.props.places)
    console.log(nextProps.places)
    if (this.props.places !== nextProps.places) {
      return true
    } else {
      return false
    }
  }

  style(){
    if (this.props.midlLocation) {
      return {
        visibility: "visible"
      }
    } else {
      return {
        visibility: "hidden"
      }
    }
  }

  openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(cityName).hidden = false;
  }

  render() {
    return (
      <div className="midlLocationContainer" id='midlLocation' style={this.style()}>
        <div style={{ margin: "10px", overflowY: "scroll", maxHeight:"250px" }}>
          
        <div id="London" class="city">
        <h2>London</h2>
        <p>London is the capital of England.</p>
      </div>

      <div id="Paris" className="city" hidden={true}>
        <h2>Paris</h2>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" className="city" hidden={true}>
        <h2>Tokyo</h2>
        <p>Tokyo is the capital of Japan.</p>
      </div>

      <div class="w3-bar w3-black">
        <button class="w3-bar-item w3-button" onclick={this.openCity("London")}>London</button>
        <button class="w3-bar-item w3-button" onclick={this.openCity("Paris")}>Paris</button>
        <button class="w3-bar-item w3-button" onclick={this.openCity("Tokyo")}>Tokyo</button>
      </div>

        </div>
      </div>
    );
  }
}

export default MidlLocation;

{/* <Bars setMidlRequest={this.props.setMidlRequest} places={this.props.places} />
<Restaurants setMidlRequest={this.props.setMidlRequest} places={this.props.places} />
<Cafes setMidlRequest={this.props.setMidlRequest} places={this.props.places} />
<Lodgings setMidlRequest={this.props.setMidlRequest} places={this.props.places} />
<Museums setMidlRequest={this.props.setMidlRequest} places={this.props.places} />
<Miscellaneous setMidlRequest={this.props.setMidlRequest} places={this.props.places} /> */}
