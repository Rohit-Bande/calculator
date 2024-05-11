(function() {

    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn-clear");
    let equal = document.querySelector(".btn-equal");
    let backBtn = document.querySelector(".btn-back");

    let value = '';
    let previousContent = '';

    buttons.forEach((button) => {
        // console.log(button.dataset.num);
        button.addEventListener('click', function (e) {
            // console.log(e);
             value = e.target.dataset.num;
            screen.value += value;
        });
    });

    equal.addEventListener('click', function(e){
        console.log(e);
        if(screen.value == ''){
            screen.value = '';
        }else{
           let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener("click", function(){
        screen.value = "";
    })

    backBtn.addEventListener('click', function(){
        if (screen.value.length > 0) {
            screen.value = screen.value.slice(0, -1);
        }
    })


})();
