import React, { useState } from 'react';

const InstallInstructions = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const getDeviceInstructions = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (/android/.test(userAgent)) {
      return {
        device: 'Android Tablet',
        steps: [
          'Tap the menu button (⋮) in Chrome',
          'Look for "Install app" or "Add to Home screen"',
          'You may see "Create shortcut" - this installs the app!',
          'Tap it to add Reception Bible to your home screen',
          'The app will open in full-screen mode like a native app'
        ]
      };
    } else if (/ipad|iphone/.test(userAgent)) {
      return {
        device: 'iPad/iPhone',
        steps: [
          'Tap the Share button (□↗) in Safari',
          'Scroll down and tap "Add to Home Screen"',
          'Tap "Add" to confirm',
          'The app will appear on your home screen',
          'Opens in full-screen mode when launched'
        ]
      };
    } else {
      return {
        device: 'Desktop/Laptop',
        steps: [
          'Look for an install icon in the address bar',
          'Or use the browser menu to "Install Reception Bible"',
          'The app will be added to your applications',
          'Launch like any other program'
        ]
      };
    }
  };

  const instructions = getDeviceInstructions();

  if (!showInstructions) {
    return (
      <button
        onClick={() => setShowInstructions(true)}
        className="text-sm text-blue-600 hover:text-blue-800 underline"
      >
        Need help installing?
      </button>
    );
  }

  return (
    <div className="mt-4 p-4 bg-blue-50 border border-blue-200">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-blue-900">Install on {instructions.device}</h3>
        <button
          onClick={() => setShowInstructions(false)}
          className="text-blue-600 hover:text-blue-800"
        >
          ✕
        </button>
      </div>
      <ol className="text-sm text-blue-800 space-y-1">
        {instructions.steps.map((step, index) => (
          <li key={index} className="flex">
            <span className="mr-2 font-medium">{index + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <p className="text-xs text-blue-600 mt-3 italic">
        Once installed, Reception Bible works offline and opens like a native app!
      </p>
    </div>
  );
};

export default InstallInstructions;
