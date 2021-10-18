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
            For the youtube video, jump to 55:40 for Andrew Huberman's explanation and protocol.
        </p>
        {/* question about setting auto start to 55:40 */}
        <iframe width="420" height="315"
        src="https://www.youtube.com/embed/nm1TxQj9IsQ?&autoplay=1">
        </iframe>
      </div>
    </div>
  );
}

export default AboutPage;
