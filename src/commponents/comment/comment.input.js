import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, Button, Input } from '../shared'
import { colors } from '../../utils'

const CommentInput = ({ postId=null, handleSend, withTitle=false, width=70, title, desc, loading }) => {
  const [message, setMessage] = useState('')
  const [postMessage, setPostMessage] = useState('')

  const handleTitle = hasTitle => {
    if (hasTitle) return (
      <Input
        titleColor={colors.black}
        title={title}
        width={width}
        multiline
        value={postMessage}
        onChangeText={value => setPostMessage(value)}
      />
    )
  }

  return (
    <Wrapper title={withTitle}>
        {handleTitle(withTitle)}
        <Input
          titleColor={colors.black}
          title={desc}
          height={80}
          width={width}
          multiline
          value={message}
          onChangeText={value => setMessage(value)}
        />
      <WrapperSend>
        <Button
          label='SALVAR'
          loading={loading}
          disabled={loading}
          labelColor={colors.white}
          spinnerColor={colors.white}
          pill
          bgColor={colors.black}
          onPress={() => {
            handleSend({body: message, postId, postMsg: postMessage})
            setMessage('')
            setPostMessage('')
          }}
        />
      </WrapperSend>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  background-color: ${colors.gray20};
  margin-top: 14px;
  padding: 12px;
  shadow-color: ${colors.main};
  shadow-offset: 2px 2px;
  shadow-opacity: 0.5;
  shadow-radius: 4px;
  elevation: 1;
  border-radius: 12px;
  flex-direction: ${props => props.title ? 'column' : 'row'};
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const WrapperSend = styled.View``

export default CommentInput
