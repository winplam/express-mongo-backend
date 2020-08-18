import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { configure, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Menu from '../core/Menu'

describe('Test the main Menu component', () => {
  beforeEach(() => {
    configure({
      throwSuggestions: true,
    })
  })

  test('Main Menu matches snapshot', () => {
    const history = createMemoryHistory()
    const { container } =
      render(
        <Router history={history}>
          <Menu/>
        </Router>
      )
    expect(container).toMatchSnapshot()
  })

  test('Click all main menu buttons', () => {
    const history = createMemoryHistory()
    const { container, getByText, getByRole } = render(
      <Router history={history}>
        <Menu/>
      </Router>
    )
    expect(container).toMatchSnapshot()
    userEvent.click(getByText(/users/i))
    expect(container).toMatchSnapshot()
    userEvent.click(getByText(/sign up/i))
    expect(container).toMatchSnapshot()
    userEvent.click(getByText(/sign in/i))
    expect(container).toMatchSnapshot()
    userEvent.click(getByRole('button', { name: /home/i }))
    expect(container).toMatchSnapshot()
  })

  /*
  // ToDo: Mock auth.isAuthenticated (===true) used in Menu.js
  test.only('Sign in', () => {
    const history = createMemoryHistory()
    const mock = jest.spyOn(auth)
    const { container, getByText, getByRole } = render(
      <Router history={history}>
        <Menu/>
      </Router>
    )
  })
  */
})
