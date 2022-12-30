import React from 'react'
import { CheckedText } from '../../../../globals'
import { ChatBody, ChatHead, GenericLeftContainer, GenericLeftHeader,
    GenericLeftImage, GenericLeftLeft, GenericLeftList, GenericLeftRight,
    GenericLeftSubHeader, GenericLeftSubHeader1, GenericLeftSubHeader2,GenericLeftSubHeader3 } from './GenericLeft.styles'

const GenericLeft = ({image,data}) => {
  return (
        <GenericLeftContainer>
        <GenericLeftLeft>
            <GenericLeftImage alt='' src={image}/>
        </GenericLeftLeft>

        <GenericLeftRight>
            {data.header ? <GenericLeftHeader>{data.header}</GenericLeftHeader> : null}
            {data.subheader ? <GenericLeftSubHeader>{data.subheader}</GenericLeftSubHeader> : null}
            {data.subheader1 ? <GenericLeftSubHeader1>{data.subheader1}</GenericLeftSubHeader1> : null}
            {data.subheader2 ? <GenericLeftSubHeader2>{data.subheader2}</GenericLeftSubHeader2> : null}
            <GenericLeftList>
                {
                    data.checkedtext ?
                    data.checkedtext.map((item,index) => (
                        <CheckedText key={index}>
                            {item}
                        </CheckedText>
                    )): null
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
            </GenericLeftList>
        </GenericLeftRight>
    </GenericLeftContainer>
  )
}

export default GenericLeft