// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
// import { app } from "../../../../firebase/firebaseConfig"; // adjust the path accordingly

// const auth = getAuth(app);
// const db = getFirestore(app);

// const initialState = {
//   user: null,
//   userData: null,
//   isLoading: false,
//   error: null,
// };

// // Thunk to register a new user
// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async ({ displayName, email, password }, { rejectWithValue }) => {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       await updateProfile(userCredential.user, { displayName });
//       await setDoc(doc(db, "users", userCredential.user.uid), {
//         displayName,
//         email,
//       });
//       return { displayName, email, uid: userCredential.user.uid };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // Thunk to login an existing user
// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async ({ email, password }, { rejectWithValue }) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
//       if (!userDoc.exists()) {
//         await setDoc(doc(db, "users", userCredential.user.uid), {
//           displayName: userCredential.user.displayName,
//           email,
//           uid: userCredential.user.uid,
//         });
//       }
//       return {
//         displayName: userCredential.user.displayName,
//         email,
//         uid: userCredential.user.uid,
//       };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // Thunk for Google sign-in
// export const googleSignin = createAsyncThunk(
//   "auth/googleSignin",
//   async (_, { rejectWithValue }) => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       const userDoc = await getDoc(doc(db, "users", user.uid));
//       if (!userDoc.exists()) {
//         await setDoc(doc(db, "users", user.uid), {
//           displayName: user.displayName,
//           email: user.email,
//           profileImage: user.photoURL,
//           uid: user.uid,
//         });
//       }
//       return {
//         displayName: user.displayName,
//         email: user.email,
//         profileImage: user.photoURL,
//         uid: user.uid,
//       };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // Thunk to fetch user data
// export const fetchUserData = createAsyncThunk(
//   "auth/fetchUserData",
//   async (uid, { rejectWithValue }) => {
//     try {
//       const userDoc = await getDoc(doc(db, "users", uid));
//       if (userDoc.exists()) {
//         return userDoc.data();
//       } else {
//         throw new Error("User document does not exist");
//       }
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//       state.isLoading = false;
//       state.error = null;
//     },
//     setLoading: (state, action) => {
//       state.isLoading = action.payload;
//       state.error = null;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//       state.isLoading = false;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.userData = null;
//       state.isLoading = false;
//       state.error = null;
//       signOut(auth);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.error = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.error = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(googleSignin.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(googleSignin.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(googleSignin.rejected, (state, action) => {
//         state.error = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(fetchUserData.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchUserData.fulfilled, (state, action) => {
//         state.userData = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(fetchUserData.rejected, (state, action) => {
//         state.error = action.payload;
//         state.isLoading = false;
//       });
//   },
// });

// export const { setUser, setLoading, setError, logout } = authSlice.actions;
// export default authSlice.reducer;


// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { app } from "../../../../firebase/firebaseConfig"; // Adjust the path as needed

const auth = getAuth(app);
const db = getFirestore(app);

const initialState = {
  user: null,
  userData: null,
  isLoading: false,
  error: null,
};

// Thunk to register a new user
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ displayName, email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName });
      await setDoc(doc(db, "users", userCredential.user.uid), {
        displayName,
        email,
        wishlist: [], // Initialize wishlist
      });
      return { displayName, email, uid: userCredential.user.uid };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk to login an existing user
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, "users", userCredential.user.uid), {
          displayName: userCredential.user.displayName,
          email,
          uid: userCredential.user.uid,
          wishlist: [], // Initialize wishlist
        });
      }
      return {
        displayName: userCredential.user.displayName,
        email,
        uid: userCredential.user.uid,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for Google sign-in
export const googleSignin = createAsyncThunk(
  "auth/googleSignin",
  async (_, { rejectWithValue }) => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          displayName: user.displayName,
          email: user.email,
          profileImage: user.photoURL,
          uid: user.uid,
          wishlist: [], // Initialize wishlist
        });
      }
      return {
        displayName: user.displayName,
        email: user.email,
        profileImage: user.photoURL,
        uid: user.uid,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk to fetch user data
export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (uid, { rejectWithValue }) => {
    try {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        return userDoc.data();
      } else {
        throw new Error("User document does not exist");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = null;
      state.userData = null;
      state.isLoading = false;
      state.error = null;
      signOut(auth);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(googleSignin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(googleSignin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(googleSignin.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setUser, setLoading, setError, logout } = authSlice.actions;
export default authSlice.reducer;
