import React from 'react'
import { Text, Modal, View, StyleSheet, Pressable, TextInput } from 'react-native'
const SegundoScreen = ({ setModalVisible, modalVisible, texto, setTexto, selectPicker }) => {
    return (
        <Modal animsegunatiosegunnType='slide' visible={modalVisible}>
            <View style={styles.contenedor}>
                <Pressable style={styles.botonCerrar} onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.botonCerrarTexto}>Cerrar</Text>
                </Pressable>

                <Text style={styles.titulo}>segunda screen</Text>

                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Texto'}
                        onChangeText={text => setTexto(text)}
                        value={texto}
                    ></TextInput>
                </View>

            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#55F1AF'
    },
    titulo: {
        fontSize: 25,
        textTransform: 'uppercase',
        textAlign: 'center',
        marginVertical: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    botonCerrar: {
        backgroundColor: '#F7D320',
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 50,
        paddingVertical: 15
    },
    botonCerrarTexto: {
        fontSize: 20,
        fontWeight: '700',
        textTransform: 'uppercase'
    },
    input: {
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        borderRadius: 20,
        paddingHorizontal: 20
    }
})

export default SegundoScreen