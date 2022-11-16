import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Pressable,
  TextInput
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import SegundoScreen from './Views/SegundoScreen';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [texto, setTexto] = useState('');
  const array = [{id:'1', nombre:'diego'}, {id:'2', nombre:'alfonso'}, {id:'3', nombre:'miguel'}];
  const [selectPicker, setSelectPicker] = useState('');


  const navegarSegundaScreen = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>EJEMPLO PRESENTACIÓN</Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder={'Texto'}
          onChangeText={text => setTexto(text)}
          value={texto}
        ></TextInput>
      </View>

      <View style={styles.campo}>
        <Picker selectedValue={selectPicker} onValueChange={select => setSelectPicker(select)}>
          <Picker.Item label='- Seleccione -' value="" />
          {array.map(elemento => (
            <Picker.Item key={elemento.id} label={elemento.nombre} value={elemento.id} />
          ))}
        </Picker>
      </View>

      <Pressable style={styles.btnEjemplo} onPress={() => navegarSegundaScreen()}>
        <Text style={styles.btnTexto}>Ir a segunda screen</Text>
      </Pressable>


      {modalVisible && (
        <SegundoScreen
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setTexto={setTexto}
          texto={texto}
          selectPicker={selectPicker}
        />
      )}
    </View>
  )

};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#F4D295'
  },
  titulo: {
    fontSize: 25,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginVertical: 60,
    fontWeight: 'bold',
    color: '#000'
  },
  btnEjemplo: {
    backgroundColor: '#FFF',
    marginHorizontal: 60,
    padding: 20,
    borderRadius: 10,

  },
  btnTexto: {
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#000',
    fontWeight: '800'

  },
  input: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderRadius: 20,
    paddingHorizontal: 20
  },
  campo: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 20
},

});

export default App;
