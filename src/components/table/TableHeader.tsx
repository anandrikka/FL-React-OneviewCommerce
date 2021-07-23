import { FC } from "react";
import { TableConfigItem } from "./Table";

type TableHeaderProps = {
  columns: TableConfigItem[]
}

const TableHeader: FC<TableHeaderProps> = ({ columns }) => (
  <thead>
    <tr>
      {columns.map(col => <th key={col.column}>{col.header}</th>)}
    </tr>
  </thead>
)

export default TableHeader;

