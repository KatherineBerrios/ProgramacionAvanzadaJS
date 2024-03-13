// función para representar objetos de animales
class Animal {
  // Método constructor
  constructor(nombre, edad, img, comentarios, sonido) {
    // Propiedades privadas utilizando this
    this.nombre = nombre;
    this.edad = edad;
    this.img = img;
    this.comentarios = comentarios;
    this.sonido = sonido;
  }

  // Método de acceso a las propiedades
  get Nombre() {
    return this.getNombre();
  }

  get Edad() {
    return this.getEdad();
  }

  get Img() {
    return this.getImg();
  }

  get Comentarios() {
    return this.getComentarios();
  }

  get Sonido() {
    return this.getSonido();
  }
}

  export default Animal; // Exporta la clase Animal para que pueda ser utilizada en otros módulos.

