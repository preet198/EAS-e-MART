import React, { Component } from "react";
import "./style.css";

class HomePage extends Component {

  render() {
    return (
      <div className="HomePage">
      <h2>this is the HomePage</h2>
        {/* {categories.map(category => {
          return <Category
          image={category.image}
          name={category.name}
        />
        })} */}
          <div className="container">
            <div className="grid">
            <h2>Elyas</h2>
            <div className="toys">toys
            <img src="http://icons.iconarchive.com/icons/icons8/ios7/256/Baby-Teddybear-icon.png"/>
            </div>
            <div className="bicycles">bicycles
            <img src="http://icons.iconarchive.com/icons/icons8/ios7/128/Transport-Bicycle-icon.png"/>
            </div>
            <div className="motorcycles">motorcycles
            <img src="http://icons.iconarchive.com/icons/icons8/ios7/128/Transport-Motorcycle-icon.png"/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
