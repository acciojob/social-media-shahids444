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
const Users = ({ size = 20, className = "" }) => (
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
    cursor: 'pointer'
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
    cursor: 'pointer'
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
    transition: 'transform 0.2s'
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
    gap: '24px',
    paddingTop: '16px',
    borderTop: '1px solid #eee'
  },
  reactionBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'none',
    border: 'none',
    color: '#666',
    cursor: 'pointer',
    padding: '4px 8px',
    borderRadius: '4px'
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
    cursor: 'pointer'
  },
  btnGroup: {
    display: 'flex',
    gap: '16px'
  },
  userGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '24px'
  },
  userCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '24px',
    textAlign: 'center',
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    cursor: 'pointer'
  },
  notificationCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    padding: '16px',
    borderLeft: '4px solid #2563eb',
    marginBottom: '16px'
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    color: '#2563eb',
    textDecoration: 'none',
    marginBottom: '24px'
  }
};

// Mock data
const initialUsers = [
  { id: 1, name: 'Alice Johnson', avatar: '👩‍💻' },
  { id: 2, name: 'Bob Smith', avatar: '👨‍🎨' },
  { id: 3, name: 'Carol Davis', avatar: '👩‍🔬' },
  { id: 4, name: 'David Wilson', avatar: '👨‍🏫' }
];

const initialPosts = [
  {
    id: 1,
    authorId: 1,
    title: 'My First Post',
    content: 'Just joined this amazing platform! Excited to connect with everyone.',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    reactions: { likes: 5, comments: 2, shares: 1 }
  },
  {
    id: 2,
    authorId: 2,
    title: 'Beautiful Sunset',
    content: 'Caught this incredible sunset today. Nature never fails to amaze me! 🌅',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
    reactions: { likes: 12, comments: 4, shares: 3 }
  },
  {
    id: 3,
    authorId: 3,
    title: 'Science Discovery',
    content: 'Fascinating breakthrough in quantum computing research published today!',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000),
    reactions: { likes: 8, comments: 6, shares: 2 }
  }
];

// Navigation Component
function Navigation({ currentPage, setCurrentPage, setSelectedUserId }) {
  return (
    <nav style={styles.nav}>
      <div style={styles.navContent}>
        <button 
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('home');
            setSelectedUserId(null);
          }}
          style={styles.brand}
        >
          <Home size={24} />
          GenZ
        </button>
        <div style={styles.navLinks}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('home');
              setSelectedUserId(null);
            }}
            style={styles.navLink}
          >
            <Home size={20} />
            Posts
          </a>
          <a
            href="/users"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('users');
              setSelectedUserId(null);
            }}
            style={styles.navLink}
          >
            <Users size={20} />
            Users
          </a>
          <a
            href="/notifications"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage('notifications');
              setSelectedUserId(null);
            }}
            style={styles.navLink}
          >
            <Bell size={20} />
            Notifications
          </a>
          <button
            onClick={() => {
              setCurrentPage('create');
              setSelectedUserId(null);
            }}
            style={styles.createBtn}
          >
            Create Post
          </button>
        </div>
      </div>
    </nav>
  );
}

// Post Component
function Post({ post, showEditButton = true, users, onReact, onEdit }) {
  const author = users.find(u => u.id === post.authorId);
  
  const handleEdit = () => {
    onEdit(post);
  };

  const handleReaction = (type) => {
    onReact(post.id, type);
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
            onClick={handleEdit}
            className="button edit-btn"
            style={styles.editBtn}
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
        >
          <Heart size={20} />
          <span className="reaction-count">{post.reactions.likes}</span>
        </button>
        <button
          onClick={() => handleReaction('comments')}
          className="reaction-btn"
          style={styles.reactionBtn}
        >
          <MessageCircle size={20} />
          <span className="reaction-count">{post.reactions.comments}</span>
        </button>
        <button
          onClick={() => handleReaction('shares')}
          className="reaction-btn"
          style={styles.reactionBtn}
        >
          <Share2 size={20} />
          <span className="reaction-count">{post.reactions.shares}</span>
        </button>
      </div>
    </div>
  );
}

// Landing Page
function LandingPage({ posts, users, onReact, onEdit, setCurrentPage }) {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>GenZ</h1>
        <p style={styles.subtitle}>Connect, share, and discover amazing content from our community.</p>
      </div>

      <div style={styles.tabGrid}>
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('home');
          }}
          style={{...styles.tab, ...styles.tabHome}}
        >
          <Home size={24} />
          <h3>Posts</h3>
        </a>
        <a 
          href="/users"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('users');
          }}
          style={{...styles.tab, ...styles.tabUsers}}
        >
          <Users size={24} />
          <h3>Users</h3>
        </a>
        <a 
          href="/notifications"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('notifications');
          }}
          style={{...styles.tab, ...styles.tabNotifications}}
        >
          <Bell size={24} />
          <h3>Notifications</h3>
        </a>
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('create');
          }}
          style={{...styles.tab, ...styles.tabCreate}}
        >
          <Edit3 size={24} />
          <h3>Create</h3>
        </a>
      </div>

      <div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px'}}>
          <h2 style={{...styles.title, fontSize: '24px', margin: 0}}>Latest Posts</h2>
          <button
            onClick={() => setCurrentPage('create')}
            style={styles.btnPrimary}
          >
            Create Post
          </button>
        </div>
        <div className="posts-list">
          {posts.map(post => (
            <Post 
              key={post.id} 
              post={post} 
              users={users}
              onReact={onReact}
              onEdit={onEdit}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Users Page
function UsersPage({ users, setCurrentPage, setSelectedUserId }) {
  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
    setCurrentPage('userPosts');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>All Users</h1>
      <div style={styles.userGrid}>
        {users.map(user => (
          <div
            key={user.id}
            onClick={() => handleUserClick(user.id)}
            style={styles.userCard}
            className="user-card"
          >
            <div style={{...styles.avatar, fontSize: '48px', marginBottom: '12px'}}>{user.avatar}</div>
            <h3 style={styles.authorName}>{user.name}</h3>
            <p style={styles.subtitle}>View posts →</p>
          </div>
        ))}
      </div>
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
        <div style={{textAlign: 'center', padding: '48px 0'}}>
          <h1 style={styles.title}>User not found</h1>
          <button 
            onClick={() => setCurrentPage('users')}
            style={styles.backLink}
          >
            ← Back to Users
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={{...styles.author, marginBottom: '32px'}}>
        <div style={{...styles.avatar, fontSize: '48px'}}>{user.avatar}</div>
        <div>
          <h1 style={styles.title}>{user.name}</h1>
          <p style={styles.subtitle}>{userPosts.length} posts</p>
        </div>
      </div>

      <button 
        onClick={() => setCurrentPage('users')}
        style={styles.backLink}
      >
        <ArrowLeft size={16} />
        Back to Users
      </button>

      <div className="posts-list">
        {userPosts.length > 0 ? (
          userPosts.map(post => (
            <Post 
              key={post.id} 
              post={post} 
              users={users}
              onReact={onReact}
              onEdit={() => {}}
              showEditButton={false}
            />
          ))
        ) : (
          <div style={{textAlign: 'center', padding: '48px', backgroundColor: '#f9f9f9', borderRadius: '8px'}}>
            <p style={styles.subtitle}>This user hasn't posted anything yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Notifications Page
function NotificationsPage({ notifications, onRefreshNotifications }) {
  return (
    <div style={styles.container}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px'}}>
        <h1 style={styles.title}>Notifications</h1>
        <button
          onClick={onRefreshNotifications}
          className="button"
          style={styles.btnPrimary}
        >
          Refresh Notifications
        </button>
      </div>

      <div>
        {notifications.length > 0 ? (
          notifications.map(notification => (
            <div key={notification.id} style={styles.notificationCard}>
              <p style={styles.postContent}>{notification.message}</p>
              <p style={styles.timestamp}>
                {notification.timestamp.toLocaleDateString()} at {notification.timestamp.toLocaleTimeString()}
              </p>
            </div>
          ))
        ) : (
          <div style={{textAlign: 'center', padding: '48px', backgroundColor: '#f9f9f9', borderRadius: '8px'}}>
            <Bell size={48} style={{color: '#ccc', marginBottom: '16px'}} />
            <p style={styles.subtitle}>No notifications yet. Click "Refresh Notifications" to check for updates!</p>
          </div>
        )}
      </div>
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
        authorId: parseInt(authorId),
        title: title.trim(),
        content: content.trim()
      });
      setCurrentPage('home');
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
            onClick={handleSubmit}
            style={{...styles.btnPrimary, flex: 1}}
          >
            Create Post
          </button>
          <button
            onClick={() => setCurrentPage('home')}
            style={styles.btnSecondary}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// Edit Post Page
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
    }
  };

  if (!editingPost) return null;

  const author = users.find(u => u.id === editingPost.authorId);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Edit Post</h1>
      
      <div style={{...styles.post, marginBottom: '24px'}}>
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
            onClick={handleSubmit}
            style={{...styles.btnPrimary, flex: 1, backgroundColor: '#059669'}}
          >
            Update Post
          </button>
          <button
            onClick={() => setCurrentPage('home')}
            style={styles.btnSecondary}
          >
            Cancel
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

  const addPost = (post) => {
    const newPost = {
      ...post,
      id: Date.now(),
      timestamp: new Date(),
      reactions: { likes: 0, comments: 0, shares: 0 }
    };
    setPosts(prev => [newPost, ...prev]);
    
    const author = users.find(u => u.id === post.authorId);
    addNotification(`${author.name} created a new post: "${post.title}"`);
  };

  const updatePost = (updatedPost) => {
    setPosts(prev => prev.map(post => 
      post.id === updatedPost.id ? updatedPost : post
    ));
    
    const author = users.find(u => u.id === updatedPost.authorId);
    addNotification(`${author.name} edited their post: "${updatedPost.title}"`);
  };

  const reactToPost = (postId, reactionType) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          reactions: {
            ...post.reactions,
            [reactionType]: post.reactions[reactionType] + 1
          }
        };
      }
      return post;
    }));

    const post = posts.find(p => p.id === postId);
    const author = users.find(u => u.id === post.authorId);
    addNotification(`Someone reacted to ${author.name}'s post with ${reactionType}`);
  };

  const addNotification = (message) => {
    const notification = {
      id: Date.now(),
      message,
      timestamp: new Date(),
      read: false
    };
    setNotifications(prev => [notification, ...prev]);
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

  const handleEditPost = (post) => {
    setEditingPost(post);
    setCurrentPage('edit');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <LandingPage 
            posts={posts}
            users={users}
            onReact={reactToPost}
            onEdit={handleEditPost}
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
            onEdit={handleEditPost}
            setCurrentPage={setCurrentPage}
          />
        );
    }
  };

  return (
    <div className="App" style={styles.app}>
      <Navigation 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSelectedUserId={setSelectedUserId}
      />
      {renderCurrentPage()}
    </div>
  );
}

export default App;
