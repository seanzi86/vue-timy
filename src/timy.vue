<template>
  <div>
    <span class="timy">{{ timeFrom }}</span>
  </div>
</template>

<script>
import formatDuaration from "./formatDuration";
import { timyConfig } from "./main";

export default {
  name: "timy",
  props: {
    date: {
      type: Date,
      required: true
    }
  },
  data() {
    return {
      timeFrom: null
    };
  },
  created() {
    this.calculateTimeFrom();
    setInterval(this.calculateTimeFrom, 5000);
  },
  destroyed() {
    clearInterval(this.calculateTimeFrom);
  },
  methods: {
    calculateTimeFrom() {
      var ms = new Date() - this.date;
      this.timeFrom = formatDuaration(ms, timyConfig);
    }
  }
};
</script>
