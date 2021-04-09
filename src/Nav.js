import React from "react";

const Nav = ({activeTab, onTabChange}) => {
  const itemClass = (tabName) => `
  App-nav-item ${
    (activeTab === tabName) ? 'selected' : ''
  }`;
  
  return (
    <nav className="App-nav">
    <ul>
    {/* modified code */}
      <li className={itemClass('items')}>
      {/* modified code */}
        <button onClick={() => onTabChange('items')}>Items</button>
      </li>
      {/* modified code */}
      <li className={itemClass('cart')}>
      {/* modified code */}
        <button onClick={() => onTabChange('cart')}>Cart</button>
      </li>
    </ul>
  </nav>
  )
}

export default Nav;