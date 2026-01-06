'use client'

import React, { useState } from 'react';

const darkenColor = (hex, percent) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder = ({ color = '#5227FF', size = 1, items = [], className = '', onOpenChange }) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  );

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const handleClick = () => {
    const newOpenState = !open;
    setOpen(newOpenState);
    if (onOpenChange) {
      onOpenChange(newOpenState);
    }
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e, index) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e, index) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  };

  const scaleStyle = { transform: `scale(${size})` };

  const getOpenTransform = (index) => {
    if (index === 0) return 'translate(-120%, -70%) rotate(-15deg)';
    if (index === 1) return 'translate(10%, -70%) rotate(15deg)';
    if (index === 2) return 'translate(-50%, -100%) rotate(5deg)';
    return '';
  };

  return (
    <div style={scaleStyle} className={className}>
      <div
        className="folder-container"
        style={{
          ...folderStyle,
          transform: open ? 'translateY(-8px)' : undefined,
          transition: 'all 0.2s ease-in',
          cursor: 'pointer',
          position: 'relative'
        }}
        onClick={handleClick}
      >
        <div
          style={{ 
            backgroundColor: folderBackColor,
            position: 'relative',
            width: '100px',
            height: '80px',
            borderTopLeftRadius: '0',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
            borderBottomLeftRadius: '10px'
          }}
        >
          <span
            style={{ 
              backgroundColor: folderBackColor,
              position: 'absolute',
              zIndex: 0,
              bottom: '98%',
              left: 0,
              width: '30px',
              height: '10px',
              borderTopLeftRadius: '5px',
              borderTopRightRadius: '5px',
              borderBottomLeftRadius: '0',
              borderBottomRightRadius: '0'
            }}
          ></span>
          {papers.map((item, i) => {
            let width, height;
            if (i === 0) {
              width = open ? '70%' : '70%';
              height = open ? '80%' : '80%';
            } else if (i === 1) {
              width = open ? '80%' : '80%';
              height = open ? '80%' : '70%';
            } else {
              width = open ? '90%' : '90%';
              height = open ? '80%' : '60%';
            }

            const transformStyle = open
              ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)`
              : 'translate(-50%, 10%)';

            return (
              <div
                key={i}
                onMouseMove={e => handlePaperMouseMove(e, i)}
                onMouseLeave={e => handlePaperMouseLeave(e, i)}
                style={{
                  position: 'absolute',
                  zIndex: 20,
                  bottom: '10%',
                  left: '50%',
                  width,
                  height,
                  transform: transformStyle,
                  transition: 'all 0.3s ease-in-out',
                  backgroundColor: i === 0 ? paper1 : i === 1 ? paper2 : paper3,
                  borderRadius: '10px',
                  ...(open && { cursor: 'pointer' })
                }}
              >
                {item}
              </div>
            );
          })}
          <div
            style={{
              position: 'absolute',
              zIndex: 30,
              width: '100%',
              height: '100%',
              transformOrigin: 'bottom',
              transition: 'all 0.3s ease-in-out',
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              transform: open ? 'skew(15deg) scaleY(0.6)' : 'skew(0deg) scaleY(1)'
            }}
          ></div>
          <div
            style={{
              position: 'absolute',
              zIndex: 30,
              width: '100%',
              height: '100%',
              transformOrigin: 'bottom',
              transition: 'all 0.3s ease-in-out',
              backgroundColor: color,
              borderRadius: '5px 10px 10px 10px',
              transform: open ? 'skew(-15deg) scaleY(0.6)' : 'skew(0deg) scaleY(1)'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Folder;
