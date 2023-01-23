import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../Store/firebasecontext';
import { PostContext } from '../../Store/postcontext';

import './View.css';
function View() {

  const[userdetails , setUserdetails] = useState()
  const {firebase}=useContext(FirebaseContext)
  const {postdetails}=useContext(PostContext)
  const {userId}=postdetails    // destructuring an array that store in useState.
  useEffect(()=>{
    firebase.firestore().collection('usrs').where('id','==',userId).get().then((res)=>{
      res.forEach(doc=> {
        setUserdetails(doc.data())
      });
    })
  },[])
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postdetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postdetails.price} </p>
          <span>{postdetails.name}</span>
          <p>{postdetails.catogory}</p>
          <span>{postdetails.createdAt}</span>
        </div>
       {userdetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userdetails.username}</p>
          <p>{userdetails.phone}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;
