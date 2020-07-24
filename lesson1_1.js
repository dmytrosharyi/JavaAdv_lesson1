const People = (function () {
    const db = ['Dmytro', 'Nataliia', 'Peter', 'Olga'];
    let data;
    let button;
    let ul;
    let cross;

    function init() {
        cacheDom();
        bindEvent();
    }

    function cacheDom() {
        data = $('#userName');
        button = $('#addName');
        ul = $('#people');
    }

    function bindEvent() {
        button.click(function () {
            addPersonName();
        });
        ul.delegate('span', 'click', function (event) {
            delPersonName(event);
        })
    }

    function render() {
        console.log(db);
        ul.html('Data Base');
        for (let i = 0; i < db.length; i++) {
            ul.append(`<li>${db[i]}<span></span></li>`);
        }
    }

    function addPersonName() {
        let name = data.val();
        db.push(name);
        render();
        data.val('');
    }

    function delPersonName(event) {
        let deleted = $(event.target).closest('li');
        let i = ul.find('li').index(deleted);
        db.splice(i, 1);
        render();
    }

    return {
        init: init
    }
})();

People.init();
