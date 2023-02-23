// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  CardType,
  CardImgContainer,
  CardNumber,
  CardHolderParagraph,
  CardHolder,
  PaymentDetailsContainer,
  InputContainer,
  Heading,
  InputPasswordEl,
  InputNameEl,
} from './styledComponents'

const CreditCard = () => {
  const [cardNum, setCardNum] = useState('')
  const [cardHolder, setCardHolder] = useState('')

  const onChangeNum = event => setCardNum(event.target.value)

  const onChangeName = event => setCardHolder(event.target.value)

  return (
    <MainContainer>
      <CardContainer>
        <CardType>CREDIT CARD</CardType>
        <CardImgContainer data-testid="creditCard">
          <CardNumber>{cardNum}</CardNumber>
          <CardHolderParagraph>CARDHOLDER NAME</CardHolderParagraph>
          <CardHolder>{cardHolder}</CardHolder>
        </CardImgContainer>
      </CardContainer>
      <PaymentDetailsContainer>
        <InputContainer>
          <Heading>Payment Method</Heading>
          <InputNameEl
            onChange={onChangeNum}
            placeholder="Card Number"
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
          />
          <InputPasswordEl
            onChange={onChangeName}
            placeholder="Cardholder Name"
            type="text"
          />
        </InputContainer>
      </PaymentDetailsContainer>
    </MainContainer>
  )
}

export default CreditCard
