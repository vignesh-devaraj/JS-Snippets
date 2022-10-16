let timer;
let intervalTimer;
export function enableDebounce() {
  clearTimeout(timer);
  timer = setTimeout(callApi, 1000);
}

function callApi() {
  console.log('Api called');
}

function enableThrottling() {
  if (intervalTimer) {
    return;
  }
  intervalTimer = setTimeout(() => {
    callApi();
    intervalTimer = null;
  }, 1000);
}

export default {
  enableDebounce,
  enableThrottling,
};
