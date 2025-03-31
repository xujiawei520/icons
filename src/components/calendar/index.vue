<template>
  <FullCalendar :options="options1" />
</template>

<script setup lang="ts">
import FullCalendar from "@fullcalendar/vue3"

const props = defineProps({
  // options: {
  //   type: Object,
  //   default: () => {
  //     return {
  //       initialView: {
  //         type: String,
  //         default: "dayGridMonth"
  //       },
  //       headerToolbar: {
  //         type: Object,
  //         default: () => {
  //           return {
  //             left: "prev,next today nextYear,prevYear",
  //             center: "title",
  //             right: "dayGridMonth,timeGridWeek,timeGridDay"
  //           }
  //         }
  //       },
  //       buttonText: {
  //         type: Object,
  //         default: () => {
  //           return {
  //             today: "今天",
  //             next: "下月",
  //             nextYear: "下年",
  //             prev: "上月",
  //             prevYear: "上年",
  //             week: "周",
  //             day: "日",
  //             month: "月"
  //           }
  //         }
  //       },
  //       plugins: {
  //         type: Array,
  //         default: () => {
  //           return [dayGridPlugin, timeGridPlugin, interactionPlugin]
  //         }
  //       },
  //       selectable: {
  //         type: Boolean,
  //         default: true
  //       }
  //     }
  //   }
  // },
  options1: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped>
</style>
