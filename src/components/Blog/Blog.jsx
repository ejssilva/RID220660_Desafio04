import './Blog.css';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Making a design system from scratch",
      date: "12 Feb 2030",
      tags: "Design, Pattern",
      excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
      id: 2,
      title: "Creating pixel perfect icons in Figma",
      date: "12 Feb 2030",
      tags: "Figma, Icon Design",
      excerpt: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
  ];

  return (
    <section id="blog" className="blog-section">
      <div className="blog-header">
        <h2>Blog</h2>
        <a href="#" className="view-all">View all</a>
      </div>
      <div className="blog-grid">
        {posts.map(post => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <div className="blog-meta">
              <span className="blog-date">{post.date}</span>
              <span className="blog-tags">{post.tags}</span>
            </div>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
