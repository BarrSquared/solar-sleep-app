import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>This about page is for anyone to read!</p>
        <p>
            This section will explain the other app needed to collect lux
            exposure data and how to log it.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
