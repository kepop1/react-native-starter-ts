import axios from 'axios'
import React, { useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

import { LOGIN_URL, getRequestHeaders } from '../../api/config'
import { Button, TextButton, TextInput, Core, Font } from '../../lib'

import { ROUTE_REGISTER } from '../../navigation/constants'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import type { AuthStackParamList } from '../../navigation/AuthNavigator'
import { useAuth } from '../../stores/auth'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type LoginFormValues = {
  email: string
  password: string
}

type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>

type RouteProps = RouteProp<AuthStackParamList, 'Login'>

export const Login = () => {
  const insets = useSafeAreaInsets()
  const navigation = useNavigation<LoginScreenNavigationProp>()
  const route = useRoute<RouteProps>()
  const { setAuthToken } = useAuth()

  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState('')

  const registeredEmail = route.params?.email

  const initialValues = {
    email: registeredEmail || '',
    password: '',
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: initialValues,
  })

  const onSubmit: SubmitHandler<LoginFormValues> = async ({
    email,
    password,
  }) => {
    setLoading(true)

    try {
      const headers = getRequestHeaders()

      const response = await axios.post(
        LOGIN_URL,
        {
          email,
          password,
        },
        { headers: headers },
      )

      if (response.status === 200) {
        // This will trigger te authToken conditional and switch to the AppNavigator.
        setAuthToken(response.data.token)
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
      <Text style={styles.header}>Login</Text>

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
            autoFocus
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
        <Button onPress={handleSubmit(onSubmit)} label="Login" />
      )}

      <TextButton
        onPress={() => navigation.navigate(ROUTE_REGISTER)}
        label="Register"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
