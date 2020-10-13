import React, { useState } from 'react'
import { View, 
  Text,
  Switch, 
  TouchableOpacity, 
  StyleSheet } from 'react-native'

import { CheckBox, Divider } from 'react-native-elements'

import NavBar from '../components/NavBar'
import db from '../firebase'

export default function ProjectSignUp({ route, navigation }) {

  const {name, title} = route.params

  const [dataItems, setDataItems] = useState([])

  const addDataItem = item => {
    console.log(`dataItems prev: ${ dataItems }`)
    console.log(`item: ${ item.name }`)
    setDataItems({...dataItems, name: item.name, checked: !item.checked})
    console.log(`data items after: ${ dataItems }`)
  }

  const join = () => {
    alert('Join the project')
    // navigation.navigate('Home')
  }

  const back = () => {
    navigation.navigate("Home")
    // navigation.goBack()
  }

  const printStuff = item => {
    console.log(`printStuff: item: ${ item }`)
  }

  const dataItemsRef = [{name: 'Location Services', checked: false}, 
                        {name: 'App Usage', checked: false}]

  return (
    <View style={styles.container__signup}>
      <View style={styles.contents}>
      <Text style={styles.companyname}>{name.name}</Text>
      <Text style={styles.projectname}>{title.title}</Text>
        <Divider style={styles.divider} />
      </View>
      <View style={styles.checkboxes}>
        <Text style={styles.dataitems}>Data Items:</Text>
          {dataItemsRef.map(item => (
            <DataItem item={item} />
          ))}
        </View>
        <View style={styles.buttons__container}>
          <TouchableOpacity
              style={styles.button}
              onPress={join}>
              <Text style={styles.button__text}>Join</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}
              onPress={back}>
              <Text style={styles.button__text}>Back</Text>
          </TouchableOpacity>
        </View>
      {/* </View> */}
      <NavBar />
    </View>
  )
}


const DataItem = ({ item }) => {
  const [isSelected, setIsSelected] = useState(false)

  const selectItem = () => {
    setIsSelected(!isSelected)
  }

  return (
    <View style={styles.switch__container}>
      <Switch 
        onValueChange={selectItem}
        value={isSelected}
      />
      <Text style={styles.switch__text}>{item.name}</Text>
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
    // backgroundColor: 'grey',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    marginLeft: 15,
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'lightblue',
    width: '80%',
  },
  companyname: {
    fontSize: 36,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 20,
    alignSelf: 'flex-start'
  },
  projectname: {
    fontSize: 24,
    marginLeft: 10,
    marginBottom: 10,
    alignSelf: 'flex-start'
  },
  dataitems: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 25,
  },
  divider: {
    backgroundColor: 'red',
    color: 'red',
    borderWidth: 0.5,
    width: '100%'
  },
  checkboxes: {
    // backgroundColor: 'grey',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 30,
    flex: 0,
    flexDirection: 'column',
    alignSelf: 'flex-start'
  },
  buttons__container: {
    // backgroundColor: 'grey',
    flex: 0,
    flexDirection: 'row-reverse',
    marginBottom: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%'
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
  },
  switch__container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  switch__text: {
    marginLeft: 10,
    fontSize: 20,
  },
})