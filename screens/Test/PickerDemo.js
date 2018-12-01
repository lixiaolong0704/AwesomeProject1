import React from 'react';
import {
    ScrollView,
    Button,
    DatePickerAndroid,
    Picker,
    Slider,
    Text,
    StyleSheet,
    AppRegistry,
    TextInput
} from 'react-native';
import {ExpoLinksView} from '@expo/samples';

export default class PickerDemo extends React.Component {
    static navigationOptions = {
        title: 'PickerDemo',
    };

    constructor(props) {
        super(props);

        this.state = {
            language: ''
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Picker
                    selectedValue={this.state.language}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="JavaScript" value="js"/>
                </Picker>
                <Picker/>

                <Button onPress={async () => {
                    try {
                        const {action, year, month, day} = await DatePickerAndroid.open({
                            date: new Date(2020, 4, 25)
                        });
                        if (action !== DatePickerAndroid.dismissedAction) {
                            // Selected year, month (0-11), day
                        }
                    } catch ({code, message}) {
                        console.warn('Cannot open date picker', message);
                    }

                }}
                        title={'Select Date'}
                />

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
