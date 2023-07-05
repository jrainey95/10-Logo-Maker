class Shape {
  consturctor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}


class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="100, 10 200, 150 35, 160" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="80" y="60" width="100" height="50" fill="${this.color}" />`;
  }
}

module.exports = {Circle, Triangle, Square};