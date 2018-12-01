import React from 'react';
import {ScrollView, Text, View, ViewPagerAndroid, StyleSheet, AppRegistry, TextInput} from 'react-native';
import {ExpoLinksView} from '@expo/samples';

export default class ViewPagerAndroidDemo extends React.Component {
    static navigationOptions = {
        title: 'TextInputDemo',
    };

    constructor(props) {
        super(props);

        this.state = {text: 'Useless Placeholder'};

    }

    render() {
        return (
            <ViewPagerAndroid
                style={styles.viewPager}
                initialPage={0}>
                <View style={styles.pageStyle} key="1">
                    <Text>First page</Text>
                </View>
                <View style={styles.pageStyle} key="2">
                    <Text>Second page</Text>
                </View>
            </ViewPagerAndroid>
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
    },
    viewPager: {
        flex: 1
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }


});
