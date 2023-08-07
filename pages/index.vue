<script setup lang="ts">
const { user, signIn, signOut } = useAuth()

user.value?.role // Property 'role' does not exist on type '{ name?: string | null | undefined; email?: string | null | undefined; image?: string | null | undefined; }'./ Property 'role' does not exist on type '{ name?: string | null | undefined; email?: string | null | undefined; image?: string | null | undefined; }'.
</script>

<template>
  <div>
    <div>
      <button @click="signIn(`credentials`)">
        Sign In
      </button>
      <button @click="signOut()">
        Sign Out
      </button>
    </div>
    <div>
      <pre>{{ user }}</pre>
    </div>
  </div>
</template>