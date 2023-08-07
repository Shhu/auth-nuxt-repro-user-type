import { resolve } from "node:path"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    cookie: resolve(__dirname, "node_modules/cookie")
  },
  modules: ["@hebilicious/authjs-nuxt"],
  runtimeConfig: {
    authJs: {
      secret: '1234' // You can generate one with `openssl rand -base64 32`
    },
    public: {
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The base URL is used for the Origin Check in prod only
        verifyClientOnEveryRequest: true // whether to hit the /auth/session endpoint on every client request
      }
    }
  },
  devtools: { enabled: true } 
})

