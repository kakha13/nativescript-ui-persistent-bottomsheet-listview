import Vue from 'nativescript-vue'
import App from './components/App'

import BottomSheetPlugin from '@nativescript-community/ui-persistent-bottomsheet/vue';
import { install } from '@nativescript-community/ui-persistent-bottomsheet';
install();
Vue.use(BottomSheetPlugin);

import { install as installGestures } from '@nativescript-community/gesturehandler';
installGestures();

new Vue({
  render: (h) => h('frame', [h(App)]),
}).$start()
