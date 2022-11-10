import { render, screen } from '@testing-library/react'
import SignIn from '../components/SignIn'
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event'

describe('Testing the Sign In Component', () => {
    const user = userEvent.setup()
    test('Test rendering of Sign In page', () => {
        render(
            <Router>
                <SignIn />
            </Router>
        )
        expect(screen.getByLabelText(/password/i))
        expect(screen.getByRole('button',{name: /Sign In/i}))
    })

    test('Test action of Sign In button', () => {
        render(
            <Router>
                <SignIn />
            </Router>
        )
        user.type(screen.getByRole("textbox", {name: /username/i}), "testuser")
        user.type(screen.getByLabelText(/password/i), "testpwd")

        // expect(screen.getByRole("textbox", {name: /username/i}).value('testuser'))
        // expect(screen.getByLabelText(/password/i)).toHaveTextContent('testpwd')
    })
})
