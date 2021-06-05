import React from 'react';
import { Text, TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native';

import { ModalContainer, Container, Header, LinkArea, Title, LongUrl, ShortLinkArea, ShortLinkUrl } from './styles';
import { Feather } from '@expo/vector-icons';
import Clipboard from 'expo-clipboard';

export default function ModalLink({ onClose, data }) {
	function copyLink() {
		Clipboard.setString(data.link);
		alert('Link copiado com sucesso!');
	}

	async function handleShare() {
		try {
			const result = await Share.share({
				message: `Link encurtado :) - ${data.link}`
			});

			if (result.action === Share.sharedAction) {
				if (result.activityType) {
					console.log('ActiveType');
				} else {
					//Compartilhou
					console.log('Compartilhado com sucesso!');
				}
			} else if (result.action === Share.dismissedAction) {
				console.log('Modal Fechado');
			}
		} catch (error) {
			console.log(error.menssage);
		}
	}

	return (
		<ModalContainer>
			<TouchableWithoutFeedback onPress={onClose}>
				<View style={{ flex: 1 }} />
			</TouchableWithoutFeedback>

			<Container>
				<Header>
					<TouchableOpacity onPress={onClose}>
						<Feather name="x" color="#242743" size={30} />
					</TouchableOpacity>
					<TouchableOpacity onPress={handleShare}>
						<Feather name="share" color="#242743" size={30} />
					</TouchableOpacity>
				</Header>

				<LinkArea>
					<Title>Link Encurtado</Title>
					<LongUrl numberOfLines={1}>{data.long_url}</LongUrl>

					<ShortLinkArea activeOpacity={1} onPress={copyLink}>
						<ShortLinkUrl numberOfLines={1}>{data.link}</ShortLinkUrl>
						<TouchableOpacity onPress={copyLink}>
							<Feather name="copy" color="#FFF" size={25} />
						</TouchableOpacity>
					</ShortLinkArea>
				</LinkArea>
			</Container>
		</ModalContainer>
	);
}
