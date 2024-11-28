import { format } from 'date-fns';

function NewsCard({ title, content, date, imageUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{content}</p>
        <span className="text-sm text-gray-500">
          {format(new Date(date), 'MMM dd, yyyy')}
        </span>
      </div>
    </div>
  );
}

export default NewsCard;