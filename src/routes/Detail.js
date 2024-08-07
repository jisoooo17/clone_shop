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

      <div className="tab-w">
        <Nav className="tab-btn-w" variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link className='btn-tab' eventKey="link0" onClick={()=>{setTab(0)}}>상품상세</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='btn-tab' eventKey="link1" onClick={()=>{setTab(1)}}>상품후기</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className='btn-tab' eventKey="link2" onClick={()=>{setTab(2)}}>교환 및 환불 규정</Nav.Link>
          </Nav.Item>
        </Nav>

        <TabContent tab={tab}/>
      </div>
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
    <div className={`cont start ${fade}`}>
      {[<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repellendus eos animi odio non cum iusto, repellat magni hic necessitatibus tempore quo consequuntur numquam quisquam cumque nihil inventore voluptatibus accusantium officiis iure maxime ut? Veniam perspiciatis eligendi vero aliquid nulla, commodi expedita, debitis animi iure ipsa sit dolores dolore consequatur iusto, qui fuga ex enim eos quisquam inventore. Ea doloribus, corrupti quaerat natus sapiente accusantium a non reiciendis deleniti ipsa voluptatem dolor dolorem, assumenda et dolorum eum molestiae accusamus magnam deserunt corporis aspernatur esse ratione. Ab eaque obcaecati et rerum, quas officia quis distinctio impedit aperiam sed a nisi deserunt deleniti fuga accusamus cumque necessitatibus porro ad temporibus vel tempora veritatis hic. Esse at maxime vel cumque dicta iusto earum cum nostrum, odit repellat doloremque ut, quos quaerat similique facere, fugiat illum impedit. Culpa, natus a cupiditate nobis blanditiis repellat aliquam et possimus hic. </div>, <div>Ullam, doloribus aperiam! Modi consectetur iusto, unde dolor a ratione molestias dolorum provident dignissimos vel mollitia ducimus rerum non. Numquam doloribus odio earum deleniti quos, similique aut recusandae possimus repudiandae! Earum ullam repudiandae odit magni at, expedita magnam culpa dolore laborum optio veritatis dolor vitae dolorum, temporibus enim. Vel, repellendus dolore itaque esse dignissimos deserunt aliquam. Totam libero aliquid ex doloremque facere asperiores nostrum, neque quisquam aut quas accusantium, aperiam nisi ut! Nemo non quam explicabo minus obcaecati, molestiae ad ipsam recusandae pariatur nihil labore assumenda architecto impedit dolorem. Hic natus suscipit quibusdam dignissimos reiciendis! Alias incidunt neque iure, quae et quidem quisquam libero facilis autem omnis asperiores aperiam veritatis vitae deserunt, commodi consequuntur officia exercitationem corrupti officiis saepe velit obcaecati consequatur provident laborum? Est error voluptate, itaque, sint suscipit inventore nisi quas hic a excepturi magnam ratione? Doloribus eligendi porro eius amet earum neque quidem tempore a odit magnam quae quo assumenda, quibusdam nostrum reprehenderit.</div>, <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis suscipit repellat, numquam quisquam quas aperiam ab et doloremque! Molestiae ipsum suscipit exercitationem voluptatibus aliquid quibusdam atque laborum harum beatae, vitae repellat recusandae, repudiandae, iste nostrum! A, molestiae! Dolorum iusto, a libero possimus, sed iure nostrum, odit ipsum quam alias culpa ad! Rem porro sed sequi autem necessitatibus accusamus similique, cupiditate provident laudantium aliquam ut nobis! Assumenda, provident, soluta, culpa placeat fugit laudantium est iusto magnam illo dolores aliquam voluptate amet numquam maxime dolor expedita explicabo? Odio eum aliquid iste at rem, quasi reiciendis tempora ab optio, fugiat asperiores iure voluptates doloremque atque a nemo libero? A ex fugit error consequatur inventore odio! Itaque, voluptate ipsa doloremque quod earum culpa iure praesentium laborum ipsam. Voluptatum eos ea dicta tempore earum quia enim, dolorum fuga vero, nobis, officia accusamus commodi omnis quaerat incidunt! Id, maxime. Rerum, corporis. Aperiam exercitationem, reiciendis suscipit natus eius illum odio inventore error eaque velit. Labore eos maxime quos quam similique omnis quis unde quasi quisquam autem exercitationem cupiditate sit placeat, iste consequuntur molestiae, earum, numquam est qui. Vitae error necessitatibus perferendis distinctio mollitia aliquam veritatis minima accusantium, tempora ratione non tenetur eaque corporis soluta eos ut ducimus.</div>] [tab]}
    </div>
  )
}

export default Detail;