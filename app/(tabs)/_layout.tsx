import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#E195AB",
        headerStyle: {
          backgroundColor: "#CCDF92",
        },
        headerShadowVisible: false,
        headerTintColor: "black",
        tabBarStyle: {
          backgroundColor: "#CCDF92",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="random"
        options={{
          title: "Random",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "infinite" : "infinite-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cardList"
        options={{
          title: "See All",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "book" : "book-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: "Learn",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "help" : "help-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
