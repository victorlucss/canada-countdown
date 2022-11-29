import "./App.css";
import Countdown from "react-countdown";

function App() {
  return (
    <div className="App">
      <div className="backdrop"></div>
      <div className="box">
        <p>🇨🇦 Countdown 🇨🇦</p>
        <Countdown
          date={new Date(2022, 11, 13, 10, 30)}
          className="countdown"
        />
      </div>
    </div>
  );
}

export default App;
