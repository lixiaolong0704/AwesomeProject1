import React from 'react';
import {ScrollView, Text, View, StyleSheet, AsyncStorage, TextInput} from 'react-native';
import {ExpoLinksView} from '@expo/samples';

export default class AsyncStorageDemo extends React.Component {
    static navigationOptions = {
        title: 'AsyncStorageDemo',
    };

    constructor(props){
        super(props);
        // first user, initial values
        let UID234_object = {
            name: 'Chris',
            age: 30,
            traits: {hair: 'brown', eyes: 'brown'},
        };

// first user, delta values
        let UID234_delta = {
            age: 31,
            traits: {eyes: 'blue', shoe_size: 10},
        };

// second user, initial values
        let UID345_object = {
            name: 'Marge',
            age: 25,
            traits: {hair: 'blonde', eyes: 'blue'},
        };

// second user, delta values
        let UID345_delta = {
            age: 26,
            traits: {eyes: 'green', shoe_size: 6},
        };

        let multi_set_pairs = [
            ['UID234', JSON.stringify(UID234_object)],
            ['UID345', JSON.stringify(UID345_object)],
        ];
        let multi_merge_pairs = [
            ['UID234', JSON.stringify(UID234_delta)],
            ['UID345', JSON.stringify(UID345_delta)],
        ];

        AsyncStorage.multiSet(multi_set_pairs, (err) => {
            AsyncStorage.multiMerge(multi_merge_pairs, (err) => {
                AsyncStorage.multiGet(['UID234', 'UID345'], (err, stores) => {
                    stores.map((result, i, store) => {
                        let key = store[i][0];
                        let val = store[i][1];
                        console.log(key, val);
                    });
                });
            });
        });

// Console log results:
// => UID234 {"name":"Chris","age":31,"traits":{"shoe_size":10,"hair":"brown","eyes":"blue"}}
// => UID345 {"name":"Marge","age":26,"traits":{"shoe_size":6,"hair":"blonde","eyes":"green"}}
    }

    render() {
        return (
            <View style={{flex: 1}}>

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
