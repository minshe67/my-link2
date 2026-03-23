export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 font-sans p-8">
      <main className="flex flex-col items-center gap-6 text-center max-w-2xl bg-white p-12 rounded-2xl shadow-sm border border-zinc-100">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
          홍길동
        </h1>
        <p className="text-xl text-zinc-600 leading-relaxed">
          안녕하세요! 대학생입니다
        </p>
      </main>
    </div>
  );
}
