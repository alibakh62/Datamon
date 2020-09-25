import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProjectCard from './components/ProjectCard'

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default function App() {
  return (
    <View style={styles.app}>
      <Text>Datamon is the future bitches</Text>
      <ProjectCard 
      name="Company A"
      title="Project B"
      description="This is a project focused on test A."/>
    </View>
  );
}
