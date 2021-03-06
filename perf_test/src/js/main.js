(function () {
    var tabsButtons = document.querySelectorAll('.tab-btn');
    var formTabs = document.querySelectorAll('.form-tab');

    var inputFile = document.querySelector('#form-file-logo');

    var form = document.getElementById('shipping_form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });

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

    inputFile.addEventListener('change', function () {
        var file = this.files[0];
        var fileName = file.name;
        var label = this.nextElementSibling;

        label.innerHTML = 'Added logo:<br>' + fileName;

        this.parentElement.style.top = '25px';
    });

    document.querySelector('.btn-submit-form').onmousemove = function(e) {

        var x = e.pageX - e.target.offsetLeft;
        var y = e.pageY - e.target.offsetTop;

        e.target.style.setProperty('--x', x + 'px');
        e.target.style.setProperty('--y', y + 'px');

    };
})();

