import { VStack, Heading, Center} from 'native-base'
import { PreLogin} from '../components/PreLogin'

export function SignUp() {
  return (
    <VStack bgColor="blue.600" flex={1}>
      <PreLogin/>
    </VStack>
    

  );
}

