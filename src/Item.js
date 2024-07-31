import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity } from 'react-native';

const Item = ({ titulo, descripcion, img }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.item}>
          <Image style={styles.img} source={img} />
          <View style={styles.textContainer}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.descripcion}>{descripcion}</Text>
          </View>
        </View>
      </TouchableOpacity>
      
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalContainer} onPress={() => setModalVisible(false)}>
          <View style={styles.modalView}>
            <Image style={styles.expandedImg} source={img} />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ADD8E6",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
  },
  textContainer: {
    marginLeft: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  descripcion: {
    fontSize: 14,
    color: "#666",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  expandedImg: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});

export default Item;
