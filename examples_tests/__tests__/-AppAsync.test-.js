import React from 'react'
import { render, screen } from '@testing-library/react'
import AppAsync from '../AppAsync'

describe('renders App component', () => {
  test('async for login test example', async () => {
    render(<AppAsync/>)
    expect(screen.queryByText(/Signed in as/)).toBeNull()
    // screen.debug()
    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument()
    // screen.debug()
  })
})
