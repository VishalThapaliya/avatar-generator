import { useAvatarContext } from "../contexts/AvatarContext";

const LoadingAvatar = () => {
  const { imgSrc, isGenerating, loadingStatus } = useAvatarContext();
  return (
    <div className="relative mx-auto w-52 h-52 md:w-64 md:h-64 mb-16">
      {/* dynamic progress ring will display during avatar generation */}
      {isGenerating && (
        <svg className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] -rotate-90 pointer-events-none">
          <circle
            cx="50%"
            cy="50%"
            r="48%"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white/5"
          />
          <circle
            cx="50%"
            cy="50%"
            r="48%"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-indigo-400 progress-ring"
          />
        </svg>
      )}

      <div
        className={`relative w-full h-full rounded-[3.5rem] border border-white/10 shadow-2xl overflow-hidden bg-[#0a0a1a] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isGenerating ? "scale-90 brightness-50 contrast-125" : "scale-100"
        }`}
      >
        {imgSrc && (
          <img
            src={imgSrc}
            alt="Avatar image"
            className={`w-full h-full object-cover transition-opacity duration-1000 ${
              isGenerating ? "opacity-40 grayscale blur-sm" : "opacity-100"
            }`}
          />
        )}

        {isGenerating && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-indigo-950/20">
            <div className="space-y-4">
              <div className="flex justify-center gap-1 5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
              <span className="text-white/80 font-bold text-[10px] tracking-[0.2em] uppercase block">
                {loadingStatus}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingAvatar;
