import AsyncStorage from '@react-native-async-storage/async-storage';


// buscar os links salvos
export async function getLinksSave(key){

const myLinks = await AsyncStorage.getItem(key);

    let linkSalves = JSON.parse(myLinks) || [];

    return linkSalves;
}

// salvar o link no storage

export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    //se tiver algum link salvo com esse msm ID ou duplicado ignorar.

    const hasLink = linksStored.some(link => link.id === newLink.id);
    if(hasLink){

        console.log('Esse link ja existe na lista');
        return; // parar execução aqui
    } 

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored));
    console.log('Link Salvo com Sucesso!');

}

// deletar um link especifico

export async function deleteLink(links, id){
    let myLinks = links.filter((item)=>{ 
        return(item.id !== id)


    })

    await AsyncStorage.setItem('encurtaLink', JSON.stringify(myLinks));

    console.log("LInk deletado do storage");

    return myLinks;
    

}