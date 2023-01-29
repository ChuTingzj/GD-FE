export const exclude_on_click = (event: MouseEvent) => {
  const siblings = Array.from((event.target as HTMLElement).parentNode?.childNodes ?? []);
  siblings.forEach(item => (item as HTMLElement).classList.remove('clicked'));
  (event.target as HTMLElement).classList.add('clicked');
}