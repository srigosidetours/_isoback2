// SideNavbar.js
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      console.log("Buscando:", this.searchQuery);
      // Agrega la lógica de búsqueda según tus necesidades
    },
    login() {
      console.log("Iniciando sesión");
      // Agrega la lógica de inicio de sesión según tus necesidades
    },
  },
  template: `
      <nav>
        <a href="index.php?pagina=contacto">Contacto</a>
        <a href="index.php?pagina=indice">Index</a>
        <a href="index.php?pagina=acercade">Acerca de</a>
      </nav>
    `
};
