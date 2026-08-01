document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('article-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const articlesGrid = document.getElementById('articles-grid');
    const articles = articlesGrid ? articlesGrid.querySelectorAll('.article-card') : [];

    let currentCategory = 'all';
    let searchQuery = '';

    function filterArticles() {
        articles.forEach(article => {
            const category = article.getAttribute('data-category');
            const title = article.getAttribute('data-title').toLowerCase();
            
            const matchesCategory = (currentCategory === 'all' || category === currentCategory);
            const matchesSearch = title.includes(searchQuery.toLowerCase());

            if (matchesCategory && matchesSearch) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }

    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            filterArticles();
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            filterArticles();
        });
    });
});
