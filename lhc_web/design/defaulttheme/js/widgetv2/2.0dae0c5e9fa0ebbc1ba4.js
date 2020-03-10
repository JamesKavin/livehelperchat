(window["webpackJsonpLHCReactAPP"] = window["webpackJsonpLHCReactAPP"] || []).push([[2],{

/***/ "./src/extensions/nodejs/nodeJSChat.js":
/*!*********************************************!*\
  !*** ./src/extensions/nodejs/nodeJSChat.js ***!
  \*********************************************/
/*! exports provided: nodeJSChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nodeJSChat\", function() { return nodeJSChat; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/helperFunctions */ \"./src/lib/helperFunctions.js\");\n/* harmony import */ var _actions_chatActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/chatActions */ \"./src/actions/chatActions.js\");\n\n\n\n\n\nvar _nodeJSChat = /*#__PURE__*/function () {\n  function _nodeJSChat() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _nodeJSChat);\n\n    this.socket = null;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_nodeJSChat, [{\n    key: \"bootstrap\",\n    value: function bootstrap(params, dispatch, getState) {\n      var state = getState();\n      var chatId = state.chatwidget.getIn(['chatData', 'id']);\n      var chatHash = state.chatwidget.getIn(['chatData', 'hash']);\n      var syncDefault = state.chatwidget.getIn(['chat_ui', 'sync_interval']);\n      var socketOptions = {\n        hostname: params.hostname,\n        path: params.path\n      };\n\n      if (params.port != '') {\n        socketOptions.port = parseInt(params.port);\n      }\n\n      if (params.secure == 1) {\n        socketOptions.secure = true;\n      }\n\n      var chanelName;\n\n      if (params.instance_id > 0) {\n        chanelName = 'chat_' + params.instance_id + '_' + chatId;\n      } else {\n        chanelName = 'chat_' + chatId;\n      }\n\n      var socketCluster = __webpack_require__(/*! socketcluster-client */ \"./node_modules/socketcluster-client/index.js\");\n\n      var socket = socketCluster.connect(socketOptions);\n      var sampleChannel = null;\n      socket.on('error', function (err) {\n        console.error(err);\n      });\n\n      function visitorTypingListener(data) {\n        if (data.status == true) {\n          if (params.instance_id > 0) {\n            socket.publish('chat_' + params.instance_id + '_' + chatId, {\n              'op': 'vt',\n              'msg': data.msg\n            });\n          } else {\n            socket.publish('chat_' + chatId, {\n              'op': 'vt',\n              'msg': data.msg\n            });\n          }\n        } else {\n          if (params.instance_id > 0) {\n            socket.publish('chat_' + params.instance_id + '_' + chatId, {\n              'op': 'vts'\n            });\n          } else {\n            socket.publish('chat_' + chatId, {\n              'op': 'vts'\n            });\n          }\n        }\n      }\n\n      socket.on('close', function () {\n        if (sampleChannel !== null) {\n          sampleChannel.destroy();\n        }\n\n        _lib_helperFunctions__WEBPACK_IMPORTED_MODULE_2__[\"helperFunctions\"].eventEmitter.removeListener('visitorTyping', visitorTypingListener);\n        dispatch({\n          'type': 'CHAT_UI_UPDATE',\n          'data': {\n            sync_interval: syncDefault\n          }\n        });\n        dispatch({\n          'type': 'CHAT_REMOVE_OVERRIDE',\n          'data': \"typing\"\n        });\n      });\n\n      function connectVisitor() {\n        if (params.instance_id > 0) {\n          sampleChannel = socket.subscribe('chat_' + params.instance_id + '_' + chatId);\n        } else {\n          sampleChannel = socket.subscribe('chat_' + chatId);\n        }\n\n        sampleChannel.on('subscribeFail', function (err) {\n          console.error('Failed to subscribe to the sample channel due to error: ' + err);\n        });\n        sampleChannel.watch(function (op) {\n          if (op.op == 'ot') {\n            // Operator Typing Message\n            if (op.data.status == true) {\n              dispatch({\n                'type': 'chat_status_changed',\n                'data': {\n                  text: op.data.ttx\n                }\n              });\n            } else {\n              dispatch({\n                'type': 'chat_status_changed',\n                'data': {\n                  text: ''\n                }\n              });\n            }\n          } else if (op.op == 'cmsg' || op.op == 'schange') {\n            var _state = getState();\n\n            dispatch(Object(_actions_chatActions__WEBPACK_IMPORTED_MODULE_3__[\"fetchMessages\"])({\n              'chat_id': _state.chatwidget.getIn(['chatData', 'id']),\n              'hash': _state.chatwidget.getIn(['chatData', 'hash']),\n              'lmgsid': _state.chatwidget.getIn(['chatLiveData', 'lmsgid']),\n              'theme': _state.chatwidget.get('theme')\n            }));\n          } else if (op.op == 'schange') {\n            var _state2 = getState();\n\n            dispatch(Object(_actions_chatActions__WEBPACK_IMPORTED_MODULE_3__[\"checkChatStatus\"])({\n              'chat_id': _state2.chatwidget.getIn(['chatData', 'id']),\n              'hash': _state2.chatwidget.getIn(['chatData', 'hash']),\n              'mode': _state2.chatwidget.get('mode'),\n              'theme': _state2.chatwidget.get('theme')\n            }));\n          }\n        });\n        _lib_helperFunctions__WEBPACK_IMPORTED_MODULE_2__[\"helperFunctions\"].eventEmitter.addListener('visitorTyping', visitorTypingListener);\n        dispatch({\n          'type': 'CHAT_UI_UPDATE',\n          'data': {\n            sync_interval: 10000\n          }\n        });\n        dispatch({\n          'type': 'CHAT_ADD_OVERRIDE',\n          'data': \"typing\"\n        });\n      }\n\n      socket.on('connect', function (status) {\n        if (status.isAuthenticated && chatId > 0) {\n          connectVisitor();\n        } else {\n          socket.emit('login', {\n            hash: params.hash,\n            chanelName: chanelName\n          }, function (err) {\n            if (err) {\n              console.log(err);\n            } else {\n              connectVisitor();\n            }\n          });\n        }\n      });\n    }\n  }]);\n\n  return _nodeJSChat;\n}();\n\nvar nodeJSChat = new _nodeJSChat();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXh0ZW5zaW9ucy9ub2RlanMvbm9kZUpTQ2hhdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0xIQ1JlYWN0QVBQLy4vc3JjL2V4dGVuc2lvbnMvbm9kZWpzL25vZGVKU0NoYXQuanM/NTgyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoZWxwZXJGdW5jdGlvbnMgfSBmcm9tIFwiLi4vLi4vbGliL2hlbHBlckZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZmV0Y2hNZXNzYWdlcywgY2hlY2tDaGF0U3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FjdGlvbnMvY2hhdEFjdGlvbnNcIlxuXG5jbGFzcyBfbm9kZUpTQ2hhdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc29ja2V0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBib290c3RyYXAocGFyYW1zLCBkaXNwYXRjaCwgZ2V0U3RhdGUpIHtcblxuICAgICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgIGNvbnN0IGNoYXRJZCA9IHN0YXRlLmNoYXR3aWRnZXQuZ2V0SW4oWydjaGF0RGF0YScsJ2lkJ10pO1xuICAgICAgICBjb25zdCBjaGF0SGFzaCA9IHN0YXRlLmNoYXR3aWRnZXQuZ2V0SW4oWydjaGF0RGF0YScsJ2hhc2gnXSk7XG4gICAgICAgIGNvbnN0IHN5bmNEZWZhdWx0ID0gc3RhdGUuY2hhdHdpZGdldC5nZXRJbihbJ2NoYXRfdWknLCdzeW5jX2ludGVydmFsJ10pO1xuXG4gICAgICAgIHZhciBzb2NrZXRPcHRpb25zID0ge1xuICAgICAgICAgICAgaG9zdG5hbWU6IHBhcmFtcy5ob3N0bmFtZSxcbiAgICAgICAgICAgIHBhdGg6IHBhcmFtcy5wYXRoXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLnBvcnQgIT0gJycpIHtcbiAgICAgICAgICAgIHNvY2tldE9wdGlvbnMucG9ydCA9IHBhcnNlSW50KHBhcmFtcy5wb3J0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuc2VjdXJlID09IDEpIHtcbiAgICAgICAgICAgIHNvY2tldE9wdGlvbnMuc2VjdXJlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGFuZWxOYW1lO1xuXG4gICAgICAgIGlmIChwYXJhbXMuaW5zdGFuY2VfaWQgPiAwKSB7XG4gICAgICAgICAgICBjaGFuZWxOYW1lID0gKCdjaGF0XycrcGFyYW1zLmluc3RhbmNlX2lkKydfJytjaGF0SWQpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBjaGFuZWxOYW1lID0gKCdjaGF0XycrY2hhdElkKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmFyIHNvY2tldENsdXN0ZXIgPSByZXF1aXJlKCdzb2NrZXRjbHVzdGVyLWNsaWVudCcpO1xuXG4gICAgICAgIHZhciBzb2NrZXQ9IHNvY2tldENsdXN0ZXIuY29ubmVjdChzb2NrZXRPcHRpb25zKTtcbiAgICAgICAgXG4gICAgICAgIHZhciBzYW1wbGVDaGFubmVsID0gbnVsbDtcbiAgICAgICAgXG4gICAgICAgIHNvY2tldC5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgZnVuY3Rpb24gdmlzaXRvclR5cGluZ0xpc3RlbmVyKGRhdGEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmluc3RhbmNlX2lkID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzb2NrZXQucHVibGlzaCgnY2hhdF8nK3BhcmFtcy5pbnN0YW5jZV9pZCsnXycrY2hhdElkLHsnb3AnOid2dCcsJ21zZyc6ZGF0YS5tc2d9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzb2NrZXQucHVibGlzaCgnY2hhdF8nK2NoYXRJZCx7J29wJzondnQnLCdtc2cnOmRhdGEubXNnfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmluc3RhbmNlX2lkID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBzb2NrZXQucHVibGlzaCgnY2hhdF8nK3BhcmFtcy5pbnN0YW5jZV9pZCsnXycrY2hhdElkLHsnb3AnOid2dHMnfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LnB1Ymxpc2goJ2NoYXRfJytjaGF0SWQseydvcCc6J3Z0cyd9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzb2NrZXQub24oJ2Nsb3NlJywgZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgaWYgKHNhbXBsZUNoYW5uZWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzYW1wbGVDaGFubmVsLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGVscGVyRnVuY3Rpb25zLmV2ZW50RW1pdHRlci5yZW1vdmVMaXN0ZW5lcigndmlzaXRvclR5cGluZycsIHZpc2l0b3JUeXBpbmdMaXN0ZW5lcik7XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAndHlwZSc6ICdDSEFUX1VJX1VQREFURScsXG4gICAgICAgICAgICAgICAgJ2RhdGEnOiB7c3luY19pbnRlcnZhbDogc3luY0RlZmF1bHR9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICd0eXBlJzogJ0NIQVRfUkVNT1ZFX09WRVJSSURFJyxcbiAgICAgICAgICAgICAgICAnZGF0YSc6IFwidHlwaW5nXCJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNvbm5lY3RWaXNpdG9yKCl7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmluc3RhbmNlX2lkID4gMCkge1xuICAgICAgICAgICAgICAgIHNhbXBsZUNoYW5uZWwgPSBzb2NrZXQuc3Vic2NyaWJlKCdjaGF0XycrcGFyYW1zLmluc3RhbmNlX2lkKydfJytjaGF0SWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzYW1wbGVDaGFubmVsID0gc29ja2V0LnN1YnNjcmliZSgnY2hhdF8nICsgY2hhdElkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2FtcGxlQ2hhbm5lbC5vbignc3Vic2NyaWJlRmFpbCcsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc3Vic2NyaWJlIHRvIHRoZSBzYW1wbGUgY2hhbm5lbCBkdWUgdG8gZXJyb3I6ICcgKyBlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNhbXBsZUNoYW5uZWwud2F0Y2goZnVuY3Rpb24gKG9wKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wLm9wID09ICdvdCcpIHsgLy8gT3BlcmF0b3IgVHlwaW5nIE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wLmRhdGEuc3RhdHVzID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHlwZSc6ICdjaGF0X3N0YXR1c19jaGFuZ2VkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IHt0ZXh0OiBvcC5kYXRhLnR0eH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2NoYXRfc3RhdHVzX2NoYW5nZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzoge3RleHQ6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wLm9wID09ICdjbXNnJyB8fCBvcC5vcCA9PSAnc2NoYW5nZScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChmZXRjaE1lc3NhZ2VzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdjaGF0X2lkJzogc3RhdGUuY2hhdHdpZGdldC5nZXRJbihbJ2NoYXREYXRhJywnaWQnXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAnaGFzaCcgOiBzdGF0ZS5jaGF0d2lkZ2V0LmdldEluKFsnY2hhdERhdGEnLCdoYXNoJ10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xtZ3NpZCcgOiBzdGF0ZS5jaGF0d2lkZ2V0LmdldEluKFsnY2hhdExpdmVEYXRhJywnbG1zZ2lkJ10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RoZW1lJyA6IHN0YXRlLmNoYXR3aWRnZXQuZ2V0KCd0aGVtZScpXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wLm9wID09ICdzY2hhbmdlJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoZWNrQ2hhdFN0YXR1cyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnY2hhdF9pZCc6IHN0YXRlLmNoYXR3aWRnZXQuZ2V0SW4oWydjaGF0RGF0YScsJ2lkJ10pLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hhc2gnIDogc3RhdGUuY2hhdHdpZGdldC5nZXRJbihbJ2NoYXREYXRhJywnaGFzaCddKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICdtb2RlJyA6IHN0YXRlLmNoYXR3aWRnZXQuZ2V0KCdtb2RlJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAndGhlbWUnIDogc3RhdGUuY2hhdHdpZGdldC5nZXQoJ3RoZW1lJylcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBoZWxwZXJGdW5jdGlvbnMuZXZlbnRFbWl0dGVyLmFkZExpc3RlbmVyKCd2aXNpdG9yVHlwaW5nJywgdmlzaXRvclR5cGluZ0xpc3RlbmVyKTtcblxuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICd0eXBlJzogJ0NIQVRfVUlfVVBEQVRFJyxcbiAgICAgICAgICAgICAgICAnZGF0YSc6IHtzeW5jX2ludGVydmFsOiAxMDAwMH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgJ3R5cGUnOiAnQ0hBVF9BRERfT1ZFUlJJREUnLFxuICAgICAgICAgICAgICAgICdkYXRhJzogXCJ0eXBpbmdcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzLmlzQXV0aGVudGljYXRlZCAmJiBjaGF0SWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdFZpc2l0b3IoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2xvZ2luJywge2hhc2g6cGFyYW1zLmhhc2gsIGNoYW5lbE5hbWU6IGNoYW5lbE5hbWV9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0VmlzaXRvcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY29uc3Qgbm9kZUpTQ2hhdCA9IG5ldyBfbm9kZUpTQ2hhdCgpO1xuZXhwb3J0IHsgbm9kZUpTQ2hhdCB9OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUdBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/extensions/nodejs/nodeJSChat.js\n");

/***/ })

}]);