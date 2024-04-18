// Import necessary libraries and components
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// Define prop types for PostForm component
PostForm.propTypes = {
    // The function to call when the form is submitted
    onFormSubmit: PropTypes.func.isRequired,
};

// Define the PostForm component that takes an onFormSubmit prop
function PostForm({ onFormSubmit }) {
  // State to manage form data, with initial values set to empty strings
  const [formData, setFormData] = useState({
    sepal_length: '',
    sepal_width: '',
    petal_length: '',
    petal_width: '',
    epoch: '',
    learningrate: '',
  });

  // Handle changes to form input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update the corresponding field in formData based on the input name and value
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    try {
      // Make an HTTP POST request to submit the form data to the server
      const response = await axios.post('/api/run', formData);
      // Call the onFormSubmit prop with the response data
      onFormSubmit(response.data);
    } catch (error) {
      // Log any errors that occur during form submission
      console.error('Error submitting form:', error);
    }
  };

  // Render the form
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Enter Data, Epoch, and Learning Rate</h2>

      {/* Input field for Sepal Length */}
      <div>
        <label>
          Sepal Length:
          <input
            type="text"
            name="sepal_length"
            value={formData.sepal_length}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Input field for Sepal Width */}
      <div>
        <label>
          Sepal Width:
          <input
            type="text"
            name="sepal_width"
            value={formData.sepal_width}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Input field for Petal Length */}
      <div>
        <label>
          Petal Length:
          <input
            type="text"
            name="petal_length"
            value={formData.petal_length}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Input field for Petal Width */}
      <div>
        <label>
          Petal Width:
          <input
            type="text"
            name="petal_width"
            value={formData.petal_width}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Input field for changing the number of epochs */}
      <div>
        <label>
          Change number of Epochs:
          <input
            type="number"
            name="epoch"
            value={formData.epoch}
            placeholder="Enter Epochs"
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Input field for changing the learning rate */}
      <div>
        <label>
          Change Learning Rate:
          <input
            type="number"
            name="learningrate"
            value={formData.learningrate}
            placeholder="Enter Learning Rate"
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Submit button for the form */}
      <button type="submit">Submit</button>
    </form>
  );
}

// Export the PostForm component as default
export default PostForm;
