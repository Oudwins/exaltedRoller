class Color {
  constructor(
    colors = [
      {
        // aqua
        hex: '#00ffff',
        text: 'black',
        user: null,
      },
      {
        // brown
        hex: '#a52a2a',
        text: 'black',
        user: null,
      },
      {
        // dark grey
        hex: '#a9a9a9',
        text: 'black',
        user: null,
      },
      {
        // Lime
        hex: '#bfff00',
        text: 'black',
        user: null,
      },
      {
        // indigo
        hex: '#4b0082',
        text: 'black',
        user: null,
      },
      {
        // olive
        hex: '#808000',
        text: 'black',
        user: null,
      },
      {
        // Navy
        hex: '#000080',
        text: 'black',
        user: null,
      },
      {
        // orange
        hex: '#ffa500',
        text: 'black',
        user: null,
      },
    ]
  ) {
    this.colors = colors;
  }

  assignMe(id) {
    if (!id) return -1;
    const idx = this.colors.findIndex((el) => {
      if (el.user) return false;
      el.user = id;
      return true;
    });
    console.log(this.colors);
    return {
      hex: this.colors[idx].hex,
      text: this.colors[idx].text,
    };
  }

  free(id) {
    if (!id) return -1;
    this.colors.forEach((el) => {
      if (el.user === id) {
        el.user = null;
      }
    });
    console.log(this.colors);
  }
}

module.exports = new Color();
