import React from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

let YellowBtn = styled.button`
  background: ${props => props.bg};
  color: ${props => props.bg == "blue" ? "#fff" : "#000"};
  padding: 10px;
`

let Box = styled.div`
  background: #aaa;
  padding: 20px
`

const Detail = (props) => {
  let {id} = useParams();
  let prodId = props.shoes.find(function(x) {
    return x.id == id
  });
  // console.log(prodId);

  return (
    <div className="detail-w">
      <Box>
        <YellowBtn bg="blue">버튼</YellowBtn>
        <YellowBtn bg="orange">버튼</YellowBtn>
      </Box>

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