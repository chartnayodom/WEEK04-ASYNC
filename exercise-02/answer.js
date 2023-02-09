// ข้อ 2.1

function display(msg) {
    let div = document.getElementById('ex01-div')
    div.innerHTML = msg
}

function showConfirm(callback) {
    // You code here
    if(confirm("Okay?")){
        //call function
        callback("ยืนยันจร้า")
    }
    else{
        //call no function
        callback("ไม่ดีกว่า")
    }
}

// ข้อ 2.2
function start() {
    // hint: ส่ง callback function เข้าไปเป็น argument ของ setTimeout()
    console.log("Program started")
    setTimeout(()=>{
        console.log("Hello World")
        setTimeout(()=>{
            console.log("Program ended")
        },3000)
    },2000)
}

// ข้อ 2.3
function stopTime() {
    let secs = document.getElementById("Time").value
    document.getElementById('setSecond').innerHTML = secs
}

