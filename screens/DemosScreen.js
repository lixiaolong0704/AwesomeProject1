import React from 'react';
import {ScrollView, StyleSheet, Text, Button,Alert} from 'react-native';
import {ExpoLinksView} from '@expo/samples';

export default class DemosScreen extends React.Component {
    static navigationOptions = {
        title: 'DemosScreen',
    };

    constructor(props) {
        super(props);




    }

    render() {

        const {navigate} = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <Button
                    onPress={() => {
                        navigate('Demo1Screen', {name: 'Jane'})

                    }}
                    title="Demo1Screen"
                />
                <Button
                    onPress={() => {
                        navigate('TextInputDemo', {name: 'Jane'})

                    }}
                    title="TextInputDemo"
                />
                <Button
                    onPress={() => {
                        navigate('NetworkingDemo', {name: 'Jane'})

                    }}
                    title="NetworkingDemo"
                />
                <Button
                    onPress={() => {
                        navigate('PickerDemo', {name: 'Jane'})

                    }}
                    title="PickerDemo"
                />
                <Button
                    onPress={() => {
                        navigate('AnimationsDemo', {name: 'Jane'})
                    }}
                    title="AnimationsDemo"
                />
                <Button
                    onPress={() => {
                        navigate('ModalDemo', {name: 'Jane'})

                    }}
                    title="ModalDemo"
                />
                <Button
                    onPress={() => {
                        navigate('ViewPagerAndroidDemo', {name: 'Jane'})

                    }}
                    title="ViewPagerAndroidDemo"
                />
                <Button
                    onPress={() => {
                        navigate('RefreshableListDemo', {name: 'Jane'})

                    }}
                    title="RefreshableListDemo"
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        marginBottom: 100
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    }


});
