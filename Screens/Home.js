import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Home extends Component {
    render() {
        return (
            <View>
                <Text> This is home Component </Text>
                <Button title='Go to Dashboard' onPress={() => this.props.navigation.navigate('Dashboard')}>
                </Button>
            </View>
        );
    }
}

export default Home;
