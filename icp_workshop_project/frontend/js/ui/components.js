export function createEntryElement(entry) {
    const div = document.createElement("div");
    div.classList.add("entry");
    div.innerHTML = `
        <p><strong>Date:</strong> ${entry.date}</p>
        <p><strong>Mood:</strong> ${entry.mood}</p>
        <p><strong>Favorite Song:</strong> ${entry.favoriteSong}</p>
        <p><strong>Goals:</strong> ${entry.goals.join(", ")}</p>
        <p><strong>Movies Watched:</strong> ${entry.moviesWatched.join(", ")}</p>
        <p><strong>Books Read:</strong> ${entry.booksRead.join(", ")}</p>
        <p><strong>Lessons Learned:</strong> ${entry.lessonsLearned.join(", ")}</p>
        <p><strong>Additional Notes:</strong> ${entry.additionalNotes}</p>
    `;
    return div;
}
