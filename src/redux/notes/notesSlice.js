import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    created: "3/1/2021",
    content: "first note",
    category: "Task",
    archived: false,
  },
  {
    id: "2",
    created: "12/2/2021",
    content: "second 2/15/2016 15/8/1987 note",
    category: "Task",
    archived: false,
  },
  {
    id: "3",
    created: "24/2/2021",
    content: "third note",
    category: "Random Thought",
    archived: false,
  },
  {
    id: "4",
    created: "3/3/2021",
    content: "another note",
    category: "Idea",
    archived: false,
  },
  {
    id: "5",
    created: "12/3/2021",
    content: "some note",
    category: "Idea",
    archived: false,
  },
  {
    id: "6",
    created: "13/4/2021",
    content: "random note",
    category: "Random Thought",
    archived: false,
  },
  {
    id: "7",
    created: "1/5/2021",
    content: "last note",
    category: "Idea",
    archived: false,
  },
];

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: (state, action) => {
      state.push({ ...action.payload });
    },

    archiveNote: (state, action) => {
      const archiveIndex = state.findIndex(
        (note) => note.id === action.payload
      );
      state[archiveIndex].archived = !state[archiveIndex].archived;
    },

    editNote: (state, action) => {},

    deleteNote: (state, action) =>
      state.filter((note) => note.id !== action.payload),
  },
});

export const notesList = (state) => state.notes;

export const { createNote, editNote, archiveNote, deleteNote } =
  notesSlice.actions;

export default notesSlice.reducer;
