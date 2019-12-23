'use strict'
const ioHook = require('iohook')

const getInputValue = function() {
  let inputVal = ''
  let inputTimer = null

  // 监听输入状态
  ioHook.on('keypress', function(msg) {
    inputVal += String.fromCharCode(msg.keychar)

    clearTimeout(inputTimer)
    inputTimer = null
    inputTimer = setTimeout(function() {
      console.log(inputVal)

      clearTimeout(inputTimer)
      inputTimer = null
      inputVal = ''
    }, 500)
  })
}

//ioHook.on("keydown",function(msg){console.log(msg);});

//ioHook.on("keyup",function(msg){console.log(msg);});

//start ioHook
ioHook.start()
// ioHook.setDebug(true); // Uncomment this line for see all debug information from iohook

// 导出监听函数
// export default getInputValue;

console.log(getInputValue())
