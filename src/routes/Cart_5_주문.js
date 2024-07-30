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
    </div>
  );
};

export default Cart;