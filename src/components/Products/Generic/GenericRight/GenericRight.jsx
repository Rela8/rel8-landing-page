import React from 'react'
import { ChatBody, ChatHead, GenericRightContainer, GenericRightHeader, GenericRightImage,
    GenericRightLeft, GenericRightList, GenericRightRight, GenericRightSubHeader,
    GenericRightSubHeader1, GenericRightSubHeader2,GenericLeftSubHeader3 } from './GenericRight.styles'
import { CheckedText } from '../../../../globals'

const GenericRight = ({image, data}) => {
  return (
    <GenericRightContainer>
      <GenericRightLeft>
          {data.header ? <GenericRightHeader>{data.header}</GenericRightHeader> : null}
          {data.subheader ? <GenericRightSubHeader>{data.subheader}</GenericRightSubHeader> : null}
          {data.subheader1 ? <GenericRightSubHeader1>{data.subheader1}</GenericRightSubHeader1> : null}
          {data.subheader2 ? <GenericRightSubHeader2> {data.subheader2}</GenericRightSubHeader2> : null}
          <GenericRightList>
                {
                    data.checkedtext ? 
                    data.checkedtext?.map((item,index) => (
                        <CheckedText key={index}>
                            {item}
                        </CheckedText>
                    )):null
                }
                <GenericLeftSubHeader3>{data.subheader3}</GenericLeftSubHeader3>
                {
                    data.checkedtextchat ?
                    data.checkedtextchat.map((item,index) => (
                        <CheckedText key={index}>
                            <ChatHead>
                                {item.head}
                                <ChatBody>
                                    {item.body}
                                </ChatBody>
                            </ChatHead>
                        </CheckedText>
                    )):null
                }
                {
                    data.search ? 
                    data.search.map((item,index) => (
                        <CheckedText key={index}>
                            <ChatBody>{item.title}</ChatBody>
                            {
                                item.children.map((item,index)=> (
                                    <ChatBody key={index}>{item}</ChatBody>
                                ))
                            }
                        </CheckedText>
                    )): null
                }
          </GenericRightList>
      </GenericRightLeft>

    <GenericRightRight>
        <GenericRightImage alt='' src={image}/>
    </GenericRightRight>
</GenericRightContainer>
  )
}

export default GenericRight