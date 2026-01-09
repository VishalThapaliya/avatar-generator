import React from 'react'
import { useAvatarContext } from '../contexts/AvatarContext'

const AvatarGeneratorButtons: React.FC = () => {
    const { generateAvatar, copyUrl, downloadAvatar, isGenerating} = useAvatarContext();

    const baseBtnClass = "h-14 px-8 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed uppercase text-[10px] tracking-[0.15em] border border-white/5";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <button
            disabled={isGenerating}
            onClick={generateAvatar}
            className={`${baseBtnClass} bg-white text-slate-950 hover:bg-slate-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] cursor-pointer`}
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
            Re-generate
        </button>
        
        <button
            disabled={isGenerating}
            onClick={downloadAvatar}
            className={`${baseBtnClass} bg-white/5 text-slate-200 hover:bg-white/20 cursor-pointer`}
        >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export PNG
        </button>
        
        <button
            disabled={isGenerating}
            onClick={copyUrl}
            className={`${baseBtnClass} bg-indigo-500/10 text-indigo-400 border-indigo-500/20 hover:bg-indigo-500/20 cursor-pointer`}
        >
           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
            Copy Path
        </button>

    </div>
  )
}

export default AvatarGeneratorButtons