import React, { createContext, useEffect, useState } from 'react';
import { UserResponse, User } from '../types/User';
import { USERS_MUTATIONS } from '../GraphQL/AuthMutations';
import { useMutation } from '@apollo/client';

interface AuthContextData {
  signed: boolean
  user: User | null
  token: string | null
  logIn(email: string, senha: string): Promise<void>
  // logout(): Promise<void>
}

type Props = {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: Props): React.ReactElement {

  const [user, setUser] = useState<User | null>(() => {

    const userString = localStorage.getItem('user')

    if (userString) {
      return JSON.parse(userString)
    }

    return null
  })

  const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
  const [authenticate , {data ,error}] = useMutation(USERS_MUTATIONS);

  const logIn = async (email: string, senha: string) => {

    let response: any


    authenticate({
        variables: {
          email: email,
          password: senha
        }
    })

    // setUser(data);

  };

  useEffect(() => {
    if(data === undefined){
      console.log("Não existe");
    }else{
      console.log(data.authenticate.user);
    };
  } , [data]);

    /*try {
      response = await authApi
        .post<UserResponse>('login/', {
          email,
          password: senha,
        })
        .then(({ data, status }) => {
          const obj = { data, status }
          return obj
        })
    } catch (error) {
      throw new Error(`Erro ao fazer login, email ou senha incorretos... \nLog: ${error}`)
    }

    if (response && response.status === 200) {
      localStorage.setItem('user', JSON.stringify(response.data.user))
      localStorage.setItem('token', response.data.token)

      setUser(() => {
        const userString = localStorage.getItem('user')

        if (userString) {
          return JSON.parse(userString)
        }

        return null
      })

      setToken(localStorage.getItem('token'))
    } */
  

  /*const logout = async () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setUser(null)
    setToken(null)

    try {
      await authApi.post(
        'logout/',
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )

    } catch (error) {
      throw new Error(`Erro ao fazer logout... \nLog: ${error}`)
    }
  } */

  return (
    <AuthContext.Provider value={{ signed: !!user, user, token, logIn /*, logout*/ }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;