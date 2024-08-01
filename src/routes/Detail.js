import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import { addItem } from '../store';
import { useDispatch } from 'react-redux';

const Detail = (props) => {
  let {id} = useParams();
  let prodId = props.shoes.find(function(x) {
    return x.id == id
  });

  // useEffect test
  let [count, setCount] = useState(0);
  let [sale, setSale] = useState(true);
  let [num, setNum] = useState('');
  let [tab, setTab] = useState(0);

  let dispatch = useDispatch();

  // localstorage
  useEffect(()=>{
    // 누가 detail 페이지 접속하면
    // 그페이지에 보이는 상품 id가져와서
    // localstorage에 watched 항목에 추가
    let watched = JSON.parse(localStorage.getItem("watched"));
    watched.push(prodId.id);
    watched = new Set(watched);
    watched= Array.from(watched);
    localStorage.setItem("watched", JSON.stringify(watched))
  });

  return (
    <div className="detail-w">
      {count}
      <button onClick={()=>{setCount(count+=1)}}>버튼</button>

      {sale == true ? <div className="alert alert-warning">2초 이내 구매 시 할인</div> : null}

      <input type="text" value={num} onChange={(e)=> {setNum(e.target.value)}} />

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${prodId.id + 1}.jpg`} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{prodId.title}</h4>
            <p>{prodId.price + "원"}</p>
            <p>{prodId.content}</p>
            <button className="btn btn-danger" onClick={()=>{
              dispatch(addItem({id: prodId.id, name: prodId.title, count: 1}));
            }}>주문하기</button> 
          </div>
        </div>
      </div> 

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent tab={tab}/>
    </div>
  );
};

// function TabContent ({tab}) {
//   if(tab == 0){
//     return <div>내용0</div>
//   }
//   else if (tab == 1){
//     return <div>내용1</div>
//   }
//   else if (tab == 2){
//     return <div>내용2</div>
//   }
// }

function TabContent ({tab}) {
  let [fade, setFade] = useState("");

  useEffect(()=>{
    let a = setTimeout(()=>{setFade("end")}, 100);

    return ()=>{
      clearTimeout(a);
      setFade("");
    }
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>] [tab]}
    </div>
  )
}

export default Detail;