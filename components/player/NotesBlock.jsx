import React, { useState } from 'react';
import { Save, Trash2, Clock } from 'lucide-react';

const NotesBlock = () => {
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([
    { id: 1, time: '12:45', text: 'Flexbox container এ display: flex দিলে চাইল্ড এলিমেন্টগুলো ফ্লেক্স আইটেম হয়ে যায়।' }
  ]);

  const saveNote = () => {
    if (!noteText.trim()) return;
    const newNote = {
      id: Date.now(),
      time: '12:45', // mock timestamp
      text: noteText
    };
    setNotes([newNote, ...notes]);
    setNoteText('');
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Input Area */}
      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 transition-all">
         <div className="flex items-center gap-2 text-[10px] font-bold text-primary mb-4 uppercase tracking-widest">
            <Clock size={12} />
            12:45 এ নোট লিখুন
         </div>
         <textarea 
           value={noteText}
           onChange={(e) => setNoteText(e.target.value)}
           className="w-full bg-transparent border-none focus:ring-0 text-sm text-gray-700 bengali-text resize-none h-24"
           placeholder="এই মুহূর্তে নোট লিখুন..."
         />
         <div className="flex justify-end pt-4">
            <button 
              onClick={saveNote}
              className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-primary-dark transition-all bengali-text shadow-lg shadow-primary/10"
            >
               <Save size={16} />
               নোট সেভ করুন
            </button>
         </div>
      </div>

      {/* Notes List */}
      <div className="space-y-4">
         <h4 className="font-bold text-gray-900 text-sm bengali-text">আমার নোটস ({notes.length})</h4>
         <div className="space-y-4">
            {notes.map(note => (
               <div key={note.id} className="group p-5 bg-gray-50 border border-gray-100 rounded-2xl relative">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-primary mb-2">
                     <Clock size={12} />
                     {note.time}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed bengali-text">
                     {note.text}
                  </p>
                  <button 
                    onClick={() => deleteNote(note.id)}
                    className="absolute top-4 right-4 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                  >
                     <Trash2 size={16} />
                  </button>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default NotesBlock;
