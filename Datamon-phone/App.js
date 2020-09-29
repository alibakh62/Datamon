import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Button } from 'react-native'
import Constants from 'expo-constants';
import ProjectCard from './components/ProjectCard'
import db from './firebase'

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll_view: {
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  }
})

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
        {cards.map((card, index) => (
          <ProjectCard
          key={card.project_id}
          name="Company A"
          title={card.project_name}
          description={card.project_description}
          />
        ))}
        <ProjectCard 
        name="Company A"
        title="Project B"
        description="This is a project focused on test A."/>
        <ProjectCard 
        name="Company A"
        title="Project B"
        description="This is a project focused on test A."/>
        <ProjectCard 
        name="Company A"
        title="Project B"
        description="This is a project focused on test A."/>
        <ProjectCard 
        name="Company A"
        title="Project B"
        description="This is a project focused on test A."/>
        <ProjectCard 
        name="Company A"
        title="Project B"
        description="This is a project focused on test A."/>
        <ProjectCard 
        name="Company A"
        title="Project B"
        description="This is a project focused on test A."/>
        <ProjectCard 
        name="Company A"
        title="Project B"
        description="This is a project focused on test A."/>
        <ProjectCard 
        name="Company A"
        title="Project B"
        description="This is a project focused on test A."/>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}
