import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Menu from '../../components/Menu';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import { ContainerContent, ContainerLogo, Title, TextDescription, Logo } from './styles';
import { Ionicons } from '@expo/vector-icons';

const About = () => {
	return (
		<LinearGradient colors={[ '#000000', '#132742' ]} style={{ flex: 1, justifyContent: 'center' }}>
			<StatusBarPage barStyle="light-content" backgroundColor="#000000" />
			<Menu style={{ flex: 1 }} />

			<ContainerLogo>
				<Logo source={require('../../assests/Logo.png')} />
			</ContainerLogo>

			<ContainerContent>
				<Title>Encur.ta</Title>
				<TextDescription>Troque aquele link enorme por um simples.</TextDescription>
				<TextDescription>
					Projeto desenvolvido para aqueles que não gostam de ficar com link muito grande para guardar.
				</TextDescription>
				<TextDescription>Com o Encur.ta você torna seus links mais simples</TextDescription>

				<TextDescription>
					<Ionicons name="happy-outline" size={24} color="#FFF" />
					<Ionicons name="happy-outline" size={24} color="#FFF" />
				</TextDescription>
			</ContainerContent>
		</LinearGradient>
	);
};

export default About;
