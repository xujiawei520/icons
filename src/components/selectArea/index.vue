<template>
  <el-popover
    placement="bottom-start"
    :width="500"
    trigger="click"
    @hide="hide"
    class="selectarea"
    v-model:visible="visible"
  >
    <template #reference>
      <div style="display: flex;" @click="change">
        <span>{{ cityName }}</span>
        <div class="icon" ref="icon">
          <el-icon-arrow-down></el-icon-arrow-down>
        </div>
      </div>
    </template>
    <div class="dialog">
      <el-row>
        <el-col :span="4">
          <el-radio-button label="按省份" value="按省份" v-model="radio1" @click="handleClickprovince" />
        </el-col>
        <el-col :span="4">
          <el-radio-button label="按城市" value="按城市" v-model="radio1" @click="handleClickcity" />
        </el-col>
        <el-col :span="14" :offset="2">
          <el-select v-model="selectVModel" placeholder="请选择城市" @change="changeCity" clearable filterable :filter-method="filterMethod">
            <el-option v-for="item in options" :key="item" :value="item.name" :label="item.name"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <div class="content" v-if="radio1 === '按城市'">
        <div class="btn">
          <el-button
            style="margin:2px 5px;"
            v-for="(item, index) in cities"
            :key="index"
            @click="scrollToLetter(index)"
          >
            {{ index }}
          </el-button>
        </div>
        <div class="con-wrap">
          <ul>
            <li v-for="(item, index) of cities" :key="index" style="margin-bottom: 10px;" :class="`${index}ref`">
              <el-row style="display: flex; align-items: center;">
                <el-col :span="2">
                  <span class="left" style="font-weight: bold;">{{ index }}:</span>
                </el-col>
                <el-col :span="22">
                  <span :class="`${index}ref`" v-for="item1 in item" :key="item1.id" style="margin: 3px;" @click="selectCity(item1.name)">{{ item1.name }}</span>
                </el-col>
              </el-row>
            </li>
          </ul>
        </div>
      </div>
      <div class="content" v-else>
        <div class="btn">
          <el-button size="small" v-for="(item, index) in province" :key="index" @click="selectProvince(index)">
            {{ index }}
          </el-button>
        </div>
        <div class="con-wrap">
          <ul>
            <li v-for="(item, index) in province" :key="index" style="margin:10px 0" :class="`${index}`">
              <el-row style="display: flex; align-items: center;">
                <el-col :span="2">
                  <span class="left" style="font-weight: bold;">{{ item.name }}:</span>
                </el-col>
                <el-col :span="22">
                  <span :class="`${index}ref`" v-for="(item1, index1) in item.cities" :key="index1" style="margin: 3px;" @click="selectCity(item1)">{{ item1 }}</span>
                </el-col>
              </el-row>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </el-popover>
</template>

<script setup lang="ts">
import type { PropType } from "vue"
import { onMounted, ref } from "vue"
// 接受的props值
const props = defineProps({
  cities: {
    type: Object as PropType<Record<string, any[]>>,
    default: () => ({})
  },
  province: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({})
  }

})
// 触发父组件的自定义事件
const emits = defineEmits(["selectCity"])
// 城市数据
let city: any
// 城市数据类型
interface Op {
  id?: number
  name?: string
  spell?: string
}
onMounted(() => {
  city = ref(Object.values(props.cities).flat(2))
})
// 控制popover的显示与隐藏
let visible = ref(false)
// 城市名称
let cityName = ref("请选择")
// 图标元素
let icon = ref()
// select的v-model值
let selectVModel = ref()
// 单选框值
const radio1 = ref("按城市")
// 下拉框选择的值
let options = ref<Op[]>([])
// 控制图标旋转
function change() {
  if (icon.value) {
    let currentTransform = getComputedStyle(icon.value).transform
    if (currentTransform === "none" || currentTransform === "matrix(1, 0, 0, 1, 0, 0)") {
      icon.value.style.transform = "rotate(180deg)"
    } else {
      icon.value.style.transform = "rotate(0deg)"
    }
  }
}
// 图标转到0度
function rotate0() {
  icon.value.style.transform = "rotate(0deg)"
}
// 隐藏popover
function hide() {
  rotate0()
}
// 选择按城市
function handleClickcity() {
  radio1.value = "按城市"
  console.log(radio1.value)
}
// 选择城市
function selectCity(city: string) {
  cityName.value = city
  visible.value = false
  emits("selectCity", city)
}
// 选择按省份
function handleClickprovince() {
  radio1.value = "按省份"
}
// 滚动到对应字母
function scrollToLetter(value: string) {
  let targetRef = document.querySelector(`.${value}ref`)
  if (targetRef) {
    targetRef.scrollIntoView({
      behavior: "smooth"
    })
  }
}
// 选择省份按钮并滚动到对应省份
function selectProvince(province: string) {
  let targetRef = document.querySelector(`.${province}`)
  if (targetRef) {
    targetRef.scrollIntoView({
      behavior: "smooth"
    })
  }
}
// 下拉框选择事件
function changeCity() {
  cityName.value = selectVModel.value
  emits("selectCity", selectVModel.value)
  if (!cityName.value) {
    cityName.value = "请选择"
  }
}
// 自定义过滤方法
function filterMethod(str: any) {
  if (str) {
    options.value = city.value.filter((item: any) => {
      return item.spell.includes(str) || item.name.includes(str)
    })
  } else {
    options.value = city.value
  }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  transition: transform 0.3s;
  cursor: pointer;
  margin-top: 3px;
}
.dialog {
  width: 100%;
}
.content {
  width: 100%;
  margin-top: 10px;
}
.con-wrap {
  margin-top: 20px;
  width: 100%;
  height: 200px;
  overflow: auto;
}
</style>
