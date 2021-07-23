import { FC } from "react";
import { TableProps } from "./Table";

export const TableBody: FC<TableProps> = ({ data, config, onRowClick = () => { } }) => {

  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={`table-row-${rowIndex}`} onClick={() => onRowClick(row)}>
          {config.map((col, colIndex) => (
            <td key={`table-row-${rowIndex}-col-${colIndex}`}>{row[col.column]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
