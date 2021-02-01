let arc = require('@architect/functions');

exports.handler = async function http (req) {
  return {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Architect w/ IoT Rules Macro Example</title>
  <link rel="stylesheet" href="${arc.static('app.css')}">
</head>
<body>
<h1>Hi there</h1>
</body>
</html>`
  }
}
