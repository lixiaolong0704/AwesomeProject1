import React from 'react';
import { StyleSheet, View, ListView, RefreshControl, Text } from 'react-native'
import {ExpoLinksView} from '@expo/samples';

class RefreshableList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        fetchData().then(() => {
            this.setState({refreshing: false});
        });
    }

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl

                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }

                sdfsdfsdf
            />
        );
    }

}