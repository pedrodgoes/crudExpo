import React, {useState} from 'react'
import {View, Button, TextInput, ScrollView, StyleSheet} from 'react-native'
import firebase from '../database/firebase'

export const CreateUsuario = (props) => {
    const [state, setState] = useState({
        name: "",
        idade: "",
        cidade:""
    })

    const handleChangeText = (name, value) => {
        setState({...state, [name]: value})
    };

    const createUser =  async ()=> {
        if (state.name === ''){
            alert('Por favor preencha o campo')
        } else {
        try {await firebase.db.collection('users').add({
                name: state.name,
                idade: state.idade,
                cidade: state.cidade
            })
            alert('Salvo!')
            props.navigation.navigate('PerfilUsuario')
        } catch (error) {
        }
    }
    }

    return (
        <ScrollView style={StyleSheet.container}>
            <View style={StyleSheet.inputGroup}>
                <TextInput placeholder="Nome" 
                onChangeText={(value) => handleChangeText('name', value)}/>
            </View>
            <View style={StyleSheet.inputGroup}>
                <TextInput placeholder="Idade"
                onChangeText={(value) => handleChangeText('idade', value)}/>
            </View>
            <View style={StyleSheet.inputGroup}>
                <TextInput placeholder="Cidade"
                onChangeText={(value) => handleChangeText('cidade', value)}/>
            </View>
            <View>
                <Button title="Salvar" onPress={()=> createUser()}/>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
   container: {
    flex:1,
    padding: 35
   },    
    inputGroup: {
        flex:1,
        padding:0,
        marginBottom: 15,
        borderBottomWidth: 5,
        borderBottomColor: "#9932cc"
    }
})
 export default CreateUsuario
