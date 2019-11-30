<template>
  <div>
    <v-app v-if="$route.path != '/view'">
      <router-view/>
    </v-app>
    <div v-else>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
