import { useState } from 'react';

export default function NetGenicStudio() {
  const [idea, setIdea] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const generateApp = async () => {
    setLoading(true);
    setOutput('Generating your app/game...');

    const response = await fetch('https://your-backend-url.com/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idea }),
    });

    const data = await response.json();
    setOutput(data.result);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🧠 NetGenic Studio</h1>
      <input
        type="text"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="Enter your game or app idea..."
        className="w-full p-3 border rounded-lg mb-4"
      />
      <button
        onClick={generateApp}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>

      {output && (
        <div className="mt-6 p-4 border rounded-lg bg-gray-100">
          <p className="text-lg font-medium">🔧 Result:</p>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}
