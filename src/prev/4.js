import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import bg from "./img/bg.png";
import { useState } from 'react';
// import {a, b} from "./data_multi.js";
import data from "./data.js";
import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";
import Detail from './routes/Detail.js';


function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/")}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/detail")}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

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
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>member</div>}></Route>
          <Route path="location" element={<div>location</div>}></Route>
        </Route>

        {/* <Route path="/about/member" element={<About/>}></Route>
        <Route path="/about/location" element={<About/>}></Route> */}


        <Route path="*" element={<div>없는 페이지입니다.</div>}/>
      </Routes>

      
    </div>
  );
}

function About(){
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
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
