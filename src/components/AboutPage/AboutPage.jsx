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
        <p>
        Andrew Huberman's explanation and protocol.
        </p>
        
        <iframe width="350" height="275"
        src="https://www.youtube.com/embed/nm1TxQj9IsQ?&start=3340">
        </iframe>
      </div>
    </div>
  );
}

export default AboutPage;
