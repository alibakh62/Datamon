import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Card } from 'react-native-elements'

const styles = StyleSheet.create({
  card: {
    width: 350,
    borderRadius: 25,
  },
  name: {
    marginBottom: 2,
    marginLeft: 5,
    textAlign: 'left',
    fontSize: 24,
    fontFamily: "Roboto",
  },
  title: {
    textAlign: 'left',
    marginBottom: 15,
    marginLeft: 5,
    fontSize: 20,
    fontFamily: "Nunito",
  },
  description: {
    fontStyle: 'italic',
    marginLeft: 5,
    fontFamily: "Nunito",
  }
})

const ProjectCard = ({name, title, description}) => {
  return(
    <Card containerStyle={styles.card}>
      <Card.Title style={styles.name}>{name}</Card.Title>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
  </Card>
  )
}

export default ProjectCard