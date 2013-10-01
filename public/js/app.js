App = Ember.Application.create();

App.Router.map(function() {
    this.resource('about');
    this.resource('posts', function() {
        this.resource('post', { path: ':post_id' });
    });
});

var posts = {};

App.PostsRoute = Ember.Route.extend({
    model: function() {
        return $.getJSON('http://localhost:5000/').then(function(data) {
            posts = data.posts;
            return data.posts.map(function(post) {
                return post;
            });
        });
    }
});

App.PostRoute = Ember.Route.extend({
    model: function(params) {
        return posts.findBy('id', params.post_id);
    }
});

App.PostController = Ember.ObjectController.extend({
    isEditing: false,

    actions: {
        edit: function() {
            this.set('isEditing', true);
        },
        doneEditing: function() {
            this.set('isEditing', false);
        }
    }
});

Ember.Handlebars.helper('format-date', function(date) {
    return moment(date).fromNow();
});

Ember.Handlebars.helper('format-markdown', function(md) {
    return new Handlebars.SafeString(new Showdown.converter().makeHtml(md));
});
