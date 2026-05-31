"use client"

import { useState, useCallback } from "react"
import { Copy, Check } from "lucide-react"

type Token = { type: string; value: string }

function tokenize(code: string): Token[] {
  const tokens: Token[] = []
  const re = /(#[^\n]*|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\$\{[^}]+\}|\$\w+|\b(?:for|while|if|then|else|elif|fi|do|done|in|case|esac|function|select|until|return|continue|break|exit|and|or|not)\b|\b\d+\b|&&|\|\||[|&;])/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(code)) !== null) {
    if (m.index > last) {
      tokens.push({ type: "plain", value: code.slice(last, m.index) })
    }
    const v = m[1]
    if (v[0] === "#") tokens.push({ type: "comment", value: v })
    else if (v[0] === '"' || v[0] === "'") tokens.push({ type: "string", value: v })
    else if (v[0] === "$") tokens.push({ type: "variable", value: v })
    else if (/^\d+$/.test(v)) tokens.push({ type: "number", value: v })
    else if (/^(?:for|while|if|then|else|elif|fi|do|done|in|case|esac|function|select|until|return|continue|break|exit)$/.test(v))
      tokens.push({ type: "keyword", value: v })
    else tokens.push({ type: "operator", value: v })
    last = re.lastIndex
  }
  if (last < code.length) tokens.push({ type: "plain", value: code.slice(last) })
  return tokens
}

const styles: Record<string, string> = {
  comment: "text-emerald-400/70",
  string: "text-lime-300",
  variable: "text-cyan-300",
  number: "text-orange-300",
  keyword: "text-purple-300",
  operator: "text-pink-300",
  plain: "text-gray-200",
}

export default function ScriptBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(() => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  const tokens = tokenize(code)

  return (
    <div className="group relative">
      <button
        onClick={copy}
        className="absolute right-2 top-2 z-10 flex size-7 items-center justify-center rounded-sm border border-border bg-muted text-muted-foreground opacity-0 transition-opacity hover:bg-accent hover:text-accent-foreground group-hover:opacity-100"
        aria-label="Copier le script"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
      <pre className="code-scrollbar overflow-x-auto rounded-sm border border-border bg-[#1e1e2e] p-4 text-xs leading-none font-mono">
        <code>
          {tokens.map((t, i) => (
            <span key={i} className={styles[t.type]}>
              {t.value}
            </span>
          ))}
        </code>
      </pre>
    </div>
  )
}
