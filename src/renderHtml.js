var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/templates/basic/renderHtml.js
var integrationName = "Turso";
var iconURL = "https://imagedelivery.net/wSMYJvS3Xw-n339CbDyDIA/abd58e91-15e9-4583-0452-b8b0377ca300/public";
var docsURL = "https://developers.cloudflare.com/workers/databases/native-integrations/turso";
async function renderHtml(content) {
  const svg = await getIntegrationSvg();
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${integrationName}</title>
  <link rel="stylesheet" type="text/css" href="https://templates.integrations-platform.cfdata.org/styles.css">
</head>
<body>
<header>
  ${svg}
  <h1>
    \u{1F389} Successfully connected to ${integrationName}
  </h1>
</header>
<main>
  <p>
    Your database has the following number of tables:
  </p>
  <pre><code>${content}</code></pre>
  <small>
    To learn more view Cloudflare's <a target="_blank" href="${docsURL}">${integrationName} Developer Documentation</a>
  </small>
</main>
</body>
</html>
`;
}
__name(renderHtml, "renderHtml");
async function getIntegrationSvg() {
  const svg = await fetch("https://templates.integrations-platform.cfdata.org/connection_graphic.svg").then((s) => s.text()).then((s) => s.replace("icon_url", iconURL));
  return svg;
}
__name(getIntegrationSvg, "getIntegrationSvg");
export {
  renderHtml as default
};
