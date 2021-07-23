import { within } from '@testing-library/react';
import { render, screen } from '../../../test-utils';
import Table, { TableConfigItem } from '../Table';
import TableBody from '../TableBody';
import TableHeader from '../TableHeader';
import { config, data } from './data';

describe('When using Table', () => {

  afterEach(() => {
    jest.resetAllMocks();
  })

  afterAll(() => {
    jest.restoreAllMocks();
  })

  it('should render table headers as expected', () => {
    render(<Table config={config} data={data} pk="id" />)
    const headers = document.querySelectorAll('table > thead > tr > th');
    config.forEach((c, index) => {
      expect(headers.item(index).textContent).toBe(c.header);
    })
  })

  it('should render table data as expected', () => {
    render(<Table config={config} data={data} pk="id" />)
    const rows = document.querySelectorAll('table > tbody > tr');
    data.forEach((row, rowIndex) => {
      const dataCols = rows.item(rowIndex).children;
      config.forEach((col, colIndex) => {
        expect(dataCols.item(colIndex)?.textContent).toBe(row[col.column])
      })
    })
  })
  
});
