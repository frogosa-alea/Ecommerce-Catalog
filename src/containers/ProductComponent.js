import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { Card, Row, Col, Tag } from 'antd';
const { Meta } = Card;
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product
    return(
      <Col span={6}>
        <Link to={`/product/${id}`}>
          <Card
            className='m-4'
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" className="p-4" src={image} />}
          >
            <h5>{title}</h5>
            <Tag color="#108ee9">
              <span style={{ textTransform:'capitalize'}}>
                {category}
              </span>
            </Tag>
          </Card>
        </Link>
      </Col>
    );
  })
  return (
    <div>
      <Row gutter={[16, 16]}>
      {renderList}
      </Row>
    </div>
  )
}

export default ProductComponent