import './index.css'
import { StoreManager } from './stores/store'

(async () => {
  StoreManager.dispatch('$page.redirect(content)')
})()
