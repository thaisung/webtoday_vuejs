import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import './assets/tailwind.css'

import { createI18n } from "vue-i18n";
import messages from "@intlify/unplugin-vue-i18n/messages";

// import VueFlags from "@growthbunker/vueflags";
import CountryFlag from 'vue-country-flag-next';

import VueKinesis from "vue-kinesis";


// import axios from 'axios'
import VueCookies from 'vue-cookies';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {faMagnifyingGlass,faChevronDown,faBarsStaggered,faXmark,faChevronRight,faChevronLeft,faCircle,faC,} from '@fortawesome/free-solid-svg-icons';

import {faFacebook,faSquareFacebook,faTelegram,faTiktok,faPython,faJava,faPhp,faJs,faHtml5,faCss3,} from '@fortawesome/free-brands-svg-icons'

import {faMoon,faSun,} from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(
    faMagnifyingGlass,faFacebook,faMoon,faSun,faChevronDown,faSquareFacebook,faTelegram,faTiktok,faBarsStaggered,faXmark,faChevronRight,faChevronLeft,faCircle,faPython,faJava,faPhp,faJs,faHtml5,faCss3,faC,
    
    )

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia());

app.use(router);

// app.use(VueFlags);
app.component('country-flag', CountryFlag);


const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'vi',
    availableLocales: ["vi", "en"],
    messages,
    fallbackLocale: 'vi',
 })

app.use(i18n);
// app.use(axios);

app.use(VueCookies);

app.use(VueKinesis);

app.mount("#app");