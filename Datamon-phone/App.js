import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Button } from 'react-native'
import Constants from 'expo-constants';
import ProjectCard from './components/ProjectCard'
import NavBar from './components/NavBar'
import db from './firebase'

export default function App() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    // app component will run once when it loads
    db.collection("user_projects").onSnapshot(snapshot => {
      setCards(snapshot.docs.map(doc => doc.data()))
    })

    // db.collection("user_projects").onSnapshot(snapshot => {
    //   snapshot.docs.forEach(doc => {
    //     const data = {doc.id, ...doc.data()}
    //     setCards(data)
    //   })
    // })

  //   db.collection("user_projects")
  //   .get()
  //   .then(function(querySnapshot) {
  //       querySnapshot.forEach(function(doc) {
  //           // doc.data() is never undefined for query doc snapshots
  //           // console.log(doc.id, " => ", doc.data());
  //           const data = doc.data()
  //           data["id"] = doc.id
  //           setCards(cards => [...cards, data])
  //           console.log(cards)
  //       });
  //   })
  //   .catch(function(error) {
  //       console.log("Error getting documents: ", error);
  //   });

  })

  const printStuff = () => {
    console.log("====== Show data ======")
    console.log(cards)
  }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scroll_view}>
      <View style={styles.app}>
        <Button title="Show data" onPress={printStuff}/>
        <Text>Datamon is the future bitches</Text>
        {cards.map(card => (
          <ProjectCard
          key={card.project_id}
          name={card.user_name}
          title={card.project_name}
          description={card.project_description}
          />
        ))}
      </View>
    </ScrollView>
    <NavBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginTop: Constants.statusBarHeight,
  },
  scroll_view: {
    marginHorizontal: 20,
  },
  app: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
})
