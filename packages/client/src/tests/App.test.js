import { render, screen } from '@testing-library/react';
import App from '../App';
import StartPage from '../pages/StartPage';

test('renders startpage', () => {
    render(<StartPage />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();
});

test()