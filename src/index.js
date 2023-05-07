import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';


function Header() {
  const clock = Date().toLocaleString();
  return <h1 className="orange"> Hello {clock} </h1> ;
}
function Page() {
  return ( 
    <>
    <Header /> 
    <p> React es fino</p>
    <p>Mi sankalpa</p>
    </>
    );
}




const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);
setInterval(function(){
  root.render(Page());
},1000);