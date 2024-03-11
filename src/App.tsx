import React from "react";
import { RangePicker, type RangePickerProps } from "./components/rc-picker";
import momentGenerateConfig from "./components/rc-picker/generate/moment";
import en from "./components/rc-picker/locale/en_US";
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
    </div>
  );
}

export default App;
