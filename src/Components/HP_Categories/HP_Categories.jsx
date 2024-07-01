import React from 'react';
import { Link } from 'react-router-dom';
import "./HP_Categories.css";

export default function HP_Categories() {
  const categories = [
    {
      image: 'https://as1.ftcdn.net/v2/jpg/01/88/21/46/1000_F_188214656_C6ZaKov6XHjtpSslDXg8Nym8zE4zzNa2.jpg',
      caption: 'Grocery'
    },
    {
      image: 'https://as1.ftcdn.net/v2/jpg/01/88/21/46/1000_F_188214656_C6ZaKov6XHjtpSslDXg8Nym8zE4zzNa2.jpg',
      caption: 'Grocery'
    },
    {
      image: 'https://as1.ftcdn.net/v2/jpg/01/88/21/46/1000_F_188214656_C6ZaKov6XHjtpSslDXg8Nym8zE4zzNa2.jpg',
      caption: 'Grocery'
    },
    {
      image: 'https://as1.ftcdn.net/v2/jpg/01/88/21/46/1000_F_188214656_C6ZaKov6XHjtpSslDXg8Nym8zE4zzNa2.jpg',
      caption: 'Grocery'
    },
    {
      image: 'https://as1.ftcdn.net/v2/jpg/01/88/21/46/1000_F_188214656_C6ZaKov6XHjtpSslDXg8Nym8zE4zzNa2.jpg',
      caption: 'Grocery'
    },
    {
      image: 'https://as1.ftcdn.net/v2/jpg/01/88/21/46/1000_F_188214656_C6ZaKov6XHjtpSslDXg8Nym8zE4zzNa2.jpg',
      caption: 'Grocery'
    },
    // Add more categories as needed
  ];

  return (
    <>
      <div className="my-5"></div>
      <div className="d-flex flex-row justify-content-between my-2">
        <div><h4>Categories</h4></div>
      </div>

      <div className="my-1"></div>
      <div className="d-flex flex-row justify-content-lg-evenly justify-content-md-around justify-content-sm-around  justify-content-evenly   flex-wrap p-2 shadow shadow-1">
        {categories.map((category, index) => (
          <div className="d-flex flex-column" key={index}>
            <Link to="" className="text-decoration-none text-dark">
              <div className="text-center">
                <img 
                  src={category.image} 
                  alt={category.caption} 
                  className="object-fit-fill col-lg-12 rounded rounded-2 shadow shadow-2" 
                  height="120px"
                />
              </div>
              <div className="text-center mt-3">
                <h6>{category.caption}</h6>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
