import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Copy, Check } from 'lucide-react';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'system' | 'success' | 'warn';
  content: string;
}

const INITIAL_LINES: TerminalLine[] = [
  { id: '1', type: 'system', content: 'Raju Bandam Developer Shell [v2.4.0-linux-x86_64]' },
  { id: '2', type: 'system', content: 'Logged in as raju@developer (B.Tech CSE AIML 2026, Malla Reddy University)' },
  { id: '3', type: 'output', content: 'Type "help" or click one of the quick commands below to explore.' },
];

const PRESETS = [
  { label: 'whoami', desc: 'Developer Profile & Background' },
  { label: 'skills', desc: 'Frontend, Backend, AI/ML Stack' },
  { label: 'projects', desc: 'Featured 14 Repositories' },
  { label: 'education', desc: 'Degree & Academic Record' },
  { label: 'contact', desc: 'Email, GitHub, LinkedIn' },
];

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
  const [inputVal, setInputVal] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newLines: TerminalLine[] = [
      ...lines,
      { id: Date.now().toString(), type: 'input', content: `$ ${cmd}` },
    ];

    if (trimmed === 'clear') {
      setLines(INITIAL_LINES);
      setInputVal('');
      return;
    }

    if (trimmed === 'help') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: `Available Commands:
  - whoami       : Developer introduction and education
  - skills       : Languages, frameworks, and ML tools
  - projects     : Top project repositories
  - education    : Degree, institution, and CGPA
  - contact      : Social links and email address
  - clear        : Reset the terminal output`,
      });
    } else if (trimmed === 'whoami') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: `Name       : Raju Bandam (RB)
Website    : https://rajureddie.in
Title      : Full-Stack Developer & AI/ML Engineer
Status     : Fresher / Available for 2026 Software Engineering Roles
College    : Malla Reddy University, Hyderabad (CGPA 8.7)
Focus      : Full-Stack Web (React, Next.js, Node.js), Applied AI & Computer Vision (PyTorch, YOLO)`,
      });
    } else if (trimmed === 'skills') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: `Frontend   : React 19, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5/CSS3
Backend    : Node.js, Express, Fastify, REST APIs, PostgreSQL, MongoDB
AI / ML    : Python, PyTorch, OpenCV, YOLOv8/v11, ResNet, BERT, CNNs
Core CS    : Data Structures & Algorithms, Object-Oriented Programming (Java/Python), DBMS
Tools      : Git, GitHub, Docker, Postman, VS Code, Linux`,
      });
    } else if (trimmed === 'projects') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: `[Top Production Works]
1. TurantPay (Offline UPI via NPCI USSD protocol without internet)
2. AuraOnDevice AI HUB (Android multimodal LLM with MNN engine)
3. DepthSightAI (ARCore metric 3D depth estimation + camera tracking)
4. Smart Traffic Management (YOLO real-time stream density regulation)
5. PlantAI (Botanical leaf disease diagnostics with 98.2% accuracy)
6. VoterSetu (Civic technology portal with GIS offline mapping)
7. Voice2Sign (Acoustic speech parsing to 3D sign language avatar)
(Explore all 14 projects in the Glass Folders section above)`,
      });
    } else if (trimmed === 'education') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: `• B.Tech in CSE (AIML) – Malla Reddy University (2022–2026) | CGPA: 8.7 / 10.0
• Class XII (Intermediate) – SR Junior College (2020–2022) | 90.1%
• Class X (SSC) – ZPSS Chennur (2020) | CGPA: 10.0 / 10.0
• NPTEL Elite Java Certification (IIT Kharagpur)
• Google Python Certification`,
      });
    } else if (trimmed === 'contact') {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'output',
        content: `Website  : https://rajureddie.in
Email    : rajubandam694@gmail.com
GitHub   : https://github.com/rajureddi
LinkedIn : https://www.linkedin.com/in/rajureddie/
Twitter  : https://twitter.com/naughtyeth
Location : Hyderabad, Telangana, India (IST)`,
      });
    } else {
      newLines.push({
        id: (Date.now() + 1).toString(),
        type: 'warn',
        content: `Command not found: "${cmd}". Type "help" to see available commands.`,
      });
    }

    setLines(newLines);
    setInputVal('');
  };

  const handleCopy = () => {
    const text = lines.map((l) => l.content).join('\n');
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden font-mono text-xs transition-colors duration-300">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-100 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-600" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-600" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600" />
          </div>
          <span className="text-zinc-600 dark:text-zinc-400 text-[11px] ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
            raju@portfolio: ~ (bash)
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
          title="Copy terminal session"
        >
          {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Terminal Content Screen */}
      <div
        ref={scrollRef}
        className="p-5 h-[320px] sm:h-[350px] overflow-y-auto space-y-2 bg-zinc-50 dark:bg-[#09090b] text-zinc-800 dark:text-zinc-300"
      >
        {lines.map((line) => {
          if (line.type === 'system') {
            return (
              <div key={line.id} className="text-zinc-500">
                {line.content}
              </div>
            );
          }
          if (line.type === 'input') {
            return (
              <div key={line.id} className="text-emerald-600 dark:text-emerald-400 font-semibold">
                {line.content}
              </div>
            );
          }
          if (line.type === 'warn') {
            return (
              <div key={line.id} className="text-amber-600 dark:text-amber-400">
                {line.content}
              </div>
            );
          }
          return (
            <pre key={line.id} className="whitespace-pre-wrap leading-relaxed text-zinc-800 dark:text-zinc-300 font-mono">
              {line.content}
            </pre>
          );
        })}
      </div>

      {/* Quick Execution Chips */}
      <div className="px-4 py-2.5 bg-zinc-100/80 dark:bg-zinc-900/60 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap gap-2 items-center">
        <span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wider">Quick:</span>
        {PRESETS.map((p) => (
          <button
            key={p.label}
            onClick={() => executeCommand(p.label)}
            className="px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700/60 text-[11px] text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors shadow-xs"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Prompt Input Line */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          executeCommand(inputVal);
        }}
        className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800/80"
      >
        <span className="text-emerald-600 dark:text-emerald-400 font-bold">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type 'help', 'skills', or 'projects'..."
          className="flex-1 bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none font-mono text-xs"
        />
        <button
          type="submit"
          className="p-1 rounded-md bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}
