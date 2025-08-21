export default function Home() {
  const EMULATORS = [
    {
      name: "BlueStacks 5",
      desc: "Best for smooth Free Fire gameplay.",
      link: "https://www.bluestacks.com/download.html",
    },
    {
      name: "LD Player",
      desc: "Lightweight emulator for low-end PCs.",
      link: "https://www.ldplayer.net/",
    },
  ];

  const SETTINGS = [
    {
      title: "Free Fire Sensitivity (Pro)",
      details: `
        General: 100\n
        Red Dot: 95\n
        2x Scope: 80\n
        4x Scope: 70\n
        AWM Scope: 50\n
        Free Look: 85
      `,
    },
    {
      title: "Graphics Config",
      details:
        "Ultra HD graphics with smooth FPS. Use 1080p 60Hz for best results.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <header className="p-6 bg-gray-800 text-center shadow-lg">
        <h1 className="text-3xl font-bold text-yellow-400">RDX FARDIN</h1>
        <p className="text-gray-300">Free Fire Emulator & Settings Hub</p>
      </header>

      <section className="p-6">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-4">🔥 Emulators</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {EMULATORS.map((emu, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold">{emu.name}</h3>
              <p className="text-gray-400 mb-3">{emu.desc}</p>
              <a
                href={emu.link}
                target="_blank"
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-4">⚙️ Pro Settings</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {SETTINGS.map((set, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold">{set.title}</h3>
              <pre className="text-gray-300 whitespace-pre-wrap mt-2">{set.details}</pre>
            </div>
          ))}
        </div>
      </section>

      <section className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-yellow-300 mb-4">🎮 Join Our Community</h2>
        <a
          href="https://discord.gg/your-invite-link"
          target="_blank"
          className="bg-blue-500 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600"
        >
          Join Discord
        </a>
      </section>

      <footer className="p-4 bg-gray-800 text-center text-gray-400">
        <p>© 2025 RDX FARDIN | Free Fire Emulator Hub</p>
      </footer>
    </div>
  );
}