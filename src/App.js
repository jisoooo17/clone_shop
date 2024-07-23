import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import bg from "./img/bg.png";


function App() {
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

      <div className="main-bg"></div>
      {/* <div className="main-bg" style={{backgroundImage: `${bg}`}}></div> */}

      <div className="container">
        <div className="flex-row">
          <div className="col">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" />
            <img src={process.env.PUBLIC_URL + 'logo192.png'} alt="" />
            <h4>상품명</h4>
            <p>상품 설명</p>
          </div>
          <div className="col">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="" />
            <h4>상품명</h4>
            <p>상품 설명</p>
          </div>
          <div className="col">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="" />
            <h4>상품명</h4>
            <p>상품 설명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
