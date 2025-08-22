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
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <button 
          onClick={() => {
            setCurrentPage('home');
            setSelectedUserId(null);
          }}
          className="text-xl font-bold flex items-center gap-2 hover:text-blue-200 transition-colors"
        >
          <Home size={24} />
          Social Hub
        </button>
        <div className="flex space-x-6">
          <button
            onClick={() => {
              setCurrentPage('home');
              setSelectedUserId(null);
            }}
            className={`flex items-center gap-2 hover:text-blue-200 transition-colors ${
              currentPage === 'home' ? 'text-blue-200 font-semibold' : ''
            }`}
          >
            <Home size={20} />
            Home
          </button>
          <button
            onClick={() => {
              setCurrentPage('users');
              setSelectedUserId(null);
            }}
            className={`flex items-center gap-2 hover:text-blue-200 transition-colors ${
              currentPage === 'users' || currentPage === 'userPosts' ? 'text-blue-200 font-semibold' : ''
            }`}
          >
            <Users size={20} />
            Users
          </button>
          <button
            onClick={() => {
              setCurrentPage('notifications');
              setSelectedUserId(null);
            }}
            className={`flex items-center gap-2 hover:text-blue-200 transition-colors ${
              currentPage === 'notifications' ? 'text-blue-200 font-semibold' : ''
            }`}
          >
            <Bell size={20} />
            Notifications
          </button>
          <button
            onClick={() => {
              setCurrentPage('create');
              setSelectedUserId(null);
            }}
            className="bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
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
    <div className="post bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{author.avatar}</div>
          <div>
            <h3 className="font-semibold text-gray-900">{author.name}</h3>
            <p className="text-sm text-gray-500">
              {post.timestamp.toLocaleDateString()} at {post.timestamp.toLocaleTimeString()}
            </p>
          </div>
        </div>
        {showEditButton && (
          <button
            onClick={handleEdit}
            className="button flex items-center gap-2 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <Edit3 size={16} />
            Edit
          </button>
        )}
      </div>
      
      <h2 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h2>
      <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
      
      <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
        <button
          onClick={() => handleReaction('likes')}
          className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
        >
          <Heart size={20} />
          {post.reactions.likes}
        </button>
        <button
          onClick={() => handleReaction('comments')}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
        >
          <MessageCircle size={20} />
          {post.reactions.comments}
        </button>
        <button
          onClick={() => handleReaction('shares')}
          className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors"
        >
          <Share2 size={20} />
          {post.reactions.shares}
        </button>
      </div>
    </div>
  );
}

// Landing Page
function LandingPage({ posts, users, onReact, onEdit, setCurrentPage }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Social Hub</h1>
        <p className="text-gray-600">Connect, share, and discover amazing content from our community.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <button 
          onClick={() => setCurrentPage('home')}
          className="bg-blue-500 text-white p-4 rounded-lg text-center hover:bg-blue-600 transition-colors"
        >
          <Home size={24} className="mx-auto mb-2" />
          <h3 className="font-semibold">Home</h3>
        </button>
        <button 
          onClick={() => setCurrentPage('users')}
          className="bg-green-500 text-white p-4 rounded-lg text-center hover:bg-green-600 transition-colors"
        >
          <Users size={24} className="mx-auto mb-2" />
          <h3 className="font-semibold">Users</h3>
        </button>
        <button 
          onClick={() => setCurrentPage('notifications')}
          className="bg-yellow-500 text-white p-4 rounded-lg text-center hover:bg-yellow-600 transition-colors"
        >
          <Bell size={24} className="mx-auto mb-2" />
          <h3 className="font-semibold">Notifications</h3>
        </button>
        <button 
          onClick={() => setCurrentPage('create')}
          className="bg-purple-500 text-white p-4 rounded-lg text-center hover:bg-purple-600 transition-colors"
        >
          <Edit3 size={24} className="mx-auto mb-2" />
          <h3 className="font-semibold">Create</h3>
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Latest Posts</h2>
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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">All Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map(user => (
          <button
            key={user.id}
            onClick={() => handleUserClick(user.id)}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center"
          >
            <div className="text-4xl mb-3">{user.avatar}</div>
            <h3 className="font-semibold text-lg text-gray-900">{user.name}</h3>
            <p className="text-gray-600 mt-2">View posts →</p>
          </button>
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
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">User not found</h1>
          <button 
            onClick={() => setCurrentPage('users')}
            className="text-blue-600 hover:underline"
          >
            ← Back to Users
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="text-4xl">{user.avatar}</div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-gray-600">{userPosts.length} posts</p>
        </div>
      </div>

      <button 
        onClick={() => setCurrentPage('users')}
        className="inline-flex items-center text-blue-600 hover:underline mb-6"
      >
        <ArrowLeft size={16} className="mr-1" />
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
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-600">This user hasn't posted anything yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Notifications Page
function NotificationsPage({ notifications, onRefreshNotifications }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
        <button
          onClick={onRefreshNotifications}
          className="button bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Refresh Notifications
        </button>
      </div>

      <div className="space-y-4">
        {notifications.length > 0 ? (
          notifications.map(notification => (
            <div key={notification.id} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
              <p className="text-gray-900">{notification.message}</p>
              <p className="text-sm text-gray-500 mt-2">
                {notification.timestamp.toLocaleDateString()} at {notification.timestamp.toLocaleTimeString()}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <Bell size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600">No notifications yet. Click "Refresh Notifications" to check for updates!</p>
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Post</h1>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="postAuthor" className="block text-sm font-medium text-gray-700 mb-2">
            Select Author
          </label>
          <select
            id="postAuthor"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

        <div>
          <label htmlFor="postTitle" className="block text-sm font-medium text-gray-700 mb-2">
            Post Title
          </label>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter post title..."
            required
          />
        </div>

        <div>
          <label htmlFor="postContent" className="block text-sm font-medium text-gray-700 mb-2">
            Content
          </label>
          <textarea
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="What's on your mind?"
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Create Post
          </button>
          <button
            onClick={() => setCurrentPage('home')}
            className="px-6 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
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
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Post</h1>
      
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{author.avatar}</div>
          <div>
            <h3 className="font-semibold text-gray-900">{author.name}</h3>
            <p className="text-sm text-gray-500">Author</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="postTitle" className="block text-sm font-medium text-gray-700 mb-2">
            Post Title
          </label>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div>
          <label htmlFor="postContent" className="block text-sm font-medium text-gray-700 mb-2">
            Content
          </label>
          <textarea
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Update Post
          </button>
          <button
            onClick={() => setCurrentPage('home')}
            className="px-6 py-3 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
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
    
    // Add notification
    const author = users.find(u => u.id === post.authorId);
    addNotification(`${author.name} created a new post: "${post.title}"`);
  };

  const updatePost = (updatedPost) => {
    setPosts(prev => prev.map(post => 
      post.id === updatedPost.id ? updatedPost : post
    ));
    
    // Add notification
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

    // Add notification
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
    // Simulate fetching new notifications
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
    <div className="min-h-screen bg-gray-100">
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
