import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
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
  })

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scroll_view}>
      <View style={styles.app}>
        <Text>Datamon is the future bitches</Text>
        {cards.map((card) => (
          <ProjectCard
          key={card.id}
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
