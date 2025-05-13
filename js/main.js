const logoToggle = document.getElementById('logo-toggle');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  logoToggle.classList.remove('fa-moon');
  logoToggle.classList.add('fa-sun');
}

logoToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const isDark = document.body.classList.contains('dark');

  logoToggle.classList.toggle('fa-moon', !isDark);
  logoToggle.classList.toggle('fa-sun', isDark);

  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Blog Search Functionality
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchBar');
  const posts = document.querySelectorAll('#blogPosts .post-card');

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase();

      posts.forEach(post => {
        const title = post.querySelector('h2').innerText.toLowerCase();
        const excerpt = post.querySelector('p').innerText.toLowerCase();

        const matches = title.includes(query) || excerpt.includes(query);
        post.style.display = matches ? 'block' : 'none';
      });
    });
  }
});
