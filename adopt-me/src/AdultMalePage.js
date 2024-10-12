// src/AdultMalePage.js

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
// import style from './AdultMalePage.module.css';

function AdultMalePage() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div>
      <button onClick={() => navigate(-1)}>&larr; Back</button> {/* Use navigate(-1) to go back */}
      <div className="tw">
        <table align="center">
          <caption style={{ fontSize: '37px' }}><b>Male Adult</b><br /><br /></caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age(months)</th>
              <th>Height(cm)</th>
              <th>Weight(kg)</th>
              <th>Photo</th>
              <th>Buy now</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>a</td>
              <td>14</td>
              <td>15</td>
              <td>21</td>
              <td><a href="https://www.hypropremium.com.au/wp-content/uploads/2023/01/Golden-Retriever.jpg">click</a></td>
              <td><a href="backend.js">Here</a></td>
            </tr>
            <tr>
              <td>b</td>
              <td>17</td>
              <td>18</td>
              <td>23</td>
              <td><a href="https://www.shutterstock.com/shutterstock/photos/626815748/display_1500/stock-photo-smiling-yellow-golden-labrador-adult-female-dog-with-closed-eyes-in-sitting-pose-on-the-tribackend.jsed-626815748.jpg">click</a></td>
              <td><a href="backend.js">Here</a></td>
            </tr>
            <tr>
              <td>c</td>
              <td>19</td>
              <td>21</td>
              <td>24</td>
              <td><a href="https://www.goldenrescue.com/wp-content/uploads/2021/12/1-2.jpg">click</a></td>
              <td><a href="backend.js">Here</a></td>
            </tr>
            <tr>
              <td>d</td>
              <td>21</td>
              <td>27</td>
              <td>35</td>
              <td><a href="https://cdn11.bigcommerce.com/s-y03dfhlckk/product_images/uploaded_images/laurelle-photo.jpg">click</a></td>
              <td><a href="backend.js">Here</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdultMalePage;
