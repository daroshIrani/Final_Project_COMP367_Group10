// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

// Component to display results with Epoch and Learning Rate adjustments
function Results() {
  // State to store the new data fetched from the server
  const [newdata, setnewdata] = useState({});

  // State to handle loading status
  const [showLoading, setShowLoading] = useState(true);

  // State to store prediction results (not currently used in the code)
  const [predictionResults, setPredictionResults] = useState(null);

  // URL for fetching data from the API
  const apiUrl = "api/run";

  // useEffect to fetch data from the server when the component mounts
  useEffect(() => {
    // Function to fetch new data from the server
    const fetchnewdata = async () => {
      try {
        // Make an HTTP GET request to fetch data from the server using the API URL
        const result = await axios.get(apiUrl);
        // Log the new data fetched
        console.log('result.newdata:', result.newdata);
        // Set the fetched data to the state
        setnewdata(result.newdata);
        // Set loading status to false after data is fetched
        setShowLoading(false);
      } catch (error) {
        // Log any errors that occur during the data fetching
        console.log('error in fetchnewdata:', error);
      }
    };

    // Call the fetch function when the component mounts
    fetchnewdata();
  }, []);

  // Function to determine the species based on values from new data
  const determineNewSpecies = (values) => {
    // Threshold for classification
    const threshold = 0.5;
    // Determine species based on values and threshold
    if (values[0] >= threshold && values[1] < threshold && values[2] < threshold) {
      return 'setosa';
    } else if (values[0] < threshold && values[1] >= threshold && values[2] < threshold) {
      return 'virginica';
    } else if (values[0] < threshold && values[1] < threshold && values[2] >= threshold) {
      return 'versicolor';
    } else {
      // Default case for unknown scenarios
      return 'Unknown';
    }
  };

  // Render function to display the component
  return (
    <div>
      {/* Display loading spinner if data is still being fetched */}
      {showLoading ? (
        // Show a loading spinner when loading data
        <div>
          <Spinner animation="border" role="status">
            <span className="sr-only">Waiting for results...</span>
          </Spinner>
        </div>
      ) : (
        <div>
          {/* Display prediction results header */}
          <h1>Prediction Results After Changes</h1>

          {/* Table for displaying test results */}
          <table className="Results-table">
            <thead>
              {/* Table headers */}
              <tr>
                <th className="Results-th">Test 1</th>
                <th className="Results-th">Test 2</th>
                <th className="Results-th">Test 3</th>
                <th className="Results-th">Species</th>
                <th className="Results-th">Epoch's</th>
                <th className="Results-th">Learning Rate</th>
              </tr>
            </thead>
            <tbody>
              {/* Row for displaying test results */}
              <tr>
                {/* Display values from new data for Test 1 */}
                <td className="Results-td">
                  {newdata.row1 && newdata.row1.map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                </td>
                {/* Display values from new data for Test 2 */}
                <td className="Results-td">
                  {newdata.row2 && newdata.row2.map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                </td>
                {/* Display values from new data for Test 3 */}
                <td className="Results-td">
                  {newdata.row3 && newdata.row3.map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                </td>
                {/* Column for determining and displaying species */}
                <td className="Results-td">
                  <h2>Species</h2>
                  {/* Determine species for each set of values */}
                  {newdata.row1 && newdata.row2 && newdata.row3 && (
                    <div>
                      <p>{determineNewSpecies([newdata.row1[0], newdata.row2[0], newdata.row3[0]])}</p>
                      <p>{determineNewSpecies([newdata.row1[1], newdata.row2[1], newdata.row3[1]])}</p>
                      <p>{determineNewSpecies([newdata.row1[2], newdata.row2[2], newdata.row3[2]])}</p>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Table for displaying species values */}
          <h2>Definition of Values for Species, Epoch and Learning Rate</h2>
          <table className="Results-table">
            <thead>
              {/* Table headers */}
              <tr>
                <th className="Results-th">Species</th>
                <th className="Results-th">Values</th>
              </tr>
            </thead>
            <tbody>
              {/* Rows for displaying values for each species */}
              <tr>
                <td className="Results-td">setosa</td>
                <td className="Results-td">1, 0, 0</td>
              </tr>
              <tr>
                <td className="Results-td">virginica</td>
                <td className="Results-td">0, 1, 0</td>
              </tr>
              <tr>
                <td className="Results-td">versicolor</td>
                <td className="Results-td">0, 0, 1</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Display Results component with predictionResults data as prop if predictionResults is truthy */}
      {predictionResults && <Results data={predictionResults} />}
      {/* To Be completed later */}


    </div>
  );
}

// Export the component as default
export default Results;
