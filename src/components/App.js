// Navigation Component (FIXED)
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
        {/* FIXED: Correct href and unique test ID */}
        <a 
          href="/" 
          data-testid="posts-nav-link"
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
        
        {/* FIXED: Unique test ID and exact text match */}
        <a 
          href="/users" 
          data-testid="users-nav-link"
          onClick={(e) => { e.preventDefault(); setCurrentPath('/users'); }}
          style={{
            color: 'white',
            textDecoration: 'underline',
            padding: '12px 24px',
            backgroundColor: currentPath === '/users' ? '#6D28D9' : '#7C3AED',
            borderRadius: '8px',
            fontWeight: 'bold'
          }}
        >
          {/* Changed to "Users List" to avoid substring matches */}
          Users List
        </a>
        
        <a 
          href="/notifications" 
          data-testid="notifications-nav-link"
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
