import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import RNFirebase from 'react-native-firebase';
import styles from './ScreenStyles/DashboardStyle';

class Dashboard extends Component {
    handleSubmit = () => {
        RNFirebase.crashlytics().crash() //Used to crash the application
    }


    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.title}>Add Item</Text>
                <TextInput style={styles.itemInput} onChange={this.handleChange} />
                <TouchableHighlight style={styles.button} underlayColor="white" onPress={this.handleSubmit}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default Dashboard;

