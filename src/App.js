import "./App.css";
import GetWeekDay from "./Components/GetWeekDay";
import AgeCalculator from "./Components/AgeCalculator";
// import TabSwitcher from "./TabsComponent/TabSwitcher";
import ReadMoreToggle from "./TextBtnToggle/ReadMoreToggle";
function App() {
  return (
    <div className="App">
      <GetWeekDay />
      <AgeCalculator />
      {/* <TabSwitcher /> */}
      <ReadMoreToggle />
    </div>
  );
}

export default App;
