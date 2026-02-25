// Remover service worker prévios (meuinss e auditoria)
// futuramente esse código pode ser removido
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations()
    .then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister().then(function (success) {
          if (success) {
            console.log('✅ Service Worker removido:', registration.scope);
          }
        });
      }
    });
}

const log = (data) => {
  
  const urlApi = window.env.REACT_APP__URL_API || window.env.urlApi;
  const token = localStorage.getItem('ifs_auth');
  const miVersion = window.miVersion;
  const miReferer = window.location.href;
  const miPlatform = window.miPlatform;
  
  var xhr = new XMLHttpRequest();
  xhr.open('POST', `${urlApi.replace('apis/', 'log')}`);
  if (token) xhr.setRequestHeader('Authorization', 'Bearer ' + token);
  if (miVersion) xhr.setRequestHeader('miVersion', miVersion);
  if (miReferer) xhr.setRequestHeader('miReferer', miReferer);
  if (miPlatform) xhr.setRequestHeader('miPlatform', miPlatform);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));
};

let lastLogError = undefined;
window.addEventListener("error", (event) => {
  try {
    if (event.message && event.message.indexOf('babel-polyfill') != -1) {
      event.stopImmediatePropagation();
      event.preventDefault();
    } else if (!(event.lineno == 0 && event.message && event.message.indexOf('Script error') != -1)) {
      const message = event.message;
      let stack;
      if (event.error && event.error.stack) {
        stack = event.error.stack;
      } else {
        stack = `source=${event.filename}, lineno=${event.lineno}, colno=${event.colno}`;  
      }
      const fullLog = message + stack;
      if (fullLog !== lastLogError) {
        lastLogError = fullLog;
        log({ level: "ERROR", message, stack });
      }
    }
  } catch (error) {
    console.error(error);
  }
});