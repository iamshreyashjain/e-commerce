
import { useState } from 'react';
import './HP_Search.css';
import { FaRupeeSign, FaRegHeart } from 'react-icons/fa';
import { IoMdCart } from 'react-icons/io';

// Assuming the images are correctly imported

import iphonePro from '../../assets/images/iphonePro.jpg';
import iphone15 from '../../assets/images/iphone15.jpg';
import iq from '../../assets/images/mobile2.jpg';
import mobile3 from '../../assets/images/mobile3.jpg';
import nazaro from '../../assets/images/nazaro.jpg';
import iphone13 from '../../assets/images/iphone13.jpg';
import redmi from '../../assets/images/Redmi.jpg';
import redmiNote2 from '../../assets/images/redmiNote2.jpg';
import onePlus from '../../assets/images/onePlus.jpg';

export default function HP_Search() {
    const sortCategories = ['Relevance', 'Price: High to Low', 'Price: Low to High', 'Top Rated', 'New Arrivals', 'Frequently Purchased'];
    const [sort, setSort] = useState(sortCategories[0]);

    const categoryMobileFilter = [
        {
            subCategory: 'Brand',
            specifications: ['Apple', 'Blackberry', 'Samsung']
        },
        {
            subCategory: 'Ram',
            specifications: [2, 4, 8, 16, 32]
        },
        {
            subCategory: 'Internal Storage',
            specifications: [64, 128, 256, 512]
        }
    ];

    const handleOnChange = (event) => {
        setSort(event.target.value);
    };

    const handleOnChecked = (event) => {
        console.log(event.target.value);
    };

    const products = [
        { 
            img: iphone15, 
            brand: 'Levis', 
            description: 'Levis is the best of known jeans by of known jeans by...', 
            price: 2000 
        },
        { 
            img: iphone13,
            brand: 'Levis',
            description: 'Levis is the best of known jeans by of known jeans by...', 
            price: 2000
        },
        { 
            img: iphonePro,
            brand: 'Levis', 
            description: 'Levis is the best of known jeans by of known jeans by...', 
            price: 2000 
        },
        { 
            img: iq, 
            brand: 'Levis', 
            description: 'Levis is the best of known jeans by of known jeans by...', 
            price: 2000 
        },
        { 
            img: mobile3,
            brand: 'Levis', 
            description: 'Levis is the best of known jeans by of known jeans by...',
            price: 2000 
        },
        {
            img: nazaro, 
            brand: 'Levis', 
            description: 'Levis is the best of known jeans by of known jeans by...', 
            price: 2000 
        },
        {
            img: redmi, 
            brand: 'Levis', 
            description: 'Levis is the best of known jeans by of known jeans by...', 
            price: 2000 
        },
        {
            img: redmiNote2, 
            brand: 'Levis', 
            description: 'Levis is the best of known jeans by of known jeans by...', 
            price: 2000 
        },
        {
            img: onePlus, 
            brand: 'Levis', 
            description: 'Levis is the best of known jeans by of known jeans by...', 
            price: 2000 
        },
    ];

    return (
        <>
            <div className="d-flex justify-content-between overflow-scroll mx-5 mt-5">
                <div className="d-flex flex-column gap-4 col-lg-3">
                    <div className="accordion" id="sortAccordion">
                        <div className="accordion-item overflow-hidden">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#sortCollapse" aria-expanded="true" aria-controls="sortCollapse">
                                    <strong>Sort By :</strong> {sort}
                                </button>
                            </h2>
                            <div id="sortCollapse" className="accordion-collapse collapse" data-bs-parent="#sortAccordion">
                                <div className="accordion-body">
                                    {sortCategories.map((item, index) => (
                                        <div className="form-check" key={index}>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id={`flexRadioDefault${index}`}
                                                value={item}
                                                checked={sort === item}
                                                onChange={handleOnChange}
                                            />
                                            <label className="form-check-label" htmlFor={`flexRadioDefault${index}`}>
                                                {item}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shadow shadow-2">
                        <div className="accordion" id="filterAccordion">
                            {categoryMobileFilter.map((category, categoryIndex) => (
                                <div className="accordion-item overflow-hidden" key={categoryIndex}>
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#filterCollapse${categoryIndex}`}
                                            aria-expanded="true"
                                            aria-controls={`#filterCollapse${categoryIndex}`}
                                        >
                                            {category.subCategory}
                                        </button>
                                    </h2>
                                    <div
                                        id={`filterCollapse${categoryIndex}`}
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#filterAccordion"
                                    >
                                        <div className="accordion-body">
                                            {category.specifications.map((spec, specIndex) => (
                                                <div className="form-check" key={specIndex}>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name={`flexCheckbox${categoryIndex}`}
                                                        id={`flexCheckbox${categoryIndex}-${specIndex}`}
                                                        value={spec}
                                                        onChange={handleOnChecked}
                                                    />
                                                    <label className="form-check-label" htmlFor={`flexCheckbox${categoryIndex}-${specIndex}`}>
                                                        {spec}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <br /><br />

                <div className="d-flex flex-column col-lg-12">
                    <div className="d-flex flex-wrap gap-2 mx-3">
                        {products.map((product, index) => (
                            <div className="d-flex flex-column border col-lg-3 col-md-5" key={index}>
                                <div className="text-center col-lg-12 pt-2">
                                    <img
                                        src={product.img}
                                        className="img-fluid"
                                        style={{ minHeight: '340px', maxHeight: '340px' }}
                                        alt={product.brand}
                                    />
                                </div>
                                <hr />
                                <div className="my-2 mx-2">
                                    <h5 className="text-secondary">{product.brand}</h5>
                                    <p>{product.description}</p>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <FaRupeeSign />
                                            <span className="fw-bold">{product.price}</span>
                                        </div>
                                        <h4 className="d-flex gap-2">
                                            <FaRegHeart />
                                            <IoMdCart />
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
