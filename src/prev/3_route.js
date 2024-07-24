import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import bg from "./img/bg.png";
import { useState } from 'react';
// import {a, b} from "./data_multi.js";
import data from "./data.js";
import {Routes, Route, Link} from "react-router-dom";
import Detail from './routes/Detail.js';

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to={"/"}>Home</Link>
      <Link to={"/detail"}>Detail</Link>

      <Routes>
        <Route path="/" element={
          <div>
            {/* 키비주얼 */}
              <div className="main-bg"></div>

              {/* 상품 리스트 */}
              <div className="container">
                <div className="flex-row">
                  {
                    shoes.map((q, i)=>{
                      return(
                        <Card shoes={shoes[i]} key={i} i={i}/>
                      )
                    })
                  }
                </div>
              </div>
          </div>
          }></Route>
        <Route path="detail" element={<Detail/>}/>
      </Routes>

      
    </div>
  );
}

function Card (props){
  return (
    <div className="col">
      <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} alt="" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
      <p>{props.shoes.content}</p>
    </div>
  )
}

export default App;
