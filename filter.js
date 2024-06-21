let boxes = document.querySelector('div');
let docs = document.getElementById('docs');
let docsDiv = document.querySelector('.docs');
let finishedDocs = document.getElementById('finished-docs');
let finishedDocsDiv = document.querySelector('.finished-docs');
let unfinishedDocs = document.getElementById('unfinished-docs');
let unfinishedDocsDiv = document.querySelector('.unfinished-docs');
let nonDocs = document.getElementById('non-docs');
let nonDocsDiv = document.querySelector('.non-docs');

docs.addEventListener('click', function() {
    let boxesSrc = boxes.getAttribute("class");
    if (boxesSrc === ".finishedDocs", ".unfinishedDocs", ".nonDocs") {

        docsDiv.style.display = "flex";
        finishedDocsDiv.style.display = "none";
        unfinishedDocsDiv.style.display = "none";
        nonDocsDiv.style.display = "none";
    }
});

finishedDocs.addEventListener('click', function() {
    let boxesSrc = boxes.getAttribute("class");
    if (boxesSrc === ".docs", ".unfinishedDocs", ".nonDocs") {

        finishedDocsDiv.style.display = "flex";
        docsDiv.style.display = "none";
        unfinishedDocsDiv.style.display = "none";
        nonDocsDiv.style.display = "none";
    }
});

unfinishedDocs.addEventListener('click', function() {
    let boxesSrc = boxes.getAttribute("class");
    if (boxesSrc === ".docs", ".finishedDocs", ".nonDocs") {

        unfinishedDocsDiv.style.display = "flex";
        docsDiv.style.display = "none";
        finishedDocsDiv.style.display = "none";
        nonDocsDiv.style.display = "none";
    }
});

nonDocs.addEventListener('click', function() {
    let boxesSrc = boxes.getAttribute("class");
    if (boxesSrc === ".docs", ".finishedDocs", ".unfinishedDocs") {

        nonDocsDiv.style.display = "flex";
        docsDiv.style.display = "none";
        finishedDocsDiv.style.display = "none";
        unfinishedDocsDiv.style.display = "none";
    }
});