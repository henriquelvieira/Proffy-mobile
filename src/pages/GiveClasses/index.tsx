import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClaassesBgImage from '../../assets/images/give-classes-background.png';
import styles from './styles';

function GiveClasses() {
    return (
      <View style={styles.container}>
        <ImageBackground 
          source={giveClaassesBgImage} 
          style={styles.content}
          resizeMode='contain'
        >  
          <Text style={styles.title}>Quer ser um Proffy?</Text>  
          <Text style={styles.description}>
            Para começar, você precisa se cadastrar como professor na nossa plataforma web.
          </Text>  

        </ImageBackground>  
        
        <RectButton 
          style={styles.okButton}  
        >
          <Text style={styles.okButtonText}>Tudo Bem</Text>
        </RectButton>   
        


      </View>
    );
  }

export default GiveClasses;