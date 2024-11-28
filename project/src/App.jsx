import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import NewsletterForm from './components/Newsletter/NewsletterForm';
import NewsList from './components/News/NewsList';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4">
            <h1 className="text-3xl font-bold text-gray-900">Positive Newsletter</h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <NewsletterForm />
                  <div className="mt-12">
                    <NewsList />
                  </div>
                </>
              } 
            />
          </Routes>
        </main>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;