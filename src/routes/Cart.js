import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase } from "../store/userSlice.js";
import { addCount } from "../store.js";

const Cart = () => {
  let state = useSelector((state) => {return state})
  let dispatch = useDispatch();

  return (
    <div>
      {state.user.name}의 장바구니
      <button onClick={()=>{
        dispatch(changeName());
      }}>이름 변경</button>

      <br></br>

      {state.user.age}
      <button onClick={()=>{
        dispatch(increase(10));
      }}>나이 추가</button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((data, i)=>
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.count}</td>
                <td><button onClick={()=>{
                  dispatch(addCount(data.id))
                }}>+</button></td>
              </tr>
            )
          }
        </tbody>
      </Table>

      <Test1/>
      <Test2/>
    </div>
  );
};

function Test1(){
  let 현재상태 = "refund";
  return(
    <div>
      {
        {
          info: <p>상품정보</p>,
          shipping: <p>배송관련</p>,
          refund: <p>환불약관</p>
        }[현재상태]
      }
    </div>
  )
}

let tab = {
  info: <p>상품정보</p>,
  shipping: <p>배송관련</p>,
  refund: <p>환불약관</p>
}

function Test2(){
  let 현재상태 = "info";
  return (
    <div>
      {tab[현재상태]}
    </div>
  )
}

export default Cart;