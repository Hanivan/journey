import TerminalTable, {
  ITerminaTable,
} from "@/components/stateless/Terminal-Table";

const Help: React.FC = () => {
  const commandData: ITerminaTable[] = [
    { command: "title", description: "Display title component." },
    { command: "paragraph", description: "Display paragraph component." },
    { command: "profetch", description: "Want to know about ya?" },
    { command: "links", description: "Show quick link." },
    {
      command: "project",
      alias: "pr",
      description: "Display projects that have been worked.",
    },
    { command: "why", description: "Reason about this." },
    { command: "man [project] [app]", description: "View detail project." },
    { command: "clear", description: "clear scren." },
  ];

  return (
    <>
      <h6>Available commands:</h6>
      <TerminalTable data={commandData} />
    </>
  );
};

export default Help;
