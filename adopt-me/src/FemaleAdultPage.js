import React from 'react';
import { useNavigate } from 'react-router-dom';
// import styles from './FemaleAdultPage.module.css'; // Import the CSS module

function FemaleAdultPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.body}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>&larr; Back</button>
      <div className="tw">
        <table className={styles.table} align="center">
          <caption style={{ fontSize: '37px' }}><b>Female Adult</b><br /><br /></caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age (months)</th>
              <th>Height (cm)</th>
              <th>Weight (kg)</th>
              <th>Photo</th>
              <th>Buy now</th>
            </tr>
          </thead>
          <tbody>
            <tr id="AM1">
              <td>w</td>
              <td>15</td>
              <td>20</td>
              <td>10</td>
              <td><a href="https://simabo.org/wp-content/uploads/2018/11/street-dog-1.jpg">click</a></td>
              <td><a href="backend.js">Here</a></td>
            </tr>
            <tr id="AM2">
              <td>x</td>
              <td>18</td>
              <td>30</td>
              <td>12</td>
              <td><a href="https://th.bing.com/th/id/OIP.PTZfTz7SHp8_HrdP9xr4KgHaE8?rs=1&pid=ImgDetMain">click</a></td>
              <td><a href="backend.js">Here</a></td>
            </tr>
            <tr id="AM3">
              <td>y</td>
              <td>21</td>
              <td>35</td>
              <td>12.5</td>
              <td><a href="https://wallpapercave.com/wp/wp9685018.jpg">click</a></td>
              <td><a href="backend.js">Here</a></td>
            </tr>
            <tr id="AM4">
              <td>z</td>
              <td>19</td>
              <td>40</td>
              <td>13.3</td>
              <td><a href="https://th.bing.com/th/id/OIP.tt0BimGNWyCkJcD3backend.js2hZAHaCx?w=312&h=131&c=7&r=0&o=5&pid=1.7">click</a></td>
              <td><a href="backend.js">Here</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FemaleAdultPage;
