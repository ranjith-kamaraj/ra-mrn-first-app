import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Modal } from "react-native";

const GoalInput = props => {
	const [enteredGoal, setEnteredGoal] = useState('');

	const enteredGoalHandler = (inputValue) => {
		setEnteredGoal(inputValue);
	};

	const addGoalHandler = () => {
		props.addGoal(enteredGoal);
		setEnteredGoal('');
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Course Goal'
					style={styles.input}
					onChangeText={enteredGoalHandler}
					value={enteredGoal}
				/>

				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title='Add' onPress={addGoalHandler} />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" color="red" onPress={props.cancelGoal} />
					</View>
				</View>
			</View>
		</Modal>)
};

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	input: {
		width: '80%',
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		marginBottom: 10
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '70%'
	},
	button: {
		width: '40%' 
	}

})

export default GoalInput;