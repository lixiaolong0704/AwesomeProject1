import React from 'react';
import {ScrollView, FlatList,View, StyleSheet, Text, TouchableOpacity ,TextInput} from 'react-native';
import {ExpoLinksView} from '@expo/samples';

export default class FlatListDemo extends React.Component {
    static navigationOptions = {
        title: 'FlatListDemo',
    };

    constructor(props) {
        super(props);

        var arr =[];
        for(var i=0;i<100;i++){
            arr.push({title:`zhansan${i}`,id:`${i+1}`});
        }



        this.state = {
            data:arr
        }


    }
    onRefresh(){
        console.log("reflesh...");
    }

    render() {
        return (
            <MultiSelectList

                onRefresh={this.onRefresh}
                data={this.state.data}
            />
        );
    }
}
class MultiSelectList extends React.PureComponent {
    state = {selected: (new Map(): Map<string, boolean>)};

    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
            // copy the map rather than modifying state.
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // toggle
            return {selected};
        });
    };

    _renderItem = ({item}) => (
         <MyListItem
        id={item.id}
        onPressItem={this._onPressItem}
        selected={!!this.state.selected.get(item.id)}
        title={item.title}
    />
);

render() {
    return (
        <FlatList
            data={this.props.data}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
        />
    );
}
}
class MyListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const textColor = this.props.selected ? "red" : "black";
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View>
                    <Text  style={{color: textColor,...styles.listItem}}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'gray',
        marginBottom: 100
    },

    listItem:{
        alignSelf: 'stretch',
        height:36,
        backgroundColor:'steelblue'

    },


    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    }


});
