// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const CardContainer = styled.div`
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
  width: 100vw;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    height: 100vh;
    width: 50vw;
  }
`
export const CardType = styled.h1`
  color: white;
  font-size: 30px;
  font-weight: bold;
  border-bottom: 3px solid #ffd773;
  padding-bottom: 5px;
  width: 40%;
`

export const CardNumber = styled.p`
  color: white;
  font-size: 20px;
  font-weight: bold;
`

export const CardHolderParagraph = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 300;
`

export const CardHolder = styled(CardNumber)`
  margin-top: 0px;
`

export const CardImgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 230px;
  width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  padding: 30px;
`

export const PaymentDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
  @media min-width:768px {
    width: 50vw;
    height: 100vh;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 2px 0;
  width: 40%;
  height: 60%;
`

export const Heading = styled.h1`
  color: #3b4b69;
  font-size: 20px;
  font-weight: bold;
`

export const InputNameEl = styled.input`
  width: 80%;
  height: 32px;
  padding: 5px;
  outline: none;
  margin: 15px;
`

export const InputPasswordEl = styled(InputNameEl)``
