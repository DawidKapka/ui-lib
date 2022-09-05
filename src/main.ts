import { createApp } from 'vue'
import App from './App.vue'
import Button from "@/components/atomic/button/Button.vue";

const app = createApp(App)
app.mount('#app');

app.component('Button', Button)

