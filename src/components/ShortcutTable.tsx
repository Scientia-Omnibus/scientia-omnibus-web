import { Language } from '../types';
import { GuideShortcut, GuideCommand } from '../data/scientia-core-guide';

function Key({ children }: { children: string }) {
  const parts = children.split(' / ');
  return (
    <span className="inline-flex flex-wrap gap-1">
      {parts.map((part, i) => (
        <span key={i} className="inline-flex items-center">
          {i > 0 && <span className="text-stone-400 mx-0.5 text-[10px]">/</span>}
          <kbd className="px-1.5 py-0.5 bg-stone-100 border border-stone-300 rounded font-mono text-[11px] sm:text-xs text-stone-800 whitespace-nowrap">
            {part.trim()}
          </kbd>
        </span>
      ))}
    </span>
  );
}

export function ShortcutTable({ shortcuts, language }: { shortcuts: GuideShortcut[]; language: Language }) {
  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full text-sm border-collapse">
        <tbody>
          {shortcuts.map((row, i) => (
            <tr key={i} className="border-b border-stone-200 last:border-0">
              <td className="py-2 pr-4 align-top w-[45%] sm:w-[40%]">
                <Key>{row.keys}</Key>
              </td>
              <td className="py-2 text-stone-700 align-top">{row.action[language]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CommandTable({ commands, language }: { commands: GuideCommand[]; language: Language }) {
  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b-2 border-stone-300 text-left text-xs uppercase tracking-wider text-stone-500">
            <th className="py-2 pr-3 font-semibold">Command</th>
            <th className="py-2 pr-3 font-semibold">Aliases</th>
            <th className="py-2 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody>
          {commands.map((row) => (
            <tr key={row.command} className="border-b border-stone-200 last:border-0">
              <td className="py-2 pr-3 align-top">
                <code className="font-mono text-xs bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200">
                  {row.command}
                </code>
              </td>
              <td className="py-2 pr-3 align-top font-mono text-xs text-stone-500">{row.aliases}</td>
              <td className="py-2 text-stone-700 align-top">{row.description[language]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
