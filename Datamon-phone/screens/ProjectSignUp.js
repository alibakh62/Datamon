import React from 'react'
import { View, 
  Text, 
  TouchableOpacity, 
  StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

import NavBar from '../components/NavBar'
import db from '../firebase'

export default function ProjectSignUp({ navigation }) {

  const join = () => {
    alert('Join the project')
    // navigation.navigate('Home')
  }

  return (
    <View style={styles.container__signup}>
      <View style={styles.contents}>
        <Text style={styles.companyname}>DataMon Inc.</Text>
        <Text style={styles.projectname}>Situation Mapping</Text>
        <View
          style={{
            alignSelf:'center',
            position:'absolute',
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            width:'100%',
            marginTop: 10,
          }}
        />
        {/* <Divider style={styles.divider} /> */}
        <TouchableOpacity
            style={styles.button}
            onPress={join}>
            <Text style={styles.button__text}>Join</Text>
        </TouchableOpacity>
      </View>
      <NavBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container__signup:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'lightgreen'
  },
  contents: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    width: '80%',
  },
  companyname: {
    fontSize: 36,
    fontWeight: 'bold',
    marginLeft: 10,
    alignSelf: 'flex-start'
  },
  projectname: {
    fontSize: 24,
    marginLeft: 10,
    alignSelf: 'flex-start'
  },
  divider: {
    backgroundColor: 'black',
    color: 'black'
  },
  button: {
    marginTop: 50,
    backgroundColor: '#0a8d48',
    borderRadius: 20,
    padding: 10,
    width: 150,
    elevation: 2,
  },
  button__text: {
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  }
})