import { render } from '@testing-library/react';
import App from '../';
import { users } from '../../pages/users/tests/test-data';

jest.mock('../../pages/users', () => () => <div>UsersPage</div>);
jest.mock('../../pages/user-posts', () => () => <div>UsersPostsPage</div>);

describe('When using App', () => {

  afterAll(() => {
    jest.restoreAllMocks();
  })

  it('should mount application', () => {
    render(<App />)
  })

})