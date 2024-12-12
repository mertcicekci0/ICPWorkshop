import Map "mo:base/HashMap";
import Text "mo:base/Text";
import Option "mo:base/Option";
import List "mo:base/List";

actor BlockchainDayJournal {

    public type Entry = {
        date: Text;
        mood: Text;
        favoriteSong: Text;
        goals: [Text];
        moviesWatched: [Text];
        booksRead: [Text];
        lessonsLearned: [Text];
        additionalNotes: Text;
    };

    public type Data = List.List<Entry>;

    let journalData = Map.HashMap<Text, Data>(0, Text.equal, Text.hash);

    
    public func addEntry(user: Text, newEntry: Entry): async Entry {
        
        let userEntries = Option.get(journalData.get(user), List.nil<Entry>());

        
        let updatedEntries = List.push(newEntry, userEntries);

       
        journalData.put(user, updatedEntries);

        return newEntry;
    };

    
    public func getEntries(user: Text): async ?Data {
        return journalData.get(user);
    };

     
    public func getEntryByDate(user: Text, targetDate: Text): async ?Entry {
        
        let userEntries = Option.get(journalData.get(user), List.nil<Entry>());

        
        let result = List.find(userEntries, func(entry: Entry): Bool {
            entry.date == targetDate
        });

        return result; 
    };


   
    public func updateEntry(user: Text, targetDate: Text, updatedEntry: Entry): async Bool {
        let userEntries = Option.get(journalData.get(user), List.nil<Entry>());

        let updatedEntries = List.map(userEntries, func(entry: Entry): Entry {
            if (entry.date == targetDate) {
                updatedEntry 
            } else {
                entry 
            }
        });

        
        journalData.put(user, updatedEntries);
        return true;
    };

    
    public func deleteEntry(user: Text, targetDate: Text): async Bool {
        let userEntries = Option.get(journalData.get(user), List.nil<Entry>());

        let filteredEntries = List.filter(userEntries, func(entry: Entry): Bool {
            entry.date != targetDate 
        });

        
        journalData.put(user, filteredEntries);
        return true;
    };

}