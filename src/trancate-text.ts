const truncateText = (): void => {
  let text: HTMLElement | null = document.querySelector("#text");
  const truncated: string | undefined = text?.innerHTML?.substring(0, 50) + ' ...';
  if (text?.innerHTML && truncated) text.innerHTML = truncated;
}
