import React from 'react';
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';


import PageHeader from '../../components/PageHeader';
import styles from './styles';

function TeacherList() {


    return (
      <View style={styles.container}>
        <PageHeader title="Proffys disponíveis" />      
      </View>
    );
  }

export default TeacherList;