import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	View,
	FlatList,
	Button
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
// import { Button } from 'react-native-web';

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const addGoalHandler = (goalTitle) => {
		setCourseGoals(currentGoals => [...currentGoals,
		{ id: Math.random().toString(), value: goalTitle }
		]);
		setIsAddMode(false);
	};

	const removeGoalHandler = goalId =>{
		setCourseGoals(
			courseGoals.filter((goal) => goal.id !== goalId)
		);
	};

	const cancelHandler = () =>{
		setIsAddMode(false);
	};

	return (
		<View style={styles.screen}>
			  <Button title="Add New Goal" onPress={()=> setIsAddMode(true)}/>
			 <GoalInput visible={isAddMode} addGoal={addGoalHandler} cancelGoal={cancelHandler}/>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={itemData => <GoalItem title={itemData.item.value} onDelete={()=> removeGoalHandler(itemData.item.id)} />}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	}
})
