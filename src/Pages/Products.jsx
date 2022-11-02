import axios from 'axios';
import React, { useRef, useEffect, useState } from 'react'
import { MdSend } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useHorizontalScroll } from '../Components/SideScroll';

import '../css/products.css'
function Products() {
    const dispatch = useDispatch();
    const { allProducts, allPackage } = useSelector((state) => state.products);
    const scrollRef = useHorizontalScroll();
    const [allOffers, setAlloffers] = useState([]);
    const getAllPackage = () => {
        axios.get('api/packages/getallpackages')
            .then(function (response) {
                // handle success
                dispatch({
                    type: "getProducts",
                    payload: response.data
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handlePtype = async (title) => {
        console.log(title);
        axios.post(`api/packages/getallpackagebytitle`,{
            packagetitle:title
        })
            .then(function (response) {
                // handle success
                console.log(response.data);
                dispatch({
                    type: "getPackages",
                    payload: response.data
                })

            })
            .catch(function (error) {
                console.log(error);
            });
    }
    console.log(allPackage);
    useEffect(() => {
        getAllPackage();
    }, []);
    return (
        <div>
            <div className="row">
                <div className="productHeader">
                    <h1>Products</h1>
                </div>
                <nav aria-label="breadcrumb" className='margin-left mt-3'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" ><a href="/" className='text-decoration-none'>Home</a></li>
                        <li className="breadcrumb-item"><a href="/" className='text-decoration-none'>Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
                <div className="ourServices" ref={scrollRef}>
                    <div className='services_holder'>
                        {
                            allProducts ? allProducts.map((prdtitle, key) => (
                                <span key={key} onClick={() => handlePtype(prdtitle.packagetitle)}>{prdtitle.packagetitle}</span>
                            )) : ""
                        }
                    </div>

                </div>

                <h3 className="text-center mt-3 mb-3">{allPackage.length !== 0 ? allPackage[0].title : "Packages"}</h3>

                {
                    allPackage.length != 0 ? allPackage[0].packagesd.length > 0 ? <div className="col-md-4 col-sm-6">
                        <div className="pricing-table-3 basic">
                            <div className="pricing-table-header">
                                <h4><strong>{allPackage[0].packagesd[0].name}</strong></h4>
                                <p>Loerm Ipsum Donor Sit Amet</p>
                            </div>
                            <div className="price"><strong>{allPackage[0].packagesd[0].price}</strong> / PROJECT</div>
                            <div className="pricing-body">
                                <ul className="pricing-table-ul">
                                    {

                                    }
                                    <li><i><MdSend /></i>{allPackage[0].packagesd[0].offers}</li>

                                </ul><a href="/" className="view-more">Buy Now</a></div>
                        </div>
                    </div> : "Nothing to show"
                        : ""}

                {
                    allPackage.length != 0 ? allPackage[0].packagesd.length >= 2 ? <div className="col-md-4 col-sm-6">
                        <div className="pricing-table-3 premium">
                            <div className="pricing-table-header">
                                <h4><strong>{allPackage[0].packagesd[1].name}</strong></h4>
                                <p>Loerm Ipsum Donor Sit Amet</p>
                            </div>
                            <div className="price"><strong>${allPackage[0].packagesd[1].price}</strong> / PROJECT</div>
                            <div className="pricing-body">
                                <ul className="pricing-table-ul">
                                    <li><i><MdSend /></i>{allPackage[0].packagesd[1].offers}</li>
                                </ul><a href="/" className="view-more">Buy Now</a></div>
                        </div>
                    </div> : ""
                        : ""}
                {
                    allPackage.length != 0 ? allPackage[0].packagesd.length >= 3 ? <div className="col-md-4 col-sm-12">
                        <div className="pricing-table-3 business">
                            <div className="pricing-table-header">
                                <h4><strong>{allPackage[0].packagesd[0].name}</strong></h4>
                                <p>Loerm Ipsum Donor Sit Amet</p>
                            </div>
                            <div className="price"><strong>${allPackage[0].packagesd[2].price}</strong> / PROJECT</div>
                            <div className="pricing-body">
                                <ul className="pricing-table-ul">
                                    <li><i><MdSend /></i>{allPackage[0].packagesd[2].offers}</li>
                                </ul><a href="/" className="view-more">Buy Now</a></div>
                        </div>
                    </div> : ""
                        : ""}
            </div>
        </div>
    )
}

export default Products;
