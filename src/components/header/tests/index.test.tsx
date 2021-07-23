import { cleanup, render, screen } from '@testing-library/react';
import { Header } from '../';

describe('When using Header component', () => {
  
  afterEach(() => {
    cleanup();
  })

  it('render header', () => {
    render(<Header />)
    expect(screen.getByText('OneView Commerce')).toBeInTheDocument();
  })

})