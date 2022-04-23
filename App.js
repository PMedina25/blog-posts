import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BlogProvider } from "./src/context/BlogContext";

import BlogScreen from "./src/screens/BlogScreen";
import ShowScreen from "./src/screens/ShowScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Blog"
            component={BlogScreen}
            options={{ title: "Blog" }}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
            options={{ title: "Show" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}
