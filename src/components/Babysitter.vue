<template>
  <div></div>
</template>

<script>
import moment from "../../node_modules/moment";

export default {
  name: "Babysitter",
  data: function() {
    return {
      name: "Callen",
      availableStartTime: moment("17:00", "h:mma"),
      availableEndTime: moment("17:00", "h:mma").add(11, "hours")
    };
  },
  methods: {
    getName: function() {
      return this.name;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
