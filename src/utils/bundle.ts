function getScript(src) {
  return `<script type="text/javascript" src="${src}"></script>`;
}
function getStyle(src) {
  return `<link rel="stylesheet" href="${src}" />`;
}

export { getScript, getStyle };
