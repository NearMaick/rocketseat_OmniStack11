import React from 'react';

// import { Container } from './styles';

export default function Header(props) {
  console.tron.log(props);
  return (
    <header>
      <h1>{props.children}</h1>
    </header>
  );
}
