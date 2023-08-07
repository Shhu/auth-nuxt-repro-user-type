import Credentials from "@auth/core/providers/credentials"
import type { AuthConfig } from "@auth/core/types"
import { NuxtAuthHandler } from "#auth"

const runtimeConfig = useRuntimeConfig()

export const authOptions: AuthConfig = {
  secret: runtimeConfig.authJs.secret,
  providers: [
    Credentials({
      name: "credentials",
     
      async authorize (credentials) {
        return { id: "1234", image: 'test', role: 'admin' }
      }
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token = { id: user.id, ...token }
      }
      return Promise.resolve(token)
    },
    async session ({ session, token }) {
      /**
        * index.d.ts works here and augment the user type
       */
      session.user = { id: "1234", image: 'test', role: 'admin' }
      return Promise.resolve(session)
    },
  },
}

export default NuxtAuthHandler(authOptions, runtimeConfig)