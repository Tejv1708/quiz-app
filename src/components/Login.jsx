import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email) {
      const user = { name, email };
      localStorage.setItem('quizUser', JSON.stringify(user));
      navigate('/test');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r ">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Enter your details to start the quiz.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg transition hover:bg-indigo-700"
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
