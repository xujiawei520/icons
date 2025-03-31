import Trend from './index.vue'
import {type App} from 'vue'

export default {
  install(app:App){
    app.component('Trend',Trend)
  }
}
