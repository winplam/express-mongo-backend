import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import AppAsync from '../AppAsync'

describe('Simulate text input with fireEvent', () => {
  test('Display new value of input filed after getting input', () => {
    render(<App/>)
    // screen.debug();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    })
    // screen.debug();
  })
  test('Simulate text input and async login action with fireEvent', async () => {
    render(<AppAsync/>)
    // screen.debug()
    // wait for the user to resolve
    // needs only be used in our special case
    await screen.findByText(/Signed in as/)
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull()
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    })
    // screen.debug()
    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument()
  })
  test('Simulate user typing with userEvent', async () => {
    render(<AppAsync/>)
    // wait for the user to resolve
    await screen.findByText(/Signed in as/)
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull()
    await userEvent.type(screen.getByRole('textbox'), 'JavaScript')
    expect(
      screen.getByText(/Searches for JavaScript/)
    ).toBeInTheDocument()
  })
})