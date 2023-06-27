import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addUserToLocalStorage, getUserFromLocalStorage,removeUserFromLocalStorage } from "../../utils/localStorage";
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
} from "./userThunk";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  isSidebarOpen:false
};


export const registerUser = createAsyncThunk('user/register',async(user,thunkAPI) =>{

return registerUserThunk("/auth/register", user, thunkAPI);
})

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    return loginUserThunk("/auth/login" ,user,thunkAPI)
});

export const updateUser = createAsyncThunk('user/update',async(user,thunkAPI)=>{
  return updateUserThunk("/auth/updateUser", user, thunkAPI)
})




const userSlice = createSlice({
  name: "user",
  initialState,
  
  reducers:{
    toggleSidebar:(state)=>{
      console.log("inside user slice toggle")
      state.isSidebarOpen= !state.isSidebarOpen;
    },
    logOutUser:(state,{payload})=>{
           state.user = null
      state.isSidebarOpen=false
      removeUserFromLocalStorage();
     if(payload){
      toast.success(payload)
     }

    }

  },
  extraReducers: (builder)=>{
    builder.addCase
    (registerUser.pending,(state) =>{
      state.isLoading=true;
    })
    .addCase(registerUser.fulfilled,(state,{payload})=>{
   const {user} =payload
   state.isLoading= false
   state.user = user
   toast.success(`hello there ${user.name}`) 
   addUserToLocalStorage(user)
    })
    .addCase(registerUser.rejected ,(state,{payload})=>{
      state.isLoading= false
      toast.error(payload)
    })
    .addCase
    (loginUser.pending,(state) =>{
      state.isLoading=true;
    })
    .addCase(loginUser.fulfilled,(state,{payload})=>{
   const {user} =payload
   state.isLoading= false
   state.user = user
   toast.success(`welcome back ${user.name}`) 
   addUserToLocalStorage(user)
    })
    .addCase(loginUser.rejected ,(state,{payload})=>{
      state.isLoading= false
      toast.error(payload)
    })
    .addCase(updateUser.pending,(state)=>{state.isLoading = true})
    .addCase(updateUser.fulfilled,(state,{payload}) =>{
      const {user} = payload;
      state.isLoading= false
      state.user = user
      addUserToLocalStorage(user)
      toast.success(`user details updated`)
    })
    .addCase(updateUser.rejected ,(state,{payload})=>{
      state.isLoading= false
      toast.error(payload)
    })
  }
});

export default userSlice.reducer;
export const {toggleSidebar,logOutUser}= userSlice.actions