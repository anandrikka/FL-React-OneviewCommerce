import { cleanup, render, screen } from '../../../test-utils';
import Body from '../'

describe('When using Body component', () => {

  afterEach(() => {
    cleanup();
  })

  it('render Body with child component', () => {
    render(
      <Body>
        <div>Test</div>
      </Body>
    )
    expect(screen.getByText('Test')).toBeInTheDocument();
  })

})