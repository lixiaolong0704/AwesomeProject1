
import React from 'react';
import {ScrollView, StyleSheet,Text} from 'react-native';
import {ExpoLinksView} from '@expo/samples';

export default class Demo1Screen extends React.Component {
    static navigationOptions = {
        title: 'Demo1Screen',
    };

    constructor(props) {
        super(props);



        var arr = [];
        for (var i = 0; i < 40; i++) {

            arr.push({
                name: 'zhangsan' + i,
            });

        }
        this.state = {
            list: [
                ...arr
            ]
        };


    }

    render() {
        return (
            <ScrollView style={styles.container}>
                {this.state.list.map(p=><Text key={p.name}>{p.name}</Text>)}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        marginBottom:100
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    }


});
