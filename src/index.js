import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    interval: 0,
    seconds: 0,
    targetGoal: 4,
    isOvertime: false
  };

  tick() {
    this.setState(
      prevState => ({
        seconds: prevState.seconds + 1
      }),
      () => {
        if (this.state.seconds > this.state.targetGoal) {
          console.log("NONONONONO");
          // return <div>SOMETHING NEW</div>; //update content inside render()
          this.setState({ isOvertime: true });
        }
      }
    );
  }

  componentDidMount() {
    const interval = setInterval(() => this.tick(), 1000);
    this.setState({ interval });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { isOvertime, seconds } = this.state;

    return (
      <div>
        {isOvertime ? (
          <div>Time Over Man!</div>
        ) : (
          <div>Your Second Count: {seconds}</div>
        )}
        <input
          type="number"
          value={this.state.targetGoal}
          onChange={e => this.setState({ targetGoal: e.target.value })}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
