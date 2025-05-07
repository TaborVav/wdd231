document.addEventListener("DOMContentLoaded", () => {
  const noteList = document.getElementById("note-list");
  const noteContent = document.getElementById("note-content");

  // Example of how to load markdown content (you might load it dynamically from a file or server)
  const notes = [
    { title: "Note 1", file: "note1.md" },
    { title: "Note 2", file: "note2.md" }
  ];

  // Populate the note list dynamically
  notes.forEach(note => {
    const noteItem = document.createElement("div");
    noteItem.textContent = note.title;
    noteItem.addEventListener("click", () => {
      console.log(`Loading content for: ${note.title}`);  // Debug log
      loadNoteContent(note.file);
    });
    noteList.appendChild(noteItem);
  });

  // Function to load the content of a note
  function loadNoteContent(file) {
    console.log(`Fetching file: ${file}`);  // Debug log

    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(text => {
        console.log('Markdown file fetched successfully');
        noteContent.innerHTML = marked(text);  // Render markdown as HTML
      })
      .catch(error => {
        console.error('There was an error fetching the markdown file:', error);
        noteContent.innerHTML = '<p>Error loading content. Please try again later.</p>';
      });
  }
});
