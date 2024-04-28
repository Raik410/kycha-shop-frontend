import { removeFromStorage } from '@/service/auth/auth.helper';
import { AuthService } from '@/service/auth/auth.service';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthResponce, IEmailPassword } from './user.interface';

export const register = createAsyncThunk<IAuthResponce, IEmailPassword>(
  'auth/register',
  async (data, thunkApi) => {
    try {
      const response = await AuthService.main('register', data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const login = createAsyncThunk<IAuthResponce, IEmailPassword>(
  'auth/login',
  async (data, thunkApi) => {
    try {
      const response = await AuthService.main('login', data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const loggout = createAsyncThunk('auth/logout', async () => {
  removeFromStorage();
});

export const checkAuth = createAsyncThunk(
  'auth/check-auth',
  async (_, thunkApi) => {
    try {
      const response = await AuthService.getNewTokens();
      return response.data;
    } catch (error) {
      thunkApi.dispatch(loggout());
    }
  },
);
