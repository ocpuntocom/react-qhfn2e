import React from 'react';

export function Header(props) {
  const reloj = Date().toLocaleString();
  return <h1 className="orange"> Hello {props.name} {props.apellido} {reloj} </h1> ;
}
