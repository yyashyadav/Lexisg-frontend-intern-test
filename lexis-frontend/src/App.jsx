import { useState, useRef, useEffect } from "react";
import InputPanel from "./components/InputPanel";
import AnswerPanel from "./components/AnswerPanel";
import response from "./data/response";

function App() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const chatAreaRef = useRef(null);

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (query) => {
    if (!query.trim()) return;
    setLoading(true);
    setMessages((prev) => [
      ...prev,
      { content: query, timestamp: new Date() }
    ]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { content: response.answer, citations: response.citations, timestamp: new Date() }
      ]);
      setLoading(false);
    }, 1000);
  };

  const formatTime = (timestamp) => {
    return timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 px-2 sticky top-0 z-10 bg-gradient-to-b from-[#0A2E75]/90 via-[#144D9E]/80 to-[#247EC3]/80 backdrop-blur-md bg-opacity-80 shadow">
        <h1 className="text-3xl font-bold text-center text-white font-serif tracking-wide drop-shadow-sm">Lexi Legal Assistant</h1>
        <p className="text-center text-[#eaf4fb] font-serif mt-1">Your blue legal research companion</p>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center px-2">
        <div className="w-full max-w-2xl flex flex-col flex-1 bg-white/90 rounded-xl shadow-2xl border border-[#247EC3] h-[70vh] my-8 overflow-hidden">
          <div ref={chatAreaRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-[#eaf4fb] via-white to-[#eaf4fb]" id="chat-area">
            {messages.length === 0 && (
              <div className="text-[#144D9E] text-center mt-10 font-serif text-lg">Start the conversation by asking a legal question...</div>
            )}
            {messages.map((msg, idx) =>
              idx % 2 === 0 ? (
                <div key={idx} className="flex justify-end">
                  <div className="flex items-end space-x-2">
                    <div className="bg-gradient-to-br from-[#eaf4fb] via-white to-[#cbe6fa] text-[#0A2E75] px-5 py-3 rounded-2xl rounded-br-sm max-w-xs break-words shadow font-serif border border-[#247EC3]">
                      {msg.content}
                      <div className="text-xs text-right opacity-60 mt-1 font-sans text-[#144D9E]/70">{formatTime(msg.timestamp)}</div>
                    </div>
                    <span className="text-2xl">🧑</span>
                  </div>
                </div>
              ) : (
                <div key={idx} className="flex justify-start">
                  <div className="flex items-end space-x-2">
                    <span className="text-2xl">🤖</span>
                    <AnswerPanel answer={msg.content} citations={msg.citations || []} timestamp={msg.timestamp} />
                  </div>
                </div>
              )
            )}
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-end space-x-2">
                  <span className="text-2xl">🤖</span>
                  <div className="bg-gradient-to-br from-[#eaf4fb] via-white to-[#cbe6fa] text-[#144D9E] px-5 py-3 rounded-2xl rounded-bl-sm max-w-xs animate-pulse font-serif border border-[#247EC3]">Thinking...</div>
                </div>
              </div>
            )}
          </div>
          <InputPanel onSubmit={handleSubmit} loading={loading} />
        </div>
      </main>
    </div>
  );
}

export default App;
