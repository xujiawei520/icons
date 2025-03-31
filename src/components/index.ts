import type { App } from "vue"
import Area from "@/components/area/index.ts"
import Fullcalendar from "@/components/calendar/index.ts"
import ChooseDate from "@/components/date/index.ts"
import MyForm from "@/components/form/index.ts"
import Icon from "@/components/icons/index.ts"
import MenuItem from "@/components/newmenu/index.ts"
import Notification from "@/components/notification/index.ts"
import Mprogress from "@/components/progress/index.ts"
import SelectArea from "@/components/selectArea/index.ts"
import MyTable from "@/components/table/index.ts"
import ChooseTime from "@/components/time/index.ts"
import Trend from "@/components/trend/index.ts"
import MyUpload from "@/components/upload/index.ts"

const components = [
  Area,
  Icon,
  Trend,
  Notification,
  MenuItem,
  Mprogress,
  ChooseTime,
  ChooseDate,
  SelectArea,
  MyForm,
  MyUpload,
  MyTable,
  Fullcalendar
]
export default {
  install(app: App) {
    components.forEach((item) => {
      app.use(item)
    })
  }
}
