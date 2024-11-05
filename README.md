# Smart Input Analyzer

## Overview

This project involves building a full-stack application that includes a RESTful API and a frontend interface. The application processes JSON input to categorize data into numbers and alphabets, returning the highest lowercase alphabet as part of the response.

## Features

- **Backend**: A REST API that handles POST and GET requests.
  - **POST /bfhl**: Accepts a JSON payload, processes it, and returns categorized data along with user details.
  - **GET /bfhl**: Returns a hardcoded operation code.

- **Frontend**: A React application that allows users to input JSON data and view filtered results.
  - Validates JSON input.
  - Displays categorized data based on user selection from a multi-select dropdown.
  - Shows error messages for invalid input.

## Tech Stack

- **Backend**: 
  - Node.js
  - Express.js
  - Body-parser
  - CORS

- **Frontend**: 
  - React
  - Axios for API calls

- **Deployment**:
  - Backend deployed on [Heroku/Vercel/Netlify]
  - Frontend deployed on [Vercel/Netlify]

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Backend Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd backend
