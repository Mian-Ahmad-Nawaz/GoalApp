import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

// Component for inputting new goals
const GoalInput = ({ addGoalHandler, visible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  // Function to handle changes in the input text
  const goalInputHandler = (enterText) => {
    setEnteredGoalText(enterText);
  };

  // Function to handle adding a new goal
  const addGoalHandlers = () => {
    addGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Your course goal"
          style={styles.inputText}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="ADD GOAL"
              onPress={addGoalHandlers}
              color="#5e0acc"
            />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },

  inputText: {
    borderWidth: 1,
    width: "90%",
    borderColor: "#e4dd0ff",
    backgroundColor: "#e4d0ff",
    padding: 16,
    color: "#120438",
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },

  button: {
    width: 100,
    marginHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
