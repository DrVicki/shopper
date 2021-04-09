import React, {useState} from "react";
import Nav from "./Nav";
import "./App.css";


const App = () => {
  const [activeTab, setActiveTab] = useState('items');
  return (
    <div className="App">
    {/* modified code*/ }
    <Nav 
    activeTab={activeTab}
    onTabChange={setActiveTab}
    />
    {/* existing code */}
    <main className="App-content">
      <Content tab={activeTab}/>
    </main>
    </div>
  );
};

const Content = ({tab}) => {
  switch (tab) {
    case 'items':
    return<span>the items</span>;
    case 'cart':
    return <span>the cart</span>
    default:
    break;
  }
};

export default App;