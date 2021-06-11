import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const ContainerLogo = styled.View`
	align-items: center;
	justify-content: center;
	flex: 1;
	margin-top: ${Platform.OS == 'ios' ? 25 + '%' : 13 + '%'};
	
`;

export const Logo = styled.Image`
	width: 150px;
	height: 150px;
`;

export const ContainerContent = styled.View`
	margin-top: ${Platform.OS == 'ios' ? 25 + '%' : 1 + '%'};
	flex: 3;
`;

export const Title = styled.Text`
	font-size: 38px;
	color: #fff;
	font-weight: bold;
	text-align: center;
	margin-bottom: 30px;
`;

export const TextDescription = styled.Text`
	font-size: 16px;
	color: #fff;
	text-align: left;
	margin-left: 30px;
	margin-right: 30px;
	margin-bottom: 10px;
`;
