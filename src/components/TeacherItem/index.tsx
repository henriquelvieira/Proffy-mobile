import React from 'react';
import { View, Image, Text } from 'react-native';


import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavorite from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';


interface TeacherItemProps {
   // title: string;    
}

const TeacherItem: React.FC<TeacherItemProps> = (/*{ title }*/) => {


    return (
      <View style={styles.container}>
          
          <View style={styles.profile}>
              <Image 
                style={styles.avatar}
                source={{uri: 'https://avatars0.githubusercontent.com/u/14298531?s=460&u=a87eeadc19be3f6304c96ec94747da97f1682d9c&v=4'}}
              ></Image>
              <View style={styles.profileInfo}>
                <Text style={styles.name}>Henrique</Text>   
                <Text style={styles.subject}>Programação</Text>     
              </View>
          </View>


          <Text style={styles.bio}>
             Full Stack Developer Pascal (Delphi) & PLSQL | Oracle
          </Text>   

          <View style={styles.footer}>
          
            <Text style={styles.price}>
                Preço/hora {'   '}
                <Text style={styles.priceValue}>R$ 80,00</Text>
            </Text>    
            
            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton, styles.favorited]}>
                    <Image source={unFavorite} />
                </RectButton>

                <RectButton style={styles.contactButton}>
                    <Image source={whatsappIcon} />
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>

            </View>
            

          </View>
          


      </View>
    );
  }

export default TeacherItem;