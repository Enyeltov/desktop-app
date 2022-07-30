import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ipcRenderer } from 'electron';
import { config } from '../../configs';
const initialState = {
    data: null,
    error: null,
    token: null,
    loading: 'idle',
}

const apiUrl = config.apiUrl()

async function loginUser(data) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    try {
        const response = await fetch(`${apiUrl}/auth/login`, requestOptions)
        // if (response.status === 403) {
        //     throw response
        // }
        if (response.status === 200 && response.ok) {
            const data = await response.json()
            // localStorage.setItem('token', data.access_token)
            // router.push('/poliza')
            return data
        } else {
            // trow an error so redux-thunk can handle it
            throw response
        }
        // return data
    } catch (error) {
        error.json().then(body => {
            console.log(body);
            ipcRenderer.invoke('showDialog', body.message)            
        })
        return false
    }
}


const login = createAsyncThunk(
    'users/login',
    async ({ email, password }, { getState, requestId, rejectWithValue }) => {
        const { currentRequestId, loading } = getState().users
        if (loading !== 'pending' || requestId !== currentRequestId) {
            return
        }
        try {
            const data = await loginUser({ email, password })
            if (!data) {
                throw 'error'
            }  
            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error)
        }
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state, action) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending'
                    state.currentRequestId = action.meta.requestId
                }
            })
            .addCase(login.fulfilled, (state, action) => {
                const { requestId } = action.meta
                if (
                    state.loading === 'pending' &&
                    state.currentRequestId === requestId
                ) {
                    state.loading = 'idle'
                    state.data = action.payload.Users
                    state.token = action.payload.access_token
                }
            })
            .addCase(login.rejected, (state, action) => {
                const { requestId } = action.meta
                if (
                    state.loading === 'pending' &&
                    state.currentRequestId === requestId
                ) {
                    state.loading = 'idle'
                    state.error = action.error
                }
            })
    },
})

export {
    usersSlice,
    login,
}