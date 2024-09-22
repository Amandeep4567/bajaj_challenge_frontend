import React from "react";
import Select from "react-select";

const MultiSelectDropdown = ({
  response,
  selectedOptions,
  setSelectedOptions,
}) => {
  const options = [
    { value: "alphabets", label: "Alphabets" },
    { value: "numbers", label: "Numbers" },
    {
      value: "highest_lowercase_alphabet",
      label: "Highest Lowercase Alphabet",
    },
  ];

  const handleChange = (selected) => {
    setSelectedOptions(selected.map((option) => option.value));
  };

  const renderResponse = () => {
    const { alphabets, numbers, highest_lowercase_alphabet } = response;
    return (
      <div>
        {selectedOptions.includes("alphabets") && (
          <div>
            <h4>Alphabets:</h4>
            <p>{alphabets.join(", ") || "None"}</p>
          </div>
        )}
        {selectedOptions.includes("numbers") && (
          <div>
            <h4>Numbers:</h4>
            <p>{numbers.join(", ") || "None"}</p>
          </div>
        )}
        {selectedOptions.includes("highest_lowercase_alphabet") && (
          <div>
            <h4>Highest Lowercase Alphabet:</h4>
            <p>{highest_lowercase_alphabet.join(", ") || "None"}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <Select
        isMulti
        options={options}
        onChange={handleChange}
        placeholder="Select data to display"
      />
      {renderResponse()}
    </div>
  );
};

export default MultiSelectDropdown;
