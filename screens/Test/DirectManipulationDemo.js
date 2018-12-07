import React from 'react';
import {ScrollView, Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {ExpoLinksView} from '@expo/samples';

export default class DirectManipulationDemo extends React.Component {
    static navigationOptions = {
        title: 'DirectManipulationDemo',
    };
    clearText = () => {
        this._textInput.setNativeProps({text: ''});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TextInput
                    ref={component => this._textInput = component}
                    style={{height: 50, flex: 1, marginHorizontal: 20, borderWidth: 1, borderColor: '#ccc'}}
                />
                <TouchableOpacity onPress={this.clearText}>
                    <Text>Clear text</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'gray',
        marginBottom: 100
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    }


});
