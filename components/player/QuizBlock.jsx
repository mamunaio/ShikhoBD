import React, { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const QuizBlock = () => {
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = [
    { id: 1, q: "CSS Flexbox-এ আইটেমগুলোকে মাঝখানে আনতে কোনটি ব্যবহৃত হয়?", options: ["justify-content: center", "align-items: center", "text-align: center", "float: center"] },
    { id: 2, q: "Flex container তৈরি করার প্রপার্টি কোনটি?", options: ["display: flex", "flex: 1", "layout: flex", "position: flex"] },
    { id: 3, q: "Flex-direction এর ডিফল্ট ভ্যালু কি?", options: ["row", "column", "row-reverse", "none"] },
  ];

  const handleSelect = (qId, option) => {
    if (isSubmitted) return;
    setAnswers({ ...answers, [qId]: option });
  };

  const score = Object.values(answers).length; // simple mock score

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
         <h3 className="text-xl font-bold text-gray-900 bengali-text">Module ১ কুইজ</h3>
         <p className="text-sm text-gray-500">সঠিক উত্তর নির্বাচন করুন এবং সাবমিট বাটনে ক্লিক করুন।</p>
      </div>

      <div className="space-y-10">
        {questions.map((q, idx) => (
          <div key={q.id} className="space-y-4">
            <h4 className="font-bold text-gray-800 bengali-text flex gap-3">
               <span className="text-primary">০{idx + 1}.</span>
               {q.q}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-8">
              {q.options.map((opt, oIdx) => (
                <button
                  key={oIdx}
                  onClick={() => handleSelect(q.id, opt)}
                  className={`text-left p-4 rounded-xl border text-sm font-medium transition-all ${
                    answers[q.id] === opt 
                      ? 'border-primary bg-accent text-primary shadow-lg shadow-primary/5' 
                      : 'border-gray-100 hover:border-gray-300 text-gray-600'
                  }`}
                >
                  <span className="mr-3 text-gray-400 font-bold">{String.fromCharCode(65 + oIdx)}.</span>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!isSubmitted ? (
        <button 
          onClick={() => setIsSubmitted(true)}
          disabled={Object.keys(answers).length < questions.length}
          className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-dark transition-all disabled:opacity-50 bengali-text shadow-xl shadow-primary/20"
        >
          সাবমিট করুন
        </button>
      ) : (
        <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl text-center space-y-4 animate-in zoom-in duration-300">
           <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 size={32} />
           </div>
           <div className="space-y-1">
              <h4 className="text-2xl font-bold text-emerald-600 bengali-text">অভিনন্দন!</h4>
              <p className="text-emerald-500 font-medium bengali-text">আপনি ৩/৩ সঠিক উত্তর দিয়েছেন</p>
           </div>
           <button 
             onClick={() => { setIsSubmitted(false); setAnswers({}); }}
             className="text-emerald-600 font-bold text-sm hover:underline"
           >
             আবার চেষ্টা করুন
           </button>
        </div>
      )}
    </div>
  );
};

export default QuizBlock;
