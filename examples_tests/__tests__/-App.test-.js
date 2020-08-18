import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('renders App component', () => {
  test('getByText example', () => {
    render(<App/>)
    // screen.debug()
    // screen.getByText('Search:')
    // fails
    // expect(screen.getByText('Search')).toBeInTheDocument()
    // succeeds
    expect(screen.getByText('Search:')).toBeInTheDocument()
    // succeeds
    // expect(screen.getByText(/Search/)).toBeInTheDocument()
  })
  test('getByRole example', () => {
    render(<App/>)
    // screen.getByRole('')
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    // LabelText: getByLabelText: <label for="search" />
    // PlaceholderText: getByPlaceholderText: <input placeholder="Search" />
    // AltText: getByAltText: <img alt="profile" />
    // DisplayValue: getByDisplayValue: <input value="JavaScript" />
    // getByTestId
  })
  test('use query for element that should NOT exist', () => {
    render(<App/>)
    // screen.debug()
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull()
  })
})

/* Assertive Functions
      toBeDisabled
      toBeEnabled
      toBeEmpty
      toBeEmptyDOMElement
      toBeInTheDocument
      toBeInvalid
      toBeRequired
      toBeValid
      toBeVisible
      toContainElement
      toContainHTML
      toHaveAttribute
      toHaveClass
      toHaveFocus
      toHaveFormValues
      toHaveStyle
      toHaveTextContent
      toHaveValue
      toHaveDisplayValue
      toBeChecked
      toBePartiallyChecked
      toHaveDescription
*/