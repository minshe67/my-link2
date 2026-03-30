import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-100 selection:text-zinc-900">
      {/* Navigation / Header Area */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/70">
        <div className="text-lg font-semibold tracking-tight">Profile.</div>
        <div className="flex gap-8 text-sm font-medium text-zinc-500">
          <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
          <a href="#work" className="hover:text-zinc-900 transition-colors">Work</a>
          <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section - Full Landing Experience */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 pt-20 text-center">
        <div className="relative mb-12 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border border-zinc-100 bg-zinc-50 shadow-sm">
            {/* Placeholder for Avatar - replace with actual image if available */}
            <div className="w-full h-full flex items-center justify-center bg-zinc-50 text-zinc-300">
               <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
               </svg>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          홍길동.
        </h1>
        
        <p className="max-w-2xl text-xl md:text-2xl text-zinc-500 font-medium leading-relaxed mb-12">
          대학생 & 소프트웨어 엔지니어. <br className="hidden md:block" />
          문제를 해결하고 아름다운 사용자 경험을 설계하는 것을 즐깁니다.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <a 
            href="mailto:contact@example.com" 
            className="px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200 active:scale-95"
          >
            Get in touch
          </a>
          <a 
            href="https://github.com" 
            target="_blank"
            className="px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-full font-medium hover:bg-zinc-50 transition-all active:scale-95"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Featured Quote / Philosophy Area */}
      <div className="max-w-5xl mx-auto px-6 py-32 md:py-48 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight mb-12">
          "Simplicity is the ultimate sophistication."
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-zinc-500 leading-relaxed">
          <p>
            저는 코드의 품질과 사용자 인터페이스의 세밀한 조화를 중요하게 생각합니다. 
            단순함 뒤에 숨겨진 정교함을 추구하며, 누구나 직관적으로 사용할 수 있는 솔루션을 만드는 것이 제 목표입니다.
          </p>
          <p>
            React, Next.js, TypeScript와 같은 최신 기술 스택을 활용하여 
            확장 가능하고 성능이 뛰어난 웹 어플리케이션을 개발하고 있습니다.
          </p>
        </div>
      </div>

      {/* Social / Footer Area */}
      <footer className="border-t border-zinc-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-zinc-400">© 2024 Hong Gil Dong. Built with Next.js</p>
          <div className="flex gap-6 text-sm font-medium text-zinc-500">
            <a href="#" className="hover:text-zinc-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">GitHub</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
