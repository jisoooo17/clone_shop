import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

const Detail = (props) => {
  let {id} = useParams();
  let prodId = props.shoes.find(function(x) {
    return x.id == id
  });

  // useEffect test
  let [count, setCount] = useState(0);
  let [sale, setSale] = useState(true);
  let [num, setNum] = useState('')

  useEffect(()=>{
    let timer = setTimeout(function(){ setSale(false) }, 2000);
    console.log("다음에 실행" + 2);

    return ()=>{
      // 먼저 실행됨
      // cleanup function - ex) 기존 데이터 요청 제거 코드
      // mount될 때 실행안됨, unmount될 때 실행됨
      console.log("먼저실행" + 1);
      clearTimeout(timer);
    }
  }, []);

  useEffect(()=>{
    if(isNaN(num) == true){
      alert("숫자만 입력하세요");
    }
  }, [num])

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
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
    </div> 
    </div>
  );
};

export default Detail;