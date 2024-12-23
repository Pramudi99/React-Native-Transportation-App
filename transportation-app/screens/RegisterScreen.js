// import React from 'react';
// import { TextInput, Button, View, Text } from 'react-native';
// import { useForm, Controller } from 'react-hook-form';
// import { useNavigation } from '@react-navigation/native';

// export default function RegisterScreen() {
//   const { control, handleSubmit, formState: { errors } } = useForm();
//   const navigation = useNavigation();

//   const onSubmit = (data) => {
//     navigation.navigate('Login');
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

//       <Button title="Register" onPress={handleSubmit(onSubmit)} />
//     </View>
//   );
// }

import React from 'react';
import { TextInput, Button, View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const navigation = useNavigation();

  const onSubmit = (data) => {
    // Navigate to Login screen after successful registration
    navigation.navigate('Login');
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

      <Button title="Register" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

