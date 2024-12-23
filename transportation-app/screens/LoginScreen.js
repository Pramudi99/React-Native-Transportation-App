// import React, { useState } from 'react';
// import { TextInput, Button, View, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useForm, Controller } from 'react-hook-form';

// export default function LoginScreen() {
//   const { control, handleSubmit, formState: { errors } } = useForm();
//   const navigation = useNavigation();
//   const [username, setUsername] = useState('');

//   const onSubmit = (data) => {
//     setUsername(data.username);
//     navigation.navigate('Home', { username: data.username });
//   };

//   return (
//     <View>
//       <Controller
//         control={control}
//         render={({ field: { onChange, onBlur, value } }) => (
//           <TextInput
//             placeholder="Username"
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//           />
//         )}
//         name="username"
//         rules={{ required: 'Username is required' }}
//         defaultValue=""
//       />
//       {errors.username && <Text>{errors.username.message}</Text>}

//       <Button title="Login" onPress={handleSubmit(onSubmit)} />
//     </View>
//   );
// }

import React, { useState } from 'react';
import { TextInput, Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

export default function LoginScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigation = useNavigation();

  const onSubmit = (data) => {
    // Navigate to Home screen with the username passed as a parameter
    navigation.navigate('Home', { username: data.username });
  };

  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
        rules={{ required: 'Username is required' }}
        defaultValue=""
      />
      {errors.username && <Text>{errors.username.message}</Text>}

      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
