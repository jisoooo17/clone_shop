import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = (props) => 
{
  let {id} = useParams();  
  // console.log(id);

  let findProd = props.shoes.find(function(x){
    return x.id == id
  })

  return (
    <div className="detail-w">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${findProd.id + 1}.jpg`} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[findProd.id].title}</h4>
            <h4 className="pt-5">{props.shoes[findProd.id].price}</h4>
            <h4 className="pt-5">{props.shoes[findProd.id].content}</h4>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
    </div> 
    </div>
  );
};

export default Detail;