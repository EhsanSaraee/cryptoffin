import { Switch, Route, Link } from 'react-router-dom';
import { Typography, Space, Layout } from 'antd';
import { Navbar } from './components';
import {
   Homepage,
   CryptoDetails,
   Cryptocurrencies,
   Exchanges,
   News,
} from './pages';
import './App.scss';

const App = () => {
   return (
      <section className="app">
         <header className="navbar">
            <Navbar />
         </header>
         <main className="main">
            <Layout>
               <section className="routes">
                  <Switch>
                     <Route exact path="/" component={Homepage} />
                     <Route exact path="/exchanges" component={Exchanges} />
                     <Route
                        exact
                        path="/cryptocurrencies"
                        component={Cryptocurrencies}
                     />
                     <Route
                        exact
                        path="/crypto/:coinID"
                        component={CryptoDetails}
                     />
                     <Route exact path="/news" component={News} />
                  </Switch>
               </section>
            </Layout>
            <footer className="footer">
               <Typography.Title
                  level={5}
                  style={{ color: 'white', textAlign: 'center' }}
               >
                  Copyright © 2021
                  <Link to="/">Cryptoverse Inc.</Link> <br />
                  All Rights Reserved.
               </Typography.Title>
               <Space>
                  <Link to="/">Home</Link>
                  <Link to="/exchanges">Exchanges</Link>
                  <Link to="/news">News</Link>
               </Space>
            </footer>
         </main>
      </section>
   );
};

export default App;
