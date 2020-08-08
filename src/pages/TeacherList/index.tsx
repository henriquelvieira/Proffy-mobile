import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, ScrollView, TextInput, BorderlessButton } from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);  

  const [teachers, setTeachers] = useState([]);   
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function handletoggleFiltersVisible() {
    setIsFilterVisible(!isFilterVisible) ;
  };

  function loadFavorites(){
    
      AsyncStorage.getItem('favorites').then(Response => {
      if (Response){
        const favoritedTeachers = JSON.parse(Response);
        
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
          
        })
        
        setFavorites(favoritedTeachersIds);
      }
      
    });
    
  }
  
  async function handleFilterSubmit() {
    
    loadFavorites();

    const response = await api.get('classes', {
        params: {
            subject,
            week_day,
            time
        }
    });

    setTeachers(response.data);
    handletoggleFiltersVisible();
  };

  //Substitudo ao useEffect, o mesmo será executada toda vez que a tela estiver em foco
  useFocusEffect(() => {
    loadFavorites(); 
  },);

  

    return (
      <View style={styles.container}>
        <PageHeader 
          title="Proffys disponíveis"
          headerRight={(
            <BorderlessButton onPress={handletoggleFiltersVisible}>
              <Feather name="filter" size={20} color="#FFF" />
            </BorderlessButton>
          )}
          >
          
          
          { isFilterVisible &&
          (
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
              <TextInput
                placeholderTextColor="#c1bccc"
                style={styles.input}
                value={subject}
                onChangeText={text => setSubject(text)}
                placeholder='Qual a matéria'
              />

              <View style={styles.inputGroup}>
                
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da semana</Text>
                  <TextInput
                    placeholderTextColor="#c1bccc"
                    style={styles.input}
                    value={week_day}
                    onChangeText={text => setWeekDay(text)}
                    placeholder='Qual o dia?'
                  />
                </View>

                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Horário</Text>
                  <TextInput
                    placeholderTextColor="#c1bccc"
                    style={styles.input}
                    value={time}
                    onChangeText={text => setTime(text)}
                    placeholder='Qual o Horário?'
                  />
                </View>

              </View>

              <RectButton 
                style={styles.submitButton}
                onPress={handleFilterSubmit}
              >
                <Text style={styles.submitButtonText}>Filtrar</Text>
                
              </RectButton>

            </View>
          )
        }

        </PageHeader> 

        <ScrollView
          style={styles.teacherList}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16
          }}
        >
          {
              teachers.map((teacher: Teacher) => {
                  return ( 
                          <TeacherItem 
                            key={teacher.id}  
                            teacher={teacher} 
                            favorited={favorites.includes(teacher.id) }
                          /> 
                         )
                  })  
          }

        </ScrollView>


      </View>
    );
  }

export default TeacherList;