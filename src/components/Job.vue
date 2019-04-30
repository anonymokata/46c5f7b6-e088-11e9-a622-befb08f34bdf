<template>
  <div></div>
</template>

<script>
import moment from "../../node_modules/moment";

export default {
  name: "Job",
  data: function() {
    return {
      families: [
        {
          name: "The Millers",
          requestedStartTime: moment("17:00", "h:mma"),
          requestedEndTime: moment("17:00", "h:mma").add(11, "hours"),
          durations: [
            {
              startTime: moment("17:00", "h:mma"),
              endTime: moment("17:00", "h:mma").add(6, "hours"),
              hourlyRate: 15
            },
            {
              startTime: moment("17:00", "h:mma").add(6, "hours"),
              endTime: moment("17:00", "h:mma").add(11, "hours"),
              hourlyRate: 20
            }
          ]
        },
        {
          name: "The Adams",
          requestedStartTime: moment("17:00", "h:mma"),
          requestedEndTime: moment("17:00", "h:mma").add(11, "hours"),
          durations: [
            {
              startTime: moment("17:00", "h:mma"),
              endTime: moment("17:00", "h:mma").add(5, "hours"),
              hourlyRate: 12
            },
            {
              startTime: moment("17:00", "h:mma").add(5, "hours"),
              endTime: moment("17:00", "h:mma").add(7, "hours"),
              hourlyRate: 8
            },
            {
              startTime: moment("17:00", "h:mma").add(7, "hours"),
              endTime: moment("17:00", "h:mma").add(11, "hours"),
              hourlyRate: 16
            }
          ]
        },
        {
          name: "The Robinsons",
          requestedStartTime: moment("17:00", "h:mma"),
          requestedEndTime: moment("17:00", "h:mma").add(11, "hours"),
          durations: [
            {
              startTime: moment("17:00", "h:mma"),
              endTime: moment("17:00", "h:mma").add(4, "hours"),
              hourlyRate: 21
            },
            {
              startTime: moment("17:00", "h:mma").add(4, "hours"),
              endTime: moment("17:00", "h:mma").add(11, "hours"),
              hourlyRate: 15
            }
          ]
        }
      ]
    };
  },
  methods: {
    hasValidStartTime(startTime) {
      return startTime >= moment("17:00", "h:mma");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
