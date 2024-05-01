let w = 0;
let h = 0;
let result = 0;

function bmiop() {
    w = document.getElementById("weight").value
    h = document.getElementById("height").value / 100

    if(w > 300 || h > 2.5){
        alert("กรุณาใส่ค่าตามจริง")
        return
    }

    if(w == "" || h == ""){
        alert("กรุณากรอกข้อมูล")
        return
    }
    result = (w / (h * h));

    document.getElementById("bmivalue").innerHTML = "ค่า BMI ของท่านคือ " + result.toFixed(2);

    
     if (result > 30.0) {
        document.getElementById("bmicriterion").innerHTML = "อ้วนมาก"
    } else if (result >= 25.0) {
        document.getElementById("bmicriterion").innerHTML = "อ้วน"
    } else if (result >= 23.0) {
        document.getElementById("bmicriterion").innerHTML = "เริ่มอ้วน"
    } else if (result >= 18.5) {
        document.getElementById("bmicriterion").innerHTML = "น้ำหนักปกติ"
    } else {
        document.getElementById("bmicriterion").innerHTML = "ผอมเกินไป"
    }
}