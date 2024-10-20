import React, { useState } from 'react';
import './Pricing.css';
import Titlesection from '../titlesection/titlesection';
import Textsection from '../textsection/textsection';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
      <div className="pricing">
        <Titlesection text="Pricing" backgroundColor="#5e2bff" textColor="#fff" />
        <Textsection 
          title="Find the Right Plan for" 
          subtitle="Your Team" 
        />
      </div>

      <div className="pricing-container">
        {/* Pricing toggle */}
        <div className="pricing-toggle">
          <div className="toggle-wrapper">
            {/* The background needs to be placed outside of the slider */}
            <span className="toggle-bg" aria-hidden="true"></span>
            <span
              className={`toggle-slider ${isAnnual ? 'translate-x-0' : 'translate-x-full'}`}
            ></span>

            <button
              className={`toggle-button ${isAnnual ? 'text-white' : 'text-slate-500'}`}
              onClick={() => setIsAnnual(true)}
              aria-pressed={isAnnual}
            >
              Yearly
            </button>
            <button
              className={`toggle-button ${isAnnual ? 'text-slate-500' : 'text-white'}`}
              onClick={() => setIsAnnual(false)}
              aria-pressed={!isAnnual}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {/* Pricing Tab 1 */}
          <div className="pricing-tab">
            <div className="pricing-card">
              <div className="pricing-header">
                <div className="plan-name">Essential</div>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{isAnnual ? '29' : '35'}</span>
                  <span className="duration">/mo</span>
                </div>
                <div className="description">
                  There are many variations available, but the majority have suffered.
                </div>
                <a href="#0" className="purchase-btn">
                  Purchase Plan
                </a>
              </div>
              <div className="plan-includes">Includes:</div>
              <ul className="features-list">
                <li className="feature-item">Unlimited placeholder texts</li>
                <li className="feature-item">Consectetur adipiscing elit</li>
                <li className="feature-item">Excepteur sint occaecat cupidatat</li>
                <li className="feature-item">Officia deserunt mollit anim</li>
              </ul>
            </div>
          </div>

          {/* Pricing Tab 2 */}
          <div className="pricing-tab">
            <div className="pricing-card most-popular">
              <div className="popular-badge">Most Popular</div>
              <div className="pricing-header">
                <div className="plan-name">Perform</div>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{isAnnual ? '49' : '55'}</span>
                  <span className="duration">/mo</span>
                </div>
                <div className="description">
                  There are many variations available, but the majority have suffered.
                </div>
                <a href="#0" className="purchase-btn">
                  Purchase Plan
                </a>
              </div>
              <div className="plan-includes">Includes:</div>
              <ul className="features-list">
                <li className="feature-item">Unlimited placeholder texts</li>
                <li className="feature-item">Consectetur adipiscing elit</li>
                <li className="feature-item">Excepteur sint occaecat cupidatat</li>
                <li className="feature-item">Predefined chunks as necessary</li>
              </ul>
            </div>
          </div>

          {/* Pricing Tab 3 */}
          <div className="pricing-tab">
            <div className="pricing-card">
              <div className="pricing-header">
                <div className="plan-name">Enterprise</div>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">{isAnnual ? '79' : '85'}</span>
                  <span className="duration">/mo</span>
                </div>
                <div className="description">
                  There are many variations available, but the majority have suffered.
                </div>
                <a href="#0" className="purchase-btn">
                  Purchase Plan
                </a>
              </div>
              <div className="plan-includes">Includes:</div>
              <ul className="features-list">
                <li className="feature-item">Unlimited placeholder texts</li>
                <li className="feature-item">Consectetur adipiscing elit</li>
                <li className="feature-item">Excepteur sint occaecat cupidatat</li>
                <li className="feature-item">Free from repetition</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
