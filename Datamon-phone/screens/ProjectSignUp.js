import React, { useState, useEffect } from 'react'
import { View, 
  Text,
  Switch, 
  TouchableOpacity,
  FlatList,
  StyleSheet } from 'react-native'

import { CheckBox, Divider } from 'react-native-elements'

import NavBar from '../components/NavBar'
import db from '../firebase'

import { useStateValue } from '../StateProvider'

export default function ProjectSignUp({ route, navigation }) {

  const {projectId, name, title} = route.params
  const [{ user }, dispatch] = useStateValue()
  var [dataItems, setDataItems] = useState([])
  const [LocationServices, setLocationServices] = useState(false)
  const [AppUsage, setAppUsage] = useState(false)
  const [Action, setAction] = useState(false)

  const switchLocationServices = value => {
    console.log(`value Loc services: ${ value }`)
    setLocationServices(!LocationServices)
  }

  const switchAppUsage = value => {
    console.log(`value app usage: ${ value }`)
    setAppUsage(!AppUsage)
  }

  useEffect(() => {
    console.log(`useEffect Location Services: ${ LocationServices }`)
    if (LocationServices) {
      if (!dataItems.includes('Location Services')) {
        setDataItems(dataItems.concat('Location Services'))
      }
    } else {
      console.log('deleting loc services')
      if (dataItems.includes('Location Services')) {
        var index1 = dataItems.indexOf('Location Services')
        console.log(`index of loc services: ${ index1 }`)
        if (dataItems.length === 1) {
          setDataItems([])
        } else {
          if (index1 > -1) {
            setDataItems(dataItems.filter((e) => (e !== 'Location Services')))
          }
        }
      }
    }
  }, [LocationServices])

  useEffect(() => {
    console.log(`useEffect App Usage: ${ AppUsage }`)
    if (AppUsage) {
      if (!dataItems.includes('App Usage')) {
        setDataItems(dataItems.concat('App Usage'))
      }
    } else {
      console.log('deleting app usage')
      if (dataItems.includes('App Usage')) {
        var index2 = dataItems.indexOf('App Usage')
        console.log(`index of app usage: ${ index2 }`)
        if (dataItems.length === 1) {
          setDataItems([])
        } else {
          if (index2 > -1) {
            setDataItems(dataItems.filter((e) => (e !== 'App Usage')))
          }
        }
      }
    }
  }, [AppUsage])

  const back = () => {
    navigation.navigate("Home")
    // navigation.goBack()
  }

  const join = () => {
    // console.log('JOIN')
    console.log(`data items getting stored in DB: ${ dataItems.toString() }`)
    console.log(`project id: ${ projectId['projectId'].toString() }`)
    db.collection('providers_joined_projects').add({
      data_items: dataItems,
      date_joined: Date.now(),
      project_id: projectId['projectId'].toString(),
      user_id: "testUser"  //user.email,  #TODO: should come from user account info
    })
    .then(function() {
      console.log("Document successfully written!")
      // console.log(`user ${ user.displayName } joined project id: ${ projectId }`)
    })
    .catch(function(error) {
      console.error("Error writing document: ", error)
    })
  }

  return (
    <View style={styles.container__signup}>
      <View style={styles.contents}>
      <Text style={styles.companyname}>{name.name}</Text>
      <Text style={styles.projectname}>{title.title}</Text>
        <Divider style={styles.divider} />
      </View>
      <View style={styles.checkboxes}>
        <Text style={styles.dataitems}>Data Items:</Text>
        <View style={styles.switch__container}>
          <Switch 
            onValueChange={switchLocationServices}
            value={LocationServices}
          />
          <Text style={styles.switch__text}>Location Services</Text>
        </View>
        <View style={styles.switch__container}>
          <Switch 
            onValueChange={switchAppUsage}
            value={AppUsage}
          />
          <Text style={styles.switch__text}>App Usage</Text>
        </View>
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
  flatlist: {
    flex: 0,
    paddingTop: 22
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
})