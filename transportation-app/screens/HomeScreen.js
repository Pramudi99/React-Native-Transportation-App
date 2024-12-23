// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Button, TextInput } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import ItemCard from '../components/ItemCard';
// import { useStore } from '../state/useStore';

// export default function HomeScreen() {
//   const { params } = useRoute();
//   const [items, setItems] = useState([]);
//   const { username } = params;
//   const { itemCount, incrementCount } = useStore(state => state);

//   useEffect(() => {
//     fetch('https://api.publicapis.org/entries')
//       .then(response => response.json())
//       .then(data => setItems(data.entries));
//   }, []);

//   return (
//     <View>
//       <Text>Welcome, {username}</Text>

//       <FlatList
//         data={items}
//         keyExtractor={item => item.API}
//         renderItem={({ item }) => (
//           <ItemCard
//             title={item.API}
//             description={item.Description}
//             image={item.Link}
//             onClick={incrementCount}
//           />
//         )}
//       />

//       <Button title="Add Item" onPress={() => {}} />
//       <Text>Item Click Count: {itemCount}</Text>
//     </View>
//   );
// }

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useStore } from '../state/useStore';
import ItemCard from '../components/ItemCard';

export default function HomeScreen() {
  const [items, setItems] = useState([]);
  const { itemCount, incrementCount } = useStore(state => state);

  useEffect(() => {
    // Fetch data using a CORS proxy
    fetch('https://cors-anywhere.herokuapp.com/https://api.publicapis.org/entries')
      .then(response => response.json())
      .then(data => setItems(data.entries))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <View>
      <Text>Welcome to Home Screen</Text>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ItemCard
            title={item.API}
            description={item.Description}
            image={item.Link}
            onClick={incrementCount}
          />
        )}
      />

      <Button title="Add Item" onPress={() => {}} />
      <Text>Item Click Count: {itemCount}</Text>
    </View>
  );
}


