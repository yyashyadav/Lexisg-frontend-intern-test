import { useState } from 'react';

const InputPanel = ({ onSubmit, loading }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSubmit(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center border-t px-4 py-3 bg-white">
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 resize-none border rounded-2xl px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50 text-gray-800 min-h-[40px] max-h-32"
        rows={1}
        disabled={loading}
        style={{height: '40px'}}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-2xl font-semibold disabled:opacity-50 transition"
        disabled={loading || !query.trim()}
      >
        {loading ? '...' : 'Send'}
      </button>
    </form>
  );
};

export default InputPanel;
