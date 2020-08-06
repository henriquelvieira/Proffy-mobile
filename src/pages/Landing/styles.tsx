import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1, //Ocupar todo o espaço da tela
      backgroundColor: '#8257E5',
      justifyContent: 'center',
      padding: 40
    },

    banner:{
        width: '100%',
        resizeMode: 'contain' /*Redimensionar a imagem para caber na tela*/
    },

    title :{        
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },
    
    titleBold :{
        fontFamily: 'Poppins_600SemiBold',
    },
    
    buttonsContainer :{
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between'
    },
    
    button :{
        height: 130,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'    
    },
    
    buttonsPrimary :{
        backgroundColor: '#9871f5',
    },
    
    buttonsSecondary :{
        backgroundColor: '#04d361',
    },
    buttonText :{
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 20
    },

    totalConnection :{
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 25 
    }

  });


export default styles;