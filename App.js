import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BlogProvider } from "./src/context/BlogContext";

import BlogScreen from "./src/screens/BlogScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Block"
            component={BlogScreen}
            options={{ title: "Blog" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
