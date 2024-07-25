import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown } from "semantic-ui-react";

function DropdownCity({ country, setValue, city }) {
  const [cityOptions, setCityOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (country) {
      const fetchCities = async () => {
        try {
          setLoading(true);
          const response = await axios.post(
            "https://countriesnow.space/api/v0.1/countries/cities",
            {
              country: country,
            }
          );
          const options = response.data.data.map((city) => ({
            key: city,
            value: city,
            text: city,
          }));
          setCityOptions(options);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching city data:", error);
          setLoading(true);
        }
      };

      fetchCities();
    }
  }, [country]);
  if (loading) {
    return (
      <span className="uk-margin-small-right" uk-spinner="ratio: 1"></span>
    );
  }
  const handleChange = (e, { value }) => {
    setValue((prev) => ({
      ...prev,
      city: value,
      lat: null,
      lng: null,
    }));
  };

  return (
    <Dropdown
      placeholder="Select City"
      fluid
      search
      selection
      value={city}
      options={cityOptions}
      onChange={handleChange}
    />
  );
}

export default DropdownCity;
