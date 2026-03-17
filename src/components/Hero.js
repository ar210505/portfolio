import React, { useState, useRef, useEffect } from "react";
import "./Hero.css";

function Hero() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [isBooting, setIsBooting] = useState(true);
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    const bootLines = [
      { type: "output", text: "Initializing AR-OS v1.0.0..." },
      { type: "output", text: "Loading kernel modules....... [OK]" },
      { type: "output", text: "Mounting virtual file systems... [OK]" },
      { type: "output", text: "Starting user interface..." },
      { type: "output", text: " " },
      { type: "ascii", text: "    _    __   __ _   _  ____  _   _ " },
      { type: "ascii", text: "   / \\   \\ \\ / /| | | |/ ___|| | | |" },
      { type: "ascii", text: "  / _ \\   \\ V / | | | |\\___ \\| |_| |" },
      { type: "ascii", text: " / ___ \\   | |  | |_| | ___) |  _  |" },
      { type: "ascii", text: "/_/   \\_\\  |_|   \\___/ |____/|_| |_|" },
      { type: "output", text: " " },
      { type: "info", text: "Welcome to AR-OS. Type 'help' to see available commands." },
    ];

    let currentLine = 0;
    const bootInterval = setInterval(() => {
      if (currentLine < bootLines.length) {
        // Evaluate the line synchronously to avoid closure/async issues
        const nextLine = bootLines[currentLine];
        setHistory(prev => [...prev, nextLine]);
        currentLine++;
      } else {
        clearInterval(bootInterval);
        setIsBooting(false);
      }
    }, 150);

    return () => clearInterval(bootInterval);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleContainerClick = () => {
    if (!isBooting) {
      inputRef.current?.focus();
    }
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    // Add the user's command to the history
    setHistory(prev => [...prev, { type: "command", text: `ayush@raj:~$ ${cmd}` }]);

    if (trimmedCmd === "") return;

    let response = [];

    switch (trimmedCmd) {
      case "help":
        response = [
          { type: "output", text: "Available commands:" },
          { type: "output", text: "  whoami     - Learn a little about me" },
          { type: "output", text: "  skills     - View my technical skills" },
          { type: "output", text: "  projects   - See what I've been building" },
          { type: "output", text: "  experience - View my work history" },
          { type: "output", text: "  clear      - Clear terminal history" },
          { type: "output", text: "  sudo       - ?????" },
        ];
        break;
      case "whoami":
        response = [
          { type: "output", text: "Name: Ayush Raj" },
          { type: "output", text: "Role: Full Stack Developer & AI Enthusiast" },
          { type: "output", text: "Status: Building scalable web apps and intelligent solutions." },
        ];
        break;
      case "skills":
        response = [
          { type: "output", text: "> Frontend : React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS" },
          { type: "output", text: "> Backend  : Node.js, Express, MongoDB, PostgreSQL, Supabase, REST APIs" },
          { type: "output", text: "> AI/ML    : Machine Learning, AI Integration, Python, Basic ML Concepts" },

          { type: "output", text: "> Languages: JavaScript, Python, Java, C" },
        ];
        break;
      case "projects":
        response = [
          { type: "output", text: "1. QuickAttend: Smart proxy-free attendance system with real-time analytics." },
          { type: "output", text: "2. Smart Expense Splitter: Full-stack expense platform with UPI & QR payments." },
        ];
        break;
      case "experience":
        response = [
          { type: "output", text: "> Vocational Trainee @ SAIL Bokaro (Jun 2025 - Jul 2025)" },
          { type: "output", text: "> SIH 2025 Finalist: Ranked in top 45 teams nationally" },
          { type: "output", text: "> Hackathon Competitor: ISRO, TVS Credit, NIT Rourkela, Odoo" },
        ];
        break;
      case "sudo":
        response = [
          { type: "output", text: "Nice try. This incident will be reported." },
        ];
        break;
      case "clear":
        setHistory([]);
        return;
      default:
        response = [
          { type: "output", text: `Command not found: ${trimmedCmd}. Type 'help' for a list of commands.` },
        ];
    }

    setHistory(prev => [...prev, ...response]);
  };

  const availableCommands = ["help", "whoami", "skills", "projects", "experience", "clear", "sudo"];

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent any default action that might scroll the page or submit form
      handleCommand(input);
      setInput("");
    } else if (e.key === "Tab") {
      e.preventDefault(); // Prevent focus from moving to another element
      const trimmedInput = input.trim().toLowerCase();
      
      if (trimmedInput === "") return;

      // Find all commands that start with the user's current input
      const matches = availableCommands.filter(cmd => cmd.startsWith(trimmedInput));

      if (matches.length === 1) {
        // Only one match, auto-complete it
        setInput(matches[0]);
      } else if (matches.length > 1) {
        // Multiple matches, show options in terminal history
        setHistory(prev => [
          ...prev, 
          { type: "command", text: `ayush@raj:~$ ${input}` },
          { type: "output", text: matches.join("   ") }
        ]);
      }
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        
        <div className="terminal-window" onClick={handleContainerClick}>
          
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="terminal-btn red"></span>
              <span className="terminal-btn yellow"></span>
              <span className="terminal-btn green"></span>
            </div>
            <div className="terminal-title mono">ayush@raj: ~</div>
          </div>

          <div className="terminal-body mono" ref={terminalBodyRef}>
            {history.map((line, index) => (
              <div key={index} className={`terminal-line ${line.type}`}>
                {line.text}
              </div>
            ))}
            
            {!isBooting && (
              <div className="terminal-input-line">
                <span className="prompt">ayush@raj:~$ </span>
                <input
                  ref={inputRef}
                  type="text"
                  className="terminal-input mono"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
