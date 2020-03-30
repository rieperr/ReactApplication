//import * as Sentry from "@sentry/browser";

function init() {
  // Sentry.init({
  //   dsn: "https://df3fdf45423943d0b970a07153d5d56d@sentry.io/5179557"
  // });
}

function log(error) {
  console.error(error);
  // Sentry.captureException(error);
}

export default {
  init,
  log
};
