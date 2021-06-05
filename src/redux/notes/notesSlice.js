import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    created: "3/1/2021",
    content: "first note",
    category: "Task",
    archived: false,
    editMode: false,
  },
  {
    id: "2",
    created: "12/2/2021",
    content: "second 2/15/2016 15/8/1987 note",
    category: "Task",
    archived: false,
    editMode: false,
  },
  {
    id: "3",
    created: "24/2/2021",
    content: "third note",
    category: "Random Thought",
    archived: false,
    editMode: false,
  },
  {
    id: "4",
    created: "3/3/2021",
    content: "another note",
    category: "Idea",
    archived: false,
    editMode: false,
  },
  {
    id: "5",
    created: "12/3/2021",
    content: "some note",
    category: "Idea",
    archived: false,
    editMode: false,
  },
  {
    id: "6",
    created: "13/4/2021",
    content: "random note",
    category: "Random Thought",
    archived: false,
    editMode: false,
  },
  {
    id: "7",
    created: "1/5/2021",
    content: "last note",
    category: "Idea",
    archived: false,
    editMode: false,
  },
];

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote: (state, action) => {
      state.unshift({ ...action.payload });
    },

    archiveNote: (state, action) => {
      const archiveIndex = state.findIndex(
        (note) => note.id === action.payload
      );
      state[archiveIndex].archived = !state[archiveIndex].archived;
    },

    updateNote: (state, action) => {
      const updateIndex = state.findIndex(
        (note) => note.id === action.payload.id
      );
      state[updateIndex].content = action.payload.content;
      state[updateIndex].category = action.payload.category;
      state[updateIndex].editMode = false;
    },

    editNote: (state, action) => {
      const editIndex = state.findIndex((note) => note.id === action.payload);
      state[editIndex].editMode = !state[editIndex].archived;
    },

    deleteNote: (state, action) =>
      state.filter((note) => note.id !== action.payload),
  },
});

export const notesList = (state) => state.notes;

export const { createNote, editNote, archiveNote, deleteNote, updateNote } =
  notesSlice.actions;

export default notesSlice.reducer;
