import './App.css';
import { Breadcrumb, Layout, Menu } from 'antd';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

import 'antd/dist/antd.css';
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <div className="App">
      <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Routes>
              <Route exact path="/" element={<ProductListing/>}/>
              <Route path='/product/:productId' exact element={<ProductDetail/>}/>
              <Route>404 Not Found</Route>
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
      </Router>
    </div>
  );
}

export default App;
