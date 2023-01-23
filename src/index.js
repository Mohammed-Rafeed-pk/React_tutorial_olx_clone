import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './Store/firebasecontext';
import firebase from './Firebase/cofig';
import { Context } from './Store/firebasecontext';
ReactDOM.render(
    <FirebaseContext.Provider value={{firebase}}>
        <Context>
        <App />
        </Context>
        
    </FirebaseContext.Provider>


, document.getElementById('root'));
