import axios from "axios";

import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import DetallesLibro from "./DetallesLibro";

const ListadoLibros = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item)}>
    <View style={{ padding: 20 }}>
      <Text>Titulo: {item.titulo}</Text>
      <Text>Autor: {item.autor}</Text>
      <Text>Precio: {item.precio}$</Text>
    </View>
  </TouchableOpacity>
);

const Listalibros = () => {
  const [data, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const ItemPresionado = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };
  const ItemEliminado = () => {
    if (selectedItem) {
      axios.delete(`http://localhost:5000/prueba-sergio-santurde-mota/us-central1/app/libreria/${selectedItem.id}`)
      .then(response => {
        console.log("Libro eliminado correctamente de la biblioteca");
        setModalVisible(false); 
      })
      .catch(error => {
        console.log("Error al eliminar el libro");
      })
    }
  };

  const ItemActualizado = (libroActualizado) => {
    setModalVisible(false)
    setItems(prevData => prevData.map(item => item.id === libroActualizado.id ? libroActualizado : item));
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/prueba-sergio-santurde-mota/us-central1/app/libreria"
      );
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  }; //ESTE PROBLEMA

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListadoLibros item={item} onPress={ItemPresionado} />
        )}
      />
      <DetallesLibro
        visible={modalVisible}
        onClose={closeModal}
        onDelete={ItemEliminado}
        onUpdate={ItemActualizado}
        item={selectedItem}
      />
    </View>
  );
};

export default Listalibros;
