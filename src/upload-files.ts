const formElem: HTMLFormElement = <HTMLFormElement>document.querySelector('form');

window.fetch = async (...args) => {
  let [resource, config] = args;
  console.log(resource);
  console.log(config);

  return <Response>{
    status: 200,
    json: async () => ({ status: 200, message: 'OK' }),
  }
}

formElem?.addEventListener('submit', handleSubmit);

/** @param {Event} event */
function handleSubmit(event: Event) {
  event.preventDefault();

  if (!formElem) return

  const formEventTarget: HTMLFormElement = <HTMLFormElement>event.currentTarget;
  const url = new URL(formEventTarget.action);
  const formData = new FormData(formEventTarget);
  console.log(formData);
  const searchParams = new URLSearchParams(formData as any);

  const fetchOptions: { method: string; body?: FormData | string } = {
    method: formElem.method,
    // body: formData,
  };

  if (formElem.method.toLowerCase() === 'post') {
    if (formElem.enctype === 'multipart/form-data') fetchOptions.body = formData;
    else fetchOptions.body = searchParams;
  } else {
    url.search = searchParams.toString();
  }

  fetch(url, fetchOptions)
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData);
      alert(`status: ${responseData.status}, message: ${responseData.message}`);
    });

}
