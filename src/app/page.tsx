"use client";

import { Flex } from "@radix-ui/themes";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

export default function Home() {
  // const data = await Blog.getAll();
  const [currentTime, setCurrentTime] = useState(DateTime.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(DateTime.now());
    }, 1000); // Update every second

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentTime]);

  return (
    <Flex direction="column" gap="2">
      <time>{currentTime.toFormat("HH:mm:ss")}</time>
      <time>{currentTime.toFormat("X")}</time>
    </Flex>
  );
}
