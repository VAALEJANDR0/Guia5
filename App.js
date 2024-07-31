import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from "react-native";
import Header from './src/Header';
import Item from './src/Item';
import datosAutomoviles from './autos.json';
import datosComida from './comida.json';

export default function App() {
  const [DATA, setDATA] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('automoviles');

  useEffect(() => {
    let datosTransformados;
    if (selectedCategory === 'automoviles') {
      datosTransformados = datosAutomoviles.map(item => ({
        ...item,
        src: getImageSource(item.src)
      }));
    } else {
      datosTransformados = datosComida.map(item => ({
        ...item,
        src: getImageSource(item.src)
      }));
    }
    setDATA(datosTransformados);
  }, [selectedCategory]);

  const getImageSource = (imgPath) => {
    switch (imgPath) {
      case './src/img/toyototo.jpeg':
        return require('./src/img/toyototo.jpeg');
      case './src/img/mazdita.jpg':
        return require('./src/img/mazdita.jpg');
      case './src/img/mitshubishito.jpeg':
        return require('./src/img/mitshubishito.jpeg');
      case './src/img/ferrari.webp':
        return require('./src/img/ferrari.webp');
      case './src/img/lamborghini.jpg':
        return require('./src/img/lamborghini.jpg');
      case './src/img/tesla.jpeg':
        return require('./src/img/tesla.jpeg');
      case './src/img/bmw.jpg':
        return require('./src/img/bmw.jpg');
      case './src/img/audi.jpeg':
        return require('./src/img/audi.jpeg');
      case './src/img/mercedes.jpeg':
        return require('./src/img/mercedes.jpeg');
      case './src/img/pupusas.jpeg':
        return require('./src/img/pupusas.jpeg');
      case './src/img/tamal.jpg':
        return require('./src/img/tamal.jpg');
      case './src/img/yuca.jpeg':
        return require('./src/img/yuca.jpeg');
      default:
        return null;
    }
  };

  const renderItem = ({ item }) => (
    <Item titulo={item.titulo} descripcion={item.descripcion} img={item.src} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
