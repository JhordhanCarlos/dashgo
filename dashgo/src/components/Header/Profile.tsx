import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile(){
    return(
        <Flex align="center">
                <Box mr="4" textAlign="right">
                    <Text>Jhordhan Carlos</Text>
                    <Text color="gray.300" fontSize="small">
                        jhordhanjf@gmail.com
                    </Text>
                </Box>
                    
            <Avatar size="md" name="Diego Fernandes" src="https://github.com/JhordhanCarlos.png"/>
                    
        </Flex>
    );
}