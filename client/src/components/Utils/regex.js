export function cleanTitle(value) {
  var result = value.replace(/[.\\/',:*?"<>|+@#!$%^&()_]/g, function (ch) {
    return "\\" + ch;
  });
  return result.replace(/((\s*\S+)*)\s*/, "$1");
}
