// import logo from './logo.svg';
import React from 'react';
import { Divider } from 'antd';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import 'antd/dist/antd.min.css';

import './App.css';

import Home from './pages/Home.js';
import About from './pages/About.js';

const RouteExample = () => {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      <nav>
        <Link to="/">Home</Link>
        <Divider type="vertical" />
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        {/* <Route path="/" exact component={Home} />
        <Route path="/about" component={About} /> */}
        {/* react-router-dom6写法 */}
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      {/* http://localhost:8080/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg  todo 图片404*/ }
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </Router>
  );
};


export default function App() {
  return (
    <div className="App">
      {/* <LibVersion /> */}
      {/* <HelloModal /> */}

      <Divider />

      <RouteExample />
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;
