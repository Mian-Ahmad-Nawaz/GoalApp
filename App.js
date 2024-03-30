import { View, Text } from "react-native";
import GoalApp from "./components/GoalApp";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import React from "react";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GoalApp />
    </GestureHandlerRootView>
  );
};

export default App;
