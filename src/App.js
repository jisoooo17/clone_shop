import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import bg from "./img/bg.png";
import { useState, createContext } from 'react';
// import {a, b} from "./data_multi.js";
import data from "./data.js";
import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";
import Detail from "./routes/Detail.js"
import axios from "axios";

function App() {
  let [shoes, setShoes] = useState(data);
  let [clkCnt, setClkCnt] = useState(1);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/")}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/detail")}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <div>
            {/* 키비주얼 */}
            <div className="main-bg"></div>
              {/* <div className="main-bg" style={{backgroundImage: `${bg}`}}></div> */}

              {/* <img src={process.env.PUBLIC_URL + 'logo192.png'} alt="" /> */}

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

              {
                clkCnt < 3 ? (
                  <button onClick={()=>{
                    axios.get(clkCnt == 1 ? "https://codingapple1.github.io/shop/data2.json" : "https://codingapple1.github.io/shop/data3.json")
                      .then((res) => {
                        let newShoes = [...shoes, ...res.data];
                        setShoes(newShoes);
                        setClkCnt(clkCnt + 1);
                      })
                      .catch((err) => {
                        console.log(err);
                      })
                  }}>버튼</button>
                ) : (
                  <div>상품이 없습니다.</div>
                )
              }
          </div>
        } />
        <Route path='/detail/:id' element={
            <Detail shoes={shoes}/>
          }/>

        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>member</div>}></Route>
          <Route path='location' element={<div>location</div>}></Route>
        </Route>
        <Route path='*' element={<div>없는 페이지입니다.</div>}></Route>
      </Routes>
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사 정보</h4>
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
