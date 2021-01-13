import React, { useEffect } from 'react'
import {View, Text, ScrollView, Button} from 'react-native'
import { useState } from 'react/cjs/react.development';
import firebase from "../database/firebase";
import { ListItem, Avatar} from 'react-native-elements'

export const PerfilUsuario = (props) => {

    const [users, setUsers] = useState([])

  useEffect(() => {
      firebase.db.collection('users').onSnapshot(querySnapshot => {

        const users = [];

          querySnapshot.docs.forEach(doc => {
              const {name, idade, cidade} = doc.data()
              users.push ({
                  id: doc.id,
                  name,
                  idade,
                  cidade
              })
          });
          setUsers(users);
      });
  }, []);

    return (
        <ScrollView>
            <Button title="Criar usuário" 
            onPress={() => props.navigation.navigate('CreateUsuario')}/>

            {
                users.map(user => {
                    return(
                        <ListItem 
                            key={user.id} bottomDivider onPress={()=> {
                                props.navigation.navigate('Usuario', {
                                    userId: user.id
                                })
                            }}
                        >
                            <ListItem.Chevron />
                            <Avatar rounded icon={{ name: 'home' }}/>
                            <ListItem.Content>
                                <ListItem.Title>{user.name}</ListItem.Title>
                                <ListItem.Title>{user.idade}</ListItem.Title>
                                <ListItem.Title>{user.cidade}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </ScrollView>
    )
}

export default PerfilUsuario;
