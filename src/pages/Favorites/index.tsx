import React from 'react';
import { Text, View, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import giveClaassesBgImage from '../../assets/images/give-classes-background.png';
import styles from './styles';

function Favorites() {

  const {goBack} = useNavigation();
    
  function handleNavigateBack(){
    goBack();
  }

    return (
      <View style={styles.container}>
        
        


      </View>
    );
  }

export default Favorites;