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
    },
    validateStartTime: function(requestedStartTime) {
      if (requestedStartTime.isSameOrAfter(this.availableStartTime)) {
        return "Start time is valid.";
      } else {
        if (requestedStartTime.isSameOrBefore(this.availableStartTime)) {
          return "Babysitter is not allowed start yet.";
        }
      }
    },
    validateEndTime: function(requestedEndTime) {
      if (requestedEndTime.isSameOrBefore(this.availableEndTime)) {
        return "End time is valid.";
      } else {
        if (requestedEndTime.isSameOrAfter(this.availableEndTime)) {
          return "Babysitter is not allowed to work that late.";
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
