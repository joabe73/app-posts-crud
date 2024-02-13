import React from 'react'
import { create } from 'react-test-renderer'

import Root from '../../containers/initial/initial.view'

const controller = {
  email: '', 
  handleEmail: () =>{}, 
  handleLogin: () =>{}, 
  loading: false, 
  loginError: ''
}

describe('sould render root module', () => {
  it('renders correctly', () => {
    const componet = create(<Root controller={controller} />)
    const tree = componet.toJSON()
    expect(tree).toMatchSnapshot()
  });
})

