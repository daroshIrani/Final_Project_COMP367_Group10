import React, { useState } from 'react';
import axios from 'axios';


function PostForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    sepal_length: '',
    sepal_width: '',
    petal_length: '',
    petal_width: '',
    epoch:'',
    learningrate:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   onFormSubmit(formData);
  // };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/run', formData);
      onFormSubmit(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Enter Data, epoch and learning rate</h2>
      <div>
        <label>
          Sepal Length:
          <input type="text" name="sepal_length" value={formData.sepal_length} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Sepal Width:
          <input type="text" name="sepal_width" value={formData.sepal_width} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Petal Length:
          <input type="text" name="petal_length" value={formData.petal_length} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Petal Width:
          <input type="text" name="petal_width" value={formData.petal_width} onChange={handleChange} />
        </label>
     </div>
{/* Epoch and learning rate input type has to be fixed later */}
     <div>
        <label>
            Change number of Epochs: 
            <input type="number" name="epoch" value={formData.epoch} placeholder="Enter Epochs" onChange={handleChange}/>
        </label>
    </div>

    <div>
        <label>
            Change Learning Rate: 
            <input type="number" name="learningrate" value={formData.learningrate} placeholder="Enter Learning Rate" onChange={handleChange}/>
        </label>
    </div>

     
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;