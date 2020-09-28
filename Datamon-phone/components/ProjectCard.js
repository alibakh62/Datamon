import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-elements'
import { AppLoading } from 'expo';
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light,
  Nunito_300Light_Italic,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
  Nunito_600SemiBold,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black,
  Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito'

import ProjectSignup from './ProjectSignup'

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DCE3E3',
    width: 350,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    marginBottom: 2,
    marginLeft: 5,
    textAlign: 'left',
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
  },
  title: {
    textAlign: 'left',
    marginBottom: 15,
    marginLeft: 5,
    fontSize: 20,
    fontFamily: 'Nunito_400Regular',
  },
  description: {
    fontStyle: 'italic',
    marginLeft: 5,
    fontFamily: "Nunito_300Light_Italic",
  }
})

const ProjectCard = ({name, title, description}) => {

  const fontsLoaded = useFonts({
    Nunito_200ExtraLight,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light,
    Nunito_300Light_Italic,
    Nunito_400Regular,
    Nunito_400Regular_Italic,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black,
    Nunito_900Black_Italic,
  })

  const [expandProject, setExpandProject] = useState(false)

  const expandCard = () => {
    setExpandProject(!expandProject)
  }

  if (!fontsLoaded) {
    <AppLoading />
  } else {
    return(
      <TouchableOpacity onPress={expandCard}>
        <ProjectSignup 
        name={name}
        title={title}
        description={description}
        modalVisible={expandProject}
        />
        <Card containerStyle={styles.card}>
          <Card.Title style={styles.name}>{name}</Card.Title>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </Card>
      </TouchableOpacity>
    )
  }
}

export default ProjectCard