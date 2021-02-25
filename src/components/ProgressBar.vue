<template>
  <b-progress :max="max" height="3rem">
    <b-progress-bar :value="value">
      <span>
        <strong> {{ value }} / {{ max }}</strong>
      </span>
    </b-progress-bar>
  </b-progress>
</template>

<script>
  export default {
    data() {
      return {
        value: 8535,
        max: 16782
      }
    }
  }
</script>
