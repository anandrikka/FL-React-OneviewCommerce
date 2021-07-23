import { FC } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export type TableConfigItem = {
  column: string,
  header: string,
}

export type TableProps = {
  pk: string | number,
  config: TableConfigItem[],
  data: any[],
  onRowClick?: (row: any) => void,
};

const Table: FC<TableProps> = ({ config, ...rest }) => {
  return (
    <table className="table table-bordered table-hover">
      <TableHeader columns={config} />
      <TableBody config={config} {...rest} />
    </table>
  )
}

export default Table;
