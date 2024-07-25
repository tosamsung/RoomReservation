import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown } from "semantic-ui-react";
import Flag from "react-world-flags"; // Import flag component

function DropdownCountry({ setValue, country }) {
  const [countryOptions, setCountryOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const options = response.data.map((country) => ({
          key: country.cca2,
          value: country.name.common,
          flag: (
            <Flag
              code={country.cca2}
              style={{ width: "20px", height: "15px", marginTop: "0px" }}
            />
          ),
          text: country.name.common,
        }));
        setCountryOptions(options);
      } catch (error) {
        console.error("Error fetching country data:", error);

      }
    };

    fetchCountries();
  }, []);

  const handleChange = (e, { value }) => {
    const selectedOption = countryOptions.find(
      (option) => option.value === value
    );
    if (selectedOption) {
      setValue((prev) => ({
        ...prev,
        country: selectedOption.text,
        city: '',
        lat:null,
        lng:null
      }));
    }
  };

  return (
    
      <Dropdown
        placeholder="Select Country"
        fluid
        search
        selection
        value={country} // Set the selected value
        options={countryOptions}
        onChange={handleChange}
        
      />
    
  );
}

export default DropdownCountry;
