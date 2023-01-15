export default function customCSS(index) {
  if (index % 5 === 0) {
    return "large";
  } else if (index % 6 === 0) {
    return "huge";
  } else {
    return "img";
  }
}
