import { useState } from "react";
import { Select } from "./Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function App() {
  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >("");

  const [selectedLabel, setSelectedLabel] = useState<
    string | number | undefined
  >("");

  return (
    <>
      <Select
        options={options}
        setSelectedValue={setSelectedValue}
        setSelectedLabel={setSelectedLabel}
      />
      <div>
        <span>{`Selected Value: ${selectedValue}`}</span>
      </div>
      <div>
        <span>{`Selected Label: ${selectedLabel}`}</span>
      </div>
    </>
  );
}

export default App;
