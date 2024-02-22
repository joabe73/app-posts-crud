import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import styled from 'styled-components'

import { Container, Button, Text, Input, Spacer } from '../../components/shared'
import { colors, validators } from '../../utils'

const InitialView = ({ controller }) => {
  const isIOS = Platform.OS === 'ios'
  const { email, handleEmail, handleLogin, loading, loginError } = controller  
  
  return (
    <Container>
      <KeyboardAvoidingView 
      style={{ flex: 1 }}
      enabled
      behavior={isIOS ? 'padding' : false}
      >
        <Wrapper>
          <Text align='center' color={colors.main} weight='bold' title>Social Posts</Text>
          <Text align='center' helper weight='bold' color={colors.gray50}>Para interagir é só informar o email cadastrado</Text>
          {loginError !== '' &&
            <>
              <Spacer height={22} />
              <Text align='center' helper color={colors.red}>{loginError}</Text>
            </>
          }
          <Input
            autoFocus
            value={email}
            onChangeText={value => handleEmail(value)}
          />
          <Spacer height={22} />
          <Button
            spinnerColor={colors.black}
            loading={loading}
            label='Entrar'
            labelWeight='bold'
            labelColor={colors.white}
            pill
            bgColor={colors.main}
            shadow
            outlineColor={colors.main}
            onPress={handleLogin}
            disabled={!validators.emailIsValid(email) || loading}
          />
        </Wrapper>
      </KeyboardAvoidingView>
    </Container>
  )
}

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px;
`

export default InitialView