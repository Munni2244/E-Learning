import React from 'react';
import { Link } from 'react-router-dom';

const ErrorMsg = () => {

    return (
        <div style={{height:'640px'}} className="text-center text-danger" >
          <div>
          <h1>Page Not Found</h1>
            <h1>404</h1>
            <Link to="/home"><button className="btn btn-danger">Back To Home</button></Link>
          </div>
        </div>
    );
};

export default ErrorMsg;