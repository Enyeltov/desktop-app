/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "../configs.js":
/*!*********************!*\
  !*** ../configs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\n\nconst isProduction = false;\nconst config = {\n    dev: {\n        // apiUrl: env.procces.DEV_API_URL\n    },\n    production: {\n\n    },\n    apiUrl: () => {\n        if (isProduction) {\n            // return process.env.PRO_API_URL\n            return 'http://localhost:3333'\n        } else {\n            // return process.env.DEV_API_URL\n            return 'http://localhost:3333'\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vY29uZmlncy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL2NvbmZpZ3MuanM/ZmFjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGlzUHJvZHVjdGlvbiA9IGZhbHNlO1xuY29uc3QgY29uZmlnID0ge1xuICAgIGRldjoge1xuICAgICAgICAvLyBhcGlVcmw6IGVudi5wcm9jY2VzLkRFVl9BUElfVVJMXG4gICAgfSxcbiAgICBwcm9kdWN0aW9uOiB7XG5cbiAgICB9LFxuICAgIGFwaVVybDogKCkgPT4ge1xuICAgICAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gcHJvY2Vzcy5lbnYuUFJPX0FQSV9VUkxcbiAgICAgICAgICAgIHJldHVybiAnaHR0cDovL2xvY2FsaG9zdDozMzMzJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcmV0dXJuIHByb2Nlc3MuZW52LkRFVl9BUElfVVJMXG4gICAgICAgICAgICByZXR1cm4gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMydcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCB7IGNvbmZpZyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../configs.js\n");

/***/ }),

/***/ "./app/store.js":
/*!**********************!*\
  !*** ./app/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"persistor\": () => (/* binding */ persistor),\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/user */ \"./features/user.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst persistConfig = {\n    key: \"root\",\n    version: 1,\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default())\n};\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({\n    users: _features_user__WEBPACK_IMPORTED_MODULE_1__.usersSlice.reducer\n});\nconst persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistReducer)(persistConfig, rootReducer);\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: persistedReducer,\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: {\n                ignoreActions: [\n                    redux_persist__WEBPACK_IMPORTED_MODULE_3__.FLUSH,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_3__.REHYDRATE,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_3__.PAUSE,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_3__.PERSIST,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_3__.PURGE,\n                    redux_persist__WEBPACK_IMPORTED_MODULE_3__.REGISTER\n                ]\n            }\n        })\n});\nlet persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistStore)(store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDSjtBQUNSO0FBVWI7QUFDdUI7QUFFL0MsTUFBTVksYUFBYSxHQUFHO0lBQ2xCQyxHQUFHLEVBQUUsTUFBTTtJQUNYQyxPQUFPLEVBQUUsQ0FBQztJQUNWSCxPQUFPO0NBQ1Y7QUFFRCxNQUFNSSxXQUFXLEdBQUdiLHNEQUFlLENBQUM7SUFDaENjLEtBQUssRUFBRWYsOERBQWtCO0NBQzVCLENBQUM7QUFFRixNQUFNaUIsZ0JBQWdCLEdBQUdkLDZEQUFjLENBQUNRLGFBQWEsRUFBRUcsV0FBVyxDQUFDO0FBRTVELE1BQU1JLEtBQUssR0FBR25CLGdFQUFjLENBQUM7SUFDaENpQixPQUFPLEVBQUVDLGdCQUFnQjtJQUN6QkUsVUFBVSxFQUFFLENBQUNDLG9CQUFvQixHQUNqQ0Esb0JBQW9CLENBQUM7WUFDakJDLGlCQUFpQixFQUFFO2dCQUNmQyxhQUFhLEVBQUM7b0JBQUNsQixnREFBSztvQkFBRUMsb0RBQVM7b0JBQUVDLGdEQUFLO29CQUFFQyxrREFBTztvQkFBRUMsZ0RBQUs7b0JBQUVDLG1EQUFRO2lCQUFDO2FBQ3BFO1NBQ0osQ0FBQztDQUNMLENBQUM7QUFFSyxJQUFJYyxTQUFTLEdBQUdyQiwyREFBWSxDQUFDZ0IsS0FBSyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL3N0b3JlLmpzP2NhZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyB1c2Vyc1NsaWNlIH0gZnJvbSAnLi4vZmVhdHVyZXMvdXNlcidcclxuaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQge1xyXG4gICAgcGVyc2lzdFN0b3JlLFxyXG4gICAgcGVyc2lzdFJlZHVjZXIsXHJcbiAgICBGTFVTSCxcclxuICAgIFJFSFlEUkFURSxcclxuICAgIFBBVVNFLFxyXG4gICAgUEVSU0lTVCxcclxuICAgIFBVUkdFLFxyXG4gICAgUkVHSVNURVIsXHJcbiAgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCJcclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAgICBrZXk6IFwicm9vdFwiLFxyXG4gICAgdmVyc2lvbjogMSxcclxuICAgIHN0b3JhZ2UsXHJcbn1cclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIHVzZXJzOiB1c2Vyc1NsaWNlLnJlZHVjZXJcclxufSlcclxuXHJcbmNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByb290UmVkdWNlcilcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6IHBlcnNpc3RlZFJlZHVjZXIsXHJcbiAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XHJcbiAgICBnZXREZWZhdWx0TWlkZGxld2FyZSh7XHJcbiAgICAgICAgc2VyaWFsaXphYmxlQ2hlY2s6IHtcclxuICAgICAgICAgICAgaWdub3JlQWN0aW9uczpbRkxVU0gsIFJFSFlEUkFURSwgUEFVU0UsIFBFUlNJU1QsIFBVUkdFLCBSRUdJU1RFUl0sXHJcbiAgICAgICAgfSxcclxuICAgIH0pLFxyXG59KVxyXG5cclxuZXhwb3J0IGxldCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwidXNlcnNTbGljZSIsImNvbWJpbmVSZWR1Y2VycyIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwiRkxVU0giLCJSRUhZRFJBVEUiLCJQQVVTRSIsIlBFUlNJU1QiLCJQVVJHRSIsIlJFR0lTVEVSIiwic3RvcmFnZSIsInBlcnNpc3RDb25maWciLCJrZXkiLCJ2ZXJzaW9uIiwicm9vdFJlZHVjZXIiLCJ1c2VycyIsInJlZHVjZXIiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwic3RvcmUiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJzZXJpYWxpemFibGVDaGVjayIsImlnbm9yZUFjdGlvbnMiLCJwZXJzaXN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/store.js\n");

/***/ }),

/***/ "./features/user.js":
/*!**************************!*\
  !*** ./features/user.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"usersSlice\": () => (/* binding */ usersSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configs */ \"../configs.js\");\n\n\n\nconst initialState = {\n    data: null,\n    error: null,\n    token: null,\n    loading: \"idle\"\n};\nconst apiUrl = _configs__WEBPACK_IMPORTED_MODULE_2__.config.apiUrl();\nasync function loginUser(data) {\n    const myHeaders = new Headers();\n    myHeaders.append(\"Content-Type\", \"application/json\");\n    const raw = JSON.stringify(data);\n    const requestOptions = {\n        method: \"POST\",\n        headers: myHeaders,\n        body: raw,\n        redirect: \"follow\"\n    };\n    try {\n        const response = await fetch(`${apiUrl}/auth/login`, requestOptions);\n        // if (response.status === 403) {\n        //     throw response\n        // }\n        if (response.status === 200 && response.ok) {\n            const data = await response.json();\n            // localStorage.setItem('token', data.access_token)\n            // router.push('/poliza')\n            return data;\n        } else {\n            // trow an error so redux-thunk can handle it\n            throw response;\n        }\n    // return data\n    } catch (error) {\n        error.json().then((body)=>{\n            console.log(body);\n            electron__WEBPACK_IMPORTED_MODULE_1__.ipcRenderer.invoke(\"showDialog\", body.message);\n        });\n        return false;\n    }\n}\nconst login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"users/login\", async ({ email , password  }, { getState , requestId , rejectWithValue  })=>{\n    const { currentRequestId , loading  } = getState().users;\n    if (loading !== \"pending\" || requestId !== currentRequestId) {\n        return;\n    }\n    try {\n        const data = await loginUser({\n            email,\n            password\n        });\n        if (!data) {\n            throw \"error\";\n        }\n        return data;\n    } catch (error) {\n        console.log(error);\n        return rejectWithValue(error);\n    }\n});\nconst usersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"users\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(login.pending, (state, action)=>{\n            if (state.loading === \"idle\") {\n                state.loading = \"pending\";\n                state.currentRequestId = action.meta.requestId;\n            }\n        }).addCase(login.fulfilled, (state, action)=>{\n            const { requestId  } = action.meta;\n            if (state.loading === \"pending\" && state.currentRequestId === requestId) {\n                state.loading = \"idle\";\n                state.data = action.payload.Users;\n                state.token = action.payload.access_token;\n            }\n        }).addCase(login.rejected, (state, action)=>{\n            const { requestId  } = action.meta;\n            if (state.loading === \"pending\" && state.currentRequestId === requestId) {\n                state.loading = \"idle\";\n                state.error = action.error;\n            }\n        });\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cy91c2VyLmpzPzFkNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXN5bmNUaHVuaywgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBpcGNSZW5kZXJlciB9IGZyb20gJ2VsZWN0cm9uJztcclxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlncyc7XHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGRhdGE6IG51bGwsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICAgIHRva2VuOiBudWxsLFxyXG4gICAgbG9hZGluZzogJ2lkbGUnLFxyXG59XHJcblxyXG5jb25zdCBhcGlVcmwgPSBjb25maWcuYXBpVXJsKClcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvZ2luVXNlcihkYXRhKSB7XHJcbiAgICBjb25zdCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgbXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcblxyXG4gICAgY29uc3QgcmF3ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxyXG4gICAgICAgIGJvZHk6IHJhdyxcclxuICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdydcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpVXJsfS9hdXRoL2xvZ2luYCwgcmVxdWVzdE9wdGlvbnMpXHJcbiAgICAgICAgLy8gaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgICAgLy8gICAgIHRocm93IHJlc3BvbnNlXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCAmJiByZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEuYWNjZXNzX3Rva2VuKVxyXG4gICAgICAgICAgICAvLyByb3V0ZXIucHVzaCgnL3BvbGl6YScpXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdHJvdyBhbiBlcnJvciBzbyByZWR1eC10aHVuayBjYW4gaGFuZGxlIGl0XHJcbiAgICAgICAgICAgIHRocm93IHJlc3BvbnNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJldHVybiBkYXRhXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGVycm9yLmpzb24oKS50aGVuKGJvZHkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcclxuICAgICAgICAgICAgaXBjUmVuZGVyZXIuaW52b2tlKCdzaG93RGlhbG9nJywgYm9keS5tZXNzYWdlKSAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBsb2dpbiA9IGNyZWF0ZUFzeW5jVGh1bmsoXHJcbiAgICAndXNlcnMvbG9naW4nLFxyXG4gICAgYXN5bmMgKHsgZW1haWwsIHBhc3N3b3JkIH0sIHsgZ2V0U3RhdGUsIHJlcXVlc3RJZCwgcmVqZWN0V2l0aFZhbHVlIH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnRSZXF1ZXN0SWQsIGxvYWRpbmcgfSA9IGdldFN0YXRlKCkudXNlcnNcclxuICAgICAgICBpZiAobG9hZGluZyAhPT0gJ3BlbmRpbmcnIHx8IHJlcXVlc3RJZCAhPT0gY3VycmVudFJlcXVlc3RJZCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGxvZ2luVXNlcih7IGVtYWlsLCBwYXNzd29yZCB9KVxyXG4gICAgICAgICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRocm93ICdlcnJvcidcclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIHJldHVybiByZWplY3RXaXRoVmFsdWUoZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pXHJcblxyXG5jb25zdCB1c2Vyc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3VzZXJzJyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7fSxcclxuICAgIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XHJcbiAgICAgICAgYnVpbGRlclxyXG4gICAgICAgICAgICAuYWRkQ2FzZShsb2dpbi5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmxvYWRpbmcgPT09ICdpZGxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSAncGVuZGluZydcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jdXJyZW50UmVxdWVzdElkID0gYWN0aW9uLm1ldGEucmVxdWVzdElkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hZGRDYXNlKGxvZ2luLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVxdWVzdElkIH0gPSBhY3Rpb24ubWV0YVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPT09ICdwZW5kaW5nJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRSZXF1ZXN0SWQgPT09IHJlcXVlc3RJZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubG9hZGluZyA9ICdpZGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmRhdGEgPSBhY3Rpb24ucGF5bG9hZC5Vc2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnRva2VuID0gYWN0aW9uLnBheWxvYWQuYWNjZXNzX3Rva2VuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5hZGRDYXNlKGxvZ2luLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXF1ZXN0SWQgfSA9IGFjdGlvbi5tZXRhXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubG9hZGluZyA9PT0gJ3BlbmRpbmcnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuY3VycmVudFJlcXVlc3RJZCA9PT0gcmVxdWVzdElkXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gJ2lkbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH0sXHJcbn0pXHJcblxyXG5leHBvcnQge1xyXG4gICAgdXNlcnNTbGljZSxcclxuICAgIGxvZ2luLFxyXG59Il0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVTbGljZSIsImlwY1JlbmRlcmVyIiwiY29uZmlnIiwiaW5pdGlhbFN0YXRlIiwiZGF0YSIsImVycm9yIiwidG9rZW4iLCJsb2FkaW5nIiwiYXBpVXJsIiwibG9naW5Vc2VyIiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsInJhdyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwicmVkaXJlY3QiLCJyZXNwb25zZSIsImZldGNoIiwic3RhdHVzIiwib2siLCJqc29uIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJpbnZva2UiLCJtZXNzYWdlIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiZ2V0U3RhdGUiLCJyZXF1ZXN0SWQiLCJyZWplY3RXaXRoVmFsdWUiLCJjdXJyZW50UmVxdWVzdElkIiwidXNlcnMiLCJ1c2Vyc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsInN0YXRlIiwiYWN0aW9uIiwibWV0YSIsImZ1bGZpbGxlZCIsInBheWxvYWQiLCJVc2VycyIsImFjY2Vzc190b2tlbiIsInJlamVjdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./features/user.js\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/store */ \"./app/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n // _app.jsx\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [queryClient] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(()=>new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient()\n    );\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n        store: _app_store__WEBPACK_IMPORTED_MODULE_4__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6__.PersistGate, {\n            loading: null,\n            persistor: _app_store__WEBPACK_IMPORTED_MODULE_4__.persistor,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n                client: queryClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_3__.Hydrate, {\n                    state: pageProps.dehydratedState,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Renysin\\\\Desktop\\\\Proyecto Enyel\\\\Tesis\\\\Desktop-Front\\\\renderer\\\\pages\\\\_app.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Renysin\\\\Desktop\\\\Proyecto Enyel\\\\Tesis\\\\Desktop-Front\\\\renderer\\\\pages\\\\_app.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Renysin\\\\Desktop\\\\Proyecto Enyel\\\\Tesis\\\\Desktop-Front\\\\renderer\\\\pages\\\\_app.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Renysin\\\\Desktop\\\\Proyecto Enyel\\\\Tesis\\\\Desktop-Front\\\\renderer\\\\pages\\\\_app.jsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Renysin\\\\Desktop\\\\Proyecto Enyel\\\\Tesis\\\\Desktop-Front\\\\renderer\\\\pages\\\\_app.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBRUssQ0FBQyxXQUFXO0FBQzRCO0FBQ3hCO0FBQ1Q7QUFDd0I7QUFFOUQsU0FBU1EsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdkMsTUFBTSxDQUFDQyxXQUFXLENBQUMsR0FBR1gscURBQWMsQ0FBQyxJQUFNLElBQUlFLG9EQUFXLEVBQUU7SUFBQSxDQUFDO0lBQzdELHFCQUVFLDhEQUFDSSxpREFBUTtRQUFDRCxLQUFLLEVBQUVBLDZDQUFLO2tCQUNwQiw0RUFBQ0Usd0VBQVc7WUFBQ00sT0FBTyxFQUFFLElBQUk7WUFBRVQsU0FBUyxFQUFFQSxpREFBUztzQkFDaEQsNEVBQUNELDREQUFtQjtnQkFBQ1csTUFBTSxFQUFFSCxXQUFXOzBCQUN0Qyw0RUFBQ1YsZ0RBQU87b0JBQUNjLEtBQUssRUFBRUwsU0FBUyxDQUFDTSxlQUFlOzhCQUN2Qyw0RUFBQ1AsU0FBUzt3QkFBRSxHQUFHQyxTQUFTOzs7Ozs0QkFBSTs7Ozs7d0JBQ3BCOzs7OztvQkFDVTs7Ozs7Z0JBQ1I7Ozs7O1lBQ0wsQ0FDWDtDQUNIO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanN4PzRjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJzsgLy8gX2FwcC5qc3hcclxuaW1wb3J0IHsgSHlkcmF0ZSwgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1xdWVyeSdcclxuaW1wb3J0IHsgcGVyc2lzdG9yLCBzdG9yZSB9IGZyb20gJy4uL2FwcC9zdG9yZSdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFtxdWVyeUNsaWVudF0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBuZXcgUXVlcnlDbGllbnQoKSlcclxuICByZXR1cm4gKFxyXG5cclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8UGVyc2lzdEdhdGUgbG9hZGluZz17bnVsbH0gcGVyc2lzdG9yPXtwZXJzaXN0b3J9PlxyXG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cclxuICAgICAgICA8SHlkcmF0ZSBzdGF0ZT17cGFnZVByb3BzLmRlaHlkcmF0ZWRTdGF0ZX0+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9IeWRyYXRlPlxyXG4gICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XHJcbiAgICAgIDwvUGVyc2lzdEdhdGU+XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIeWRyYXRlIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwicGVyc2lzdG9yIiwic3RvcmUiLCJQcm92aWRlciIsIlBlcnNpc3RHYXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJxdWVyeUNsaWVudCIsInVzZVN0YXRlIiwibG9hZGluZyIsImNsaWVudCIsInN0YXRlIiwiZGVoeWRyYXRlZFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.jsx"));
module.exports = __webpack_exports__;

})();