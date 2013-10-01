var http = require('http');

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

http.createServer(function(req, res) {
    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*"
    });

    res.end(JSON.stringify({
        'posts': posts
    }));
}).listen(5000);
console.log('Server listening on port 5000');
