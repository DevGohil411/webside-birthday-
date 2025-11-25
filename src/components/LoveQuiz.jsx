import { useMemo, useState } from 'react';
import { Sparkles } from 'lucide-react';
import useHapticFeedback from '../hooks/useHapticFeedback.js';
import useSoundEffect from '../hooks/useSoundEffect.js';

const LoveQuiz = ({ questions }) => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const haptic = useHapticFeedback();
  const popSound = useSoundEffect('pop');

  const score = useMemo(() => {
    const total = questions.length;
    const correct = questions.reduce((acc, question, index) => {
      if (answers[index] === question.answer) {
        return acc + 1;
      }
      return acc;
    }, 0);
    return { total, correct, percentage: Math.round((correct / total) * 100) || 0 };
  }, [answers, questions]);

  const handleSelect = (questionIndex, option) => {
    haptic();
    popSound();
    setAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const handleSubmit = () => {
    haptic();
    popSound();
    setShowResults(true);
  };

  const handleReset = () => {
    haptic();
    popSound();
    setAnswers({});
    setShowResults(false);
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-dream">
      <div className="flex flex-col gap-6">
        {questions.map((question, qIndex) => (
          <article key={question.prompt} className="rounded-2xl border border-white/10 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-blush-200">
              Question {qIndex + 1}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">
              {question.prompt}
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {question.options.map((option) => {
                const isSelected = answers[qIndex] === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    className={`touch-target rounded-2xl border px-4 py-3 text-left transition ${
                      isSelected
                        ? 'border-blush-400 bg-blush-500/20 text-white'
                        : 'border-white/15 bg-slate-900/30 text-slate-200 hover:border-white/30'
                    }`}
                    onClick={() => handleSelect(qIndex, option.value)}
                  >
                    <p className="font-medium">{option.label}</p>
                    {option.detail && (
                      <p className="text-sm text-slate-300">{option.detail}</p>
                    )}
                  </button>
                );
              })}
            </div>
          </article>
        ))}

        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="touch-target inline-flex items-center gap-2 rounded-full bg-blush-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blush-500/30 transition hover:-translate-y-0.5 hover:bg-blush-400"
          >
            Reveal Score
            <Sparkles size={18} />
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="touch-target rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
          >
            Reset Quiz
          </button>
        </div>

        {showResults && (
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-5">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blush-500/30 via-transparent to-transparent"
              aria-hidden="true"
            />
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
              Compatibility Score
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="text-4xl font-display text-white md:text-5xl">
                {score.correct}/{score.total}
              </div>
              <div className="flex-1">
                <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-blush-400 transition-[width]"
                    style={{ width: `${score.percentage}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  {score.percentage}% soulmate synchronization
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoveQuiz;

