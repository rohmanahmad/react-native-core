/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
} from 'react-native';

import LeftSideComponent from './components/sections/in-leftside/leftside'
import HeaderComponent from './components/sections/in-header/header'
import FooterComponent from './components/sections/in-footer/footer'
import ContentComponent from './components/sections/in-content/content1'

class App extends React.Component {
	render(props) {
		return (
			<>
				<StatusBar barStyle="dark-content" />
				<LeftSideComponent className="oke"/>
				<div id="content" className="app-content box-shadow-z0" role="main">
					<HeaderComponent/>
					<ContentComponent/>
				</div>
				<FooterComponent/>
			</>
		);
	}
}

const styles = StyleSheet.create({
	engine: {
		position: 'absolute',
		right: 0,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
});

export default App;