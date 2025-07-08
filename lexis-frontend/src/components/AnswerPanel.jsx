import React from 'react'

const AnswerPanel = ({ answer, citations, timestamp }) => {
    if (!answer) return null;
    
    const formatTime = (timestamp) => {
        return timestamp?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

  return (
    <div className="bg-gradient-to-br from-[#eaf4fb] via-white to-[#cbe6fa] text-[#0A2E75] px-6 py-4 rounded-2xl rounded-bl-md shadow-lg border border-[#247EC3] max-w-xs font-serif">
        <div className="space-y-3">
            <p className="text-sm leading-relaxed whitespace-pre-line">{answer}</p>
            {timestamp && (
                <p className="text-xs text-[#144D9E]/70 opacity-70">{formatTime(timestamp)}</p>
            )}
            {citations && citations.length > 0 && (
                <div className="mt-4 space-y-3 pt-3 border-t border-[#247EC3]/40">
                    <p className="text-xs font-semibold text-[#144D9E] uppercase tracking-wide">Sources:</p>
                    {citations.map((cite, idx) => (
                        <div key={idx} className="bg-[#eaf4fb]/60 rounded-lg p-3 border border-[#247EC3]/40 shadow-sm">
                            <p className="text-xs italic text-[#0A2E75] mb-2 leading-relaxed">
                                “{cite.text}” <span className="font-semibold">(Para 7 of the document)</span>
                            </p>
                            <button
                                onClick={() => window.open(cite.link, '_blank', 'noopener,noreferrer')}
                                className="mt-2 px-3 py-1 bg-[#247EC3] hover:bg-[#144D9E] text-white rounded shadow text-xs font-semibold transition-colors"
                            >
                                Download Judgment PDF
                            </button>
                            <p className="text-[11px] text-[#144D9E] mt-1 italic">After opening, please scroll to and review Paragraph 7.</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
  </div>
  )
}

export default AnswerPanel