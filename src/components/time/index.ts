import type {App} from 'vue'
import ChooseTime from './index.vue'

export default{
  install(app:App){
    app.component('ChooseTime',ChooseTime)
  }
}
