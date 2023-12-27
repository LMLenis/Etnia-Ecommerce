/* eslint-disable import/no-unresolved */
import React from 'react';

import "./notFound.css"

export default function NotFound404(props){
    return(
        <div className="container">
      <h2 className="heading">Error 404 Not Found</h2>
      <p className="text">The route you are looking for does not exist.</p>
    </div>
    )
}