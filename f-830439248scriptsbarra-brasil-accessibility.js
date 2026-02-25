document.addEventListener("DOMContentLoaded", function () {
    const barraElement = document.getElementById("barra-brasil");
    if (barraElement) {
      const links = barraElement.querySelectorAll("a");
      links.forEach((link) => link.setAttribute("tabindex", "0"));
      const conteudoEscondido = barraElement.querySelector("div");
      if (conteudoEscondido){
        conteudoEscondido.remove();
      }
      
      const navElement = barraElement.querySelector("nav");
      if(navElement) {
        navElement.setAttribute("aria-label", "Barra de navegação do governo federal")
      }
      
    }
  });