import React from 'react';
import {ScrollView, Text, StyleSheet, WebView, TextInput} from 'react-native';
import {ExpoLinksView} from '@expo/samples';

export default class WebViewDemo extends React.Component {
    static navigationOptions = {
        title: 'WebViewDemo',
    };

    constructor(props) {
        super(props);



    }

    render() {
        var local =require("./../assets/index.html");
        return (
            <WebView
                // source={{uri: 'https://github.com/facebook/react-native'}}
                source={local}
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
