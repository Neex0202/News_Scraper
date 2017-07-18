
function displayArticles(articles){

articles.forEach(function(article){

$(".post-title").append(article[1].title);
$(".articleLink").append("href='"+ article[1].link + "'");

	
})

}

// Asking backend for json with all articles
// First thing: ask the back end for json with all animals
$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayArticles(data);
});



$.get("/", function(data) {
  // Call our function to generate a table body
  displayArticles(data);
});
