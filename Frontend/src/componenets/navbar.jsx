import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";
import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Col,
  FormControl,
} from "react-bootstrap";
import { BsCart2 } from "react-icons/bs";
import categoryService from "../services/categoryService";
import validation from "../services/validation";
import     Userservice      from "../services/userService";
import userService from "../services/userService";

const NAVBAR = () => {
  const [categories, setCategories] = useState([]);
  const [category,setCategory]=useState();
  const[searchparameter,setpararam]=useState('');

  useEffect(() => {
   loadCategories();
  }, []);

  const navigate =useNavigate();

  const loadCategories= async ()=>{
    try{
      const response= await categoryService.getCategories();
      console.log(response);
      const result=response.data;
      setCategories(result.data);
    }catch(ex){
      validation.error("something went wrong");
    }
      
  }

  const showCart=()=>{
    navigate('/cart');
  }
  const searchbybrandname= async()=>
  {
   
      const response=  await userService.homesearchbybrandname(searchparameter);
      console.log(response.data);
     if(response.message="success")
      {
       
        let data=response.data.data
        setpararam("");
        navigate('/search',{state:{products:data}});
         
      }
      else
      { validation.error("Not Found");
      navigate('/');

      }
      
  } 
  const settext =(event)=>{

    if(event.target.value.length==0)
    {
      navigate('/');
    }
    setpararam(event.target.value);
    
  }
  

  return (
    <Navbar style={{backgroundColor:'#C8E4B2'}} expand="lg" >
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>
        {/* <Image style={{width:"130px",height:"40px"}}  src="Ekart-Logistics-Courier-Tracking-logo.webp"/> */}
        <Image style={{width:"130px",height:"40px"}}  src="Ekar.avif"/>
      
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/aboutus"}>
              About us
            </Nav.Link>
            <Nav.Link as={Link} to={"/signin"}>
              SignIn
            </Nav.Link>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              {categories.map((category) => (
                <NavDropdown.Item key={category.name}>
                  <Link
                    to={`/category/${category.name}`}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    {category.name}
                  </Link>
                </NavDropdown.Item>
              ))}
              </NavDropdown>
            <Nav.Link href="/viewOrderHistory">MyOrders</Nav.Link>
          </Nav>
          <Col>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                name="search"
               
                onChange={settext}
              />
              <Button variant="outline-success" onClick={searchbybrandname}>Search</Button>
            </Form>
          </Col>
          <Nav.Item>
            <Button onClick={()=>showCart()} className="btn btn-success">
              <BsCart2 /> cart
            </Button>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NAVBAR;
