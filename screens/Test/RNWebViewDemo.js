import React from 'react';
import {ScrollView, Text, StyleSheet, TextInput} from 'react-native';
import { WebView } from "react-native-webview";

export default class RNWebViewDemo extends React.Component {
    static navigationOptions = {
        title: 'RNWebViewDemo',
    };

    constructor(props) {
        super(props);


    }


    render() {
        return (
            <WebView
                source={{uri: 'https://github.com/facebook/react-native'}}
                style={{marginTop: 20}}
            />
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
