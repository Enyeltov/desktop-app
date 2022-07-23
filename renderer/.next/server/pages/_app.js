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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/user */ \"./features/user.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        users: _features_user__WEBPACK_IMPORTED_MODULE_1__.usersSlice.reducer\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRDtBQUNKO0FBQ3RDLE1BQU1FLEtBQUssR0FBR0YsZ0VBQWMsQ0FBQztJQUNoQ0csT0FBTyxFQUFFO1FBQ0xDLEtBQUssRUFBRUgsOERBQWtCO0tBQzVCO0NBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9zdG9yZS5qcz9jYWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgdXNlcnNTbGljZSB9IGZyb20gJy4uL2ZlYXR1cmVzL3VzZXInXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6IHtcclxuICAgICAgICB1c2VyczogdXNlcnNTbGljZS5yZWR1Y2VyXHJcbiAgICB9LFxyXG59KSJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInVzZXJzU2xpY2UiLCJzdG9yZSIsInJlZHVjZXIiLCJ1c2VycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/store.js\n");

/***/ }),

/***/ "./features/user.js":
/*!**************************!*\
  !*** ./features/user.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"usersSlice\": () => (/* binding */ usersSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configs */ \"../configs.js\");\n\n\n\nconst initialState = {\n    user: null,\n    error: null,\n    token: null,\n    loading: \"idle\"\n};\nconst apiUrl = _configs__WEBPACK_IMPORTED_MODULE_2__.config.apiUrl();\nasync function loginUser(data) {\n    const myHeaders = new Headers();\n    myHeaders.append(\"Content-Type\", \"application/json\");\n    const raw = JSON.stringify(data);\n    const requestOptions = {\n        method: \"POST\",\n        headers: myHeaders,\n        body: raw,\n        redirect: \"follow\"\n    };\n    try {\n        const response = await fetch(`${apiUrl}/auth/login`, requestOptions);\n        // if (response.status === 403) {\n        //     throw response\n        // }\n        if (response.status === 200 && response.ok) {\n            const data = await response.json();\n            // localStorage.setItem('token', data.access_token)\n            // router.push('/poliza')\n            return data;\n        } else {\n            // trow an error so redux-thunk can handle it\n            throw response;\n        }\n    // return data\n    } catch (error) {\n        error.json().then((body)=>{\n            console.log(body);\n            electron__WEBPACK_IMPORTED_MODULE_1__.ipcRenderer.invoke(\"showDialog\", body.message);\n        });\n        return false;\n    }\n}\nconst login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"users/login\", async ({ email , password  }, { getState , requestId , rejectWithValue  })=>{\n    const { currentRequestId , loading  } = getState().users;\n    if (loading !== \"pending\" || requestId !== currentRequestId) {\n        return;\n    }\n    try {\n        const data = await loginUser({\n            email,\n            password\n        });\n        if (!data) {\n            throw \"error\";\n        }\n        return data;\n    } catch (error) {\n        console.log(error);\n        return rejectWithValue(error);\n    }\n});\nconst usersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"users\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(login.pending, (state, action)=>{\n            if (state.loading === \"idle\") {\n                state.loading = \"pending\";\n                state.currentRequestId = action.meta.requestId;\n            }\n        }).addCase(login.fulfilled, (state, action)=>{\n            const { requestId  } = action.meta;\n            if (state.loading === \"pending\" && state.currentRequestId === requestId) {\n                state.loading = \"idle\";\n                state.token = action.payload.access_token;\n            }\n        }).addCase(login.rejected, (state, action)=>{\n            const { requestId  } = action.meta;\n            if (state.loading === \"pending\" && state.currentRequestId === requestId) {\n                state.loading = \"idle\";\n                state.error = action.error;\n            }\n        });\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQ3ZDLElBQUlELEtBQUssQ0FBQ3hDLE9BQU8sS0FBSyxNQUFNLEVBQUU7Z0JBQzFCd0MsS0FBSyxDQUFDeEMsT0FBTyxHQUFHLFNBQVM7Z0JBQ3pCd0MsS0FBSyxDQUFDVCxnQkFBZ0IsR0FBR1UsTUFBTSxDQUFDQyxJQUFJLENBQUNiLFNBQVM7YUFDakQ7U0FDSixDQUFDLENBQ0RTLE9BQU8sQ0FBQ2IsS0FBSyxDQUFDa0IsU0FBUyxFQUFFLENBQUNILEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQ3pDLE1BQU0sRUFBRVosU0FBUyxHQUFFLEdBQUdZLE1BQU0sQ0FBQ0MsSUFBSTtZQUNqQyxJQUNJRixLQUFLLENBQUN4QyxPQUFPLEtBQUssU0FBUyxJQUMzQndDLEtBQUssQ0FBQ1QsZ0JBQWdCLEtBQUtGLFNBQVMsRUFDdEM7Z0JBQ0VXLEtBQUssQ0FBQ3hDLE9BQU8sR0FBRyxNQUFNO2dCQUN0QndDLEtBQUssQ0FBQ3pDLEtBQUssR0FBRzBDLE1BQU0sQ0FBQ0csT0FBTyxDQUFDQyxZQUFZO2FBQzVDO1NBQ0osQ0FBQyxDQUNEUCxPQUFPLENBQUNiLEtBQUssQ0FBQ3FCLFFBQVEsRUFBRSxDQUFDTixLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUN4QyxNQUFNLEVBQUVaLFNBQVMsR0FBRSxHQUFHWSxNQUFNLENBQUNDLElBQUk7WUFDakMsSUFDSUYsS0FBSyxDQUFDeEMsT0FBTyxLQUFLLFNBQVMsSUFDM0J3QyxLQUFLLENBQUNULGdCQUFnQixLQUFLRixTQUFTLEVBQ3RDO2dCQUNFVyxLQUFLLENBQUN4QyxPQUFPLEdBQUcsTUFBTTtnQkFDdEJ3QyxLQUFLLENBQUMxQyxLQUFLLEdBQUcyQyxNQUFNLENBQUMzQyxLQUFLO2FBQzdCO1NBQ0osQ0FBQztLQUNUO0NBQ0osQ0FBQztBQUtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZmVhdHVyZXMvdXNlci5qcz8xZDQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IHsgaXBjUmVuZGVyZXIgfSBmcm9tICdlbGVjdHJvbic7XHJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZ3MnO1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB1c2VyOiBudWxsLFxyXG4gICAgZXJyb3I6IG51bGwsXHJcbiAgICB0b2tlbjogbnVsbCxcclxuICAgIGxvYWRpbmc6ICdpZGxlJyxcclxufVxyXG5cclxuY29uc3QgYXBpVXJsID0gY29uZmlnLmFwaVVybCgpXHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2dpblVzZXIoZGF0YSkge1xyXG4gICAgY29uc3QgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG5cclxuICAgIGNvbnN0IHJhdyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IG15SGVhZGVycyxcclxuICAgICAgICBib2R5OiByYXcsXHJcbiAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2FwaVVybH0vYXV0aC9sb2dpbmAsIHJlcXVlc3RPcHRpb25zKVxyXG4gICAgICAgIC8vIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xyXG4gICAgICAgIC8vICAgICB0aHJvdyByZXNwb25zZVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgJiYgcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLmFjY2Vzc190b2tlbilcclxuICAgICAgICAgICAgLy8gcm91dGVyLnB1c2goJy9wb2xpemEnKVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRyb3cgYW4gZXJyb3Igc28gcmVkdXgtdGh1bmsgY2FuIGhhbmRsZSBpdFxyXG4gICAgICAgICAgICB0aHJvdyByZXNwb25zZVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZXR1cm4gZGF0YVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBlcnJvci5qc29uKCkudGhlbihib2R5ID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYm9keSk7XHJcbiAgICAgICAgICAgIGlwY1JlbmRlcmVyLmludm9rZSgnc2hvd0RpYWxvZycsIGJvZHkubWVzc2FnZSkgICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgbG9naW4gPSBjcmVhdGVBc3luY1RodW5rKFxyXG4gICAgJ3VzZXJzL2xvZ2luJyxcclxuICAgIGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCB9LCB7IGdldFN0YXRlLCByZXF1ZXN0SWQsIHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50UmVxdWVzdElkLCBsb2FkaW5nIH0gPSBnZXRTdGF0ZSgpLnVzZXJzXHJcbiAgICAgICAgaWYgKGxvYWRpbmcgIT09ICdwZW5kaW5nJyB8fCByZXF1ZXN0SWQgIT09IGN1cnJlbnRSZXF1ZXN0SWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2dpblVzZXIoeyBlbWFpbCwgcGFzc3dvcmQgfSlcclxuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyAnZXJyb3InXHJcbiAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0V2l0aFZhbHVlKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuKVxyXG5cclxuY29uc3QgdXNlcnNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICd1c2VycycsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge30sXHJcbiAgICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xyXG4gICAgICAgIGJ1aWxkZXJcclxuICAgICAgICAgICAgLmFkZENhc2UobG9naW4ucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5sb2FkaW5nID09PSAnaWRsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gJ3BlbmRpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuY3VycmVudFJlcXVlc3RJZCA9IGFjdGlvbi5tZXRhLnJlcXVlc3RJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYWRkQ2FzZShsb2dpbi5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJlcXVlc3RJZCB9ID0gYWN0aW9uLm1ldGFcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID09PSAncGVuZGluZycgJiZcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5jdXJyZW50UmVxdWVzdElkID09PSByZXF1ZXN0SWRcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSAnaWRsZSdcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS50b2tlbiA9IGFjdGlvbi5wYXlsb2FkLmFjY2Vzc190b2tlblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYWRkQ2FzZShsb2dpbi5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVxdWVzdElkIH0gPSBhY3Rpb24ubWV0YVxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPT09ICdwZW5kaW5nJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRSZXF1ZXN0SWQgPT09IHJlcXVlc3RJZFxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubG9hZGluZyA9ICdpZGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IHtcclxuICAgIHVzZXJzU2xpY2UsXHJcbiAgICBsb2dpbixcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVBc3luY1RodW5rIiwiY3JlYXRlU2xpY2UiLCJpcGNSZW5kZXJlciIsImNvbmZpZyIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJlcnJvciIsInRva2VuIiwibG9hZGluZyIsImFwaVVybCIsImxvZ2luVXNlciIsImRhdGEiLCJteUhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwicmF3IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJyZWRpcmVjdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJzdGF0dXMiLCJvayIsImpzb24iLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImludm9rZSIsIm1lc3NhZ2UiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJnZXRTdGF0ZSIsInJlcXVlc3RJZCIsInJlamVjdFdpdGhWYWx1ZSIsImN1cnJlbnRSZXF1ZXN0SWQiLCJ1c2VycyIsInVzZXJzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJhY3Rpb24iLCJtZXRhIiwiZnVsZmlsbGVkIiwicGF5bG9hZCIsImFjY2Vzc190b2tlbiIsInJlamVjdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./features/user.js\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/store */ \"./app/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n\n\n // _app.jsx\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [queryClient] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(()=>new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient()\n    );\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n        store: _app_store__WEBPACK_IMPORTED_MODULE_4__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n            client: queryClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_3__.Hydrate, {\n                state: pageProps.dehydratedState,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Renysin\\\\Desktop\\\\Proyecto Enyel\\\\Tesis\\\\Desktop-Front\\\\renderer\\\\pages\\\\_app.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Renysin\\\\Desktop\\\\Proyecto Enyel\\\\Tesis\\\\Desktop-Front\\\\renderer\\\\pages\\\\_app.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Renysin\\\\Desktop\\\\Proyecto Enyel\\\\Tesis\\\\Desktop-Front\\\\renderer\\\\pages\\\\_app.jsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Renysin\\\\Desktop\\\\Proyecto Enyel\\\\Tesis\\\\Desktop-Front\\\\renderer\\\\pages\\\\_app.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUVLLENBQUMsV0FBVztBQUM0QjtBQUNuQztBQUNFO0FBRXRDLFNBQVNNLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDLEdBQUdULHFEQUFjLENBQUMsSUFBTSxJQUFJRSxvREFBVyxFQUFFO0lBQUEsQ0FBQztJQUM3RCxxQkFFRSw4REFBQ0csaURBQVE7UUFBQ0QsS0FBSyxFQUFFQSw2Q0FBSztrQkFDcEIsNEVBQUNELDREQUFtQjtZQUFDUSxNQUFNLEVBQUVGLFdBQVc7c0JBQ3RDLDRFQUFDUixnREFBTztnQkFBQ1csS0FBSyxFQUFFSixTQUFTLENBQUNLLGVBQWU7MEJBQ3ZDLDRFQUFDTixTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7O3dCQUFJOzs7OztvQkFDcEI7Ozs7O2dCQUNVOzs7OztZQUNiLENBQ1g7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeD80Y2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7IC8vIF9hcHAuanN4XHJcbmltcG9ydCB7IEh5ZHJhdGUsIFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcXVlcnknXHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vYXBwL3N0b3JlJ1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3QgW3F1ZXJ5Q2xpZW50XSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IG5ldyBRdWVyeUNsaWVudCgpKVxyXG4gIHJldHVybiAoXHJcblxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxyXG4gICAgICAgIDxIeWRyYXRlIHN0YXRlPXtwYWdlUHJvcHMuZGVoeWRyYXRlZFN0YXRlfT5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0h5ZHJhdGU+XHJcbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkh5ZHJhdGUiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJzdG9yZSIsIlByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJxdWVyeUNsaWVudCIsInVzZVN0YXRlIiwiY2xpZW50Iiwic3RhdGUiLCJkZWh5ZHJhdGVkU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

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