import React from 'react'
import '../styles/ErrorRoutes.css'
function ErrorRoute() {
  return (
    <div className="not-found">
      <h1>404: Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <p>
        You can try going back to the <a href="/">homepage</a>.
      </p>
    </div>
  );
}

export default ErrorRoute