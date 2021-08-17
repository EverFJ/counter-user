import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import UserInfo from "./components/UserInfo";
import usersJson from "./users.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <div className="counter">
          <Counter
            count={this.state.count}
            increment={() => this.setState({ count: this.state.count + 1 })}
            substract={
              this.state.count !== 0
                ? () => this.setState({ count: this.state.count - 1 })
                : console.log("Do nothing")
            }
          />
        </div>
        {usersJson
          .filter((elem, index) => index < this.state.count)
          .map((elem, index) => {
            return (
              <UserInfo
                name={elem.name}
                email={elem.email}
                website={elem.website}
              />
            );
          })}
      </div>
    );
  }
}

export default App;
