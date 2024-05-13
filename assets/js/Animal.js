// Función para representar objetos de animales
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

  /// Método para obtener el nombre del animal
  get Nombre() {
    return this.getNombre();
  }

  // Método para obtener la edad del animal.
  get Edad() {
    return this.getEdad();
  }

  // Método para obtener la imagen del animal.
  get Img() {
    return this.getImg();
  }

  // Método para obtener los comentarios sobre el animal.
  get Comentarios() {
    return this.getComentarios();
  }

  // Método para obtener el sonido que emite el animal.
  get Sonido() {
    return this.getSonido();
  }
}

export default Animal; // Exporta la clase Animal para que pueda ser utilizada en otros módulos.
