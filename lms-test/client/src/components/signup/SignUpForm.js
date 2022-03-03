import React, { useEffect, useState } from "react";
import axios from "axios";

function SignUpForm() {
  const [states, setStates] = useState([]);
  const [onStates, setOnStates] = useState(false);

  const [countries, setCountries] = useState([]);
  const [onCountries, setOnCountries] = useState(false);

  const [mappedState, setMappedState] = useState({});
  const [onMappedState, setOnMappedState] = useState(false);

  const [mappedCountry, setMappedcountry] = useState({});
  const [onMappedCountry, setOnMappedCountry] = useState(false);

  const [formData, setFormData] = useState({
    organisationName: "",
    organisationDomain: "",
    establishedYear: "",
    phoneNumber: "",
    mailID: "",
    address1: "",
    address2: "",
    stateID: "",
    pinCode: "",
    password: "",
  });

  function fetchCountries() {
    axios
      .get("http://localhost:3001/api/country")
      .then((response) => {
        setCountries(response.data);
        return response.data;
      })
      .then((data) => {
          console.log(data)
        var temp = {};
        data.map((item) => {
          temp[item.countryName] = item.id;
        });
        setMappedcountry(temp);
        setOnCountries(true);
      })
      .then(() => {
          console.log(mappedCountry)
        setOnMappedCountry(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function fetchStates() {
    axios
      .get("http://localhost:3001/api/state")
      .then((response) => {
        setStates(response.data);
        return response.data
      })
      .then((data) => {
        var temp = {};
        data.map((item) => {
          temp[item.stateName] = item.id;
        });
        setMappedState(temp);
        setOnStates(true);
        
      })
      .then(() => {
        setOnMappedState(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchCountries();
    fetchStates();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:3001/api/signup',formData).then((response)=>{
        console.log(response);
    }).catch((err)=>{
        console.log(err);
    })
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-title">
          <h4>Set Up Your Admin Account for your Organisation</h4>
          <div className="form-sub-title">
            <h1>
              Organisation already registered?<a>Log in</a>
            </h1>
          </div>
        </div>

        <div className="form-inputs">
          <div className="name-container">
            <label>Organisation name</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, organisationName: e.target.value });
              }}
              type="text"
              value={formData.organisationName}
            />
          </div>
          <div className="domain-container">
            <label>Domain name</label>
            <input
              onChange={(e) => {
                setFormData({
                  ...formData,
                  organisationDomain: e.target.value,
                });
              }}
              type="text"
              value={formData.organisationDomain}
            />
          </div>
          <div className="domain-container">
            <label>established Year</label>
            <input
              onChange={(e) => {
                setFormData({
                  ...formData,
                  establishedYear: parseInt(e.target.value),
                });
              }}
              type="number"
              value={formData.establishedYear}
            />
          </div>
          <div className="domain-container">
            <label>address1</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, address1: e.target.value });
              }}
              type="text"
              value={formData.address1}
            />
          </div>
          <div className="domain-container">
            <label>address2</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, address2: e.target.value });
              }}
              type="text"
              value={formData.address2}
            />
          </div>
          <div className="state-container">
            <label>State</label>
            <select
              onChange={(e) => {
                setFormData({
                  ...formData,
                  stateID: mappedState[e.target.value],
                });
              }}
            >
              {onStates &&
                states.map((item) => {
                  return <option key={item.stateName}>{item.stateName}</option>;
                })}
            </select>
          </div>
          <div className="country-container">
            <label>Country</label>
            <select
              onChange={(e) => {
                  setFormData({
                    ...formData,
                    countryID: mappedCountry[e.target.value],
                  }) &&
                  console.log(formData);
              }}
            >
              {onCountries &&
                countries.map((item) => {
                  return (
                    <option key={item.countryName}>{item.countryName}</option>
                  );
                })}
            </select>
          </div>
          <div className="pincode-container">
            <label>Pincode</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, pinCode: parseInt(e.target.value) });
              }}
              type="number"
              value={formData.pinCode}
            />
          </div>
          <div className="phone-container">
            <label>Phone number</label>
            <input
              onChange={(e) => {
                setFormData({
                  ...formData,
                  phoneNumber: parseInt(e.target.value),
                });
              }}
              type="number"
              value={formData.phoneNumber}
            />
          </div>
          <div className="email-container">
            <label>Organisation mail</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, mailID: e.target.value });
              }}
              type="text"
              value={formData.mailID}
            />
          </div>
          <div className="password-container">
            <label>Password</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
              type="text"
              value={formData.password}
            />
          </div>
        </div>
        <button type="submit">sign up</button>
      </form>
    </div>
  );
}

export default SignUpForm;
