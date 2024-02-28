import React, { useEffect }  from 'react';
import { useSelector } from 'react-redux';
import useCallAPI from '../../customHook/useCallAPI';
import Simmer from '../Simmer/Simmer';
import ErrorMessage from '../../components/ErrorMessage';
import Products from './Products';

import './HomePage.css';

const HomePage = () => {
  const products = useSelector(state=>state.products?.products);
  const lang =  useSelector(state=>state.selectedLanguage?.lang);
  const { loading, error, getProducts } = useCallAPI(); 

  useEffect(()=>{
     getProducts(lang);
},[lang])

if(loading) return <Simmer/>

if(error) return (
  <ErrorMessage variant='danger'>
    {error}
  </ErrorMessage>
)
  return (
    <>
      {
        products?.map(product=>(
         <Products {...product} lang={lang} key={product._id} />
        ))
     }
    </>
    
  )
}

export default HomePage