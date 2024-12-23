// import React from 'react';
// import { View, Text, Image, TouchableOpacity } from 'react-native';

// export default function ItemCard({ title, description, image, onClick }) {
//   return (
//     <View style={{ marginBottom: 20, borderWidth: 1, padding: 10 }}>
//       <Image source={{ uri: image }} style={{ height: 100, width: 100 }} />
//       <Text>{title}</Text>
//       <Text>{description}</Text>
//       <TouchableOpacity onPress={onClick}>
//         <Text>Click to Count</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ItemCard({ title, description, image, onClick }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onClick}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  details: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
