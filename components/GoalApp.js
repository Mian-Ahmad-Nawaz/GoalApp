// Importing necessary modules and components from React Native
import { StyleSheet, View, FlatList, Button, StatusBar } from "react-native";

import GoalInput from "./GoalInput";
import GoalItems from "./GoalItems";
import { useState } from "react";

// Main function representing the entire application
export default function GoalApp() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [showModel, setShowModel] = useState(false);

  // Function to handle the start of adding a new goal
  const startAddGoalHandler = () => {
    setShowModel(true);
  };

  // Function to add a new goal to the list
  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals([
      ...courseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  // Function to delete a goal item
  const deleteHandler = (id) => {
    setCourseGoals((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  };

  // Rendering the main application UI
  return (
    <>
      <StatusBar backgroundColor="#1e085a" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        {/* Input modal for adding new goals */}
        <GoalInput
          addGoalHandler={addGoalHandler}
          visible={showModel}
          onCancel={() => setShowModel(false)}
        />
        <View style={styles.goalContainer}>
          {/* FlatList component to render the list of goals */}
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItems
                  text={itemData.item.text}
                  deleteItems={deleteHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#1e085a",
  },

  goalContainer: {
    flex: 5,
  },
});
