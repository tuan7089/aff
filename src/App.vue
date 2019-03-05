<template>
  <div id="app">
    <nav-header />
    <div class="body">
      <router-view/>
    </div>
  </div>
</template>

<script>
import '@/assets/css/app-style.scss'
import NavHeader from '@/components/NavHeader'

export default {
  name: 'App',
  components: {
    'nav-header': NavHeader
  }
}
</script>
