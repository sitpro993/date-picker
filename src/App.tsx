import React from "react";
import RangePicker, { type RangePickerProps } from "./PickerInput/RangePicker";
import momentGenerateConfig from "./generate/moment";
import en from "./locale/en_US";
import logo from "./logo.svg";
import "./App.css";
import { Moment } from "moment";

function App() {
  const [value, setValue] = React.useState<
    [Moment | null, Moment | null] | null
  >([null, null]);

  const onChange = (
    newValue: [Moment | null, Moment | null] | null,
    formatStrings?: string[]
  ) => {
    console.log("Change:", newValue, formatStrings);
    setValue(newValue);
  };

  const onCalendarChange = (
    newValue: [Moment | null, Moment | null] | null,
    formatStrings?: string[]
  ) => {
    console.log("Calendar Change:", newValue, formatStrings);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <RangePicker<Moment>
          value={value}
          picker="date"
          generateConfig={momentGenerateConfig}
          onChange={onChange}
          onCalendarChange={onCalendarChange}
          locale={en}
          placeholder={["Start date", "End date"]}
          format="YYYY-MM-DD"
        />
      </header>
    </div>
  );
}

export default App;
