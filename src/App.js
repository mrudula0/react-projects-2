import "./App.css";
import GetWeekDay from "./Components/GetWeekDay";
import AgeCalculator from "./Components/AgeCalculator";
// import TabSwitcher from "./TabsComponent/TabSwitcher";
import ReadMoreToggle from "./TextBtnToggle/ReadMoreToggle";
import CopyToClipboard from "./CopyToClipboard";
import PasswordValidation from "./GeneratePassword/PasswordValidation";
import ScrollToTop from "./ScrollToTop";
import GuessTheNumber from "./GuessTheNumber";
function App() {
  return (
    <div className="App">
      {/* <GetWeekDay /> */}
      {/* <AgeCalculator /> */}
      {/* <TabSwitcher /> */}
      {/* <ReadMoreToggle /> */}
      {/* <CopyToClipboard /> */}
      {/* <PasswordValidation /> */}
      {/* <ScrollToTop /> */}
      <GuessTheNumber />
    </div>
  );
}

export default App;
