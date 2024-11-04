/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */

import "./home.css";
import { Link } from "react-router-dom";
import Homeproduct from "./home_product";
import React, { useEffect, useState, } from 'react';
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter ,FaTelegram ,FaYoutube,FaShoppingCart  } from "react-icons/fa";

const home = () =>{
    // Product category

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [newProduct,SetNewProduct] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [featurdProduct,SetfeaturdProduct] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [topProduct,SettopProduct] = useState([])
     // setTrebdingProduct for show  product ...

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct);
    // filter of trending product
    const filtercate = (x) =>{
        const filterproduct = Homeproduct.filter((curElm)=>{
            return curElm.type === x
        })
        setTrendingProduct(filterproduct);
    }

    // all Trending Prduct 
    const allTrendingProduct = () =>{
        setTrendingProduct(Homeproduct);
    }

    //  Product Type

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        productcategory()
    })
   const productcategory = () => {
    // now product
    // eslint-disable-next-line array-callback-return
    const nowcategory = Homeproduct.filter((x)=>{
        return x.type === 'now'
    })
    SetNewProduct(nowcategory)
    // fraturproduct 
    const featurdcategory = Homeproduct.filter((x)=>{
        return x.type ==='feature'
    })
    SetfeaturdProduct(featurdcategory)
    // top product 
    const topcategory = Homeproduct.filter((x)=>{
        return x.type==='top'
    })
       SettopProduct(topcategory)
   }
   
    return(
        <>
           <div className="home">
                <div className="top_banner">
                    <div className="contant">
                        <h3>Silver aluminus</h3>
                        <h2>Apple Watch</h2>
                        <p>30% off at your first orders</p>
                        <Link to="/shop" className="link">Shop Now</Link>
                    </div>
                </div>
                <div className="trending">
                    <div className="container">
                        <div className="left_box">
                            <div className="header">
                                <div className="heading">
                                    <h2 onClick={() => allTrendingProduct()}>trending product</h2>
                                </div>
                                <div className="cate">
                                    <h3 onClick={()=> filtercate('now')}>New</h3>
                                    <h3 onClick={()=> filtercate('feature')}>Featured</h3>
                                    <h3 onClick={()=> filtercate('top')}>top selling</h3>
                                </div>
                            </div>
                            <div className="product">
                                <div className="container">
                                    {
                                        trendingProduct.map((curElm)=>
                                        {
                                            return(
                                                <>
                                                    <div className="box">
                                                        <div className="img_box">
                                                            <img src={curElm.img} alt="fast"></img>
                                                            <div className="icon">
                                                                <div className="icon_box">
                                                                <FaEye />
                                                                </div>
                                                                <div className="icon_box">
                                                                <FaHeart />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="info">
                                                            <h3>{curElm.name}</h3>
                                                            <p>{curElm.price}</p>
                                                            <button className="btn">Add To cart</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <button>
                                    Show More
                                </button>
                            </div>
                        </div>
                        <div className="right_box">
                            <div className="right_container">
                                <div className="testimoial">
                                    <div className="head">
                                        <h3>out testimoial</h3>
                                    </div>
                                    <div className="detail">
                                        <div className="img_box">
                                            <img src="image/T1.avif" alt="testmonial" ></img>
                                        </div>
                                        <div className="info">
                                            <h3>stephan robot</h3>
                                            <h4>web desginer</h4>
                                            <p>Duis faucibus enim vitae nune molestie, nac facilisis arcu pulvinar nulfam maltstr nullam maltts</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="nowletter">
                                    <div className="head">
                                        <h3>Nowletter</h3>
                                    </div>
                                    <div className="form">
                                        <p>Join our malling lish</p>
                                        <input type="email" placeholder="E-mail" outoComplete="off"></input>
                                        <button>subscribe</button>
                                        <div className="icon_box">
                                            <div className="icon">
                                            <FaFacebookF />
                                            </div>
                                            <div className="icon">
                                            <FaTwitter />
                                            </div>
                                            <div className="icon">
                                            <FaTelegram />
                                            </div>
                                            <div className="icon">
                                            <FaYoutube  />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banners">
                    <div className="container">
                        <div className="left_box">
                            <div className="box">
                                <img src="image/Multi-Banner-1.avif" alt="banners"></img>
                            </div>
                            <div className="box">
                                <img src="image/Multi-Banner-2.avif" alt="banners"></img>
                            </div>
                            <div className="box">
                                <img src="image/Multi-Banner-1.avif" alt="banners"></img>
                            </div>
                        </div>
                        <div className="right_box">
                            <div className="top">
                                <img src="image/Multi-Banner-3.webp" alt="banners"></img>
                                <img src="image/Multi-Banner-4.avif" alt="banners"></img>
                            </div>
                            <div className="button">
                                <img src="image/Multi-Banner-5.webp" alt="banner"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_tyoe">
                    <div className="container">
                        <div className="box">
                        <div className="header">
                            <h2>New Product</h2>
                        </div>
                        {
                            newProduct.map((curElm)=>{
                                return(
                                <>
                                    <div className="productbox">
                                        <div className="img_box">
                                            <img src={curElm.img} alt="errr"></img>
                                        </div>
                                        <div className="detail">
                                            <h3>{curElm.name}</h3>
                                            <p>$ {curElm.price}</p>
                                            <div className="icon">
                                                <button> <FaEye /></button>
                                                <button><FaHeart /></button>
                                                <button><FaShoppingCart /></button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                            })
                        }
                        </div>
                        <div className="box">
                        <div className="header">
                            <h2>Featurd Product</h2>
                        </div>
                        {
                            featurdProduct.map((curElm)=>{
                                return(
                                <>
                                    <div className="productbox">
                                        <div className="img_box">
                                            <img src={curElm.img} alt="errr"></img>
                                        </div>
                                        <div className="detail">
                                            <h3>{curElm.name}</h3>
                                            <p>$ {curElm.price}</p>
                                            <div className="icon">
                                                <button> <FaEye /></button>
                                                <button><FaHeart /></button>
                                                <button><FaShoppingCart /></button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                            })
                        }
                        </div>
                        <div className="box">
                        <div className="header">
                            <h2>New Product</h2>
                        </div>
                        {
                            topProduct.map((curElm)=>{
                                return(
                                <>
                                    <div className="productbox">
                                        <div className="img_box">
                                            <img src={curElm.img} alt="errr"></img>
                                        </div>
                                        <div className="detail">
                                            <h3>{curElm.name}</h3>
                                            <p>$ {curElm.price}</p>
                                            <div className="icon">
                                                <button> <FaEye /></button>
                                                <button><FaHeart /></button>
                                                <button><FaShoppingCart /></button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                            })
                        }
                        </div>
                    </div>
                </div>
           </div>
        </>
    )
}
export default home;