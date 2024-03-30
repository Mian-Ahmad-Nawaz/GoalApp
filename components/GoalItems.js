import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Button,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";

export default function GoalItems({ text, deleteItems, id }) {
  // Function to render right swipe actions
  const rightSwipe = () => {
    return (
      <View>
        <TouchableHighlight onPress={() => deleteItems(id)}>
          <MaterialIcons name="delete-outline" size={40} color={"#fff"} />
        </TouchableHighlight>
      </View>
    );
  };

  return (
    // Swipeable component for handling swipe gestures
    <Swipeable renderRightActions={rightSwipe}>
      <View style={styles.goalsItems}>
        <Text style={styles.goalsText}>{text}</Text>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  goalsItems: {
    backgroundColor: "#5e0acc",
    margin: 8,
    padding: 8,
    borderRadius: 6,
    color: "white",
  },
  goalsText: {
    color: "white",
  },
});
