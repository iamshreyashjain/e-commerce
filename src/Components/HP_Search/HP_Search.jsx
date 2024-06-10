import { useState } from "react";
import './HP_Search.css';

export default function HP_Search() {
    let sortCategories = ['Relevance', 'Price: High to Low', 'Price: Low to High', 'Top Rated', 'New Arrivals', 'Frequently Purchased'];
    const [sort, setSort] = useState(sortCategories[0]);
    
    
    let categoryMobileFilter = [
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
        (event.target.value)
    };

    return (
        <>
            <div className="d-flex flex justify-content-between overflow-scroll mx-3 mt-5">
                <div className="d-flex flex-column gap-4 col-lg-3 ">
                    <div>
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
                                            aria-controls={`filterCollapse${categoryIndex}`}
                                        >
                                            {category.subCategory}{}
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
                <br/><br/>

                <div className="d-flex flex-column col-lg-8 mx-3 border border-1">
                    <div></div>
                </div>
            </div>
        </>
    );
}
