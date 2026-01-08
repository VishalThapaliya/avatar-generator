import AvatarGeneratorInputs from "./AvatarGeneratorInputs";
import AvatarGeneratorHeader from "./AvatarGeneratorHeader";
import LoadingAvatar from "./LoadingAvatar";
import AvatarGeneratorButtons from "./AvatarGeneratorButtons";

const AvatarGenerator = () => {

  return (
    <section className="min-h-screen flex items-center justify-center p-6 md:p-12 relative overflow-hidden bg-[#020617]">
      <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-slate-900/30 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="w-full max-w-4xl glass-card rounded-[2.5rem] p-8 md:p-16 text-center relative z-10 border border-white/5">
        <AvatarGeneratorHeader />

        <div className="flex flex-col items-center">
            <LoadingAvatar />

            <div className="w-full max-w-2xl mx-auto">
              <AvatarGeneratorInputs />
              <AvatarGeneratorButtons />
            </div>
        </div>
      </div>
    </section>
  )
}

export default AvatarGenerator