import React from 'react';
import Header from '../header/Header';
import './layout.scss';

export default function Layout(props: {children: any}) {
  return (
    <React.Fragment>
      <Header />
      <div className="layout">
        {props.children}
      </div>
    </React.Fragment>
  );
}