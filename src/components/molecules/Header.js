import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Heading,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  Search2Icon,
} from "@chakra-ui/icons";

export default function Header() {
  return (
    <Flex p="5" minWidth="max-content" alignItems="center" gap="2">
      <Box p="2">
        <IconButton
          icon={<HamburgerIcon w={8} h={8} m={1} />}
          variant={"ghost"}
        />
      </Box>
      <Spacer />
      <InputGroup w="50%">
        <InputLeftElement>
          <Search2Icon />
        </InputLeftElement>
        <Input placeholder="Search Product" />
      </InputGroup>
    </Flex>
  );
}
