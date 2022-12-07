import { VStack, Box, Button, Center} from 'native-base'

export function SignUp({ navigation }) {
  return (
    <VStack bgColor="blue.600" flex={1}>
      <Box bgColor="gray.900" position="absolute" bottom={0} left={0} height="24%" width="100%" borderTopRadius={20}>
        <Center top="20%">
          <Button bgColor="blue.600" borderRadius={30} width="90%" height="50px" marginBottom={1} onPress={() => navigation.navigate('ScreenCadastro')}>
              Quero ser um Refera PRO
          </Button>
          <Button bgColor="gray.900" borderRadius={30} width="90%" height="50px" borderWidth="1px" borderColor="gray.200" onPress={() => console.log("hello world")}>
              Já tenho uma conta Refera PRO
          </Button>
        </Center>
      </Box>
    </VStack>

  );
}

