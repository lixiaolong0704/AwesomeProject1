import React from 'react';
import {ScrollView, Text, StyleSheet, AppRegistry, TextInput} from 'react-native';
import {ExpoLinksView} from '@expo/samples';

export default class TextInputDemo extends React.Component {
    static navigationOptions = {
        title: 'TextInputDemo',
    };

    constructor(props) {
        super(props);

        this.state = {text: 'Useless Placeholder'};

    }

    render() {
        return (
            <ScrollView style={styles.container}>

                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />

                <Text>{this.state.text}</Text>

            </ScrollView>
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
