import React from 'react'
import { useAvatarContext } from '../contexts/AvatarContext'

const RecentlyGeneratedAvatars: React.FC = () => {
    const { history, restoreHistory, clearHistory, isGenerating} = useAvatarContext();

    console.log("history: ", history);
    
    if(history.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-white/5">
        <div className="flex items-center justify-between mb-8">
            <h3 className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]">Temporal Cache</h3>
            <button
                onClick={clearHistory}
                disabled={isGenerating}
                className='text-slate-600 hover:text-red-400 text-[9px] font-bold uppercase tracking-widest transition-colors disabled:opacity-20'
            >
                Clear Archive
            </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
            {history.map(item => (
                <button
                    key={item.id}
                    onClick={() => restoreHistory(item)}
                    disabled={isGenerating}
                    className="group relative w-12 h-12 md:w-16 md:h-16 rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/50 transition-all hover:scale-105 active:scale-90 disabled:opacity-20 cursor-pointer"
                >
                    <img src={item.url} alt="History" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"/>
                    <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100" />
                </button>
            ))}
        </div>
    </div>
  )
}

export default RecentlyGeneratedAvatars