import styled from 'styled-components'
import { SafeAreaView } from 'react-native'
import { colors } from '../../utils'

export default styled(SafeAreaView)`
  background-color: ${props => props.darkMode ? colors.black : colors.white};
  flex: 1;
`
