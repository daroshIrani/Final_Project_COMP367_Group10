// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import './App.css';

// Import custom components PostForm and Results
import PostForm from './components/Post-Form';
import Results from './components/Results';

function App() {
  // State to manage data fetched from the server
  const [data, setData] = useState({});

  // State to manage loading status
  const [showLoading, setShowLoading] = useState(true);

  // State to manage prediction results 
  const [predictionResults, setPredictionResults] = useState(null);

  // API URL for fetching and posting data
  const apiUrl = "/api/run";

  // useEffect hook to fetch data from the server when the component mounts
  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        // Set loading status to true
        setShowLoading(true);
        // Fetch data from the server using the API URL
        const result = await axios.get(apiUrl);
        console.log('result.data:', result.data);
        // Set the fetched data to the state
        setData(result.data);
        // Set loading status to false after data is fetched
        setShowLoading(false);
      } catch (error) {
        // Log any errors that occur during data fetch
        console.log('Error in fetchData:', error);
        setShowLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  // Handle form submission
  const handleFormSubmit = async (formData) => {
    try {
      // Set loading status to true
      setShowLoading(true);
      // Send the form data to the server via a POST request
      const response = await axios.post(apiUrl, formData);
      // Set the response data as prediction results
      setPredictionResults(response.data);
    } catch (error) {
      // Log any errors that occur during form submission
      console.error('Error:', error);
    } finally {
      // Set loading status to false
      setShowLoading(false);
    }
  };

  // Function to determine species based on values
  const determineSpecies = (values) => {
    // Define a threshold for species classification
    const threshold = 0.5;
    // Determine species based on the threshold and the values provided
    if (values[0] >= threshold && values[1] < threshold && values[2] < threshold) {
      return 'setosa';
    } else if (values[0] < threshold && values[1] >= threshold && values[2] < threshold) {
      return 'virginica';
    } else if (values[0] < threshold && values[1] < threshold && values[2] >= threshold) {
      return 'versicolor';
    } else {
      // Return 'Unknown' if none of the conditions are met
      return 'Unknown';
    }
  };

  // Render the App component
  return (
    <div>
      {/* Display either loading spinner or content based on loading status */}
      {showLoading === false ? (
        <div>
          {/* Show a loading spinner when loading */}
          {showLoading && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}

          {/* Header for prediction results */}
          <h1>Prediction Results</h1>

          {/* Table for displaying test results */}
          <table className="App-table">
            <thead>
              <tr>
                <th className="App-th">Test 1</th>
                <th className="App-th">Test 2</th>
                <th className="App-th">Test 3</th>
                <th className="App-th">Species</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* Display values for Test 1 */}
                <td className="App-td">
                  {data.row1 && data.row1.map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                </td>
                {/* Display values for Test 2 */}
                <td className="App-td">
                  {data.row2 && data.row2.map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                </td>
                {/* Display values for Test 3 */}
                <td className="App-td">
                  {data.row3 && data.row3.map((value, index) => (
                    <p key={index}>{value}</p>
                  ))}
                </td>
                {/* Determine and display the species based on values */}
                <td className="App-td">
                  {data.row1 && data.row2 && data.row3 && (
                    <div>
                      <p>{determineSpecies([data.row1[0], data.row2[0], data.row3[0]])}</p>
                      <p>{determineSpecies([data.row1[1], data.row2[1], data.row3[1]])}</p>
                      <p>{determineSpecies([data.row1[2], data.row2[2], data.row3[2]])}</p>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Display prediction results using the Results component */}
          {predictionResults && <Results data={predictionResults} />}

          {/* Table for displaying species definitions */}
          <h2>Definition of Values for Species</h2>
          <table className="App-table">
            <thead>
              <tr>
                <th className="App-th">Species</th>
                <th className="App-th">Values</th>
              </tr>
            </thead>
            <tbody>
              {/* Define species and their values */}
              <tr>
                <td className="App-td">setosa</td>
                <td className="App-td">1, 0, 0</td>
              </tr>
              <tr>
                <td className="App-td">virginica</td>
                <td className="App-td">0, 1, 0</td>
              </tr>
              <tr>
                <td className="App-td">versicolor</td>
                <td className="App-td">0, 0, 1</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        // Display loading spinner if data is still being fetched
        <div>
          {showLoading && (
            <Spinner animation="border" role="status">
              <span className="sr-only">Waiting for results...</span>
            </Spinner>
          )}
        </div>
      )}
      {/* Render the PostForm component and pass handleFormSubmit as a prop */}
      <PostForm onFormSubmit={handleFormSubmit} />
    </div>
  );
}

// Export the App component as default
export default App;
