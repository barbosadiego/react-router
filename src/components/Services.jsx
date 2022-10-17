import React from 'react';
import { Link } from 'react-router-dom';

const Services = (props) => {
  return (
    <section className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-8 card p-3 bg-light">
          <h2>Services</h2>
          <p>
            Nemo praesentium voluptas error perspiciatis alias quam cupiditate
            eius vitae illo labore sit cumque id delectus similique molestiae
            magnam eaque deleniti, dolor odit, fugit vero qui. Rem distinctio
            minima fuga?
          </p>
          <p>
            In aspernatur delectus necessitatibus. Enim modi tenetur beatae
            recusandae impedit dolorem suscipit quisquam in. Architecto eos,
            quos natus tempore odit blanditiis molestiae. Dicta dolorem ipsa
            maiores, hic blanditiis in molestias.
          </p>
          <p>
            Ad sapiente soluta ipsam vitae aspernatur provident aut totam id non
            impedit, quisquam eius molestiae, cumque accusantium reprehenderit
            inventore deserunt suscipit excepturi enim! Unde dolore inventore
            atque ex pariatur molestiae.
          </p>
          <Link className='btn btn-primary' to='/about'>About</Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
