import Animal from "./Animal.js"; // Importa la clase Animal desde el archivo Animal.js

const audioPlayer = document.getElementById("player"); // Obtiene el elemento de audio del documento HTML

//la clase Leon es hija de Animal
class Leon extends Animal {
constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Rugir() {
    console.log(this.getSonido()); // Imprime el sonido del león en la consola.
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // Establece la ruta del archivo de sonido del león.
    audioPlayer.play(); // Reproduce el sonido del león.
  }
}

//la clase Lobo es hija de Animal
class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Aullar() {
    console.log(this.getSonido()); // Imprime el sonido del lobo en la consola.
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // Establece la ruta del archivo de sonido del lobo.
    audioPlayer.play(); // Reproduce el sonido del lobo.
  }
}

//la clase Oso es hija de Animal
class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }
  Gruñir() {
    console.log(this.getSonido()); // Imprime el sonido del oso en la consola.
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // Establece la ruta del archivo de sonido del sos.
    audioPlayer.play(); // Reproduce el sonido del oso.
  }
}

//la clase Serpiente es hija de Animal
class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Sisear() {
    console.log(this.getSonido()); // Imprime el sonido de la serpiente en la consola.
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // Establece la ruta del archivo de sonido de la serpiente.
    audioPlayer.play(); // Reproduce el sonido de la serpiente.
  }
}

//la clase Aguila es hija de Animal
class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Chillar() {
    console.log(this.getSonido()); // Imprime el sonido del aguila en la consola.
    audioPlayer.src = `assets/sounds/${this.getSonido()}`; // Establece la ruta del archivo de sonido del aguila.
    audioPlayer.play(); // Reproduce el sonido del aguila.
  }
}

export {Leon, Lobo, Oso, Serpiente, Aguila};