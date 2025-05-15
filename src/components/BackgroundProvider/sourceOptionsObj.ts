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
      distance: 10,
      opacity: 1,
      color: "#000",
    },
    number: {
      value: 190,
    },
    move: {
      enable: true,
      random: true,
      speed: 1,
    },
    size: {
      value: 0.10,
    },
    opacity: {
      value: 1,
    },
    color: {
      value: "#f97316",
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        parallax: {
          enable: true,
          force: 80,
        },
        mode: "connect",
      },
    },
    modes: {
      connect: {
        links: {
          opacity: 0.09,
        },
        radius: 130,
        distance: 80,
      },
    },
  },

  fpsLimit: 60,

  detectRetina: true,
};