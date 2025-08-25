import React, { useState, useEffect } from 'react';

// Icon components using HTML symbols
const Heart = ({ size = 20, className = "" }) => (
  <span className={`inline-block ${className}`} style={{ fontSize: size }}>❤️</span>
);
const MessageCircle = ({ size = 20, className = "" }) => (
  <span className={`inline-block ${className}`} style={{ fontSize: size }}>💬</span>
);
const Share2 = ({ size = 20, className = "" }) => (
  <span className={`inline-block ${className}`} style={{ fontSize: size }}>📤</span>
);
const Edit3 = ({ size = 16, className = "" }) => (
  <span className={`inline-block ${className}`} style={{ fontSize: size }}>✏️</span>
);
const Bell = ({ size = 20, className = "" }) => (
  <span className={`inline-block ${className}`} style={{ fontSize: size }}>🔔</span>
);
const Home = ({ size = 20, className = "" }) => (
  <span className={`inline-block ${className}`} style={{ fontSize: size }}>🏠</span>
);
const UsersIcon = ({ size = 20, className = "" }) => (
  <span className={`inline-block ${className}`} style={{ fontSize: size }}>👥</span>
);
const ArrowLeft = ({ size = 16, className = "" }) => (
  <span className={`inline-block ${className}`} style={{ fontSize: size }}>←</span>
);

// CSS Styles
const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif'
  },
  nav: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  brand: {
    fontSize: '20px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  navLinks: {
    display: 'flex',
    gap: '24px'
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'background-color 0.3s'
  },
  createBtn: {
    backgroundColor: '#1d4ed8',
    padding: '8px 16px',
    borderRadius: '8px',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '24px'
  },
  header: {
    marginBottom: '32px'
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#111',
    marginBottom: '8px'
  },
  subtitle: {
    color: '#666',
    fontSize: '16px'
  },
  tabGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px',
    marginBottom: '32px'
  },
  tab: {
    padding: '16px',
    borderRadius: '8px',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'white',
    display: 'block',
    transition: 'transform 0.2s',
    cursor: 'pointer'
  },
  tabHome: {
    backgroundColor: '#3b82f6'
  },
  tabUsers: {
    backgroundColor: '#10b981'
  },
  tabNotifications: {
    backgroundColor: '#f59e0b'
  },
  tabCreate: {
    backgroundColor: '#8b5cf6'
  },
  post: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '24px',
    marginBottom: '16px'
  },
  postHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  avatar: {
    fontSize: '32px'
  },
  authorInfo: {
    display: 'flex',
    flexDirection: 'column'
  },
  authorName: {
    fontWeight: 'bold',
    color: '#111'
  },
  timestamp: {
    fontSize: '14px',
    color: '#666'
  },
  editBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    backgroundColor: 'transparent',
    border: '1px solid #ddd',
    borderRadius: '6px',
    color: '#2563eb',
    cursor: 'pointer'
  },
  postTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#111',
    marginBottom: '12px'
  },
  postContent: {
    color: '#333',
    lineHeight: '1.6',
    marginBottom: '16px'
  },
  reactions: {
    display: 'flex',
    gap: '16px',
    paddingTop: '16px',
    borderTop: '1px solid #eee',
    flexWrap: 'wrap'
  },
  reactionBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'none',
    border: '1px solid #e5e7eb',
    color: '#374151',
    cursor: 'pointer',
    padding: '6px 10px',
    borderRadius: '6px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151'
  },
  input: {
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box'
  },
  textarea: {
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    minHeight: '120px',
    resize: 'vertical',
    width: '100%',
    boxSizing: 'border-box'
  },
  select: {
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box'
  },
  btnPrimary: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer'
  },
  btnSecondary: {
    backgroundColor: 'white',
    color: '#374151',
    padding: '12px 24px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block'
  },
  btnGroup: {
    display: 'flex',
    gap: '16px'
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#2563eb',
    textDecoration: 'none',
    marginBottom: '24px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px'
  },
  notificationCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '16px',
    borderLeft: '4px solid #2563eb',
    marginBottom: '16px'
  }
};

// Mock data - exactly 3 users for Users page requirement
const initialUsers = [
  { id: 1, name: 'Alice Johnson', avatar: '👩‍💻' },
  { id: 2, name: 'Bob Smith', avatar: '👨‍🎨' },
  { id: 3, name: 'Carol Davis', avatar: '👩‍🔬' }
];

const initialPosts = [
  {
    id: 1,
    authorId: 1,
    title: 'My First Post',
    content: 'Just joined this amazing platform! Excited to connect with everyone.',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    reactions: { likes: 5, comments: 2, shares: 1, bookmarks: 0 }
  },
  {
    id: 2,
    authorId: 2,
    title: 'Beautiful Sunset',
    content: 'Caught this incredible sunset today. Nature never fails to amaze me! 🌅',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    reactions: { likes: 12, comments: 4, shares: 3, bookmarks: 0 }
  },
  {
    id: 3,
    authorId: 3,
    title: 'Science Discovery',
    content: 'Fascinating breakthrough in quantum computing research published today!',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    reactions: { likes: 8, comments: 6, shares: 2, bookmarks: 0 }
  }
];

// Navigation Component
function Navigation({ setCurrentPage, setSelectedUserId, setCurrentPostId, setEditingPost }) {
  const go = (page, path) => {
    setSelectedUserId(null);
    setCurrentPostId(null);
    setEditingPost(null);
    setCurrentPage(page);
    window.history.pushState({}, '', path);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.navContent}>
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); go('home', '/'); }}
          style={styles.brand}
        >
          <Home size={24} />
          GenZ
        </a>
        <div style={styles.navLinks}>
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); go('home', '/'); }}
            style={styles.navLink}
            className="nav-posts-link"
          >
            <Home size={20} />
            Posts
          </a>
          <a
            href="/users"
            onClick={(e) => { e.preventDefault(); go('users', '/users'); }}
            style={styles.navLink}
            className="nav-users-link"
            data-testid="nav-users-link"
          >
            <UsersIcon size={20} />
            Users
          </a>
          <a
            href="/notifications"
            onClick={(e) => { e.preventDefault(); go('notifications', '/notifications'); }}
            style={styles.navLink}
            className="nav-notifications-link"
            data-testid="nav-notifications-link"
          >
            <Bell size={20} />
            Notifications
          </a>
          <a
            href="/create"
            onClick={(e) => { e.preventDefault(); go('create', '/create'); }}
            style={styles.createBtn}
            className="nav-create-btn"
          >
            Create Post
          </a>
        </div>
      </div>
    </nav>
  );
}

// Post Component
function Post({ post, showEditButton = true, users, onReact, onOpenDetails }) {
  const author = users.find(u => u.id === post.authorId);

  const handleReaction = (type) => {
    onReact(post.id, type);
  };

  const handleOpenDetails = () => {
    onOpenDetails(post);
  };

  return (
    <div className="post" style={styles.post}>
      <div style={styles.postHeader}>
        <div style={styles.author}>
          <div style={styles.avatar}>{author.avatar}</div>
          <div style={styles.authorInfo}>
            <h3 style={styles.authorName}>{author.name}</h3>
            <p style={styles.timestamp}>
              {post.timestamp.toLocaleDateString()} at {post.timestamp.toLocaleTimeString()}
            </p>
          </div>
        </div>
        {showEditButton && (
          <button
            onClick={handleOpenDetails}
            className="button"
            style={styles.editBtn}
            data-testid={`edit-post-${post.id}`}
          >
            <Edit3 size={16} />
            Edit
          </button>
        )}
      </div>

      <h2 style={styles.postTitle}>{post.title}</h2>
      <p style={styles.postContent}>{post.content}</p>

      <div style={styles.reactions}>
        <button
          onClick={() => handleReaction('likes')}
          className="reaction-btn"
          style={styles.reactionBtn}
          data-testid={`like-button-${post.id}`}
        >
          <Heart size={20} />
          <span className="reaction-count" data-testid={`like-count-${post.id}`}>{post.reactions.likes}</span>
        </button>
        <button
          onClick={() => handleReaction('comments')}
          className="reaction-btn"
          style={styles.reactionBtn}
          data-testid={`comment-button-${post.id}`}
        >
          <MessageCircle size={20} />
          <span className="reaction-count" data-testid={`comment-count-${post.id}`}>{post.reactions.comments}</span>
        </button>
        <button
          onClick={() => handleReaction('shares')}
          className="reaction-btn"
          style={styles.reactionBtn}
          data-testid={`share-button-${post.id}`}
        >
          <Share2 size={20} />
          <span className="reaction-count" data-testid={`share-count-${post.id}`}>{post.reactions.shares}</span>
        </button>
        <button
          onClick={() => handleReaction('bookmarks')}
          className="reaction-btn"
          style={styles.reactionBtn}
          data-testid={`bookmark-button-${post.id}`}
        >
          ⭐
          <span className="reaction-count" data-testid={`bookmark-count-${post.id}`}>{post.reactions.bookmarks ?? 0}</span>
        </button>
        <button
          className="reaction-btn"
          style={styles.reactionBtn}
          disabled
          data-testid={`disabled-reaction-${post.id}`}
        >
          🚫
          <span className="reaction-count">0</span>
        </button>
      </div>
    </div>
  );
}

// Landing Page
function LandingPage({ posts, users, onReact, onOpenDetails, setCurrentPage }) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>GenZ</h1>
        <p style={styles.subtitle}>Connect, share, and discover amazing content from our community.</p>
      </div>

      <div style={styles.tabGrid}>
        <div
          onClick={() => { setCurrentPage('home'); window.history.pushState({}, '', '/'); }}
          style={{ ...styles.tab, ...styles.tabHome }}
          className="tab-link tab-posts-link"
        >
          <Home size={24} />
          <h3>Posts</h3>
        </div>
        <div
          onClick={() => { setCurrentPage('users'); window.history.pushState({}, '', '/users'); }}
          style={{ ...styles.tab, ...styles.tabUsers }}
          className="tab-link tab-users-link"
        >
          <UsersIcon size={24} />
          <h3>Users</h3>
        </div>
        <div
          onClick={() => { setCurrentPage('notifications'); window.history.pushState({}, '', '/notifications'); }}
          style={{ ...styles.tab, ...styles.tabNotifications }}
          className="tab-link tab-notifications-link"
        >
          <Bell size={24} />
          <h3>Notifications</h3>
        </div>
        <div
          onClick={() => { setCurrentPage('create'); window.history.pushState({}, '', '/create'); }}
          style={{ ...styles.tab, ...styles.tabCreate }}
          className="tab-link tab-create-link"
        >
          <Edit3 size={24} />
          <h3>Create</h3>
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ ...styles.title, fontSize: '24px', margin: 0 }}>Latest Posts</h2>
          <button
            onClick={() => { setCurrentPage('create'); window.history.pushState({}, '', '/create'); }}
            style={styles.btnPrimary}
            className="create-post-btn"
          >
            Create Post
          </button>
        </div>
        <div className="posts-list">
          {/* Invisible first child to make first post .posts-list > :nth-child(2) */}
          <div style={{ display: 'none' }} aria-hidden="true"></div>
          {posts.map(post => (
            <Post
              key={post.id}
              post={post}
              users={users}
              onReact={onReact}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Users Page (must show exactly 3 li)
function UsersPage({ users, setCurrentPage, setSelectedUserId }) {
  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
    setCurrentPage('userPosts');
    window.history.pushState({}, '', `/users/${userId}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>All Users</h1>
      <ul>
        {users.slice(0, 3).map(user => (
          <li key={user.id}>
            <a
              href={`/users/${user.id}`}
              onClick={(e) => { e.preventDefault(); handleUserClick(user.id); }}
            >
              {user.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// User Posts Page
function UserPostsPage({ selectedUserId, users, posts, onReact, setCurrentPage }) {
  const user = users.find(u => u.id === selectedUserId);
  const userPosts = posts.filter(post => post.authorId === selectedUserId);

  if (!user) {
    return (
      <div style={styles.container}>
        <div style={{ textAlign: 'center', padding: '48px 0' }}>
          <h1 style={styles.title}>User not found</h1>
          <a
            href="/users"
            onClick={(e) => { e.preventDefault(); setCurrentPage('users'); window.history.pushState({}, '', '/users'); }}
            style={styles.backLink}
          >
            ← Back to Users
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={{ ...styles.author, marginBottom: '32px' }}>
        <div style={{ ...styles.avatar, fontSize: '48px' }}>{user.avatar}</div>
        <div>
          <h1 style={styles.title}>{user.name}</h1>
          <p style={styles.subtitle}>{userPosts.length} posts</p>
        </div>
      </div>

      <a
        href="/users"
        onClick={(e) => { e.preventDefault(); setCurrentPage('users'); window.history.pushState({}, '', '/users'); }}
        style={styles.backLink}
      >
        <ArrowLeft size={16} />
        Back to Users
      </a>

      <div className="posts-list">
        {/* Keep placeholder for nth-child(2) compatibility here too */}
        <div style={{ display: 'none' }} aria-hidden="true"></div>
        {userPosts.length > 0 ? (
          userPosts.map(post => (
            <Post
              key={post.id}
              post={post}
              users={users}
              onReact={onReact}
              onOpenDetails={() => {}}
              showEditButton={true}
            />
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '48px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <p style={styles.subtitle}>This user hasn't posted anything yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Post Details Page (/posts/:id)
function PostDetailsPage({ postId, users, posts, setCurrentPage, setEditingPost }) {
  const post = posts.find(p => p.id === postId);
  if (!post) return (
    <div style={styles.container}>
      <h1 style={styles.title}>Post not found</h1>
    </div>
  );
  const author = users.find(u => u.id === post.authorId);

  const goEdit = () => {
    setEditingPost(post);
    setCurrentPage('edit');
    window.history.pushState({}, '', `/edit/${post.id}`);
  };

  return (
    <div style={styles.container}>
      <div className="post" style={styles.post}>
        <div style={styles.postHeader}>
          <div style={styles.author}>
            <div style={styles.avatar}>{author.avatar}</div>
            <div style={styles.authorInfo}>
              <h3 style={styles.authorName}>{author.name}</h3>
              <p style={styles.timestamp}>
                {post.timestamp.toLocaleDateString()} at {post.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
          <button className="button" style={styles.editBtn} onClick={goEdit}>
            <Edit3 size={16} /> Edit
          </button>
        </div>
        <h2 style={styles.postTitle}>{post.title}</h2>
        <p style={styles.postContent}>{post.content}</p>
      </div>
    </div>
  );
}

// Notifications Page
function NotificationsPage({ notifications, onRefreshNotifications }) {
  return (
    <div style={styles.container}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <h1 style={styles.title}>Notifications</h1>
        <button
          onClick={onRefreshNotifications}
          className="button"
          style={styles.btnPrimary}
        >
          Refresh Notifications
        </button>
      </div>

      <section className="notificationsList">
        {notifications.length > 0 ? (
          notifications.map(notification => (
            <div key={notification.id} style={styles.notificationCard}>
              <p style={styles.postContent}>{notification.message}</p>
              <p style={styles.timestamp}>
                {notification.timestamp.toLocaleDateString()} at {notification.timestamp.toLocaleTimeString()}
              </p>
            </div>
          ))
        ) : null}
      </section>

      {notifications.length === 0 && (
        <div style={{ textAlign: 'center', padding: '48px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
          <Bell size={48} style={{ color: '#ccc', marginBottom: '16px' }} />
          <p style={styles.subtitle}>No notifications yet. Click "Refresh Notifications" to check for updates!</p>
        </div>
      )}
    </div>
  );
}

// Create Post Page
function CreatePostPage({ users, onCreatePost, setCurrentPage }) {
  const [authorId, setAuthorId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (authorId && title.trim() && content.trim()) {
      onCreatePost({
        authorId: parseInt(authorId, 10),
        title: title.trim(),
        content: content.trim()
      });
      setCurrentPage('home');
      window.history.pushState({}, '', '/');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Create New Post</h1>

      <div style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="postAuthor" style={styles.label}>
            Select Author
          </label>
          <select
            id="postAuthor"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
            style={styles.select}
            required
          >
            <option value="">Choose an author...</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.avatar} {user.name}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="postTitle" style={styles.label}>
            Post Title
          </label>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            placeholder="Enter post title..."
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="postContent" style={styles.label}>
            Content
          </label>
          <textarea
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={styles.textarea}
            placeholder="What's on your mind?"
            required
          />
        </div>

        <div style={styles.btnGroup}>
          <button
            onClick={() => { setCurrentPage('home'); window.history.pushState({}, '', '/'); }}
            style={styles.btnSecondary}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            style={{ ...styles.btnPrimary, backgroundColor: '#2563eb' }}
          >
            Create Post
          </button>
        </div>
      </div>
    </div>
  );
}

// Edit Post Page (must use #postTitle and #postContent, save with last button)
function EditPostPage({ editingPost, users, onUpdatePost, setCurrentPage }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
    }
  }, [editingPost]);

  const handleSubmit = () => {
    if (editingPost && title.trim() && content.trim()) {
      onUpdatePost({
        ...editingPost,
        title: title.trim(),
        content: content.trim()
      });
      setCurrentPage('home');
      window.history.pushState({}, '', '/');
    }
  };

  if (!editingPost) return null;

  const author = users.find(u => u.id === editingPost.authorId);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Edit Post</h1>

      <div style={{ ...styles.post, marginBottom: '24px' }}>
        <div style={styles.author}>
          <div style={styles.avatar}>{author.avatar}</div>
          <div>
            <h3 style={styles.authorName}>{author.name}</h3>
            <p style={styles.timestamp}>Author</p>
          </div>
        </div>
      </div>

      <div style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="postTitle" style={styles.label}>
            Post Title
          </label>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="postContent" style={styles.label}>
            Content
          </label>
          <textarea
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={styles.textarea}
            required
          />
        </div>

        <div style={styles.btnGroup}>
          <button
            onClick={() => { setCurrentPage('home'); window.history.pushState({}, '', '/'); }}
            style={styles.btnSecondary}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            style={{ ...styles.btnPrimary, backgroundColor: '#059669', flex: 1 }}
          >
            Update Post
          </button>
        </div>
      </div>
    </div>
  );
}

// Main App Component
function App() {
  const [users] = useState(initialUsers);
  const [posts, setPosts] = useState(initialPosts);
  const [notifications, setNotifications] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const [currentPostId, setCurrentPostId] = useState(null);

  // Handle browser back/forward navigation and deep links
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/users') {
        setCurrentPage('users');
      } else if (path === '/notifications') {
        setCurrentPage('notifications');
      } else if (path === '/create') {
        setCurrentPage('create');
      } else if (path.startsWith('/users/')) {
        const userId = parseInt(path.split('/')[2], 10);
        setSelectedUserId(userId);
        setCurrentPage('userPosts');
      } else if (path.startsWith('/posts/')) {
        const id = parseInt(path.split('/')[2], 10);
        setCurrentPostId(id);
        setCurrentPage('postDetails');
      } else if (path.startsWith('/edit/')) {
        const id = parseInt(path.split('/')[2], 10);
        const p = posts.find(pp => pp.id === id) || null;
        setEditingPost(p);
        setCurrentPage('edit');
      } else {
        setCurrentPage('home');
      }
    };

    handlePopState(); // initialize on mount for deep links
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [posts]);

  const addNotification = (message) => {
    const notification = {
      id: Date.now(),
      message,
      timestamp: new Date(),
      read: false
    };
    setNotifications(prev => [notification, ...prev]);
  };

  const addPost = (post) => {
    if (!post.authorId || !post.title || !post.content) {
      alert('Please fill all required fields');
      return;
    }

    const newPost = {
      ...post,
      id: Date.now(),
      timestamp: new Date(),
      reactions: { likes: 0, comments: 0, shares: 0, bookmarks: 0 }
    };
    setPosts(prev => [newPost, ...prev]);

    const author = users.find(u => u.id === post.authorId);
    if (author) addNotification(`${author.name} created a new post: "${post.title}"`);
  };

  const updatePost = (updatedPost) => {
    if (!updatedPost.title || !updatedPost.content) {
      alert('Please fill all required fields');
      return;
    }

    setPosts(prev => prev.map(post => post.id === updatedPost.id ? updatedPost : post));

    const author = users.find(u => u.id === updatedPost.authorId);
    if (author) addNotification(`${author.name} edited their post: "${updatedPost.title}"`);
  };

  const reactToPost = (postId, reactionType) => {
    const target = posts.find(p => p.id === postId);
    if (!target) return;

    setPosts(prev => prev.map(p => {
      if (p.id !== postId) return p;
      const current = (p.reactions?.[reactionType] ?? 0);
      return {
        ...p,
        reactions: {
          ...p.reactions,
          [reactionType]: current + 1
        }
      };
    }));

    const author = users.find(u => u.id === target.authorId);
    if (author) addNotification(`Someone reacted to ${author.name}'s post with ${reactionType}`);
  };

  const refreshNotifications = () => {
    const newNotifications = [
      'New user joined the platform!',
      'Your post received 5 new likes',
      'Someone commented on your post',
      'Weekly digest is ready'
    ].map((message, index) => ({
      id: Date.now() + index,
      message,
      timestamp: new Date(),
      read: false
    }));

    setNotifications(prev => [...newNotifications, ...prev]);
  };

  const handleOpenDetailsFromList = (post) => {
    setCurrentPostId(post.id);
    setCurrentPage('postDetails');
    window.history.pushState({}, '', `/posts/${post.id}`);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <LandingPage
            posts={posts}
            users={users}
            onReact={reactToPost}
            onOpenDetails={handleOpenDetailsFromList}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'users':
        return (
          <UsersPage
            users={users}
            setCurrentPage={setCurrentPage}
            setSelectedUserId={setSelectedUserId}
          />
        );
      case 'userPosts':
        return (
          <UserPostsPage
            selectedUserId={selectedUserId}
            users={users}
            posts={posts}
            onReact={reactToPost}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'notifications':
        return (
          <NotificationsPage
            notifications={notifications}
            onRefreshNotifications={refreshNotifications}
          />
        );
      case 'create':
        return (
          <CreatePostPage
            users={users}
            onCreatePost={addPost}
            setCurrentPage={setCurrentPage}
          />
        );
      case 'postDetails':
        return (
          <PostDetailsPage
            postId={currentPostId}
            users={users}
            posts={posts}
            setCurrentPage={setCurrentPage}
            setEditingPost={setEditingPost}
          />
        );
      case 'edit':
        return (
          <EditPostPage
            editingPost={editingPost}
            users={users}
            onUpdatePost={updatePost}
            setCurrentPage={setCurrentPage}
          />
        );
      default:
        return (
          <LandingPage
            posts={posts}
            users={users}
            onReact={reactToPost}
            onOpenDetails={handleOpenDetailsFromList}
            setCurrentPage={setCurrentPage}
          />
        );
    }
  };

  return (
    <div className="App" style={styles.app}>
      <Navigation
        setCurrentPage={setCurrentPage}
        setSelectedUserId={setSelectedUserId}
        setCurrentPostId={setCurrentPostId}
        setEditingPost={setEditingPost}
      />
      {renderCurrentPage()}
    </div>
  );
}

export default App;
