import React from 'react'

const AvatarGeneratorHeader: React.FC = () => {
  return (
    <div className='mb-14 relative'>
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/3 border border-white/10 text-slate-400 text-[9px] font-bold tracking-[0.3em] uppercase mb-8">
            <span className='w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]'></span>
            Avatar Generator v1.0
        </div>
        <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Avatar<span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 to-slate-400">Flow</span>
        </h1>
        <p className="text-slate-400 text-base md:text-md font-medium max-w-lg mx-auto leading-relaxed opacity-80">
            Refined digital identities crafted by advanced generative models.
        </p>
    </div>
  )
}

export default AvatarGeneratorHeader