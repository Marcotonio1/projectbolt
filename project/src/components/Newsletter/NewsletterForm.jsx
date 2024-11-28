import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { requestNotificationPermission } from '../../firebase/messaging';
import toast from 'react-hot-toast';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Subscribe to newsletter
      await addDoc(collection(db, 'subscribers'), {
        email,
        createdAt: new Date(),
        notificationToken: await requestNotificationPermission()
      });

      toast.success('Successfully subscribed to Positive Newsletter!');
      setEmail('');
    } catch (error) {
      toast.error('Error subscribing to newsletter');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Subscribe to Positive News</h2>
      <p className="text-gray-600 mb-6 text-center">
        Get uplifting stories delivered to your inbox
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 disabled:opacity-50"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
}

export default NewsletterForm;