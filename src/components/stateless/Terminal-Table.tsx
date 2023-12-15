export interface TerminalTableProps {
  data: ITerminaTable[];
}

export interface ITerminaTable {
  command: string;
  description: string;
  alias?: string;
}

const TerminalTable: React.FC<TerminalTableProps> = ({ data }) => {
  return (
    <table className="table-auto w-full">
      {/* <thead>
        <tr>
          <th className="border px-4 py-2">Command</th>
          <th className="border px-4 py-2">Description</th>
        </tr>
      </thead> */}
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.command}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TerminalTable;
