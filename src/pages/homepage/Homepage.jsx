import { Col, Row, Statistic, Typography } from 'antd';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Cryptocurrencies, News } from '../index';

const Homepage = () => {
   const { data, isFetching } = useGetCryptosQuery(10);
   const globalStats = data?.data?.stats;

   if (isFetching) return 'Loading...';

   return (
      <>
         <Typography.Title level={2} className="heading">
            Global Crypto State
         </Typography.Title>
         <Row>
            <Col span={12}>
               <Statistic
                  title="Total Cryptocurrencies"
                  value={millify(globalStats.total)}
               />
            </Col>
            <Col span={12}>
               <Statistic
                  title="Total Exchanges"
                  value={millify(globalStats.totalExchanges)}
               />
            </Col>
            <Col span={12}>
               <Statistic
                  title="Total Market Cap"
                  value={millify(globalStats.totalMarketCap)}
               />
            </Col>
            <Col span={12}>
               <Statistic
                  title="Total 24h Volume"
                  value={millify(globalStats.total24hVolume)}
               />
            </Col>
            <Col span={12}>
               <Statistic
                  title="Total Markets"
                  value={millify(globalStats.totalMarkets)}
               />
            </Col>
         </Row>
         <section className="home-heading-container">
            <Typography.Title level={2} className="home-title">
               Top 10 Cryptocurrencies in the world
            </Typography.Title>
            <Typography.Title level={3} className="show-more">
               <Link to="/cryptocurrencies">Show More</Link>
            </Typography.Title>
         </section>
         <Cryptocurrencies simplified />
         <section className="home-heading-container">
            <Typography.Title level={2} className="home-title">
               Latest Crypto News
            </Typography.Title>
            <Typography.Title level={3} className="show-more">
               <Link to="/news">Show More</Link>
            </Typography.Title>
         </section>
         <News simplified />
      </>
   );
};

export default Homepage;
