import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    created: "3/1/2021",
    content: "first note",
    category: "Task",
  },
  {
    id: 2,
    created: "12/2/2021",
    content: "second 2/15/2016 15/8/1987 note",
    category: "Task",
  },
  {
    id: 3,
    created: "24/2/2021",
    content: "third note",
    category: "Random Thought",
  },
  {
    id: 4,
    created: "3/3/2021",
    content: "another note",
    category: "Idea",
  },
  {
    id: 5,
    created: "12/3/2021",
    content: "some note",
    category: "Idea",
  },
  {
    id: 6,
    created: "13/4/2021",
    content: "random note",
    category: "Random Thought",
  },
  {
    id: 7,
    created: "1/5/2021",
    content: "last note",
    category: "Idea",
  },
];

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: (state, action) => {
      state.push({ ...action.payload });
    },
    archiveNote: (state, action) => {},
    editNote: (state, action) => {},
    deleteNote: (state, action) => {},
  },
});

export const notesList = (state) => state.notes;

export const { createNote, editNote, archiveNote, deleteNote } =
  notesSlice.actions;

export default notesSlice.reducer;
