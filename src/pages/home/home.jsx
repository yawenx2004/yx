/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import './styles.scss';

function Home(props) {
  const roles = [' linguist', ' poet'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 1500); /* change text every 1.5 seconds */

    return () => clearInterval(interval);
  }, []);

  // bunch of dummy objects
  const dummyTiles = [
    {
      key: '123',
      title: 'LexiVault',
      description: 'desc',
      tags: ['Dev', 'Python', 'Linguistics'],
    },
    {
      key: '124',
      title: 'title',
      description: 'desc but make this lots longer idil is gone to her lab meeting',
      tags: ['Dev', 'Des'],
    },
    {
      key: '125',
      title: 'title',
      description: 'desc',
      tags: ['Dev', 'Des'],
    },
    {
      key: '126',
      title: 'title',
      description: 'desc',
      tags: ['Dev', 'Des'],
    },
  ];

  return (
    <div className="page">
      <div className="section">
        <div className="section intro-text">
          <h1>&lt; good morrow & welcome!! &gt;</h1>
          <p>
            This is the website of Jonah / yawen xue (pronouns they / any). I&apos;ve no clue why God
            in His allegedly infinite mercy has continued to allow me to exist still but here we are!!
            Thusly this is a short list of what I have chosen to be—
          </p>
          <p>
            <span className="bold">software
              <span className="coloredText"> developer </span>
              // UI/UX + graphic
              <span className="coloredText"> designer </span>
              //
            </span> cognitive scientist // {roles[index]}
          </p>
        </div>
      </div>

      <div className="section projects">
        <h2>my projects!! &lt;3</h2>
        <p>description here</p>

        <div className="row project-tiles">
          {dummyTiles.map((t) => (
            <div key={t.key} className="tile">
              <h3>{t.title}</h3>
              <p>{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
