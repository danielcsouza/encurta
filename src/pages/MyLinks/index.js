import React, { useState, useEffect} from 'react';
import {Modal, ActivityIndicator} from 'react-native';

import { useIsFocused} from '@react-navigation/native';
import{ LinearGradient} from 'expo-linear-gradient';

import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ListItem from '../../components/ListItem';
import ModalLink from '../../components/ModalLink';


import { getLinksSave, deleteLink } from '../../utils/storeLinks';

import { Title, ListLinks, ContainerEmpty, WarningText, SubTitle} from './styles';

export default function MyLinks(){

        const isFocused = useIsFocused();

        const[links, setLinks] = useState([]);
        const [data, setData] = useState({});
        const [modalVisible, setModalVisible] = useState(false);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            
            async function getLinks(){
                const result = await getLinksSave('encurtaLink');
                setLinks(result);
                setLoading(false);
            }

            getLinks();
            
        }, [isFocused])


        function handleItem(item){

            setData(item);
            setModalVisible(true);
        }

        async function handleDelete(id){
            const result = await deleteLink(links, id);
            setLinks(result);
        }


    return(
        <LinearGradient
            colors={['#000000','#132742' ]}
            style={{ flex:1, justifyContent: 'center'}}       
        >

        
         <StatusBarPage
            barStyle="light-content"
            backgroundColor="#000"
            />
            <Menu/>

            <Title>Meus Links</Title>
            <SubTitle>Arraste o link para esquerda para excluir ou toque para mais detalhes</SubTitle>

            { 
                loading && 
                (
                    <ContainerEmpty>
                        <ActivityIndicator color="#FFF" size={25} />
                    </ContainerEmpty>
                )

            }
            {
                 !loading && 
                 links.length === 0 &&
                 (
                    <ContainerEmpty>
                        <WarningText>Você ainda não possui nenhum link! :( </WarningText>
                    </ContainerEmpty>
                 )

            }

            <ListLinks
                data={links}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete} /> }
                contentContainerStyle={{ paddingBottom:22 }}
                showsVerticalScrollIndicator={false}            
            />

            <Modal visible={modalVisible} transparent animationType='slide'>
                <ModalLink onClose={()=> setModalVisible(false)} data={data}/>
            </Modal>
 
        </LinearGradient>
    )
}