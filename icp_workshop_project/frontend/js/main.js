import { addEntry, fetchEntries } from "./api/backend.js";
import { createEntryElement } from "./ui/components.js";

document.getElementById("journalForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = document.getElementById("user").value;
    const entry = {
        date: document.getElementById("date").value,
        mood: document.getElementById("mood").value,
        favoriteSong: document.getElementById("favoriteSong").value,
        goals: document.getElementById("goals").value.split(","),
        moviesWatched: document.getElementById("moviesWatched").value.split(","),
        booksRead: document.getElementById("booksRead").value.split(","),
        lessonsLearned: document.getElementById("lessonsLearned").value.split(","),
        additionalNotes: document.getElementById("additionalNotes").value,
    };

    if (await addEntry(user, entry)) {
        alert("Entry added!");
        loadEntries(user);
    }
});

async function loadEntries(user) {
    const entries = await fetchEntries(user);
    const container = document.getElementById("entries");
    container.innerHTML = "";
    entries.forEach(entry => {
        container.appendChild(createEntryElement(entry));
    });
}
