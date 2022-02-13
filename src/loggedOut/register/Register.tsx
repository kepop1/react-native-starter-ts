import axios from 'axios'
import React, { useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

import { REGISTER_URL, getRequestHeaders } from '../../api/config'
import { Button, TextButton, TextInput, Core, Font } from '../../lib'

import { ROUTE_LOGIN } from '../../navigation/constants'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { AuthStackParamList } from '../../navigation/AuthNavigator'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type RegisterFormValues = {
  firstName: string
  email: string
  password: string
}

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Register'
>

const initialValues = {
  firstName: '',
  email: '',
  password: '',
}

export const Register = () => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation<RegisterScreenNavigationProp>()
  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState('')

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues: initialValues,
  })

  const onSubmit: SubmitHandler<RegisterFormValues> = async ({
    firstName,
    email,
    password,
  }) => {
    setLoading(true)

    try {
      const headers = getRequestHeaders()

      const response = await axios.post(
        REGISTER_URL,
        {
          firstName,
          email,
          password,
        },
        { headers: headers },
      )

      if (response.status === 201) {
        navigation.navigate(ROUTE_LOGIN, { email })
      }

      return response
    } catch (error) {
      if (error?.data?.message) setApiError(`${error?.data.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <Text style={styles.header}>Register</Text>

      <Controller
        name="firstName"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            autoFocus
          />
        )}
      />
      {!!errors.firstName && (
        <Text style={styles.error}>This is required.</Text>
      )}

      <Controller
        name="email"
        control={control}
        rules={{ required: true, validate: value => /.+\@.+\..+/.test(value) }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            keyboardType="email-address"
            autoCorrect={false}
          />
        )}
      />
      {!!errors.email && <Text style={styles.error}>This is required.</Text>}

      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            secureTextEntry
          />
        )}
      />
      {!!errors.password && <Text style={styles.error}>This is required.</Text>}

      {!!apiError && <Text style={styles.error}>{apiError}</Text>}

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button onPress={handleSubmit(onSubmit)} label="Register" />
      )}

      <TextButton
        onPress={() => navigation.navigate(ROUTE_LOGIN)}
        label="Already have an account? Login!"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    ...Font.sizes.heading,
    ...Font.family.openSansBold,
    textAlign: 'center',
    marginVertical: Core.unit * 2,
  },
  error: {
    ...Font.sizes.small,
    ...Font.family.openSansBold,
    color: Core.color.vividBurgundy,
    padding: Core.unit / 2,
    marginHorizontal: Core.unit * 2,
    marginVertical: Core.unit / 2,
  },
})
