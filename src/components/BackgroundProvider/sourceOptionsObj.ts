export const settingOptions = {
  autoPlay: true,
  background: {
    color: {
      value: "#fff",
    },
    image: "",
    position: "",
    repeat: "",
    size: "",
    opacity: 1,
  },
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  particles: {
    links: {
      enable: true,
      distance: 100,
      opacity: 0,
      color: "#000",
    },
    number: {
      value: 150,
    },
    move: {
      enable: true,
      random: true,
      speed: 1,
    },
    size: {
      value: 1,
    },
    opacity: {
      value: 0.2,
    },
    color: {
      value: "#000",
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        parallax: {
          enable: true,
          force: 30,
        },
        mode: "connect",
      },
    },
    modes: {
      connect: {
        links: {
          opacity: 0.11,
        },
        radius: 130,
        distance: 80,
      },
    },
  },

  fpsLimit: 60,

  detectRetina: true,
};