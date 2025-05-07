const notes = ["week-1.md", "week-2.md"]; // add new files as you go

const nav = document.getElementById("note-list");
const content = document.getElementById("note-content");

notes.forEach(file => {
  const link = document.createElement("a");
  link.textContent = file.replace(".md", "");
  link.href = "#";
  link.onclick = () => loadNote(file);
  nav.appendChild(link);
});

function loadNote(filename) {
  fetch(`notes/${filename}`)
    .then(res => res.text())
    .then(md => {
      content.innerHTML = marked(md);
    });
}

// Auto-load the first note
if (notes.length > 0) loadNote(notes[0]);
