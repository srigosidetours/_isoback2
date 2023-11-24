// Importaciones de componentes
import PruebaComponent from "./components/PruebaComponent.js";
import SideNavComponent from "./components/SideNavComponent.js"; 
import SideTablaComponent from "./components/TablaComponent.js";//

// Inicializa las funciones createApp y createVuetify de Vue
const { createApp, ref } = Vue;
const { createVuetify } = Vuetify;

// Crea una instancia de Vuetify
const vuetify = createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      dark: {
        dark:true, 
        colors: {
          primary: "#880E4F", 
          secondary: "#C5CAE9", 
          background: "#263238", 
          surface: "#000000", 
          info: "#004D40", 
          error: "#D32F2F", 
          success: "#2E7D32", 
          warning: "#FF6F00" 
        }
      },
    },
  },
  locale:{
    locale: 'es',
    fallback: 'es'
  }
});

// Crea una aplicación Vue
const app = createApp({
  // Datos locales de la aplicación
  data() {
    const otros = ref(2);
    const patata_f = () => (otros.value = otros.value * 2);
    return {
      patata_f,
      hola: "Hola Mundo",
      patata: "xxxx",
      otros,
    };
  },
  // Plantilla de la aplicación, referenciada por el ID 'app-template'
  template: "#app-template",
});

// Registra los componentes
app.component("my-component", PruebaComponent);
app.component("sdt-nav", SideNavComponent);
app.component("sdt-tabla", SideTablaComponent);

// Utiliza el plugin Vuetify
// Monta la aplicación en el elemento con el ID 'app'
app.use(vuetify).mount("#app");

//Otros
document
  .querySelector(`#patata_x`)
  .addEventListener("click", () => console.log("1"));
