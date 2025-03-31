import Container from "@/components/Container.vue"
import About from "@/views/About.vue"
import Home from "@/views/Home.vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Container,
      children: [
        {
          path: "/home",
          name: "home",
          meta: {
            title: "首页",
            icon: "house"
          },
          component: Home
        },
        {
          path: "/about",
          name: "about",
          meta: {
            title: "关于",
            icon: "plus"
          },
          component: About,
          children: [
            {
              path: "/about/1",
              name: "1",
              meta: {
                icon: "plus",
                title: "111111"
              },
              component: () => import("@/views/ChooseArea.vue")
            },
            {
              path: "/about/2",
              name: "2",
              meta: {
                icon: "plus",
                title: "22222"
              },
              component: () => import("@/views/ChooseIcon.vue")
            }
          ]
        },
        {
          path: "/",
          redirect: "/home"
        },
        {
          path: "/icon",
          name: "icon",
          meta: {
            title: "图标",
            icon: "star"
          },
          component: () => import("@/views/ChooseIcon.vue")
        },
        {
          path: "/area",
          name: "area",
          meta: {
            title: "省市联动",
            icon: "link"
          },
          component: () => import("@/views/ChooseArea.vue")
        },
        {
          path: "/trend",
          name: "trend",
          meta: {
            title: "提示",
            icon: "view"
          },
          component: () => import("@/views/ChooseTrend.vue")
        },
        {
          path: "/badge",
          name: "badge",
          meta: {
            title: "角标",
            icon: "hide"
          },
          component: () => import("@/views/Badge.vue")
        },
        {
          path: "/newmenu",
          name: "menu",
          meta: {
            title: "路由",
            icon: "open"
          },
          component: () => import("@/views/NewMenu.vue")
        },
        {
          path: "/progress",
          name: "progress",
          meta: {
            title: "进度条",
            icon: "crop"
          },
          component: () => import("@/views/Progress.vue")
        },
        {
          path: "/time",
          name: "time",
          meta: {
            title: "时间",
            icon: "tools"
          },
          component: () => import("@/views/ChooseTime.vue")
        },
        {
          path: "/date",
          name: "date",
          meta: {
            title: "日期",
            icon: "avatar"
          },
          component: () => import("@/views/ChooseDate.vue")
        },
        {
          path: "/selectarea",
          name: "selectarea",
          meta: {
            title: "城市选择",
            icon: "grid"
          },
          component: () => import("@/views/SelectArea.vue")
        },
        {
          path: "/form",
          name: "form",
          meta: {
            title: "表单",
            icon: "menu"
          },
          component: () => import("@/views/Form.vue")
        },
        {
          path: "/upload",
          name: "upload",
          meta: {
            title: "上传",
            icon: "list"
          },
          component: () => import("@/views/Myupload.vue")
        },
        {
          path: "/table",
          name: "table",
          meta: {
            title: "表格",
            icon: "film"
          },
          component: () => import("@/views/MyTable.vue")
        },
        {
          path: "/calendar",
          name: "calendar",
          meta: {
            title: "日历",
            icon: "mic"
          },
          component: () => import("@/views/Fullcalendar.vue")
        }
      ]
    }
  ]
})

export default router
