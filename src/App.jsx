import { Switch, Route, Link } from 'react-router-dom';
import { Typography, Space, Layout } from 'antd';
import { Navbar } from './components';
import './App.scss';

const App = () => {
   return (
      <section className="app">
         <header className="navbar">
            <Navbar />
         </header>
         <main className="main">{/* <Main /> */}</main>
         <footer className="footer">{/* <Footer /> */}</footer>
      </section>
   );
};

export default App;
