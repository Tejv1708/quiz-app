const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-lg max-w-2xl w-full p-8">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Welcome to the Quiz Application!
        </h2>
        <p className="text-gray-600 mb-6 text-lg text-center">
          Test your knowledge with quizzes on various topics. Challenge yourself
          and track your progress.
        </p>

        <div className="border-t border-gray-200 mt-6 mb-6"></div>

        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          How to Use:
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          <li>Click on <strong>Login</strong> to create a user account.</li>
          <li>Once logged in, access quizzes by clicking <strong>Test</strong>.</li>
          <li>Submit your answers to get your score instantly.</li>
          <li>Review your performance in the summary section.</li>
        </ul>

        <div className="border-t border-gray-200 mt-6 mb-6"></div>

        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Features:</h3>
        <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
          <li>User authentication to save your progress.</li>
          <li>Real-time feedback on your answers.</li>
          <li>Fun and interactive user interface with confetti effects!</li>
        </ul>

        <p className="text-center text-gray-700 font-medium mb-8">
          Ready to test your knowledge? Get started now!
        </p>
      </div>
    </div>
  );
};

export default Home;
