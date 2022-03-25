import React from 'react'

function BalanceSheet() {
  return (
    <div>
    <h2>Leave Balance</h2>
    <table>
        <tr>
          <th>leave type</th>
          <th>Available Leaves</th>
          <th>Leaves Taken</th>
        </tr>
        <tr>
          <td>Vacation</td>
          <td>12</td>
          <td>3</td>
        </tr>
        <tr>
            <td>Sick Leave</td>
            <td>10</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Maternity/Paternity</td>
            <td>90</td>
            <td>0</td>
          </tr>
          <tr>
            <td>On Duty</td>
            <td>10</td>
            <td>14</td>
          </tr>
          <tr>
            <td>Paid Leave</td>
            <td>2</td>
            <td>14</td>
          </tr>
      </table>
    </div>
  )
}

export default BalanceSheet