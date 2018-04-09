$(function(){

    var model = {
        init: function() {
            if (!localStorage.notes) {
                localStorage.notes = JSON.stringify([]);
            }
        },
        add: function(obj) {
            var data = JSON.parse(localStorage.notes);
            data.push(obj);
            localStorage.notes = JSON.stringify(data);
        },
        getAllNotes: function() {
            return JSON.parse(localStorage.notes);
        }
    };


    var octopus = {
        addNewNote: function(noteStr, noteDate) {
            model.add({
                content: noteStr,
                date: Date.now()
            });
            view.render();
        },

        getNotes: function() {
            return model.getAllNotes();
        },

        init: function() {
            model.init();
            view.init();
        }
    };


    var view = {
        init: function() {
            this.noteList = $('#notes');
            var newNoteForm = $('#new-note-form');
            var newNoteContent = $('#new-note-content');
            var clearBtn = $('.clear');
            newNoteForm.submit(function(e){
                if (newNoteContent.val().length > 0) {
                    octopus.addNewNote(newNoteContent.val());
                    newNoteContent.val('');
                }
                e.preventDefault();
            });
            clearBtn.on('click touchend', function(e) {
                e.preventDefault();
                localStorage.clear();
                octopus.init();
            });
            view.render();
        },
        render: function(){
            var htmlStr = '';
            var options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                timezone: 'UTC',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            };
            octopus.getNotes().forEach(function(note){
                htmlStr += '<li class="note">'+
                        '<div class="note-date">' +
                        new Date(note.date).toLocaleString("en-US", options) +
                        '</div>' +
                        note.content +
                    '</li>';
            });
            this.noteList.html( htmlStr );
        }
    };

    octopus.init();
});