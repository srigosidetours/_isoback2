// SideNavbar.js
export default {
  data() {
    const pagina = Vue.ref("indice");
    const urlParams = new URLSearchParams(window.location.search);
    const paginaParam = urlParams.get("pagina");
    if (paginaParam && ["contacto", "acercade"].includes(paginaParam)) {
      pagina.value = paginaParam;
    }
    return {
      pagina,
    };
  },
  template: `
      <v-chip-group class="ml-6" filter mandatory v-model='pagina'>  
        <v-chip href="index.php?pagina=indice" value="indice" filter>Indice</v-chip>
        <v-chip href="index.php?pagina=contacto" value="contacto" filter>Contacto</v-chip>
        <v-chip href="index.php?pagina=acercade" value="acercade" filter>Acerca de</v-chip>
      </v-chip-group>
    `,
};
