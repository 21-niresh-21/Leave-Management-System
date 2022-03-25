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
            <label for='name'>Organisation name</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, organisationName: e.target.value });
              }}
              type="text"
              name="name"
              id="name"
              value={formData.organisationName}
            />
          </div>
          <div className="domain-container">
            <label for='domainName'>Domain name</label>
            <input
              onChange={(e) => {
                setFormData({
                  ...formData,
                  organisationDomain: e.target.value,
                });
              }}
              type="text"
              name="domainName"
              id="domainName"
              value={formData.organisationDomain}
            />
          </div>
          <div className="domain-container">
            <label for='year'>established Year</label>
            <input
              onChange={(e) => {
                setFormData({
                  ...formData,
                  establishedYear: parseInt(e.target.value),
                });
              }}
              type="number"
              name="year"
              id="year"
              value={formData.establishedYear}
            />
          </div>
          <div className="domain-container">
            <label for='address1'>address1</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, address1: e.target.value });
              }}
              type="text"
              name="address1"
              id="address1"
              value={formData.address1}
            />
          </div>
          <div className="domain-container">
            <label for='address2'>address2</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, address2: e.target.value });
              }}
              type="text"
              name="address2"
              id="address2"
              value={formData.address2}
            />
          </div>
          <div className="state-container">
            <label for='state'>State</label>
            <select
              onChange={(e) => {
                setFormData({
                  ...formData,
                  stateID: mappedState[e.target.value],
                });
              }}
              name='state'
              id="state"
            >
              {onStates &&
                states.map((item) => {
                  return <option key={item.stateName} value={item.itemName}>{item.stateName}</option>;
                })}
            </select>
          </div>
          <div className="country-container">
            <label for='country'>Country</label>
            <select
              onChange={(e) => {
                  setFormData({
                    ...formData,
                    countryID: mappedCountry[e.target.value],
                  }) &&
                  console.log(formData);
              }}
              value='country'
              id="country"
            >
              {onCountries &&
                countries.map((item) => {
                  return (
                    <option key={item.countryName} value={item.countryName}>{item.countryName}</option>
                  );
                })}
            </select>
          </div>
          <div className="pincode-container">
            <label for='pincode'>Pincode</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, pinCode: parseInt(e.target.value) });
              }}
              type="number"
              name="pincode"
              id="pincode"
              value={formData.pinCode}
            />
          </div>
          <div className="phone-container">
            <label for='phone'>Phone number</label>
            <input
              onChange={(e) => {
                setFormData({
                  ...formData,
                  phoneNumber: parseInt(e.target.value),
                });
              }}
              type="number"
              name="phone"
              id="phone"
              value={formData.phoneNumber}
            />
          </div>
          <div className="email-container">
            <label for='email'>Organisation mail</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, mailID: e.target.value });
              }}
              type="text"
              name="email"
              id="email"
              value={formData.mailID}
            />
          </div>
          <div className="password-container">
            <label for='password'>Password</label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
              type="text"
              id="password"
              name="password"
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
