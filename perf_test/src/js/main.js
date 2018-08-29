var tabsButtons = document.querySelectorAll('.tab-btn');
var formTabs = document.querySelectorAll('.form-tab');

[].forEach.call(tabsButtons, function(tabBtn, i) {
    tabBtn.addEventListener('click', function() {
        if (!tabBtn.classList.contains('active')) {
            document.querySelector('.tab-btn.active').classList.remove('active');
            document.querySelector('.form-tab.active').classList.remove('active');
            tabBtn.classList.add('active');
            formTabs[i].classList.add('active');
        }
    });
    tabBtn.addEventListener('touchend', function() {
        if (!tabBtn.classList.contains('active')) {
            document.querySelector('.tab-btn.active').classList.remove('active');
            document.querySelector('.form-tab.active').classList.remove('active');
            tabBtn.classList.add('active');
            formTabs[i].classList.add('active');
        }
    })
});
