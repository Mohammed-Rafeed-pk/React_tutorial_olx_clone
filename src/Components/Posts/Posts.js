import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../Store/firebasecontext';

import Heart from '../../assets/Heart';
import './Post.css';
import { PostContext } from '../../Store/postcontext';
import { useHistory } from 'react-router-dom';

function Posts() {
const {firebase}=useContext(FirebaseContext)
const [product , setProduct] = useState([])
const {setPostdetails}=useContext(PostContext)
const history = useHistory()
useEffect(()=>{
  firebase.firestore().collection('Products').get().then((snapshot)=>{
    const allpost=snapshot.docs.map((pro)=>{
      return{
        ...pro.data(),
        id:pro.id
      }
    })
    setProduct(allpost)
  })
},[])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">

      {product.map(pro=>{
  return(
<div
className="card"
onClick={()=>{setPostdetails(pro);
  history.push('/view')
}}
>
<div className="favorite">
  <Heart></Heart>
</div>
<div className="image">
  <img src={pro.url} alt="" />
</div>
<div className="content">
  <p className="rate">&#x20B9;{pro.price}</p>
  <span className="kilometer">{pro.catogory}</span>
  <p className="name">{pro.name}</p>
</div>
<div className="date">
  <span>{pro.createdAt}</span>
</div>
</div>
  )
      })}
          


        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
