import React from 'react';
import Counter from '../components/counter';

function Home(props) {
  return (
    <div className="page">
      <h1>home</h1>
      <p>welcome to our site! :)</p>
      <Counter />
    </div>
  );
}

export default Home;
