import React from 'react';
import './styles.scss';

function Page(props) {
  return (
    <div className="page">
      <div className="section">
        <h1>blog</h1>
        <p>placeholder</p>

        <div className="row blogEntries">
          <div className="tile">
            <p>test</p>
          </div>

          <div className="tile">
            <p>test</p>
          </div>

          <div className="tile">
            <p>test</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
