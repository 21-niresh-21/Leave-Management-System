import React from 'react'

function ApplyLeaveForm() {
  return (
    <div>
        <form>
        <h2>Apply Leave<br/><small></small></h2>
        <div>
        <label for="leave">type of time-off requested</label>
        <select name="leave" id="leave">
          <option value="Vacation">Vacation</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Maternity/Paternity">Maternity/Paternity</option>
          <option value="On Duty">On Duty</option>
          <option value="Paid Leave">Paid Leave</option>

          

        </select> 


        </div>

        <div class="form-group">
        <label>Start date</label>
            <input type="date" id="1989254035_date" placeholder="8/23/2019" class="form-control" required/>
            </div>
        <div class="form-group">
        <label>End date</label>
            <input type="date" id="1403025287_date" placeholder="8/23/2019" class="form-control" required/>
        </div>
        <div class="form-group">
        <label>Reason for leave</label>
            <textarea id="1357270616" name="entry.1357270616" class="form-control" required></textarea><br/><br/>
            <input type="submit" value="Submit"/>
        </div>
        </form>
    </div>
  )
}

export default ApplyLeaveForm;