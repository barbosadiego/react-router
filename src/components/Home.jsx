import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <section className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-8 card p-3 bg-light">
          <h2>Home</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            nihil debitis saepe earum, fuga id impedit aspernatur officiis
            perferendis et excepturi nam, dolorum maxime explicabo nulla
            perspiciatis sit adipisci vitae!
          </p>
          <p>
            Facere possimus nihil, quidem, fuga quisquam praesentium voluptas
            minus in, eos magnam cum sapiente enim tempora quaerat autem
            blanditiis consectetur nisi. Quos dolores hic debitis recusandae
            officia ad sapiente facilis!
          </p>
          <div className="text-center my-4">
            <button className="btn btn-primary" onClick={() => {
              navigate('/services')
            }}>Serviços</button>
          </div>
          <p>
            Nemo praesentium voluptas error perspiciatis alias quam cupiditate
            eius vitae illo labore sit cumque id delectus similique molestiae
            magnam eaque deleniti, dolor odit, fugit vero qui. Rem distinctio
            minima fuga?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
