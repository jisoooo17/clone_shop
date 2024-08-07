import React from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase } from "../store/userSlice.js";
import { addCount } from "../store.js";
import { minusCount } from "../store.js";

const Cart = () => {
  let state = useSelector((state) => {return state})
  let dispatch = useDispatch();

  return (
    <div className='cart'>
      <h3>
        {state.user.name}의 장바구니
      </h3>

      <Table>
        <thead>
          <tr>
            <th>상품번호</th>
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
                <td>
                  <button className='num' onClick={()=>{
                    dispatch(minusCount(data.id))
                  }}>-</button>
                  <button className='num'  onClick={()=>{
                    dispatch(addCount(data.id))
                  }}>+</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;