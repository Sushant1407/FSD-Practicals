import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isOffline, setIsOffline] = useState(!navigator.onLine)
  const [loading, setLoading] = useState(true)
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
  const [favoriteIds, setFavoriteIds] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem('favoriteTeammates')
      return savedFavorites ? JSON.parse(savedFavorites) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('favoriteTeammates', JSON.stringify(favoriteIds))
  }, [favoriteIds])

  useEffect(() => {
    // API Caching test
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        // Map the original global data to Indian equivalents
        const indianNames = ["Reyansh Mehta", "Kabir Nanda", "Atharv Bhat", "Pranav Kulkarni", "Shaurya Menon", "Ritvik Chawla", "Dhruv Malhotra", "Arnav Pillai", "Nikhil Saini", "Yuvan Trivedi"];
        const indianCities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat"];
        const indianCompanies = ["TCS", "Infosys", "Wipro", "HCLTech", "Tech Mahindra", "Reliance", "L&T", "Adani Group", "Mahindra", "Bajaj Auto"];
        
        const indianData = json.map((user, index) => {
          const name = indianNames[index % indianNames.length];
          return {
            ...user,
            name: name,
            email: name.toLowerCase().replace(' ', '.') + "@example.in",
            address: { ...user.address, city: indianCities[index % indianCities.length] },
            company: { ...user.company, name: indianCompanies[index % indianCompanies.length] }
          };
        });
        
        setData(indianData)
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching data:", error)
        setLoading(false)
      });

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const filteredData = data.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleUsers = showFavoritesOnly
    ? filteredData.filter((user) => favoriteIds.includes(user.id))
    : filteredData

  const toggleFavorite = (userId) => {
    setFavoriteIds((prevFavorites) =>
      prevFavorites.includes(userId)
        ? prevFavorites.filter((id) => id !== userId)
        : [...prevFavorites, userId]
    )
  }

  return (
    <div className="app-container">
      {isOffline && (
        <div className="offline-banner">
          📶 You are currently offline. Viewing cached content.
        </div>
      )}

      <header className="header">
        <h1>People Hub</h1>
        <p>Stay connected, even when you're not</p>
      </header>

      <div className="search-container">
        <input 
          type="text" 
          className="search-input"
          placeholder="Search by name or email..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-actions">
        <button
          type="button"
          className={`favorites-filter-btn ${showFavoritesOnly ? 'active' : ''}`}
          onClick={() => setShowFavoritesOnly((prev) => !prev)}
        >
          {showFavoritesOnly ? 'Show All Teammates' : 'Show Favorite Teammates'}
        </button>
      </div>

      {loading ? (
        <div className="user-grid">
          {[1, 2, 3, 4, 5, 6].map(skeleton => (
            <div key={skeleton} className="skeleton-card"></div>
          ))}
        </div>
      ) : visibleUsers.length > 0 ? (
        <div className="user-grid">
          {visibleUsers.map(user => (
            <div className="user-card" key={user.id}>
              <div className="card-top-row">
                <div className="user-avatar">
                  {user.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
                <button
                  type="button"
                  className={`favorite-btn ${favoriteIds.includes(user.id) ? 'is-favorite' : ''}`}
                  onClick={() => toggleFavorite(user.id)}
                  aria-label={favoriteIds.includes(user.id) ? `Remove ${user.name} from favorites` : `Add ${user.name} to favorites`}
                >
                  {favoriteIds.includes(user.id) ? '★ Favorite' : '☆ Favorite'}
                </button>
              </div>
              <div className="user-info">
                <h3>{user.name}</h3>
                <p>📧 {user.email}</p>
                <p>🏢 {user.company.name}</p>
                <p>📍 {user.address.city}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>
            {showFavoritesOnly
              ? 'No favorite teammates found. Mark teammates as favorite to see them here.'
              : `No team members found matching "${searchTerm}"`}
          </p>
        </div>
      )}
    </div>
  )
}

export default App
