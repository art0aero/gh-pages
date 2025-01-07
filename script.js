// Fetch blog posts from API
    fetch('https://api.example.com/blog-posts')
        .then(response => response.json())
        .then(blogPosts => {
            const blogPostsContainer = document.getElementById('blog-posts');
            blogPosts.forEach(blogPost => {
                const blogPostHTML = `
                    <article>
                        <h2>${blogPost.title}</h2>
                        <p>${blogPost.content}</p>
                    </article>
                `;
                blogPostsContainer.insertAdjacentHTML('beforeend', blogPostHTML);
            });
        });
