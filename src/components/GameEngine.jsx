import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle, Database, MessageSquare, Briefcase, 
  BrainCircuit, Shield, Target, Eye, Zap, TrendingDown,
  CheckSquare, Square
} from 'lucide-react';
import { levels } from '../data/levels';

const GameEngine = ({ onComplete }) => {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  
  const level = levels[currentLevelIndex];
  const isLastLevel = currentLevelIndex === levels.length - 1;

  const handleNext = () => {
    if (isLastLevel) {
      if (onComplete) onComplete();
    } else {
      setCurrentLevelIndex(prev => prev + 1);
    }
  };

  return (
    <div className="phase-container">
      <div className="progress-container animate-fade-in" style={{ justifyContent: 'center', marginBottom: '2rem' }}>
        <div className="progress-text">Step {currentLevelIndex + 1} of {levels.length}</div>
        <div className="progress-bar" style={{ width: '100%', maxWidth: '600px' }}>
          <div 
            className="progress-fill" 
            style={{ width: `${((currentLevelIndex + 1) / levels.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="glass-panel puzzle-area animate-fade-in" key={level.id}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <LevelIcon type={level.type} />
          <h2>{level.title}</h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>{level.content}</p>
        </div>

        {level.type === 'info' && <InfoLevel level={level} onNext={handleNext} />}
        {level.type === 'checklist' && <ChecklistLevel level={level} onNext={handleNext} />}
        {level.type === 'quiz' && <QuizLevel level={level} onNext={handleNext} />}
        {level.type === 'matching' && <MatchingLevel level={level} onNext={handleNext} />}
        {level.type === 'pipeline' && <PipelineLevel level={level} onNext={handleNext} />}
        {level.type === 'optimization' && <OptimizationLevel level={level} onNext={handleNext} />}
        {level.type === 'capstone' && <CapstoneLevel level={level} onNext={handleNext} />}
      </div>
    </div>
  );
};

// --- Level Type Components ---

const LevelIcon = ({ type }) => {
  const props = { size: 48, className: "mission-icon" };
  switch(type) {
    case 'info': return <Eye {...props} />;
    case 'checklist': return <CheckSquare {...props} />;
    case 'quiz': return <Target {...props} />;
    case 'matching': return <Briefcase {...props} />;
    case 'pipeline': return <Database {...props} />;
    case 'optimization': return <Zap {...props} />;
    case 'capstone': return <BrainCircuit {...props} />;
    default: return <Shield {...props} />;
  }
};

const InfoLevel = ({ level, onNext }) => (
  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
    <button className="btn btn-primary" onClick={onNext}>
      {level.buttonText || 'Continue'} <ArrowRight size={20} />
    </button>
  </div>
);

const ChecklistLevel = ({ level, onNext }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleItem = (idx) => {
    if (checkedItems.includes(idx)) {
      setCheckedItems(checkedItems.filter(i => i !== idx));
    } else {
      setCheckedItems([...checkedItems, idx]);
    }
  };

  const allChecked = checkedItems.length === level.items.length;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        {level.items.map((item, idx) => (
          <div 
            key={idx} 
            className="btn btn-secondary" 
            style={{ justifyContent: 'flex-start', padding: '1rem', background: checkedItems.includes(idx) ? 'rgba(16, 185, 129, 0.2)' : '' }}
            onClick={() => toggleItem(idx)}
          >
            {checkedItems.includes(idx) ? <CheckSquare size={24} color="var(--success)" /> : <Square size={24} />}
            <span style={{ marginLeft: '1rem', textAlign: 'left' }}>{item}</span>
          </div>
        ))}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', minHeight: '50px' }}>
        {allChecked ? (
          <button className="btn btn-primary animate-fade-in" onClick={onNext}>
            Confirm & Continue <ArrowRight size={20} />
          </button>
        ) : (
          <p style={{ color: 'var(--text-muted)' }}>Complete all items to proceed.</p>
        )}
      </div>
    </div>
  );
};

const QuizLevel = ({ level, onNext }) => {
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState(null); // 'correct', 'incorrect'

  const handleSelect = (idx) => {
    setSelected(idx);
    if (idx === level.answer) {
      setStatus('correct');
      setTimeout(() => onNext(), 1500);
    } else {
      setStatus('incorrect');
      setTimeout(() => {
        setStatus(null);
        setSelected(null);
      }, 1500);
    }
  };

  return (
    <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
      {level.options.map((opt, idx) => (
        <button 
          key={idx}
          className={`btn ${selected === idx ? (status === 'correct' ? 'btn-primary' : 'btn-secondary') : 'btn-secondary'}`}
          style={{ padding: '1.5rem', height: 'auto', textAlign: 'left', justifyContent: 'flex-start',
            borderColor: selected === idx && status === 'incorrect' ? 'var(--accent)' : ''
          }}
          onClick={() => handleSelect(idx)}
          disabled={status === 'correct' || (status === 'incorrect' && selected === idx)}
        >
          {opt}
        </button>
      ))}
      {status === 'correct' && (
        <div className="animate-fade-in" style={{ textAlign: 'center', color: 'var(--success)', marginTop: '1rem', fontWeight: 'bold' }}>
          <CheckCircle size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }}/> Correct!
        </div>
      )}
      {status === 'incorrect' && (
        <div className="animate-fade-in" style={{ textAlign: 'center', color: 'var(--accent)', marginTop: '1rem', fontWeight: 'bold' }}>
          Incorrect. Please try again.
        </div>
      )}
    </div>
  );
};

const MatchingLevel = ({ level, onNext }) => {
  // Matching can use the same UI as Quiz for simplicity in this engine
  return <QuizLevel level={level} onNext={onNext} />;
};

const PipelineLevel = ({ level, onNext }) => {
  const [selection, setSelection] = useState([]);

  const handleSelect = (item) => {
    if (selection.includes(item)) return;
    const newSelection = [...selection, item];
    setSelection(newSelection);
    
    if (newSelection.length === level.answer.length) {
      if (JSON.stringify(newSelection) === JSON.stringify(level.answer)) {
        setTimeout(() => onNext(), 1500);
      } else {
        setTimeout(() => setSelection([]), 1500);
      }
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
        {level.options.map((opt) => (
          <button
            key={opt}
            className={`btn ${selection.includes(opt) ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => handleSelect(opt)}
            disabled={selection.includes(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem', minHeight: '60px', flexWrap: 'wrap' }}>
        {selection.map((item, idx) => (
          <div key={idx} style={{ padding: '0.75rem 1.5rem', background: 'var(--bg-panel-hover)', borderRadius: '8px', border: '1px solid var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{idx + 1}.</span> {item}
          </div>
        ))}
      </div>

      {selection.length === level.answer.length && JSON.stringify(selection) === JSON.stringify(level.answer) && (
        <div className="animate-fade-in" style={{ textAlign: 'center', color: 'var(--success)', marginTop: '2rem', fontWeight: 'bold' }}>
          <CheckCircle size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }}/> Sequence Correct!
        </div>
      )}
      {selection.length === level.answer.length && JSON.stringify(selection) !== JSON.stringify(level.answer) && (
        <div className="animate-fade-in" style={{ textAlign: 'center', color: 'var(--accent)', marginTop: '2rem', fontWeight: 'bold' }}>
          Sequence incorrect. Resetting...
        </div>
      )}
    </div>
  );
};

const OptimizationLevel = ({ level, onNext }) => {
  const [val, setVal] = useState(level.startValue);
  const isDone = level.reverse ? val <= level.target : val >= level.target;

  const applyOptimization = (boost) => {
    if (isDone) return;
    let newVal = level.reverse ? val - boost : val + boost;
    if (level.reverse && newVal < level.target) newVal = level.target;
    if (!level.reverse && newVal > level.target) newVal = level.target;
    setVal(newVal);
    
    if ((level.reverse && newVal <= level.target) || (!level.reverse && newVal >= level.target)) {
      setTimeout(() => onNext(), 1500);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
      <div style={{ background: 'rgba(0,0,0,0.3)', padding: '2rem', borderRadius: '8px', marginTop: '2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', fontWeight: 'bold', color: isDone ? 'var(--success)' : 'var(--primary)', fontFamily: 'monospace' }}>
          {val}{level.reverse ? 'ms' : '%'}
        </div>
        <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginTop: '1rem', overflow: 'hidden' }}>
          <div style={{ 
            width: level.reverse ? `${(val / level.startValue) * 100}%` : `${val}%`, 
            height: '100%', 
            background: isDone ? 'var(--success)' : 'var(--primary)', 
            transition: 'width 0.3s ease' 
          }}></div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
        <button className="btn btn-secondary" onClick={() => applyOptimization(level.reverse ? 25 : 10)} disabled={isDone}>
          {level.reverse ? <TrendingDown size={16} /> : <Zap size={16} />} Tune Algorithm
        </button>
        <button className="btn btn-secondary" onClick={() => applyOptimization(level.reverse ? 40 : 15)} disabled={isDone}>
          <Database size={16} /> Enhance Data
        </button>
      </div>

      {isDone && (
        <div className="animate-fade-in" style={{ textAlign: 'center', color: 'var(--success)', marginTop: '2rem', fontWeight: 'bold' }}>
          <CheckCircle size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }}/> Target Achieved!
        </div>
      )}
    </div>
  );
};

const CapstoneLevel = ({ level, onNext }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (proj) => {
    setSelected(proj);
    setTimeout(() => onNext(), 1500);
  };

  return (
    <div className="card-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
      {level.options.map((proj) => (
        <button 
          key={proj}
          className={`btn ${selected === proj ? 'btn-primary' : 'btn-secondary'}`}
          style={{ padding: '2rem', flexDirection: 'column', height: 'auto', textAlign: 'center' }}
          onClick={() => handleSelect(proj)}
          disabled={selected !== null}
        >
          {proj}
        </button>
      ))}
    </div>
  );
};

export default GameEngine;
