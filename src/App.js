import "./App.css";
import GetWeekDay from "./Components/GetWeekDay";
import AgeCalculator from "./Components/AgeCalculator";
import UserProfileToggle from "./Components/UserProfileToggle";
function App() {
  return (
    <div className="App">
      <GetWeekDay />
      <AgeCalculator />
      <UserProfileToggle />
    </div>
  );
}

export default App;
