import React from 'react'
import { Router } from 'react-router-dom'
import { getByRole, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import Home from '../core/Home'
import MainRouter from '../MainRouter'

test('home container matches snapshot', () => {
  const { container } = render(<Home/>)
  expect(container).toMatchSnapshot()
})

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return {
    ...render(
      <Router history={history}>
        {component}
      </Router>
    )
  }
}
it('should render the home page', () => {
  const { container, getByText } = renderWithRouter(<MainRouter/>)
  expect(container.innerHTML).toMatch(/home page/i)
  expect(getByText('Home Page')).toBeDefined()
  // ToDo: Test click away from and then click back to home page using home page icon button
  userEvent.click(getByText(/sign in/i))
  expect(screen.queryByText(/home page/i)).toBeNull()
  // userEvent.click(getByText(''))
  // expect(getByText('Home Page')).toBeDefined()
})

it('should navigate to the users page', () => {
  const { container, getByText } = renderWithRouter(<MainRouter/>)
  expect(container.innerHTML).toMatch('Users')
  // ToDo: Test display of All Users page
  // userEvent.click(getByText(/users/i))
  // expect(container.innerHTML).toMatch('All Users')
})

it('should navigate to the sign up page', () => {
  const { container, getByText } = renderWithRouter(<MainRouter/>)
  expect(container.innerHTML).toMatch(/home page/i)
  userEvent.click(getByText(/sign up/i))
  expect(container.innerHTML).toMatch(/sign up/i)
})

it('should navigate to the sign in page', () => {
  const { container, getByText } = renderWithRouter(<MainRouter/>)
  expect(container.innerHTML).toMatch(/home page/i)
  userEvent.click(getByText(/sign in/i))
  expect(container.innerHTML).toMatch(/sign in/i)
})
