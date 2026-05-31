import React, { useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, isOpen, onClose, onNavigate }) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  if (!isOpen) return null;

  const handlePrev = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  };

  const handleNext = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  };

  const zoomIn = () => setZoom(prev => Math.min(prev + 0.5, 4));
  const zoomOut = () => {
    setZoom(prev => {
      const newZoom = Math.max(prev - 0.5, 1);
      if (newZoom === 1) setPosition({ x: 0, y: 0 });
      return newZoom;
    });
  };
  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      const viewportWidth = window.innerWidth * 0.85;
      const viewportHeight = window.innerHeight * 0.65;
      const maxX = (viewportWidth * (zoom - 1)) / 2;
      const maxY = (viewportHeight * (zoom - 1)) / 2;

      let newX = e.clientX - dragStart.x;
      let newY = e.clientY - dragStart.y;

      newX = Math.max(-maxX, Math.min(maxX, newX));
      newY = Math.max(-maxY, Math.min(maxY, newY));

      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoom > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX - position.x, y: e.touches[0].clientY - position.y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && zoom > 1 && e.touches.length === 1) {
      const viewportWidth = window.innerWidth * 0.85;
      const viewportHeight = window.innerHeight * 0.55;
      const maxX = (viewportWidth * (zoom - 1)) / 2;
      const maxY = (viewportHeight * (zoom - 1)) / 2;

      let newX = e.touches[0].clientX - dragStart.x;
      let newY = e.touches[0].clientY - dragStart.y;

      newX = Math.max(-maxX, Math.min(maxX, newX));
      newY = Math.max(-maxY, Math.min(maxY, newY));

      setPosition({ x: newX, y: newY });
    }
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === '+' || e.key === '=') zoomIn();
    if (e.key === '-') zoomOut();
    if (e.key === '0') resetZoom();
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col"
      onClick={() => { resetZoom(); onClose(); }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-white/70 text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>

        <div className="flex items-center gap-2">
          <button
            className="size-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-30"
            onClick={(e) => { e.stopPropagation(); zoomOut(); }}
            disabled={zoom <= 1}
            title="Diminuir zoom (-)"
          >
            <span className="material-symbols-outlined text-white text-xl">zoom_out</span>
          </button>
          <span className="text-white/70 text-sm font-medium min-w-[3rem] text-center">
            {Math.round(zoom * 100)}%
          </span>
          <button
            className="size-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-30"
            onClick={(e) => { e.stopPropagation(); zoomIn(); }}
            disabled={zoom >= 4}
            title="Aumentar zoom (+)"
          >
            <span className="material-symbols-outlined text-white text-xl">zoom_in</span>
          </button>
          {zoom > 1 && (
            <button
              className="size-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors ml-2"
              onClick={(e) => { e.stopPropagation(); resetZoom(); }}
              title="Resetar zoom (0)"
            >
              <span className="material-symbols-outlined text-white text-xl">restart_alt</span>
            </button>
          )}
        </div>

        <button
          className="size-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          onClick={() => { resetZoom(); onClose(); }}
        >
          <span className="material-symbols-outlined text-white text-2xl">close</span>
        </button>
      </div>

      <div
        className="flex-1 flex items-center justify-center px-4 md:px-16 relative overflow-hidden"
        onWheel={handleWheel}
      >
        <button
          className="absolute left-4 md:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
        >
          <span className="material-symbols-outlined text-white text-3xl">chevron_left</span>
        </button>

        <div
          className={`max-w-[85vw] max-h-[65vh] flex items-center justify-center ${zoom > 1 ? 'cursor-grab' : 'cursor-zoom-in'} ${isDragging ? 'cursor-grabbing' : ''}`}
          onClick={(e) => { e.stopPropagation(); if (zoom === 1) zoomIn(); }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <OptimizedImage
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className={`max-w-full max-h-[55vh] md:max-h-[65vh] object-contain rounded-lg shadow-2xl select-none ${isDragging ? '' : 'transition-transform duration-200'}`}
            style={{
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
            }}
            draggable={false}
          />
        </div>

        <button
          className="absolute right-4 md:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
        >
          <span className="material-symbols-outlined text-white text-3xl">chevron_right</span>
        </button>
      </div>

      <div className="py-4 px-6">
        <div className="flex gap-2 justify-center max-w-[90vw] mx-auto overflow-x-auto py-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); setZoom(1); setPosition({ x: 0, y: 0 }); onNavigate(idx); }}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${idx === currentIndex ? 'border-primary scale-110' : 'border-transparent opacity-60 hover:opacity-100'}`}
            >
              <OptimizedImage src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
