import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';


import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {


    return (
      <View style={styles.container}>
        <PageHeader title="Proffys disponíveis">
          
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder='Qual a matéria'
            />

            <View style={styles.inputGroup}>
              
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder='Qual o dia?'
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder='Qual o Horário?'
                />
              </View>

            </View>


          </View>

        </PageHeader> 

        <ScrollView
          style={styles.teacherList}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16
          }}
        >
          <TeacherItem />    
          <TeacherItem />  
          <TeacherItem />  
          <TeacherItem />  
          <TeacherItem />  
          <TeacherItem />  
        </ScrollView>


      </View>
    );
  }

export default TeacherList;