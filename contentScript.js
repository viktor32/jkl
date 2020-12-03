const elements = document.getElementsByClassName('js-issue-title');
const titles = document.getElementsByClassName('commit-title');
console.log(titles);
[...titles, ...elements].forEach(function(el) {
  el.innerHTML = el.innerText.replace(/\[([A-Z+]+-\d+)\]/g, '[<a target="_blank" href="https://jira.pixelplex.by/browse/$1">$1</a>]');
});
