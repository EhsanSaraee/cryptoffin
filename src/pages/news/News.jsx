import { Avatar, Card, Col, Row, Select, Typography } from 'antd';
import { useGetNewsQuery } from '../../services/newsApi';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import { useState } from 'react';
import { useGetCryptosQuery } from '../../services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage =
   'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
   const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
   const { data: cryptoNews } = useGetNewsQuery({
      newsCategory,
      count: simplified ? 6 : 12,
   });
   const { data: cryptoList } = useGetCryptosQuery(100);

   if (!cryptoNews?.value) return 'Loading...';

   return (
      <Row gutter={[24, 24]}>
         {!simplified && (
            <Col span={24}>
               <Select
                  showSearch
                  className="select-news"
                  placeholder="Select a Crypto"
                  optionFilterProp="children"
                  onChange={(value) => setNewsCategory(value)}
                  filterOption={(input, option) =>
                     option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                  }
               >
                  <Option value="Cryptocurrency">Cryptocurrency</Option>
                  {cryptoList?.data?.coins?.map((coin) => (
                     <Option key={uuid()} value={coin.name}>
                        {coin.name}
                     </Option>
                  ))}
               </Select>
            </Col>
         )}
         {cryptoNews.value.map((news) => (
            <Col xs={24} sm={12} lg={8} key={uuid()}>
               <Card hoverable className="news-card">
                  <a href={news.url} target="_blank" rel="noreferrer">
                     <section className="news-image-container">
                        <Title className="news-title" level={4}>
                           {news.name}
                        </Title>
                        <img
                           src={news?.image?.thumbnail?.contentUrl || demoImage}
                           alt="news"
                        />
                     </section>
                     <p>
                        {news.description.length > 100
                           ? `${news.description.substring(0, 100)}...`
                           : news.description}
                     </p>
                     <section className="provider-container">
                        <div>
                           <Avatar
                              src={
                                 news?.provider[0]?.image?.thumbnail
                                    ?.contentUrl || demoImage
                              }
                              alt="news"
                           />
                           <Text className="provider-name">
                              {news?.provider[0]?.name}
                           </Text>
                        </div>
                        <Text>
                           {moment(news.datePublished).startOf('ss').fromNow()}
                        </Text>
                     </section>
                  </a>
               </Card>
            </Col>
         ))}
      </Row>
   );
};

export default News;
