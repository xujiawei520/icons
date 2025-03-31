<template>
  <Fullcalendar :options="options"></Fullcalendar>
</template>

<script setup lang="ts">
import type { DateClickArg } from "@fullcalendar/interaction"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"
import dayjs, { Dayjs } from "dayjs"
import { ref } from "vue"

const options = ref({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: "dayGridMonth",
  headerToolbar: {
    left: "prev,next today nextYear,prevYear",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay"
  },
  buttonText: {
    today: "今天",
    next: "下月",
    nextYear: "下年",
    prev: "上月",
    prevYear: "上年",
    week: "周",
    day: "日",
    month: "月"
  },
  // 可选择
  selectable: true,
  locale: "zh-cn", // 设置语言为中文
  // 可拖拽
  editable: true,
  // 选择事件
  select: (info: any) => {
    console.log(`你选择了: ${info.startStr} 到 ${info.endStr}`)
  },
  // 事件列表
  events: [
    { title: "会议", start: "2025-03-20 08:00", end: "2025-03-20 12:00" }
  ],
  // 事件拖动结束后触发
  eventDrop: (info: any) => {
    let date = dayjs(info.event.start)
    // 事件拖动结束后的回调函数
    console.log(`${info.event.title} 被移动到了 ${date.format("YYYY-MM-DD HH:mm:ss")}`)
    // 这里可以添加更新事件数据的逻辑，比如发送请求到后端更新数据库
  },
  // 鼠标移入事件中触发
  eventMouseEnter: (info: any) => {
    let date = dayjs(info.event.start)
    console.log(info, `你在 ${date.format("YYYY-MM-DD HH:mm:ss")}有一个${info.event.title}`)
  },
  // 日期点击
  dateClick: (info: DateClickArg) => {
    console.log(info)

    options.value.events.push({
      title: "新增事件",
      start: info.dateStr,
      end: info.dateStr
    })
  },
  // 自定义渲染内容
  eventContent: (arg: any) => {
    return {
      html: `<div>${arg.timeText}<br>${arg.event.title}</div>`
    }
  }
})
</script>

<style scoped>
</style>
