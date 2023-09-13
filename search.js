<script>
  function searchArticles() {
    // Obtém o valor digitado pelo usuário no campo de busca
    var searchText = document.getElementById("search-input").value.toLowerCase();

    // Obtém todas as reportagens
    var articles = document.getElementsByClassName("article-educacao");

    // Percorre as reportagens e verifica se o título ou conteúdo contêm o texto de busca
    for (var i = 0; i < articles.length; i++) {
      var article = articles[i];
      var title = article.querySelector(".article-title").textContent.toLowerCase();
      var content = article.querySelector(".article-content").textContent.toLowerCase();

      // Verifica se o texto de busca está no título ou no conteúdo
      if (title.includes(searchText) || content.includes(searchText)) {
        article.style.display = "block"; // Mostra a reportagem
      } else {
        article.style.display = "none"; // Oculta a reportagem
      }
    }
  }

  function resetSearch() {
    // Limpa o campo de pesquisa
    document.getElementById("search-input").value = "";

    // Obtém todas as reportagens
    var articles = document.getElementsByClassName("article-educacao");

    // Mostra todas as reportagens
    for (var i = 0; i < articles.length; i++) {
      articles[i].style.display = "block";
    }
  }
</script>

