### Blockchain Day Journal

**Blockchain Day Journal** is a project that allows users to store their journals securely and immutably on the **blockchain**. Users can save their daily notes, feelings, favorite songs, movies they've watched, books they've read, and more. At the end of the year, all journal entries are unlocked, enabling users to view all their past notes.

---

## **Project Goals**

This project enables users to keep their digital journals using **blockchain** technology. The primary objectives are to ensure the secure storage of journal data, allow users to track their personal growth, and make the data accessible only during user-defined periods.

---

## **Features**

1. **Journal Writing**
   - Users can input text for each day, including details like date, emotions, favorite songs, goals, movies watched, books read, and lessons learned.
   
2. **Data Storage**
   - Journal entries are stored on the **blockchain**, ensuring secure, tamper-proof data storage.

3. **Locking System**
   - Each day’s data is stored in a locked state initially. Users can add entries for the day, but all data becomes accessible only on New Year's Day (December 31).

4. **NFT Integration**
   - Every journal entry is stored as an **NFT**, enabling users to visualize and share their journals.

5. **Year-End Unlock**
   - On December 31, all entries are unlocked, and users can access the entire year’s journal.

6. **Notification System**
   - Users receive reminders to ensure they don’t forget to write their daily entries.

---

## **Technologies**

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Motoko (DFINITY Canister)
- **Blockchain**: DFINITY Internet Computer

---

## **Project Structure**

The project follows this directory structure:

```
project-folder/
├── assets/
│   ├── images/ (UI images)
│   ├── icons/ (icons)
├── css/
│   ├── reset.css (CSS reset)
│   ├── style.css (main stylesheet)
│   ├── themes.css (theme-specific styles)
├── js/
│   ├── api/
│   │   └── backend.js (backend integration)
│   ├── ui/
│   │   └── components.js (UI components)
│   └── main.js (main script)
├── index.html (main HTML file)
└── motoko/
    └── blockchain_day_journal.mo (Motoko backend code)
```

---

## **Setup and Deployment**

### 1. **Frontend (HTML, CSS, JavaScript) Setup:**

1. Download the project to your local machine.
2. Open the `index.html` file in your browser to view the frontend. It uses HTML, CSS, and JavaScript.

### 2. **Backend (Motoko) Setup:**

The backend is implemented using Motoko and runs on the DFINITY platform. Follow these steps to deploy the canister:

#### 2.1 Install DFINITY SDK

1. Download and install the SDK from the [DFINITY SDK Documentation](https://sdk.dfinity.org/docs/index.html).
2. Use the following commands to deploy your canister to the DFINITY network:
   ```bash
   dfx new blockchain-day-journal
   cd blockchain-day-journal
   dfx deploy
   ```

#### 2.2 Backend Deployment

- **Motoko Code**: The backend logic is written in the `motoko/blockchain_day_journal.mo` file, handling journal data storage through actor functions.
- **Canister Deployment**: Run `dfx deploy` in the terminal to deploy the backend to the DFINITY network.
- **API Integration**: Update the `BACKEND_URL` in the `backend.js` file in the frontend with the URL of the deployed canister.

---

## **Usage**

### 1. **Add a New Journal Entry**

- Open the application.
- Enter your username.
- Input details such as the date, emotions, favorite songs, goals, movies, books, and lessons learned.
- Click the "Add Entry" button to store your journal entry on the blockchain.

### 2. **View Past Journals**

- On December 31, all journal entries will be unlocked, allowing users to view their past entries for the entire year.

---

## **Backend APIs**

The backend uses Motoko to provide the following APIs:

- `POST /addEntry`: Adds a new journal entry.
- `GET /getEntries`: Retrieves all journal entries for a user.
- `GET /getEntryByDate`: Retrieves the journal entry for a specific date.
- `PUT /updateEntry`: Updates a specific journal entry.
- `DELETE /deleteEntry`: Deletes a specific journal entry. 
