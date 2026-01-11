import React from 'react'

const AvatarGeneratorFooter: React.FC = () => {
    const year = new Date();
    
  return (
    <footer className="mt-20 pt-8 border-t border-white/5 text-slate-600 text-xs font-bold uppercase tracking-[0.2em] ">
        <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500/40"></span>
            &copy; Developed by Bishal Thapaliya | {year.getFullYear()}
        </div>
    </footer>
  )
}

export default AvatarGeneratorFooter
