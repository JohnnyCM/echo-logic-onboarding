import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Database, MessageSquare, Briefcase, BrainCircuit } from 'lucide-react';

const PhaseOne = ({ onNext }) => {
  const [step, setStep] = useState(1);
  const [pipelineSelection, setPipelineSelection] = useState([]);
  const [serviceMatched, setServiceMatched] = useState(false);

  const pipelineOptions = ['Sentiment Models', 'Tokenization', 'Entity Recognition'];
  const correctPipeline = ['Tokenization', 'Entity Recognition', 'Sentiment Models'];

  const handlePipelineSelect = (item) => {
    if (pipelineSelection.includes(item)) return;
    const newSelection = [...pipelineSelection, item];
    setPipelineSelection(newSelection);
    
    if (newSelection.length === 3) {
      if (JSON.stringify(newSelection) === JSON.stringify(correctPipeline)) {
        setTimeout(() => setStep(2), 1500);
      } else {
        setTimeout(() => setPipelineSelection([]), 1000);
      }
    }
  };

  return (
    <div className="phase-container">
      <div className="animate-fade-in text-center">
        <h2>Phase 1: Skill Development (Days 1-30)</h2>
        <p>Master the tools and understand the client.</p>
      </div>

      {step === 1 && (
        <div className="glass-panel puzzle-area animate-fade-in delay-100">
          <div style={{ textAlign: 'center' }}>
            <Database size={48} className="mission-icon" />
            <h3>Mini-game 1: NLP Pipeline Assembly</h3>
            <p>Assemble the fundamental NLP pipeline in the correct order to proceed.</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            {pipelineOptions.map((opt) => (
              <button
                key={opt}
                className={`btn ${pipelineSelection.includes(opt) ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handlePipelineSelect(opt)}
                disabled={pipelineSelection.includes(opt)}
              >
                {opt}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem', minHeight: '60px' }}>
            {pipelineSelection.map((item, idx) => (
              <div key={idx} style={{ padding: '0.75rem 1.5rem', background: 'var(--bg-panel-hover)', borderRadius: '8px', border: '1px solid var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{idx + 1}.</span> {item}
              </div>
            ))}
          </div>

          {pipelineSelection.length === 3 && JSON.stringify(pipelineSelection) === JSON.stringify(correctPipeline) && (
            <div className="animate-fade-in" style={{ textAlign: 'center', color: 'var(--success)', marginTop: '1rem', fontWeight: 'bold' }}>
              <CheckCircle size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }}/>
              Pipeline Optimized! Proceeding...
            </div>
          )}
          {pipelineSelection.length === 3 && JSON.stringify(pipelineSelection) !== JSON.stringify(correctPipeline) && (
            <div className="animate-fade-in" style={{ textAlign: 'center', color: 'var(--accent)', marginTop: '1rem', fontWeight: 'bold' }}>
              Pipeline failed. Reassembling...
            </div>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="glass-panel puzzle-area animate-fade-in">
          <div style={{ textAlign: 'center' }}>
            <Briefcase size={48} className="mission-icon" />
            <h3>Mini-game 2: Client Service Matching</h3>
            <p>Read the client brief and select the appropriate Echo Logic service.</p>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
            <strong>Client Brief:</strong> "We need a system that can handle 10,000 daily customer inquiries, resolving basic issues automatically and routing complex ones to human agents intelligently."
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
            <button className="btn btn-secondary" onClick={() => setServiceMatched('wrong')} style={{ padding: '2rem', height: 'auto', flexDirection: 'column' }}>
              <MessageSquare size={24} style={{ marginBottom: '1rem', color: 'var(--text-muted)' }} />
              Sentiment Analysis API
            </button>
            <button className={`btn ${serviceMatched === 'correct' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => { setServiceMatched('correct'); setTimeout(() => setStep(3), 1500); }} style={{ padding: '2rem', height: 'auto', flexDirection: 'column' }}>
              <BrainCircuit size={24} style={{ marginBottom: '1rem', color: serviceMatched === 'correct' ? 'white' : 'var(--text-muted)' }} />
              Conversational Chatbot Solution
            </button>
          </div>

          {serviceMatched === 'correct' && (
            <div className="animate-fade-in" style={{ textAlign: 'center', color: 'var(--success)', marginTop: '1rem', fontWeight: 'bold' }}>
              <CheckCircle size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }}/>
              Perfect Match!
            </div>
          )}
          {serviceMatched === 'wrong' && (
            <div className="animate-fade-in" style={{ textAlign: 'center', color: 'var(--accent)', marginTop: '1rem', fontWeight: 'bold' }}>
              Incorrect service selected. Try again.
            </div>
          )}
        </div>
      )}

      {step === 3 && (
        <div className="glass-panel puzzle-area animate-fade-in">
          <div style={{ textAlign: 'center' }}>
            <CheckCircle size={48} className="mission-icon" style={{ color: 'var(--success)' }} />
            <h3>Phase 1 Complete!</h3>
            <p>You've successfully mastered the core pipeline and understood client needs during your shadowing phase.</p>
            <p style={{ color: 'var(--primary)', marginTop: '1rem', fontStyle: 'italic' }}>Feedback Check-in: "Excellent progress! You're ready for more independent work."</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <button className="btn btn-primary" onClick={onNext}>
              Enter Phase 2 <ArrowRight size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhaseOne;
