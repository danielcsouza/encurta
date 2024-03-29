import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './pages/Home';
import MyLinks from './pages/MyLinks';
import About from './pages/About';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

const Drawer = createDrawerNavigator();

function Routes() {
	return (
		<Drawer.Navigator
			drawerContentOptions={{
				activeBackgroundColor: '#132742',
				activeTintColor: '#FFF',

				marginTop: 16,
				labelStyle: {
					fontSize: 19
				}
			}}
		>
			<Drawer.Screen
				name="Home"
				component={Home}
				options={{
					title: 'Encurtar Link',
					drawerIcon: ({ focused, size, color }) => (
						<Ionicons name={focused ? 'cube' : 'cube-outline'} color={color} size={size} />
					)
				}}
			/>

			<Drawer.Screen
				name="MyLinks"
				component={MyLinks}
				options={{
					title: 'Meus Link',
					drawerIcon: ({ focused, size, color }) => (
						<Ionicons name={focused ? 'stats-chart' : 'stats-chart-outline'} color={color} size={size} />
					)
				}}
			/>

			<Drawer.Screen
				name="About"
				component={About}
				options={{
					title: 'Sobre',
					drawerIcon: ({ focused, size, color }) => (
						<AntDesign name={focused ? 'infocirlce' : 'infocirlceo'} color={color} size={size} />
					)
				}}
			/>
		</Drawer.Navigator>
	);
}

export default Routes;
