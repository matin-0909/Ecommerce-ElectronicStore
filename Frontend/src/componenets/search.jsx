import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useParams, useSearchParams } from "react-router-dom";
import productServices from "../services/productServices";
import validation from "../services/validation";
import axios from "axios";
import config from '../config/serverUrl';
import { useLocation, useNavigate } from "react-router-dom";


function Search() {
  
  const location = useLocation();
  const { products } = location.state;

  const categoryName= useSearchParams().id;
  
 
  
  useEffect(()=>{
   
  },[])
  const Style={

    column:{
       height: 500,
       width: 500,
    },
    img:{
      padding:20
    },
    card:{
        boxShadow:'0px 5px 20px rgba(0,0,0,0.5)',
        display:'inline-block',
        margin:15,
        position:'relative'
    },
    container:{
        overflow:'hidden'
    }
}

  
  return (
    <Container>
      <h2>{categoryName}</h2>
      <Row>
        
          <Col >
              {products.map((item)=>{
                return(
                  <div style={Style.card}>
                  <ProductCard product={item}/>
                  </div>
                )
              })}
          </Col>
      </Row>
    </Container>
  );
}

export default Search;
