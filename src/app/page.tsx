import { Button, Container, Flex, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <Container>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button radius="full">Let's go</Button>
      </Flex>
    </Container>
  );
}
