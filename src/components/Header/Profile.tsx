import {
  Avatar, 
  Box, 
  Flex,
  Text
} from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex
      align="center"
      ml="auto"
    >
      <Box mr="4" textAlign="right">
        <Text>João Vitor</Text>
        <Text color="gray.300" fontSize="small">
          joao.vitordeoliveira@hotmail.com
        </Text>
      </Box>

      <Avatar size="md" name="João Vitor" src="https://github.com/joaovitorJS.png" />
    </Flex>
  );
}