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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/user */ \"./features/user.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        users: _features_user__WEBPACK_IMPORTED_MODULE_1__.usersSlice.reducer\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRDtBQUNKO0FBQ3RDLE1BQU1FLEtBQUssR0FBR0YsZ0VBQWMsQ0FBQztJQUNoQ0csT0FBTyxFQUFFO1FBQ0xDLEtBQUssRUFBRUgsOERBQWtCO0tBQzVCO0NBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9zdG9yZS5qcz9jYWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IHVzZXJzU2xpY2UgfSBmcm9tICcuLi9mZWF0dXJlcy91c2VyJ1xuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXI6IHtcbiAgICAgICAgdXNlcnM6IHVzZXJzU2xpY2UucmVkdWNlclxuICAgIH0sXG59KSJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInVzZXJzU2xpY2UiLCJzdG9yZSIsInJlZHVjZXIiLCJ1c2VycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/store.js\n");

/***/ }),

/***/ "./features/user.js":
/*!**************************!*\
  !*** ./features/user.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"usersSlice\": () => (/* binding */ usersSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configs */ \"../configs.js\");\n\n\n\nconst initialState = {\n    user: null,\n    error: null,\n    token: null,\n    loading: \"idle\"\n};\nconst apiUrl = _configs__WEBPACK_IMPORTED_MODULE_2__.config.apiUrl();\nasync function loginUser(data) {\n    const myHeaders = new Headers();\n    myHeaders.append(\"Content-Type\", \"application/json\");\n    const raw = JSON.stringify(data);\n    const requestOptions = {\n        method: \"POST\",\n        headers: myHeaders,\n        body: raw,\n        redirect: \"follow\"\n    };\n    try {\n        const response = await fetch(`${apiUrl}/auth/login`, requestOptions);\n        // if (response.status === 403) {\n        //     throw response\n        // }\n        if (response.status === 200 && response.ok) {\n            const data = await response.json();\n            // localStorage.setItem('token', data.access_token)\n            // router.push('/poliza')\n            return data;\n        } else {\n            // trow an error so redux-thunk can handle it\n            throw response;\n        }\n    // return data\n    } catch (error) {\n        error.json().then((body)=>{\n            console.log(body);\n            electron__WEBPACK_IMPORTED_MODULE_1__.ipcRenderer.invoke(\"showDialog\", body.message);\n        });\n        return false;\n    }\n}\nconst login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"users/login\", async ({ email , password  }, { getState , requestId , rejectWithValue  })=>{\n    const { currentRequestId , loading  } = getState().users;\n    if (loading !== \"pending\" || requestId !== currentRequestId) {\n        return;\n    }\n    try {\n        const data = await loginUser({\n            email,\n            password\n        });\n        if (!data) {\n            throw \"error\";\n        }\n        return data;\n    } catch (error) {\n        console.log(error);\n        return rejectWithValue(error);\n    }\n});\nconst usersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"users\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(login.pending, (state, action)=>{\n            if (state.loading === \"idle\") {\n                state.loading = \"pending\";\n                state.currentRequestId = action.meta.requestId;\n            }\n        }).addCase(login.fulfilled, (state, action)=>{\n            const { requestId  } = action.meta;\n            if (state.loading === \"pending\" && state.currentRequestId === requestId) {\n                state.loading = \"idle\";\n                state.token = action.payload.access_token;\n            }\n        }).addCase(login.rejected, (state, action)=>{\n            const { requestId  } = action.meta;\n            if (state.loading === \"pending\" && state.currentRequestId === requestId) {\n                state.loading = \"idle\";\n                state.error = action.error;\n            }\n        });\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQ3ZDLElBQUlELEtBQUssQ0FBQ3hDLE9BQU8sS0FBSyxNQUFNLEVBQUU7Z0JBQzFCd0MsS0FBSyxDQUFDeEMsT0FBTyxHQUFHLFNBQVM7Z0JBQ3pCd0MsS0FBSyxDQUFDVCxnQkFBZ0IsR0FBR1UsTUFBTSxDQUFDQyxJQUFJLENBQUNiLFNBQVM7YUFDakQ7U0FDSixDQUFDLENBQ0RTLE9BQU8sQ0FBQ2IsS0FBSyxDQUFDa0IsU0FBUyxFQUFFLENBQUNILEtBQUssRUFBRUMsTUFBTSxHQUFLO1lBQ3pDLE1BQU0sRUFBRVosU0FBUyxHQUFFLEdBQUdZLE1BQU0sQ0FBQ0MsSUFBSTtZQUNqQyxJQUNJRixLQUFLLENBQUN4QyxPQUFPLEtBQUssU0FBUyxJQUMzQndDLEtBQUssQ0FBQ1QsZ0JBQWdCLEtBQUtGLFNBQVMsRUFDdEM7Z0JBQ0VXLEtBQUssQ0FBQ3hDLE9BQU8sR0FBRyxNQUFNO2dCQUN0QndDLEtBQUssQ0FBQ3pDLEtBQUssR0FBRzBDLE1BQU0sQ0FBQ0csT0FBTyxDQUFDQyxZQUFZO2FBQzVDO1NBQ0osQ0FBQyxDQUNEUCxPQUFPLENBQUNiLEtBQUssQ0FBQ3FCLFFBQVEsRUFBRSxDQUFDTixLQUFLLEVBQUVDLE1BQU0sR0FBSztZQUN4QyxNQUFNLEVBQUVaLFNBQVMsR0FBRSxHQUFHWSxNQUFNLENBQUNDLElBQUk7WUFDakMsSUFDSUYsS0FBSyxDQUFDeEMsT0FBTyxLQUFLLFNBQVMsSUFDM0J3QyxLQUFLLENBQUNULGdCQUFnQixLQUFLRixTQUFTLEVBQ3RDO2dCQUNFVyxLQUFLLENBQUN4QyxPQUFPLEdBQUcsTUFBTTtnQkFDdEJ3QyxLQUFLLENBQUMxQyxLQUFLLEdBQUcyQyxNQUFNLENBQUMzQyxLQUFLO2FBQzdCO1NBQ0osQ0FBQztLQUNUO0NBQ0osQ0FBQztBQUtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZmVhdHVyZXMvdXNlci5qcz8xZDQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7IGlwY1JlbmRlcmVyIH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlncyc7XG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgdXNlcjogbnVsbCxcbiAgICBlcnJvcjogbnVsbCxcbiAgICB0b2tlbjogbnVsbCxcbiAgICBsb2FkaW5nOiAnaWRsZScsXG59XG5cbmNvbnN0IGFwaVVybCA9IGNvbmZpZy5hcGlVcmwoKVxuXG5hc3luYyBmdW5jdGlvbiBsb2dpblVzZXIoZGF0YSkge1xuICAgIGNvbnN0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgbXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cbiAgICBjb25zdCByYXcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgICAgICBib2R5OiByYXcsXG4gICAgICAgIHJlZGlyZWN0OiAnZm9sbG93J1xuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHthcGlVcmx9L2F1dGgvbG9naW5gLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgLy8gaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgIC8vICAgICB0aHJvdyByZXNwb25zZVxuICAgICAgICAvLyB9XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCAmJiByZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS5hY2Nlc3NfdG9rZW4pXG4gICAgICAgICAgICAvLyByb3V0ZXIucHVzaCgnL3BvbGl6YScpXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdHJvdyBhbiBlcnJvciBzbyByZWR1eC10aHVuayBjYW4gaGFuZGxlIGl0XG4gICAgICAgICAgICB0aHJvdyByZXNwb25zZVxuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybiBkYXRhXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZXJyb3IuanNvbigpLnRoZW4oYm9keSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcbiAgICAgICAgICAgIGlwY1JlbmRlcmVyLmludm9rZSgnc2hvd0RpYWxvZycsIGJvZHkubWVzc2FnZSkgICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5cbmNvbnN0IGxvZ2luID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgICAndXNlcnMvbG9naW4nLFxuICAgIGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCB9LCB7IGdldFN0YXRlLCByZXF1ZXN0SWQsIHJlamVjdFdpdGhWYWx1ZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudFJlcXVlc3RJZCwgbG9hZGluZyB9ID0gZ2V0U3RhdGUoKS51c2Vyc1xuICAgICAgICBpZiAobG9hZGluZyAhPT0gJ3BlbmRpbmcnIHx8IHJlcXVlc3RJZCAhPT0gY3VycmVudFJlcXVlc3RJZCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2dpblVzZXIoeyBlbWFpbCwgcGFzc3dvcmQgfSlcbiAgICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgICAgIHRocm93ICdlcnJvcidcbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdFdpdGhWYWx1ZShlcnJvcilcbiAgICAgICAgfVxuICAgIH1cbilcblxuY29uc3QgdXNlcnNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiAndXNlcnMnLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge30sXG4gICAgZXh0cmFSZWR1Y2VyczogKGJ1aWxkZXIpID0+IHtcbiAgICAgICAgYnVpbGRlclxuICAgICAgICAgICAgLmFkZENhc2UobG9naW4ucGVuZGluZywgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUubG9hZGluZyA9PT0gJ2lkbGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSAncGVuZGluZydcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuY3VycmVudFJlcXVlc3RJZCA9IGFjdGlvbi5tZXRhLnJlcXVlc3RJZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYWRkQ2FzZShsb2dpbi5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXF1ZXN0SWQgfSA9IGFjdGlvbi5tZXRhXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID09PSAncGVuZGluZycgJiZcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuY3VycmVudFJlcXVlc3RJZCA9PT0gcmVxdWVzdElkXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSAnaWRsZSdcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUudG9rZW4gPSBhY3Rpb24ucGF5bG9hZC5hY2Nlc3NfdG9rZW5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENhc2UobG9naW4ucmVqZWN0ZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXF1ZXN0SWQgfSA9IGFjdGlvbi5tZXRhXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID09PSAncGVuZGluZycgJiZcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuY3VycmVudFJlcXVlc3RJZCA9PT0gcmVxdWVzdElkXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSAnaWRsZSdcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3JcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH0sXG59KVxuXG5leHBvcnQge1xuICAgIHVzZXJzU2xpY2UsXG4gICAgbG9naW4sXG59Il0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJjcmVhdGVTbGljZSIsImlwY1JlbmRlcmVyIiwiY29uZmlnIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsImVycm9yIiwidG9rZW4iLCJsb2FkaW5nIiwiYXBpVXJsIiwibG9naW5Vc2VyIiwiZGF0YSIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJyYXciLCJKU09OIiwic3RyaW5naWZ5IiwicmVxdWVzdE9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInJlZGlyZWN0IiwicmVzcG9uc2UiLCJmZXRjaCIsInN0YXR1cyIsIm9rIiwianNvbiIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiaW52b2tlIiwibWVzc2FnZSIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImdldFN0YXRlIiwicmVxdWVzdElkIiwicmVqZWN0V2l0aFZhbHVlIiwiY3VycmVudFJlcXVlc3RJZCIsInVzZXJzIiwidXNlcnNTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImFjdGlvbiIsIm1ldGEiLCJmdWxmaWxsZWQiLCJwYXlsb2FkIiwiYWNjZXNzX3Rva2VuIiwicmVqZWN0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./features/user.js\n");

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/store */ \"./app/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n\n\n // _app.jsx\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [queryClient] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(()=>new react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient()\n    );\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n        store: _app_store__WEBPACK_IMPORTED_MODULE_4__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n            client: queryClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_3__.Hydrate, {\n                state: pageProps.dehydratedState,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Renysin\\\\Desktop\\\\Proyecto Enyel\\\\Tesis\\\\Desktop-Front\\\\renderer\\\\pages\\\\_app.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Renysin\\\\Desktop\\\\Proyecto Enyel\\\\Tesis\\\\Desktop-Front\\\\renderer\\\\pages\\\\_app.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Renysin\\\\Desktop\\\\Proyecto Enyel\\\\Tesis\\\\Desktop-Front\\\\renderer\\\\pages\\\\_app.jsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Renysin\\\\Desktop\\\\Proyecto Enyel\\\\Tesis\\\\Desktop-Front\\\\renderer\\\\pages\\\\_app.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUVLLENBQUMsV0FBVztBQUM0QjtBQUNuQztBQUNFO0FBRXRDLFNBQVNNLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDLEdBQUdULHFEQUFjLENBQUMsSUFBTSxJQUFJRSxvREFBVyxFQUFFO0lBQUEsQ0FBQztJQUM3RCxxQkFFRSw4REFBQ0csaURBQVE7UUFBQ0QsS0FBSyxFQUFFQSw2Q0FBSztrQkFDcEIsNEVBQUNELDREQUFtQjtZQUFDUSxNQUFNLEVBQUVGLFdBQVc7c0JBQ3RDLDRFQUFDUixnREFBTztnQkFBQ1csS0FBSyxFQUFFSixTQUFTLENBQUNLLGVBQWU7MEJBQ3ZDLDRFQUFDTixTQUFTO29CQUFFLEdBQUdDLFNBQVM7Ozs7O3dCQUFJOzs7OztvQkFDcEI7Ozs7O2dCQUNVOzs7OztZQUNiLENBQ1g7Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeD80Y2IzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJzsgLy8gX2FwcC5qc3hcbmltcG9ydCB7IEh5ZHJhdGUsIFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcXVlcnknXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL2FwcC9zdG9yZSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBbcXVlcnlDbGllbnRdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gbmV3IFF1ZXJ5Q2xpZW50KCkpXG4gIHJldHVybiAoXG5cbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgICA8SHlkcmF0ZSBzdGF0ZT17cGFnZVByb3BzLmRlaHlkcmF0ZWRTdGF0ZX0+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0h5ZHJhdGU+XG4gICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJIeWRyYXRlIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwic3RvcmUiLCJQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicXVlcnlDbGllbnQiLCJ1c2VTdGF0ZSIsImNsaWVudCIsInN0YXRlIiwiZGVoeWRyYXRlZFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n");

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