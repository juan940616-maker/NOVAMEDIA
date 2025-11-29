export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.https://copilot.microsoft.com/th/id/BCO.a2ecea86-08fe-459f-a98d-7d9c956f8270.png">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
        
        {/* Outer hexagon */}
        <path 
          d="M24 4L40 14V34L24 44L8 34V14L24 4Z" 
          fill="url(#logoGradient)" 
          opacity="0.2"
        />
        
        {/* Inner geometric shape - represents M for Media */}
        <path 
          d="M16 18L20 14L24 20L28 14L32 18V30L28 34L24 28L20 34L16 30V18Z" 
          fill="url(#logoGradient)"
        />
        
        {/* Accent lines */}
        <path 
          d="M24 8L24 16M24 32L24 40" 
          stroke="#A855F7" 
          strokeWidth="2" 
          strokeLinecap="round"
          opacity="0.6"
        />
        <path 
          d="M12 24L18 24M30 24L36 24" 
          stroke="#3B82F6" 
          strokeWidth="2" 
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
      
      <div className="flex flex-col">
        <span className="text-2xl tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          NOVAMEDIA
        </span>
        <span className="text-xs tracking-widest text-purple-400 -mt-1">
          DIGITAL STUDIO
        </span>
      </div>
    </div>
  );
}