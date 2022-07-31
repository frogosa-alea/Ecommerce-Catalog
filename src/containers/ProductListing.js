import React, { useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productActions';
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async() =>{
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err)=>{
        console.log(err);
      })
    dispatch(setProducts(response.data));
  }

  console.log("Products:", products);
  return (
    <div className="ui grid container">
        <div style={{marginTop: '20px'}}>
          <ProductComponent/>
        </div>
    </div>
  )
}

export default ProductListing