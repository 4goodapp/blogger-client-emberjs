App = Ember.Application.create();

App.Router.map(function() {
    this.resource('about');
    this.resource('posts', function() {
        this.resource('post', { path: ':post_id' });
    });
});

App.PostsRoute = Ember.Route.extend({
    model: function() {
        return posts;
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

Ember.Handlebars

var posts = [{
    id: '1',
    title: 'test one two three',
    author: { name: 'Hank' },
    date: new Date() - 60 * 60 * 2 * 1000,
    excerpt: "# Lorem ipsum dolor sit amet \n consectetur adipisicing elit. Quasi earum possimus quidem animi perferendis esse eaque reprehenderit quis soluta suscipit. Ipsum, fugiat, laboriosam dolores nobis nihil iste perspiciatis suscipit quibusdam.",
    body: "## Lorem ipsum dolor sit amet \n consectetur adipisicing elit. Nam, facilis, dolores, et cupiditate illum quasi deleniti consequatur maiores minima possimus porro repellendus voluptatibus quam. Nihil, voluptates consequatur aut odit consequuntur!"
}, {
    id: '2',
    title: 'This is test 2',
    author: { name: 'Hank' },
    date: new Date() - 60 * 60 * 4 * 1000,
    excerpt: "# Lorem ipsum dolor sit amet \n consectetur adipisicing elit. Quasi earum possimus quidem animi perferendis esse eaque reprehenderit quis soluta suscipit. Ipsum, fugiat, laboriosam dolores nobis nihil iste perspiciatis suscipit quibusdam.",
    body: "## Lorem ipsum dolor sit amet \n consectetur adipisicing elit. Nam, facilis, dolores, et cupiditate illum quasi deleniti consequatur maiores minima possimus porro repellendus voluptatibus quam. Nihil, voluptates consequatur aut odit consequuntur!"
}];
