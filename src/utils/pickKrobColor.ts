const pickCorrectColor = (value: number) => {
  switch (value) {
    case -1: {
      return "#fcd6d6";
    }
    case 0: {
      return "#fcd676";
    }
    case 1: {
      return "#fcd626";
    }
    case 2: {
      return "#f89b4b";
    }
    case 3: {
      return "#fc7959";
    }
    case 4: {
      return "#fc4e4e";
    }
    case 5: {
      return "#ff2f2f";
    }
    case 6: {
      return "#fd1f1f";
    }
    case 7: {
      return "#ff1010";
    }
    case 8: {
      return "#fa0909";
    }
    default: {
      return "#a70000";
    }
  }
};

export default pickCorrectColor;
