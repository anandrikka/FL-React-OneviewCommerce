import { fireEvent, getByText, render, screen, within } from '../../../test-utils';
import { TableConfigItem } from '../Table';
import TableBody from '../TableBody';
import { config, data } from './data';

describe('When using TableBody', () => {

  it('should render table with data', () => {
    const table = document.createElement('table')
    const { container, getByText } = render(
      <TableBody pk="id" config={config} data={data} />,
      {
        container: document.body.appendChild(table),
      }
    );
    const columns = screen.getAllByRole('cell');
    expect(within(columns[0]).getByText('Column11')).toBeInTheDocument();
    expect(within(columns[1]).getByText('Column12')).toBeInTheDocument();
    expect(within(columns[2]).getByText('Column21')).toBeInTheDocument();
    expect(within(columns[3]).getByText('Column22')).toBeInTheDocument();
  })
  it('should pass row information when row is clicked', () => {
    const onRowClick = jest.fn();
    const table = document.createElement('table')
    render(
      <TableBody pk="id" config={config} data={data} onRowClick={onRowClick} />,
      {
        container: document.body.appendChild(table),
      }
    );
    const rows = screen.getAllByRole('row');
    fireEvent.click(rows[0]);
    expect(onRowClick).toHaveBeenCalledWith(data[0]);
    fireEvent.click(rows[1]);
    expect(onRowClick).toHaveBeenCalledWith(data[1]);
  })
});
