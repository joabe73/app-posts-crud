import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import styled from 'styled-components'

import { Container, Button, Text, Input, Spinner, Spacer } from '../../commponents/shared'
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
          <Text align='center' color={colors.main} title>Social Posts</Text>
          <Text align='center' helper color={colors.gray50}>para interagir é só informar o email cadastrado</Text>
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
            label='Entrar'
            labelWeight='bold'
            labelColor={colors.main}
            pill
            shadow
            outline
            borderColor={colors.main}
            onPress={handleLogin}
            disabled={!validators.emailIsValid(email)}
          />
        </Wrapper>
        {loading && <Spinner message='Verificando usuário ...' />}
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