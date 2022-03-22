import React from "react";
import styled from 'styled-components';




export const Token = ({ image, name, symbol, price, volume, priceChange, marketcap }) => {

    return(
        <TokenContainer>
            <TokenRow>
                <TokenMain>
                    <img src={image} alt='crypto' className="images"/>
                    <h1 className="heading">{name}</h1>
                    <p className="token-symbol">{symbol}</p>

                </TokenMain>
                <TokenData>
                    <p className="token-price">${price}</p>
                    <p className="token-valume">${volume.toLocaleString()}</p>

                    {priceChange < 0 ? (
                        <p className="token-percent red">{priceChange.toFixed(2)}%</p>
                    ) : ( <p className="token-percent green">{priceChange.toFixed(2)}%</p>)}

                    <p className="token-marketcap"> Mkt Cap : ${marketcap.toLocaleString()}</p>
                 
                </TokenData>
            </TokenRow>
        </TokenContainer>
    )
}





// Style Properties using styledComponents

export const TokenContainer = styled.div`
display: flex;
justify-content: center; 

`
export const TokenRow = styled.div`
height: 80px;
width: 900px;
border-bottom: 1px solid #fff;
display: flex;
flex-direction: row;
align-items: center;
justify-items: start;


`

export const TokenMain =styled.div`
display: flex;
align-items: center;
padding-right: 24px;
min-width: 300px;

.images {
    height: 30px;
    width: 30px;
    margin-right: 12px;
}
.heading {
    font-size: 18px;
    width: 150px;
}
.token-symbol {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
}
`

export const TokenData = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;

.token-price {
    width: 110px;
}
.token-volume {
    width: 230px;
}

.token-percent {
    width: 100px;
}

.red {
    color: #f00606;
}
.green {
    color: #11d811;
}

.token-marketcap {
    width: 155px;
}

`