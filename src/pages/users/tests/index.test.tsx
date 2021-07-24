import { fireEvent, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import UsersPage from '../';
import { appRender, getRouteComponentProps } from '../../../test-utils';
import { users } from './test-data';

describe('When using UsersPage', () => {
  
  const routeComponentProps = getRouteComponentProps();

  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponse(JSON.stringify(users));
  });

  it('should render loading screen initally', async () => {
    appRender(<UsersPage {...routeComponentProps} />)
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  })

  it('should render users once data loaded', async () => {
    appRender(<UsersPage {...routeComponentProps} />)
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    expect(document.getElementsByTagName('table').length).toBe(1);
  })

  it('when clicked on user row should go to user posts page', async () => {
    appRender(<UsersPage {...routeComponentProps} />)
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    fireEvent.click(document.querySelector('table > tbody > tr') as Element);
    expect(routeComponentProps.history.push).toHaveBeenCalledWith('/user/1/posts');
  })

  it('searching for user should filter users', async () => {
    appRender(<UsersPage {...routeComponentProps} />)
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    const input = screen.getByTestId('name-search') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Leanne Graham' } });
    await waitFor(() => expect(document.querySelectorAll('table > tbody > tr').length).toBe(1));
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
  })

})