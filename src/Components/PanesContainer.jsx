import React, { useState } from 'react';
import Pane from './Pane';
import './PanesContainer.css';

const PanesContainer = () => {
  const panesData = [
    { image: 'OIP.jpg', icon: 'walking', title: 'Imagine', subtitle: 'Chase your dreams', class: 'active' },
    { image: 'gettyimages-1255181898-612x612.jpg', icon: 'apple-alt', title: 'Build', subtitle: 'Realize your vision' },
    { image: 'gettyimages-1219683995-612x612.jpg', icon: 'tree', title: 'Explore', subtitle: 'Discover the world' },
    { image: 'gettyimages-1645940520-612x612.jpg', icon: 'tint', title: 'Adapt', subtitle: 'Embrace the times' },
    { image: 'gettyimages-641017090-612x612.jpg', icon: 'palette', title: 'Inspire', subtitle: 'Share your potential' },
    { image: 'gettyimages-641017090-612x612.jpg', icon: 'palette', title: 'Inspire', subtitle: 'Share your potential' },
    { image: 'gettyimages-641017090-612x612.jpg', icon: 'palette', title: 'Inspire', subtitle: 'Share your potential' },
    { image: 'gettyimages-641017090-612x612.jpg', icon: 'palette', title: 'Inspire', subtitle: 'Share your potential' },
    
    { image: 'gettyimages-641017090-612x612.jpg', icon: 'palette', title: 'Inspire', subtitle: 'Share your potential' },
  ];

  const [activePaneIndex, setActivePaneIndex] = useState(0);

  return (
    <div id="panes-container" className="flex flex-wrap">
      {panesData.map((pane, index) => (
        <Pane
          key={index}
          image={pane.image}
          icon={pane.icon}
          title={pane.title}
          subtitle={pane.subtitle}
          additionalClass={index === activePaneIndex ? 'active' : ''}
          onClick={() => setActivePaneIndex(index)}
        />
      ))}
    </div>
  );
};

export default PanesContainer;
