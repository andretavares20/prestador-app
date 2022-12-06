import { VStack, Button, Box, Center } from "native-base";

export function PreLogin(){
    return(
        <VStack bgColor="gray.900" position="absolute" bottom={0} left={0} height="24%" width="100%" borderTopRadius={20}>
            <Box alignItems="center" justifyContent="center" top="20%">
                <Button bgColor="blue.600" borderRadius={30} width="90%" height="50px" marginBottom={1} onPress={() => console.log("hello world")}>
                    Quero ser um Refera PRO
                </Button>
                <Button bgColor="gray.900" borderRadius={30} width="90%" height="50px" borderWidth="1px" borderColor="gray.200" onPress={() => console.log("hello world")}>
                    Já tenho uma conta Refera PRO
                </Button>
            </Box>
        </VStack>
    )
}