import { VStack, Text, Center, Box} from 'native-base'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
  } from "@react-navigation/drawer";

function MyDrawer() {
    return (
      <Box safeArea flex={1}>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Inbox" component={Component} />
          <Drawer.Screen name="Outbox" component={Component} />
          <Drawer.Screen name="Favorites" component={Component} />
          <Drawer.Screen name="Archive" component={Component} />
          <Drawer.Screen name="Trash" component={Component} />
          <Drawer.Screen name="Spam" component={Component} />
        </Drawer.Navigator>
      </Box>
    );
  }

export function ScreenCadastro() {
    return (
        <VStack bgColor="blue.600" flex={1}>
            <MyDrawer />
            <Center position="absolute" top="50%" left="40%">
                <Text>CADASTRO</Text>
            </Center>
        </VStack>
    );
}