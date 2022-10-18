import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

const About = () => {

  let {id} = useParams();

  const [nomes] = useState(['João', 'Ana', 'Carlos']);

  return (
    <section className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-8 card p-3 bg-info">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            nihil debitis saepe earum, fuga id impedit aspernatur officiis
            perferendis et excepturi nam, dolorum maxime explicabo nulla
            perspiciatis sit adipisci vitae!
          </p>
          <h3>Cliente:</h3>
          {nomes[id]}
        </div>
        <div className="col-12 text-center mt-3">
          <Link className="btn btn-primary" to="/">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
