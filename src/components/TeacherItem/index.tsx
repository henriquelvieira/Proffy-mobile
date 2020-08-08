import React, {useState} from 'react';
import { View, Image, Text, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavorite from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

export interface Teacher {  
  id: number,
  subject: string,
  cost: number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string
};

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
};


const TeacherItem: React.FC<TeacherItemProps> = ( {teacher, favorited} ) => {
  const [isFavorited, setIsFavorited] = useState(favorited);  

  function createNewConnection(){
    api.post('connections', {
        user_id: teacher.id
    });
  };

  function handleLinkToWhatsapp(){

    createNewConnection(); //Registrar a nova conexão

    //Chamada via DeepLink para o Whatsapp com o número do professor
    Linking.openURL(`whatsapp://send?text=Hello World!&phone=${teacher.whatsapp}`); 
  };

  async function handleToggleFavorite(){
    
    const favorites = await AsyncStorage.getItem('favorites'); //Buscar os valores do AsyncStorage do item favorites
    
    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites); //Alimentar Array com os valores do AsyncStorage
    }

    if (isFavorited) {
      
      //Varrer o array procurando se o ID do professor está no mesmo, caso sim retorna o index
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });

      favoritesArray.splice(favoriteIndex, 1); //Remover a posição do Array
      setIsFavorited(false); //Alterar state de Favorites para false

    } else {

      favoritesArray.push(teacher); //Adiciona o objeto ao Array
      setIsFavorited(true); //Alterar state de Favorites para true
    }
    
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray)); //Gravar os valores do novo Array no AsyncStorage

  }


    return (
      <View style={styles.container}>
          
          <View style={styles.profile}>
              <Image 
                style={styles.avatar}
                source={{uri: teacher.avatar}}
              ></Image>
              <View style={styles.profileInfo}>
                <Text style={styles.name}>{teacher.name}</Text>   
                <Text style={styles.subject}>{teacher.subject}</Text>     
              </View>
          </View>


          <Text style={styles.bio}>
            {teacher.bio}
          </Text>   

          <View style={styles.footer}>
          
            <Text style={styles.price}>
                Preço/hora {'   '}
                <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
            </Text>    
            
            <View style={styles.buttonsContainer}>
                <RectButton
                  onPress={handleToggleFavorite} 
                  style={[
                    styles.favoriteButton, 
                    isFavorited ? styles.favorited : {}
                    ]}
                >
                    <Image source={isFavorited ? unFavorite : heartOutlineIcon } />
                </RectButton>

                <RectButton 
                  onPress={handleLinkToWhatsapp}
                  style={styles.contactButton}>
                    <Image source={whatsappIcon} />
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>

            </View>
            

          </View>
          


      </View>
    );
  }

export default TeacherItem;