import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Header = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.button} onPress={() => setSelectedCategory('automoviles')}>
        <Text style={selectedCategory === 'automoviles' ? styles.selectedText : styles.text}>Automóviles</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setSelectedCategory('comida')}>
        <Text style={selectedCategory === 'comida' ? styles.selectedText : styles.text}>Comida</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'black',
  },
  button: {
    margin: 10,
  },
  text: {
    fontSize: 18,
    color: 'gray',
  },
  selectedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Header;
