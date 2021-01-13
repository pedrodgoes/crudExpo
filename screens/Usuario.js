import React, { useEffect, useState} from 'react'
import { ActivityIndicator } from 'react-native'
import {View, StyleSheet, ScrollView, TextInput, Button} from 'react-native'
import firebase from '../database/firebase'

export const Usuario = (props) => {

    const [user, setUser] = useState({
        id: '',
        name: '',
        idade: '',
        cidade: ''
    })

    const [carregar, setCarregando] = useState(true)

    const pegaId = async(id) => {
        const dbParams =  firebase.db.collection('users').doc(id)
        const doc = await dbParams.get()
        const user = doc.data()
        setUser({
            ...user,
            id: doc.id,
        })
        setCarregando(false)
    }

    useEffect(() => {
        pegaId(props.route.params.userId)
    }, []);

    const handleChangeText = (name, value) => {
        setUser({...user, [name]: value})
    };

    const deletarU = async() => {
        const dbParams  = firebase.db.collection('users').doc(props.route.params.userId)
        await dbParams.delete()
        props.navigation.navigate('PerfilUsuario')
    }

    const attUser = async () => {
        const dbParams = firebase.db.collection('users').doc(user.id)
        await dbParams.set({
            name: user.name,
            idade: user.idade,
            cidade: user.cidade
        })
        setUser()
        props.navigation.navigate('PerfilUsuario')
    }

    if(carregar) {
        return(
            <View><ActivityIndicator size='large' color="blue" /></View>

        )
    }

    return (
        <ScrollView style={StyleSheet.container}>
            <View style={StyleSheet.inputGroup}>
                <TextInput placeholder="Nome"
                value = {user.name}
                onChangeText={(value) => handleChangeText('name', value)}/>
            </View>
            <View style={StyleSheet.inputGroup}>
                <TextInput placeholder="Idade"
                value = {user.idade}
                onChangeText={(value) => handleChangeText('idade', value)}/>
            </View>
            <View style={StyleSheet.inputGroup}>
                <TextInput placeholder="Cidade"
                value = {user.cidade}
                onChangeText={(value) => handleChangeText('cidade', value)}/>
            </View>
            <View>
                <Button color="green"title="Alterar" onPress={()=> attUser()}/>
            </View>
            <View>
                <Button color="red" title="Deletar" onPress={()=> deletarU()}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 35,
    },
    inputGroup: {
        flex:1,
        padding:0,
        marginBottom: 15,
        borderBottomWidth: 5,
        borderBottomColor: "#9932cc"
    }
})
 export default Usuario