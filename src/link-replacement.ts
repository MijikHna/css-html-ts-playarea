// Replace 1
const replace1Elem = document.querySelector("#replace-1");

if (replace1Elem?.innerHTML) {
  replace1Elem.innerHTML = replace1Elem?.innerHTML.trim().replace('JavaScript', 'Python');
}

// Replace 2: with Regex
const replace2Elem = document.querySelector('#replace-2');

if (replace2Elem?.innerHTML) {
  const regex = /\d+/g
  replace2Elem.innerHTML = replace2Elem.innerHTML.trim().replace(regex, '****');
}

// Replace 3: with callback
const replace3Elem = document.querySelector("#replace-3");

if (replace3Elem?.innerHTML) {
  const regex = /\d+/g
  replace3Elem.innerHTML = replace3Elem.innerHTML.replace(regex, (matched: string) => {
    const firstChar = matched[0]
    const lastChar = matched.at(-1)

    return firstChar + "****" + lastChar
  })
}

// Replace 4: Link
const replace4Elem = document.querySelector("#replace-4");

if (replace4Elem?.innerHTML) {
  const linkRegex = /(https?\:\/\/)?(www\.)?[^\s]+\.[^\s]+/g;
  replace4Elem.innerHTML = replace4Elem.innerHTML.trim().replace(linkRegex, (matched) => {
    let withProtocol = matched
    if (!withProtocol.startsWith("http")) withProtocol = "http://" + matched
    return `<a class="text-link" href="${withProtocol}">${matched}</a>`
  });
}


