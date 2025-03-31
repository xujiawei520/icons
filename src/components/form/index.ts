import type {App} from 'vue'
import MyForm from './index.vue'

export default{
  install(app:App){
    app.component('MyForm',MyForm)
  }
}
