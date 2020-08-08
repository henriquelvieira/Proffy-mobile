import React, {useEffect, useState} from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import {useFocusEffect} from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import styles from './styles';

function Landing() {
  const [totalconnections, setTotalconnections] = useState(0); 
  const {navigate} = useNavigation();

  function handleNavigateToGiveClassesPage(){
      navigate('GiveClasses');
  };

  function handleNavigateToStudyPages(){
    navigate('Study');
  };


  //Substitudo ao useEffect, o mesmo será executada toda vez que a tela estiver em foco
  useFocusEffect(() => {
    api.get('connections').then(response => {
        const { total } = response.data;
        setTotalconnections(total);
    })

  });

    return (
      <View style={styles.container}>
          <Image source={landingImg} style={styles.banner} />

          <Text style={styles.title}>
            Seja bem-vindo, {'\n'}
            <Text style={styles.titleBold}>O que deseja fazer?</Text>
          </Text>

          <View style={styles.buttonsContainer}>
            
            <RectButton 
              style={[styles.button, styles.buttonsPrimary ]}
              onPress={handleNavigateToStudyPages} 
            >
                <Image source={studyIcon} />
                <Text style={styles.buttonText}>Estudar</Text>
            </RectButton>   

            <RectButton 
                style={[styles.button, styles.buttonsSecondary ]}  
                onPress={handleNavigateToGiveClassesPage} 
            >
                <Image source={giveClassesIcon} />
                <Text style={styles.buttonText}>Dar aulas</Text>
            </RectButton>   

          </View>

            <Text style={styles.totalConnection}>
                Total de {totalconnections} conexões já realizadas {' '} 
                <Image source={heartIcon} />
            </Text>





      </View>
    );
  }

export default Landing;