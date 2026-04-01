import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-orange-50 selection:text-orange-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md bg-white/70">
        <div className="text-xl font-light tracking-widest uppercase">The Memory.</div>
        <div className="hidden md:flex gap-10 text-xs font-medium tracking-widest uppercase text-zinc-400">
          <a href="#story" className="hover:text-zinc-900 transition-colors">Story</a>
          <a href="#wisdom" className="hover:text-zinc-900 transition-colors">Wisdom</a>
          <a href="#memories" className="hover:text-zinc-900 transition-colors">Memories</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 text-center">
        <div className="mb-16">
          <div className="relative inline-block">
             <div className="absolute -inset-4 bg-orange-50/50 rounded-full blur-3xl"></div>
             <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-full overflow-hidden border border-zinc-100 bg-zinc-50 shadow-sm mx-auto flex items-center justify-center">
                {/* Placeholder for Grandma's Photo */}
                <div className="text-zinc-300">
                  <svg className="w-24 h-24 md:w-32 md:h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
             </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic tracking-tight mb-8 text-zinc-800">
          따스한 삶의 기록, <br className="md:hidden" /> 홍씨 할머니.
        </h1>
        
        <p className="max-w-xl text-lg md:text-xl text-zinc-500 font-light leading-relaxed mb-12">
          포근한 미소와 인자한 성품으로 <br className="hidden md:block" />
          가족과 세상을 품어오신 홍씨 할머니의 삶을 기록합니다.
        </p>
        
        <div className="flex flex-col items-center gap-2">
           <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-semibold mb-2">Scroll down</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-200 to-transparent"></div>
        </div>
      </section>

      {/* Introduction Section */}
      <section id="story" className="max-w-4xl mx-auto px-6 py-32 md:py-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-serif italic mb-6 text-zinc-700">그늘진 곳 없이 밝은 미소.</h2>
            <p className="text-zinc-500 font-light leading-relaxed">
              할머니는 평생을 부지런함과 정직함으로 일구어 오셨습니다. 
              힘든 시절에도 누구 하나 원망하지 않고 묵묵히 자리를 지키며, 
              주변 사람들에게 늘 따뜻한 밥 한 끼를 건네던 분이셨습니다.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="aspect-[4/5] bg-zinc-50 border border-zinc-100 rounded-2xl overflow-hidden flex items-center justify-center text-zinc-200">
              <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Wisdom Section */}
      <section id="wisdom" className="bg-zinc-50 py-32 md:py-48 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold mb-16">Words of Wisdom</h3>
          <blockquote className="text-3xl md:text-5xl font-serif italic text-zinc-800 leading-tight mb-16">
            "바쁜 마음은 잠시 내려놓고, <br />
            오늘 네 앞에 있는 꽃 한 송이를 보렴."
          </blockquote>
          <p className="text-lg text-zinc-500 font-light max-w-lg mx-auto">
            할머니께서 늘 하시던 말씀입니다. 서두르지 않아도 계절은 바뀌고 
            꽃은 피어난다는 그 지혜는 지금도 우리 삶의 이정표가 됩니다.
          </p>
        </div>
      </section>

      {/* Memories Grid */}
      <section id="memories" className="max-w-7xl mx-auto px-6 py-32 md:py-48">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`aspect-[3/4] bg-zinc-50 border border-zinc-100 rounded-xl flex items-center justify-center text-zinc-200 ${i % 2 === 0 ? 'mt-8 md:mt-16' : ''}`}>
               <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h4 className="text-2xl font-serif italic mb-8 text-zinc-800">사랑하는 할머니께.</h4>
          <p className="text-sm text-zinc-400 font-light mb-12">
            할머니의 삶이 우리에게 남겨준 빛나는 유산들을 기억합니다. <br />
            감사합니다, 그리고 사랑합니다.
          </p>
          <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">
            © 2024 The Story of Grandma Hong.
          </div>
        </div>
      </footer>
    </main>
  );
}
