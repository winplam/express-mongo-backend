import React from 'react'
import axios from 'axios'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../AppAxios'

jest.mock('axios')

describe('App', () => {
  test('fetches stories from an API and displays them', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ]
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    )
    render(<App/>)
    // screen.debug()
    // await userEvent.click(screen.getByRole(''))
    await userEvent.click(screen.getByRole('button'))
    // screen.debug()
    const items = await screen.findAllByRole('listitem')
    expect(items).toHaveLength(2)
  })

  test('explicitly await a promise (works without waiting for HTML to show up)', async () => {
    const stories = [
      { objectID: '1', title: 'Hello' },
      { objectID: '2', title: 'React' },
    ]
    const promise = Promise.resolve({ data: { hits: stories } })
    axios.get.mockImplementationOnce(() => promise)
    render(<App/>)
    await userEvent.click(screen.getByRole('button'))
    await act(() => promise)
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  test('fetches stories from an API and fails', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error())
    )
    render(<App/>)
    await userEvent.click(screen.getByRole('button'))
    const message = await screen.findByText(/Something went wrong/)
    expect(message).toBeInTheDocument()
  })
})

