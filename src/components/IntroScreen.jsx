import React from 'react';
import { Target, Eye, Shield, ArrowRight } from 'lucide-react';

const IntroScreen = ({ onNext }) => {
  return (
    <div className="phase-container">
      <div className="text-center animate-fade-in">
        <h1>Welcome to Echo Logic</h1>
        <p className="delay-100 animate-fade-in" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          Embark on your 90-day journey to mastering Conversational AI and Natural Language Processing.
        </p>
      </div>

      <div className="card-grid animate-fade-in delay-200">
        <div className="glass-panel mission-card">
          <Target className="mission-icon" />
          <h2>Mission</h2>
          <p>
            To empower businesses with intelligent language solutions that transform how they understand, engage, and communicate with their customers through cutting-edge natural language processing and machine learning technologies.
          </p>
        </div>

        <div className="glass-panel mission-card">
          <Eye className="mission-icon" />
          <h2>Vision</h2>
          <p>
            To be the global leader in conversational AI and language understanding, making advanced NLP technology accessible to every organization seeking deeper connections with their audience.
          </p>
        </div>

        <div className="glass-panel mission-card">
          <Shield className="mission-icon" />
          <h2>Values</h2>
          <div style={{ textAlign: 'left', marginTop: '1rem' }}>
            <p><strong>Innovation:</strong> Pushing the boundaries of NLP.</p>
            <p><strong>Intelligence:</strong> Building smart, adaptive solutions.</p>
            <p><strong>Integrity:</strong> Delivering reliable, ethical AI systems.</p>
          </div>
        </div>
      </div>

      <div className="animate-fade-in delay-300" style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
        <button className="btn btn-primary" onClick={onNext}>
          Start Onboarding Quest <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;
