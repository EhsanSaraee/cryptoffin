import { Card, Col, Input, Row } from 'antd';
import millify from 'millify';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
   const count = simplified ? 10 : 100;
   const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
   const [cryptos, setCryptos] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
      const filteredData = cryptoList?.data?.coins?.filter((coin) =>
         coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setCryptos(filteredData);
   }, [cryptoList, searchTerm]);

   if (isFetching) return 'Loading...';

   return (
      <>
         {!simplified && (
            <section className="search-crypto">
               <Input
                  placeholder="Search Cryptocurrency"
                  onChange={(event) => setSearchTerm(event.target.value)}
               />
            </section>
         )}
         <Row gutter={[32, 32]} className="crypto-card-container">
            {cryptos?.map((crypto) => (
               <Col
                  xs={24}
                  sm={12}
                  lg={6}
                  className="crypto-card"
                  key={crypto.uuid}
               >
                  <Link to={`/crypto/${crypto.uuid}`}>
                     <Card
                        title={`${crypto.rank}. ${crypto.name}`}
                        extra={
                           <img
                              src={crypto.iconUrl}
                              className="crypto-image"
                              alt="crypto"
                           />
                        }
                        hoverable
                     >
                        <p>Price: {millify(crypto.price)}</p>
                        <p>Market Cap: {millify(crypto.marketCap)}</p>
                        <p>Daily Change: {crypto.change}%</p>
                     </Card>
                  </Link>
               </Col>
            ))}
         </Row>
      </>
   );
};

export default Cryptocurrencies;
