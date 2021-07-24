import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import UserPostsPage from '../';
import { appRender, getRouteComponentProps } from '../../../test-utils';
import { userPosts } from './test-data';

describe('When using UserPostsPage', () => {
  const routeComponentProps = getRouteComponentProps();

  beforeEach(() => {
    fetchMock.resetMocks();
    fetchMock.mockResponse(JSON.stringify(userPosts));
  });

  it('should render loading screen initally', async () => {
    appRender(<UserPostsPage {...routeComponentProps} />)
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  })

  it('should render users once data loaded', async () => {
    appRender(<UserPostsPage {...routeComponentProps} />)
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    expect(document.getElementsByTagName('table').length).toBe(1);
  })

})