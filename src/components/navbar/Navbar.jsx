import { Typography, Avatar, Menu, Button } from 'antd';
import {
   HomeOutlined,
   MoneyCollectOutlined,
   BulbOutlined,
   FundOutlined,
   MenuOutlined,
} from '@ant-design/icons';
import logo from '../../images/cryptocurrency.png';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';

const Navbar = () => {
   const [activeMenu, setActiveMenu] = useState(true);
   const [screenSize, setScreenSize] = useState(undefined);

   useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
   }, []);

   useEffect(() => {
      if (screenSize <= 800) {
         setActiveMenu(false);
      } else {
         setActiveMenu(true);
      }
   }, [screenSize]);

   return (
      <nav className="nav-container">
         <section className="logo-container">
            <Avatar src={logo} size="large" />
            <Typography.Title level={2} className="logo">
               <Link to="/">Cryptoffin</Link>
            </Typography.Title>
            <Button
               className="menu-control-container"
               onClick={() => setActiveMenu(!activeMenu)}
            >
               <MenuOutlined />
            </Button>
         </section>
         {activeMenu && (
            <Menu theme="dark">
               <Menu.Item icon={<HomeOutlined />} key={uuid()}>
                  <Link to="/">Home</Link>
               </Menu.Item>
               <Menu.Item icon={<FundOutlined />} key={uuid()}>
                  <Link to="/cryptocurrencies">Cryptocurrencies</Link>
               </Menu.Item>
               <Menu.Item icon={<MoneyCollectOutlined />} key={uuid()}>
                  <Link to="/exchanges">Exchanges</Link>
               </Menu.Item>
               <Menu.Item icon={<BulbOutlined />} key={uuid()}>
                  <Link to="/news">News</Link>
               </Menu.Item>
            </Menu>
         )}
      </nav>
   );
};

export default Navbar;
