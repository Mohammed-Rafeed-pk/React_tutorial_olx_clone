import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext, FirebaseContext } from '../../Store/firebasecontext';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [name , setName]= useState()
  const [catogory , setCatogory ] =useState()
  const [ price , setPrice] = useState()
  const [image , setImage] = useState(null)
  const {firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  const date= new Date();
  const history = useHistory()
  const handleSubmit=()=>{
       firebase.storage().ref(`/Image ${image.name}`).put(image).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
          console.log(url);
          firebase.firestore().collection('Products').add({
            name:name,
            catogory:catogory,
            price :price,
            url:url,
            userId:user.uid,
            createAt:date.toDateString()
          })
          history.push('/')
        })
       })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
        
            <label htmlFor="fname">Name</label>
            <br />
            <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
            value={catogory} 
            onChange={(e)=>setCatogory(e.target.value)}
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
            value={price} 
            onChange={(e)=>setPrice(e.target.value)}
             className="input" type="number" id="fname" name="Price" />
            <br />
   
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : '' }></img>
          
            <br />
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
         
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
