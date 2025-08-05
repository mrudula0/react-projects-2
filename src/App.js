import "./App.css";
import GetWeekDay from "./Components/GetWeekDay";
import AgeCalculator from "./Components/AgeCalculator";
import TabSwitcher from "./TabsComponent/TabSwitcher";
function App() {
  return (
    <div className="App">
      <GetWeekDay />
      <AgeCalculator />
      <TabSwitcher />
    </div>
  );
}

export default App;
