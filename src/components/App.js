import React, { useState } from 'react';

// Mock data
const initialUsers = [
  { id: 1, name: 'Uriah Pagac' },
  { id: 2, name: 'Lauren Bednar' },
  { id: 3, name: 'Magnus Gislason' }
];

const initialPosts = [
  {
    id: 1,
    title: 'Ideas',
    content: 'Test Content',
    author: 'Uriah Pagac',
    authorId: 1,
    timestamp: 'less than a minute ago',
    reactions: { thumbs: 0, party: 0, heart: 0, rocket: 0, eyes: 0 }
  },
  {
    id: 2,
    title: 'Draped neatly on a hanger, the cranberries could be said to resemble reserved hippopotamus;',
    content: 'They were lost without the harmonious rabbit that composed their kangaroo. Shouting with happiness,',
    author: 'Magnus Gislason',
    authorId: 3,
    timestamp: 'about 9 hours ago',
    reactions: { thumbs: 0, party: 0, heart: 0, rocket: 0, eyes: 0 }
  },
  {
    id: 3,
    title: 'Waking to the buzz of the alarm clock, their chimpanzee was, in this moment, a witty snail?',
    content: '',
    author: 'Uriah Pagac',
    authorId: 1,
    timestamp: 'about 13 hours ago',
    reactions: { thumbs: 0, party: 0, heart: 0, rocket: 0, eyes: 0 }
  }
];

const initialNotifications = [
  { id: 1, message: 'Uriah Pagac says hi!', timestamp: 'less than a minute ago' },
  { id: 2, message: 'Magnus Gislason is glad we\'re friends', timestamp: '1 minute ago' },
  { id: 3, message: 'Magnus Gislason sent you a gift', timestamp: '10 minutes ago' },
  { id: 4, message: 'Lauren Bednar is glad we\'re friends', timestamp: '10 minutes ago' }
];

// Simple Router Component
const Router = ({ children, currentPath }) => {
  return React.Children.toArray(children).find(child => 
    child.props.path === currentPath || 
    (child.props.path.includes(':') && currentPath.startsWith(child.props.path.split(':')[0]))
  ) || children.find(child => child.props.path === '/');
};

const Route = ({ path, children }) => children;

// Navigation Component
const Navigation = ({ currentPath, setCurrentPath }) => {
  // Update URL when path changes
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.history) {
      window.history.pushState(null, '', currentPath);
    }
  }, [currentPath]);

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)', 
      padding: '20px',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', margin: '0 0 30px 0' }}>GenZ</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a 
  href="/" 
  onClick={(e) => { e.preventDefault(); setCurrentPath('/'); }}
          style={{
            color: 'white',
            textDecoration: 'underline',
            padding: '12px 24px',
            backgroundColor: currentPath === '/' ? '#6D28D9' : '#7C3AED',
            borderRadius: '8px',
            fontWeight: 'bold'
          }}
        >
          Posts
        </a>
       <a 
  href="/" 
  data-testid="users-nav-link"
  onClick={(e) => { e.preventDefault(); setCurrentPath('/'); }}
          style={{
            color: 'white',
            textDecoration: 'underline',
            padding: '12px 24px',
            backgroundColor: currentPath === '/users' ? '#6D28D9' : '#7C3AED',
            borderRadius: '8px',
            fontWeight: 'bold'
          }}
        >
          Users
        </a>
        <a 
          href="/notifications" 
          onClick={(e) => { e.preventDefault(); setCurrentPath('/notifications'); }}
          style={{
            color: 'white',
            textDecoration: 'underline',
            padding: '12px 24px',
            backgroundColor: currentPath === '/notifications' ? '#6D28D9' : '#7C3AED',
            borderRadius: '8px',
            fontWeight: 'bold'
          }}
        >
          Notifications
        </a>
        {currentPath === '/notifications' && (
          <button
            className="button"
            onClick={() => window.refreshNotifications && window.refreshNotifications()}
            style={{
              backgroundColor: '#0EA5E9',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginLeft: 'auto'
            }}
          >
            Refresh Notifications
          </button>
        )}
      </div>
    </div>
  );
};

// Posts Page Component
const PostsPage = ({ posts, setPosts, users, currentPath, setCurrentPath }) => {
  const [newPost, setNewPost] = useState({ title: "What's on your mind?", author: '', content: '' });

  const handleSubmit = () => {
    if (newPost.title && newPost.author && newPost.content) {
      const author = users.find(u => u.id === parseInt(newPost.author));
      const post = {
        id: Date.now(),
        title: newPost.title,
        content: newPost.content,
        author: author.name,
        authorId: author.id,
        timestamp: 'less than a minute ago',
        reactions: { thumbs: 0, party: 0, heart: 0, rocket: 0, eyes: 0 }
      };
      setPosts([post, ...posts]);
      setNewPost({ title: "What's on your mind?", author: '', content: '' });
    }
  };

  const handleReaction = (postId, reactionType) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            reactions: { 
              ...post.reactions, 
              [reactionType]: post.reactions[reactionType] + 1 
            } 
          }
        : post
    ));
  };

  return (
    <div className="App">
      <div style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Add a New Post</h2>
        
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <label>Post Title:</label>
          <input
            id="postTitle"
            type="text"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          
           
          <label>Author:</label>
          <select
            id="postAuthor"
            value={newPost.author}
            onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
            style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          >
            <option value="">Select Author</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
          
          <label>Content:</label>
          <textarea
            id="postContent"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '60px' }}
            rows="3"
            cols="30"
          />
          
          <button type="submit" style={{ 
            backgroundColor: '#0EA5E9', 
            color: 'white', 
            padding: '12px 24px', 
            border: 'none', 
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            Save Post
          </button>
        </form>
       

        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Posts</h2>
        
        <div className="posts-list">
          {posts.map((post, index) => (
            <div key={post.id} style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '20px', 
              marginBottom: '20px',
              backgroundColor: 'white'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>{post.title}</h3>
              <p style={{ color: '#666', marginBottom: '8px', fontSize: '14px' }}>
                by {post.author} <em>{post.timestamp}</em>
              </p>
              <p style={{ marginBottom: '15px' }}>{post.content}</p>
              
              <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => handleReaction(post.id, 'thumbs')}
                  style={{ 
                    padding: '8px 12px', 
                    border: '1px solid #ddd', 
                    borderRadius: '6px',
                    backgroundColor: '#f8f9fa',
                    cursor: 'pointer'
                  }}
                >
                  👍 {post.reactions.thumbs}
                </button>
                <button 
                  onClick={() => handleReaction(post.id, 'party')}
                  style={{ 
                    padding: '8px 12px', 
                    border: '1px solid #ddd', 
                    borderRadius: '6px',
                    backgroundColor: '#f8f9fa',
                    cursor: 'pointer'
                  }}
                >
                  🎉 {post.reactions.party}
                </button>
                <button 
                  onClick={() => handleReaction(post.id, 'heart')}
                  style={{ 
                    padding: '8px 12px', 
                    border: '1px solid #ddd', 
                    borderRadius: '6px',
                    backgroundColor: '#f8f9fa',
                    cursor: 'pointer'
                  }}
                >
                  ❤️ {post.reactions.heart}
                </button>
                <button 
                  onClick={() => handleReaction(post.id, 'rocket')}
                  style={{ 
                    padding: '8px 12px', 
                    border: '1px solid #ddd', 
                    borderRadius: '6px',
                    backgroundColor: '#f8f9fa',
                    cursor: 'pointer'
                  }}
                >
                  🚀 {post.reactions.rocket}
                </button>
                <button 
                  onClick={() => handleReaction(post.id, 'eyes')}
                  style={{ 
                    padding: '8px 12px', 
                    border: '1px solid #ddd', 
                    borderRadius: '6px',
                    backgroundColor: '#f8f9fa',
                    cursor: 'pointer'
                  }}
                >
                  👀 {post.reactions.eyes}
                </button>
              </div>
              
              <a 
                href={`/posts/${post.id}`}
                onClick={(e) => { e.preventDefault(); setCurrentPath(`/posts/${post.id}`); }}
                className="button"
                style={{ 
                  backgroundColor: '#0EA5E9', 
                  color: 'white', 
                  padding: '10px 20px', 
                  textDecoration: 'underline',
                  borderRadius: '6px',
                  display: 'inline-block',
                  fontWeight: 'bold'
                }}
              >
                View Post
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Post Detail Page Component
const PostDetailPage = ({ posts, setPosts, users, currentPath, setCurrentPath }) => {
  const postId = parseInt(currentPath.split('/')[2]);
  const post = posts.find(p => p.id === postId);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPost, setEditedPost] = useState(post ? { title: post.title, content: post.content } : {});

  // Update URL
  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.history && currentPath.includes('/posts/')) {
      window.history.pushState(null, '', currentPath);
    }
  }, [currentPath]);

  if (!post) return <div>Post not found</div>;

  const handleSave = () => {
    setPosts(posts.map(p => 
      p.id === postId 
        ? { ...p, title: editedPost.title, content: editedPost.content }
        : p
    ));
    setIsEditing(false);
  };

  const handleReaction = (reactionType) => {
    setPosts(posts.map(p => 
      p.id === postId 
        ? { 
            ...p, 
            reactions: { 
              ...p.reactions, 
              [reactionType]: p.reactions[reactionType] + 1 
            } 
          }
        : p
    ));
  };

  return (
    <div style={{ padding: '20px' }}>
      <div className="post" style={{ 
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        padding: '20px',
        backgroundColor: 'white'
      }}>
        {isEditing ? (
          <>
            <h2>Edit Post</h2>
            <div style={{ marginBottom: '15px' }}>
              <label>Post Title:</label>
              <input
                id="postTitle"
                type="text"
                value={editedPost.title}
                onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
                style={{ 
                  padding: '8px', 
                  border: '1px solid #ccc', 
                  borderRadius: '4px',
                  width: '100%',
                  marginLeft: '10px'
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Content:</label>
              <textarea
                id="postContent"
                value={editedPost.content}
                onChange={(e) => setEditedPost({ ...editedPost, content: e.target.value })}
                style={{ 
                  padding: '8px', 
                  border: '1px solid #ccc', 
                  borderRadius: '4px',
                  width: '100%',
                  minHeight: '100px',
                  marginLeft: '10px'
                }}
              />
            </div>
            <button 
              onClick={handleSave}
              className="button"
              style={{ 
                backgroundColor: '#0EA5E9', 
                color: 'white', 
                padding: '12px 24px', 
                border: 'none', 
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Save Post
            </button>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>{post.title}</h1>
            <p style={{ color: '#666', marginBottom: '15px', fontSize: '14px' }}>
              by {post.author} <em>{post.timestamp}</em>
            </p>
            <p style={{ marginBottom: '20px', fontSize: '16px' }}>{post.content}</p>
            
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => handleReaction('thumbs')}
                style={{ 
                  padding: '8px 12px', 
                  border: '1px solid #ddd', 
                  borderRadius: '6px',
                  backgroundColor: '#f8f9fa',
                  cursor: 'pointer'
                }}
              >
                👍 {post.reactions.thumbs}
              </button>
              <button 
                onClick={() => handleReaction('party')}
                style={{ 
                  padding: '8px 12px', 
                  border: '1px solid #ddd', 
                  borderRadius: '6px',
                  backgroundColor: '#f8f9fa',
                  cursor: 'pointer'
                }}
              >
                🎉 {post.reactions.party}
              </button>
              <button 
                onClick={() => handleReaction('heart')}
                style={{ 
                  padding: '8px 12px', 
                  border: '1px solid #ddd', 
                  borderRadius: '6px',
                  backgroundColor: '#f8f9fa',
                  cursor: 'pointer'
                }}
              >
                ❤️ {post.reactions.heart}
              </button>
              <button 
                onClick={() => handleReaction('rocket')}
                style={{ 
                  padding: '8px 12px', 
                  border: '1px solid #ddd', 
                  borderRadius: '6px',
                  backgroundColor: '#f8f9fa',
                  cursor: 'pointer'
                }}
              >
                🚀 {post.reactions.rocket}
              </button>
              <button 
                onClick={() => handleReaction('eyes')}
                style={{ 
                  padding: '8px 12px', 
                  border: '1px solid #ddd', 
                  borderRadius: '6px',
                  backgroundColor: '#f8f9fa',
                  cursor: 'pointer'
                }}
              >
                👀 {post.reactions.eyes}
              </button>
            </div>
            
            <button 
              className="button"
              onClick={() => {
                setEditedPost({ title: post.title, content: post.content });
                setIsEditing(true);
              }}
              style={{ 
                backgroundColor: '#0EA5E9', 
                color: 'white', 
                padding: '12px 24px', 
                border: 'none', 
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Edit Post
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// Users Page Component
const UsersPage = ({ users, posts, setCurrentPath }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const userPosts = selectedUser ? posts.filter(post => post.authorId === selectedUser.id) : [];

  return (
    <div style={{ padding: '20px' }}>
      {!selectedUser ? (
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>Users</h1>
          <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
            {users.map(user => (
              <li key={user.id} style={{ 
                cursor: 'pointer', 
                padding: '10px 0',
                fontSize: '18px'
              }}>
              <a 
  href="#" 
  data-testid={`user-link-${user.id}`}
  onClick={(e) => {
    e.preventDefault();
    handleUserClick(user);
  }}
                  style={{ 
                    color: '#0EA5E9', 
                    textDecoration: 'underline' 
                  }}
                >
                  {user.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>{selectedUser.name}</h1>
          <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginBottom: '30px' }}>
            {userPosts.map(post => (
              <li key={post.id} style={{ padding: '5px 0' }}>
                <a href="#" style={{ color: '#0EA5E9', textDecoration: 'underline' }}>
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
          
          {userPosts.length > 0 && (
            <div className="post" style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '20px',
              backgroundColor: 'white'
            }}>
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>
                {userPosts[0].title}
              </h3>
              <p style={{ color: '#666', marginBottom: '8px', fontSize: '14px' }}>
                by {userPosts[0].author} <em>{userPosts[0].timestamp}</em>
              </p>
              <p>{userPosts[0].content}</p>
            </div>
          )}
          
          <button 
            className="button"
            onClick={() => setSelectedUser(null)}
            style={{ 
              backgroundColor: '#0EA5E9', 
              color: 'white', 
              padding: '12px 24px', 
              border: 'none', 
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginTop: '20px'
            }}
          >
            Back to Users
          </button>
        </div>
      )}
    </div>
  );
};

// Notifications Page Component
const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  // Make refresh function globally available
  React.useEffect(() => {
    window.refreshNotifications = () => {
      setNotifications(initialNotifications);
    };
    
    return () => {
      delete window.refreshNotifications;
    };
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px' }}>Notifications</h1>
      
      <section className="notificationsList">
        {notifications.map(notification => (
          <div key={notification.id} style={{ 
            backgroundColor: '#E0E7FF', 
            padding: '15px', 
            marginBottom: '10px',
            borderRadius: '6px'
          }}>
            <strong>{notification.message.split(' ')[0]} {notification.message.split(' ')[1]}</strong> {notification.message.split(' ').slice(2).join(' ')}
            <br />
            <em style={{ color: '#666', fontSize: '14px' }}>{notification.timestamp}</em>
          </div>
        ))}
      </section>
    </div>
  );
};

// Main App Component
export default function App() {
  const [currentPath, setCurrentPath] = useState('/');
  const [posts, setPosts] = useState(initialPosts);
  const [users] = useState(initialUsers);

  return (
    <div>
      <Navigation currentPath={currentPath} setCurrentPath={setCurrentPath} />
      
      <Router currentPath={currentPath}>
        <Route path="/">
          <PostsPage 
            posts={posts} 
            setPosts={setPosts} 
            users={users}
            currentPath={currentPath}
            setCurrentPath={setCurrentPath}
          />
        </Route>
        
        <Route path="/posts/:id">
          <PostDetailPage 
            posts={posts} 
            setPosts={setPosts} 
            users={users}
            currentPath={currentPath}
            setCurrentPath={setCurrentPath}
          />
        </Route>
        
        <Route path="/users">
          <UsersPage 
            users={users} 
            posts={posts}
            setCurrentPath={setCurrentPath}
          />
        </Route>
        
        <Route path="/notifications">
          <NotificationsPage />
        </Route>
      </Router>
    </div>
  );
}
