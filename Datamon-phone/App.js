import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import ProjectCard from './components/ProjectCard'
import db from './firebase'

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    <View style={styles.app}>
      <Text>Datamon is the future bitches</Text>
      {cards.map(({project_name, project_description}) => (
        <ProjectCard
        name="Company A"
        title={project_name}
        description={project_description}
        />
      ))}
      <ProjectCard 
      name="Company A"
      title="Project B"
      description="This is a project focused on test A."/>
    </View>
  );
}
