import { render, screen } from '../../../test-utils';
import TableHeader from '../TableHeader';
import { config } from './data';

describe('When using TableHeader', () => {

  it('should render headers based on config', () => {
    render(
      <table>
        <TableHeader columns={config} />
      </table>
    )
    config.forEach(item => {
      expect(screen.getByText(item.header)).toBeInTheDocument();
    })
  })

});