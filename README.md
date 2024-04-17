# Project Name

This project is a full-stack application that integrates a front-end built with React and a back-end powered by Node.js and Express. The application leverages AI capabilities to provide predictions based on a three-layer neural network trained with Iris data. Users can input data such as sepal length, sepal width, petal length, and petal width, along with parameters like the number of epochs and learning rate, to generate predictions. The neural network model processes the input data to make accurate predictions about the Iris dataset, offering a seamless and user-friendly experience for users exploring AI and data science.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

### Front-End Features

- **React**: 
  - The front-end is built using React, providing a modern and dynamic user interface.
  - Allows users to input data such as sepal length, sepal width, petal length, and petal width.
  - Users can choose parameters such as the number of epochs and learning rate for the neural network.

### Back-End Integration

- **Express**:
  - The back-end server is powered by Express, enabling smooth integration between the front-end and back-end.
  - Provides API endpoints for the front-end to send input data and parameters to the back-end for processing.
  - Processes input data using a three-layer neural network trained on the Iris dataset.

### Libraries Used

- **React**: 
  - The front-end framework for building the user interface.
  
- **Express**: 
  - A web application framework for Node.js, used for creating the back-end server.
  
- **TensorFlow.js**:
  - Used for implementing the three-layer neural network and processing predictions.
  
- **Axios**:
  - A library for handling API requests from the front-end to the back-end.
  
- **Other Libraries**:
  - Depending on the project, additional libraries may be used for state management, routing, and styling.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (version 16.0.0 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd your-repo-name
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

## Usage

1. **Start the back-end server**:

    ```bash
    npm run start:backend
    ```

2. **Start the front-end application**:

    ```bash
    npm run start:frontend
    ```

3. Access the application in your browser at `http://localhost:3000`.

## API Documentation
The back-end API provides endpoints for making predictions based on the Iris dataset using a three-layer neural network. Users can submit data such as sepal length, sepal width, petal length, and petal width, along with parameters like the number of epochs and learning rate, to receive predictions. Here's an overview of the main API endpoints:

### `/predict`

- **Description**: 
  - The main endpoint for making predictions.
  
- **Method**: 
  - `POST`
  
- **Request Body**: 
  - JSON object containing the following keys:
    - `sepal_length`: (float) Length of the sepal.
    - `sepal_width`: (float) Width of the sepal.
    - `petal_length`: (float) Length of the petal.
    - `petal_width`: (float) Width of the petal.
    - `epochs`: (int) Number of epochs for neural network training.
    - `learning_rate`: (float) Learning rate for neural network training.
    
- **Response**: 
  - JSON object containing the prediction results.
    - `prediction`: Predicted class of the iris flower.


## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add a new feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Open a pull request to the main branch.

Please ensure your code follows the coding standards and tests pass before submitting a pull request.

## License

This project is licensed under Centennial College.
