import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Token } from './Token';
import styled from 'styled-components';
import { GlobalStyle } from './Globlestyle';



function App() {
    
  const [ coin, setCoin ] = useState([]);
  const [ search, setSearch ] = useState('')
// useEffect react axios with help of call API //
  useEffect(() => {
     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
        setCoin(res.data)

       // console.log(res.data)
        }).catch(error => console.log(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  };

  const filterTokens = coin.filter(token => token.name.toLowerCase().includes(search.toLowerCase())
  );  

  
  return (
   
    <AppContainer>
       <GlobalStyle/>
     <CryptoSearch>
       <CryptoHeading>Search a Token</CryptoHeading>

      <Form>
        <input className='crypto-input' type='text' placeholder='Search' onChange={handleChange}/>
      </Form>
    </CryptoSearch>

    {filterTokens.map(token => {
      return(
        <Token
         key={token.id} 
         image={token.image}
         name={token.name} 
         symbol={token.symbol} 
         volume={token.total_volume} 
         price={token.current_price}
         priceChange={token.price_change_percentage_24h}
         marketcap={token.market_cap}
        />
         
      )
    })}
    </AppContainer>
  );
}

export default App;


// Style Properties using styledComponents
export const AppContainer = styled.div`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #1a1a1c;
  color: #fff;
}


display: flex;
flex-direction: column;
align-items: center;
margin-top: 64px;
color: #fff;
font-family: 'Lato', sans-serif;

`

export const CryptoSearch = styled.div`

display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 64px;
  align-items: center;

`
export const CryptoHeading = styled.h1`

margin-bottom: 32px;
align-items: center;

`
export const Form = styled.div`
 .crypto-input{
  padding-left: 16px;
  width: 600px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid #fff;
  color: #e2e2e2;

&::placeholder {
  color: #e2e2e2;
}
 }



`
