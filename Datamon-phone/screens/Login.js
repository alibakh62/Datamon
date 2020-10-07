import React from 'react'
import { 
  StyleSheet, 
  View, 
  Text, 
  Image,
  TouchableOpacity } from 'react-native'
import { auth, provider } from '../firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

export default function Login({ navigation }) {

  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result)
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      // .then(result => {
      //   db.collection("providers").add({
      //     name: result.user.displayName,
      //     email: result.user.email,
      //     photoUrl: result.user.photoURL,
      //     emailVerified: result.user.emailVerified,
      //   })
      //   .then(function() {
      //     console.log("Document successfully written!")
      //   })
      //   .catch(function(error) {
      //     console.error("Error writing document: ", error)
      //   })
      // })
      .catch(error => {
        alert(error.message)
      })
  }

  const goToProjects = () => {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.login}>
      <View style={styles.login__container}>
        <Image 
          source={require("../assets/images/datamon-logo.png")}
          resizeMode='center'
          style={styles.login__image}
        />
        <Text style={styles.text__lg}>Sign in to DataMon</Text>
        <Text style={styles.text__sm}>www.datamon.us</Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.buttons__signin}
            onPress={signIn}>
            <Text style={styles.buttons__text}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttons__signin}
            onPress={goToProjects}>
            <Text style={styles.buttons__text}>Just Lemme Get In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  login: {
    height: '100%',
    backgroundColor: '#f8f8f8',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login__container: {
    padding: 100,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  login__image: {
    
  },
  text__lg: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text__sm: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttons: {

  },
  buttons__signin: {
    marginTop: 50,
    backgroundColor: '#0a8d48',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttons__text: {
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  }
})