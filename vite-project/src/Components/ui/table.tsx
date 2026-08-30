type TableProps = {
  columns: string[];
  data: Record<string, any>[];
  striped?: boolean;
};

const Table = ({
  columns,
  data,
  striped = false,
}: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr
            key={index}
            className={striped && index % 2 === 0 ? "striped" : ""}
          >
            {columns.map((column) => (
              <td key={column}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;