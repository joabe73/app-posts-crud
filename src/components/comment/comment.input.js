import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Text, Button, Input } from '../shared'
import { colors } from '../../utils'

const CommentInput = ({ postId=null, handleSend, withTitle=false, width=70, title, desc, loading }) => {
  const [message, setMessage] = useState('')
  const [postTitle, setTitle] = useState('')
  const [error, setError] = useState(false)
  const [errorComment, setErrorComment] = useState(false)

  useEffect(() => {
    if (message !== '' && postTitle !== '') {
      setError(false)
    }

    if (message !== '') {
      setErrorComment(false)
    }
  }, [message, postTitle])

  const handleValidatePost = () => {
    const emptyFields = message === '' || postTitle === ''
    
    if (!withTitle && message === '') {
      return setErrorComment(true)
    }
    if (emptyFields && withTitle) {
      return setError(true)
    }

    handleSend({body: message, postId, postMsg: postTitle})
    setMessage('')
    setTitle('')
  }

  const handleTitle = hasTitle => {
    if (hasTitle) return (
      <Input
        titleColor={colors.black}
        title={title}
        width={width}
        multiline
        value={postTitle}
        onChangeText={value => setTitle(value)}
      />
    )
  }

  return (
    <WrapperSend>
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
          {(error && withTitle) && <Text color={colors.red}>O post deve conter tiulo e conteúdo.</Text>}
        <WrapperSend>
          <Button
            label='SALVAR'
            loading={loading}
            disabled={loading}
            labelColor={colors.white}
            spinnerColor={colors.white}
            pill
            bgColor={colors.black}
            onPress={() => handleValidatePost()}
          />
        </WrapperSend>
      </Wrapper>
      {(errorComment && !withTitle) && <Text align='center' color={colors.red}>O campo está vazio!</Text>}
    </WrapperSend>
  )
}

const Wrapper = styled.View`
  background-color: ${colors.white};
  padding: 12px;
  flex-direction: ${props => props.title ? 'column' : 'row'};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  `
  const WrapperSend = styled.View`
  margin-top: 14px;
  background-color: ${colors.white};
  shadow-color: ${colors.main};
  shadow-offset: 2px 2px;
  shadow-opacity: 0.5;
  shadow-radius: 4px;
  elevation: 1;
  border-radius: 12px;
`

export default CommentInput
