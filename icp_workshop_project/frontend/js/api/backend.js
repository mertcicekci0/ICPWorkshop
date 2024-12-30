const BACKEND_URL = "";  

export async function addEntry(user, entry) {
    const response = await fetch(`${BACKEND_URL}/addEntry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, entry }),
    });
    return response.ok;
}

export async function fetchEntries(user) {
    const response = await fetch(`${BACKEND_URL}/getEntries?user=${user}`);
    return response.json();
}
