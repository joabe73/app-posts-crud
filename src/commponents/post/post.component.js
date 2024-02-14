import React from 'react'
import styled from 'styled-components'
import { Modal } from 'react-native'

import { CommentInput } from '../comment'
import { Button } from '../shared'
import { colors } from '../../utils'

const InputPost = ({ visible, pressCancel, handleSend, loading }) => {

  return(
    <Wrapper>
      <Modal
        animationType='none'
        visible={visible}
        onRequestClose={() => pressCancel(!visible)}
      >
        <WrapperContent>
          <Button
            label='CANCELAR'
            labelColor={colors.white}
            disabled={loading}
            pill
            bgColor={colors.black}
            onPress={() => pressCancel(!visible)}
          />
          <CommentInput
            loading={loading}
            title='Titulo de seu post'
            desc='Conteúdo de seu post'
            width={100}
            withTitle
            handleSend={handleSend}
          />
        </WrapperContent>
      </Modal>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  background-color: ${colors.white};
  flex: 1;
`
const WrapperContent = styled.View`
  shadow-color: ${colors.main};
  shadow-offset: 2px 2px;
  shadow-opacity: 0.5;
  shadow-radius: 4px;
  elevation: 1;
  padding: 16px;
  margin-top: 60px;
`

export default InputPost
