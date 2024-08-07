import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { useEffect, useState } from 'react';
import data from "./data.js";
import {Routes, Route, useNavigate, Outlet} from "react-router-dom";
import Detail from "./routes/Detail.js"
import axios from "axios";
import Cart from './routes/Cart.js';

function App() {
  let [shoes, setShoes] = useState(data);
  let [clkCnt, setClkCnt] = useState(1);
  let navigate = useNavigate();

  // localstorage
  let obj = {name: "jisoo"}
  localStorage.setItem("data", JSON.stringify(obj)); // json으로 변환

  let obj2 = localStorage.getItem("data"); 
  JSON.parse(obj2); //obj으로 변환
  // console.log(JSON.parse(obj2).name);

  useEffect(() => {
    if(!localStorage.getItem("watched")){
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand onClick={()=>{navigate("/")}} style={{cursor: "pointer"}}>Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/cart")}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
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

              {
                clkCnt < 3 ? (
                  <button className='more' onClick={()=>{
                    axios.get(clkCnt == 1 ? "https://codingapple1.github.io/shop/data2.json" : "https://codingapple1.github.io/shop/data3.json")
                      .then((res) => {
                        let newShoes = [...shoes, ...res.data];
                        setShoes(newShoes);
                        setClkCnt(clkCnt + 1);
                      })
                      .catch((err) => {
                        console.log(err);
                      })
                  }}>더보기</button>
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
        <Route path="/cart" element={<Cart/>}/>
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
  let navigate = useNavigate();

  return (
    <div className="col" onClick={()=>{
      navigate(`/detail/${props.shoes.id}`);
    }}>
      <img src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`} alt="" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
      <p>{props.shoes.content}</p>
    </div>
  )
}

export default App;
