import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import bg from "./img/bg.png";
import { useState } from 'react';
// import {a, b} from "./data_multi.js";
import data from "./data.js";

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 키비주얼 */}
      <div className="main-bg"></div>
      {/* <div className="main-bg" style={{backgroundImage: `${bg}`}}></div> */}      

      {/* <img src={process.env.PUBLIC_URL + 'logo192.png'} alt="" /> */}


      {/* 상품 리스트 */}
      <div className="container">
        <div className="flex-row">
          {/* <div className="col">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" />
            <h4>{console.log(shoes)}</h4>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
            <p>{shoes[0].content}</p>
          </div> */}

          {
            shoes.map((q, index)=>{
              return(
                <List shoes={shoes} index={index}/>
              )
            })
          }
          
          {/* <div className="col">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="" />
            <h4>상품명</h4>
            <p>상품 설명</p>
          </div>

          <List shoes={shoes}/> */}
        </div>
      </div>
    </div>
  );
}

function List(props){
  return(
    <div className="col">
      <img src={`https://codingapple1.github.io/shop/shoes${props.index + 1}.jpg`} alt="" />
      <h4>{props.shoes[props.index].title}</h4>
      <p>{props.shoes[props.index].price}</p>
      <p>{props.shoes[props.index].content}</p>
    </div>
  )
}

export default App;
