import React from "react";

function AddUser() {
  return (
    <div>
      <form>
        <h3>Faculty Details</h3>
        <label for="fname">Full Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="T.Sebastian"
        />
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="thomas1234@example.com"
        />
        <label for="date-of-enrolment">date of enrollment</label>
        <input type="date" />
        <select name="Designation" id="Designation">
          <label for="Designation">Designation</label>
          <option value="hod">HOD</option>
          <option value="Sick Leave">Sick Leave</option>
        </select>
        <label for="adr">
           Address
        </label>
        <input
          type="text"
          id="adr"
          name="address"
          placeholder="60ft road,Srinivasa Towers,"
        />
        <label for="adr"> Address-2</label>
        <input
          type="text"
          id="adr"
          name="address"
          placeholder="Opposite to Tiny school"
        />
        <label for="city">
           City
        </label>
        <input type="text" id="city" name="city" placeholder="Coimbatore" />
        <div class="col-50">
          <label for="state">State</label>
          <select name="state" id="state">
            <option value="Tamilnadu">Tamil nadu</option>
          </select>
        </div>
        <div class="col-50">
          <label for="zip">Zip</label>
          <input type="text" id="zip" name="zip" placeholder="64112" />
        </div>
      </form>
    </div>
  );
}

export default AddUser;
