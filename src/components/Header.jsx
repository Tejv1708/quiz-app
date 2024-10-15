import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const user = JSON.parse(localStorage.getItem('quizUser'));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('quizUser');
    localStorage.removeItem('quizAnswers');
    navigate('/login');
  };

  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Home Link */}
        <Link to="/" className="text-2xl font-extrabold hover:text-blue-500">
          Quiz Application
        </Link>

        <nav>
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <Link to="/test" className="text-lg hover:text-blue-400">
                Test
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-lg hover:text-red-400 transition-colors"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* User Info */}
        {user && (
          <div className="hidden md:block text-lg font-medium">
            <span className="ml-6">{`Welcome, ${user.name}`}</span>
          </div>
        )}

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={handleLogout}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            {user ? `Logout (${user.name})` : 'Login'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
