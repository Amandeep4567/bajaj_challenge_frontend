import React, { useState } from "react";
import axios from "axios";
import MultiSelectDropdown from "./MultiSelectDropdown";

const Form = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResponse(null);

    // Validate JSON
    let parsedData;
    try {
      parsedData = JSON.parse(jsonInput);
    } catch (err) {
      setError("Invalid JSON format. Please enter a valid JSON.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/bfhl", parsedData);
      setResponse(res.data);
    } catch (err) {
      setError("Failed to fetch data from backend. Please check the server.");
    }
  };

  return (
    <div>
      <h2>BFHL Data Processor</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="Enter JSON input"
          rows={6}
          style={{ width: "100%" }}
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {response && (
        <MultiSelectDropdown
          response={response}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      )}
    </div>
  );
};

export default Form;
