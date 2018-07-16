import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import Self from '../self';

import './index.css';

const navLinkArray = [
  {
    txt: 'Home',
    to: '/',
    exact: true
  },
  {
    txt: 'About',
    to: '/about-us'
  },
  {
    txt: 'Self',
    to: '/self'
  }
]

const App = () => (
  <div className="page">
    <header className="nav">
      {
        navLinkArray.map((item, i) => {
          return (
            <NavLink 
            key={i}
            to={item.to} 
            exact={item.exact ? true : false} 
            className={item.class ? item.class : 'link'} 
            activeStyle={{
              color: '#fff'
            }}>{item.txt}</NavLink>
          )
        })
      }
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route path="/about-us" component={About} />
      <Route path="/self" component={Self} />
    </main>
  </div>
);

export default App;
