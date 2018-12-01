import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DemosScreen from '../screens/DemosScreen';

import Demo1Screen from '../screens/Demo1Screen';


import TextInputDemo from '../screens/Test/TextInputDemo';
import NetworkingDemo from '../screens/Test/NetworkingDemo';
import PickerDemo from '../screens/Test/PickerDemo';
import AnimationsDemo from '../screens/Test/AnimationsDemo';
import ModalDemo from '../screens/Test/ModalDemo';
import ViewPagerAndroidDemo from '../screens/Test/ViewPagerAndroidDemo'
import RefreshableListDemo from '../screens/Test/RefreshableListDemo'


import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});


HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

const DemosStack = createStackNavigator({
    DemosScreen: DemosScreen,
    Demo1Screen,
    TextInputDemo,
    NetworkingDemo,
    PickerDemo,
    AnimationsDemo,
    ModalDemo,
    ViewPagerAndroidDemo,
    RefreshableListDemo

});


DemosStack.navigationOptions = {
    tabBarLabel: 'DemosScreen',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
        />
    ),
};

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
        />
    ),
};

export default createBottomTabNavigator({
    DemosStack,
    HomeStack,
    SettingsStack,
});
