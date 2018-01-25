export function handleArrowKeys(keycode, autoSuggestSelected) {
  switch (keycode) {
    case 38:
      return autoSuggestSelected--;
      break;
    case 40:
      return autoSuggestSelected++;
      break;
  }
}