"use client";

import Help from "@/components/commands/Help";
import Links from "@/components/commands/Links";
import Profetch from "@/components/commands/Profetch";
import cx from "classnames";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface TerminalInputProps {
  // You can define any additional props here if needed
  host: string;
}

const TerminalInput: React.FC<TerminalInputProps> = ({ host }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputHistory, setInputHistory] = useState<string[]>([]);
  const [generatedComponents, setGeneratedComponents] = useState<
    React.ReactNode[]
  >([]);
  const [isCommand, setIsCommand] = useState<boolean>(false);
  const router = useRouter();
  const availabelCommands: string[] = [
    "title",
    "paragraph",
    "profetch",
    "links",
    "project",
    "pr",
    "why",
    "man",
    "clear",
    "help",
    "exit",
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);

    // Split the input into command and arguments
    const [command] = newInputValue.split(/[\s;]/);

    // Check if the entered command matches a predefined command
    const isCommandMatch = checkCommandMatch(command);
    setIsCommand(isCommandMatch);
  };

  const checkCommandMatch = (input: string): boolean => {
    // Example: Check if the entered command matches predefined commands
    return availabelCommands.includes(input.toLowerCase());
  };

  const handleInputSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Store the current input in history
    setInputHistory((prevHistory) => [...prevHistory, inputValue]);

    // Check if the input contains multiple commands separated by ';'
    if (inputValue.includes(";")) {
      // Split the input into multiple commands
      const commands = inputValue.split(";");

      // Process each command separately
      commands.forEach((rawCommand) => {
        // Trim whitespaces from each command
        const trimmedCommand = rawCommand.trim();

        // Split the input into command and arguments
        const [command, ...args] = trimmedCommand.split(/[\s;]/);

        // Skip empty commands
        if (command !== "") {
          if (command.toLowerCase() === "clear") {
            setGeneratedComponents([]);
            return;
          }

          // Generate component based on the command
          const newComponent = generateComponent(command, args);

          // Store the generated component
          setGeneratedComponents((prevComponents) => [
            ...prevComponents,
            newComponent,
          ]);
        }
      });
    } else {
      const [command, ...args] = inputValue.split(/[\s;]/);

      // Process the command and args separately
      if (command) {
        // Generate component based on the command and arguments
        const newComponent = generateComponent(command, args);

        // Store the generated component
        setGeneratedComponents((prevComponents) => [
          ...prevComponents,
          newComponent,
        ]);
      }
    }

    // Clear the input field for the next input
    setInputValue("");
    setIsCommand(false);
  };

  const handleExit = () => {
    router.push("about:blank");
  };

  const generateComponent = (
    input: string,
    args: string[]
  ): React.ReactNode => {
    // Example: Generate different components based on input
    switch (input.toLowerCase()) {
      case "clear":
        setGeneratedComponents([]);
        break;
      case "help":
        return <Help />;
      case "profetch":
        return <Profetch host={host} />;
      case "links":
        return <Links />;
      case "why":
        return <p>I don't know. i just ran out of ideas.</p>;
      case "project":
      case "pr":
        return <p>"{input}" Under construction.</p>;
      case "man":
        return <p>"{input}" Under construction.</p>;
      case "exit":
        handleExit();
        break;
      default:
        return <p>command not found: {input}</p>;
    }
  };

  return (
    <div>
      {/* <div>
        {inputHistory.map((input, index) => (
          <div key={index}>Previous Input: {input}</div>
        ))}
      </div> */}

      <div>
        {generatedComponents.map((component, index) => (
          <div key={index}>{component}</div>
        ))}
      </div>

      <form onSubmit={handleInputSubmit}>
        <label>
          <span className="text-accent">{host || "dev"}</span>
          <span className="text-term-red"> • </span>
          <span className="text-term-green">~</span>
          <span className="">» </span>
          <input
            autoFocus
            type="text"
            value={inputValue}
            placeholder={`type "help" for command.`}
            onChange={handleInputChange}
            className={cx(
              "focus:outline-none bg-term placeholder:text-accent placeholder:opacity-60",
              isCommand ? "text-term-green" : "text-term-red"
            )}
          />
        </label>
      </form>
    </div>
  );
};

export default TerminalInput;
