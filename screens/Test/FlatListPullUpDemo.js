import React from 'react';
import { Text, ScrollView, View, StyleSheet, FlatList } from 'react-native';
import {ExpoLinksView} from '@expo/samples';
import { Constants } from 'expo';
export default class FlatListPullUpDemo extends React.Component {
    static navigationOptions = {
        title: 'FlatListPullUpDemo',
    };

    constructor(props) {
        super(props);
        this.state = {
            stories: [{id: 1, text: 'option1'}, {id: 2, text: 'option2'}, {id: 3, text: 'option3'}],
            isFetching: false,
        };
    }
    componentDidMount() {
        this.fetchData();
    }
    onRefresh() {
        console.log('refreshing')
        this.setState({ isFetching: true }, function() {
            this.fetchData()
        });
    }
    fetchData() {
        const newList = [{id: 1, text: 'a'}, {id: 2, text: 'b'+Math.random()}, {id: 3, text: 'c'}]
        this.setState({ stories: newList, isFetching: false });
    }
    _renderItem = ({item}) => (
        <Text>{item.text}</Text>
    )
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.wrapper}>
                    <Text>Hello World!!!</Text>
                    <FlatList
                        onRefresh={() => this.onRefresh()}
                        refreshing={this.state.isFetching}
                        data={this.state.stories}
                        keyExtractor={(item) => item.id+''}
                        renderItem={this._renderItem}
                    />
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    }
});