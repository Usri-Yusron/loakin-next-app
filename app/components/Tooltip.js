import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';


export default function Tooltip({ triggerElement, href = "#" }) {
    return (
        <StyledWrapper>
            <div className="tooltip-container">
                <div className="button-content">
                    <Link href={href}>{triggerElement}</Link>
                </div>
                <div className="tooltip-content">
                    <div className="social-icons">
                        <a href="#" className="social-icon twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                        <a href="#" className="social-icon facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href="#" className="social-icon linkedin">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  /* Container Styles */
  .tooltip-container {
    position: relative;
    font-family: "Arial", sans-serif;
    overflow: visible;
  }

  .share-icon {
    fill: white;
    transition:
      transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),
      fill 0.3s ease;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1));
  }

  .button-content:hover .share-icon {
    transform: rotate(180deg) scale(1.1);
    fill: #ffffff;
  }

  /* Tooltip Styles */
  .tooltip-content {
    position: absolute;
    left: 55%;
    top: 145%;
    transform: translateX(-50%) scale(0.8);
    background: white;
    border-radius: 15px;
    padding: 22px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55),
      transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55),
      visibility 0.5s ease;
    z-index: 100;
    pointer-events: none;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.9);
  }

  .tooltip-container:hover .tooltip-content {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) scale(1);
    pointer-events: auto;
  }

  /* Social Icons Styles */
  .social-icons {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #f0f0f0;
    transition:
      transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),
      background 0.3s ease,
      box-shadow 0.4s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
  }

  .social-icon::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .social-icon:hover::before {
    opacity: 1;
  }

  .social-icon svg {
    width: 24px;
    height: 24px;
    fill: #333;
    transition:
      transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),
      fill 0.3s ease;
    z-index: 1;
  }

  .social-icon:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  .social-icon:active {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  .social-icon:hover svg {
    transform: scale(1.2);
    fill: white;
  }

  .social-icon.twitter:hover {
    background: linear-gradient(135deg, #1da1f2, #1a91da);
  }

  .social-icon.facebook:hover {
    background: linear-gradient(135deg, #1877f2, #165ed0);
  }

  .social-icon.linkedin:hover {
    background: linear-gradient(135deg, #0077b5, #005e94);
  }

  /* Animation for Pulse Effect */
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(110, 142, 251, 0.4);
    }
    70% {
      box-shadow: 0 0 0 20px rgba(110, 142, 251, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(110, 142, 251, 0);
    }
  }

  /* Hover Ripple Effect */
  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(4);
      opacity: 0;
    }
  }


  /* Tooltip Arrow */
  .tooltip-content::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0 10px 10px 10px;
    border-style: solid;
    border-color: transparent transparent rgba(255, 255, 255, 0.9) transparent;
    filter: drop-shadow(0 -3px 3px rgba(0, 0, 0, 0.1));
  }

  /* Responsive Design */
  @media (max-width: 768px) {

    .tooltip-content {
      width: 240px;
      padding: 18px;
      margin-top: 15%;
    }

    .social-icon {
      width: 44px;
      height: 44px;
    }

    .social-icon svg {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 480px) {

    .tooltip-content {
      width: 200px;
      margin-top: 15%;
      padding: 15px;
    }

    .social-icon {
      width: 40px;
      height: 40px;
    }

    .social-icon svg {
      width: 18px;
      height: 18px;
    }
  }

  /* Dark Mode Support */
  @media (prefers-color-scheme: dark) {
    .tooltip-content {
      background: rgba(30, 30, 30, 0.9);
      color: white;
    }

    .tooltip-content::before {
      border-color: transparent transparent rgba(30, 30, 30, 0.9) transparent;
    }

    .social-icon {
      background: #2a2a2a;
    }

    .social-icon svg {
      fill: #e0e0e0;
    }
  }

  /* Print Styles */
  @media print {
    .tooltip-container {
      display: none;
    }
  }

  /* Custom Scrollbar for Tooltip Content */
  .tooltip-content::-webkit-scrollbar {
    width: 6px;
  }

  .tooltip-content::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  .tooltip-content::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  .tooltip-content::-webkit-scrollbar-thumb:hover {
    background: #555;
  }`;
