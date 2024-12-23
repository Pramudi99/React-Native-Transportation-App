import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function FloatingButton({ count }) {
  return (
    <View style={{
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: 'blue',
      padding: 15,
      borderRadius: 50,
    }}>
      <TouchableOpacity>
        <Text style={{ color: 'white' }}>{count}</Text>
      </TouchableOpacity>
    </View>
  );
}

