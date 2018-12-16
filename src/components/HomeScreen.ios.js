import React, { Component } from 'react';
import {
    TabBarIOS,
    Text
} from 'react-native';
import NewsFeed from './NewsFeed';
import * as globalStyles from '../styles/global';

export default class HomeScreen extends Component {
    render() {
        return (
            <TabBarIOS
                barTintColor={globalStyles.BAR_COLOR}
                tintColor={globalStyles.LINK_COLOR}
                translucent={false}
            >
                <TabBarIOS.Item>
                    <NewsFeed />
                </TabBarIOS.Item>
                <TabBarIOS.Item>
                    <Search />
                </TabBarIOS.Item>
                <TabBarIOS.Item>
                    <Text>Bookmarks</Text>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}