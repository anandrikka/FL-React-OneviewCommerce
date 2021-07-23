import { cleanup, render, screen } from '../../../test-utils';
import Header from '../';

describe('When using Header component', () => {
  
  afterEach(() => {
    cleanup();
  })

  it('render header', () => {
    render(<Header />)
    expect(screen.getByText('OneView Commerce')).toBeInTheDocument();
  })

})