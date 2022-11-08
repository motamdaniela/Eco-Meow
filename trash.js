let lixos;

export function init() {
    lixos = localStorage.niveis ? JSON.parse(localStorage.lixos) : [];
  }

export function add(src, x, y) {
    if (lixos.some((lixo) => lixo.x === x && lixo.y === y)) {
      throw Error(`trash already loaded in that spot!`);
    } else {
      lixos.push(new Level(src, x, y));
      localStorage.setItem("lixos", JSON.stringify(lixos));
    }
  }

export function remove(nome) {
  niveis = niveis.filter((lixo) => lixo.src !== nome);
  localStorage.setItem("niveis", JSON.stringify(niveis));
}

export function getLevels() {
    return niveis;
  }

class Level{
    name=''
  
    constructor(name) {
      this.name = name;
    }
  }