import React from 'react'
import { useAvatarContext } from '../contexts/AvatarContext'
import { AVATAR_DATA } from '../data/constants';
import type { AvatarStyle } from '../types/types';

const AvatarGeneratorInputs: React.FC = () => {
    const { imgType, setImgType, seed, setSeed, isGenerating } = useAvatarContext();

    const inputBase = "w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 text-white font-semibold focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/30 outline-none transition-all hover:bg-white/[0.05] disabled:opacity-40 disabled:cursor-not-allowed";
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-left">
                <label className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-3 block ml-1">
                    Archetype
                </label>
                <div className="relative">
                    <select
                        disabled={isGenerating}
                        value={imgType}
                        onChange={(e) => setImgType(e.target.value as AvatarStyle)}
                        className={`${inputBase} appearance-none cursor-pointer`}
                    >
                        {AVATAR_DATA.map(item => (
                            <option key={item.id} value={item.value} className="bg-[#0f172a] text-white">
                                {item.label}
                            </option>
                        ))}
                    </select>

                    <div className="absolute right-6 top-1/2 text-slate-500 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="text-left">
                <label className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-3 block ml-1">
                    Identity Seed
                </label>
                <input 
                    disabled={isGenerating}
                    type="text"
                    value={seed}
                    onChange={(e) => setSeed(e.target.value)}
                    placeholder="Unique string..."
                    className={inputBase}
                />
            </div>
        </div>
    )
}

export default AvatarGeneratorInputs