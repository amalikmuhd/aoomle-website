import { readFileSync, readdirSync, statSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const FORBIDDEN = [
  /xavatech/i,
  /xava\s+technology/i,
  /adewale@xavatech/i,
  /osogbo/i,
  /ademab/i,
  /thermocool/i,
  /agunbelewo/i,
]

const SCAN_DIRS = ['src', 'public']
const EXTENSIONS = new Set(['.ts', '.tsx', '.html', '.css', '.json', '.md'])

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (entry === 'node_modules' || entry === 'dist' || entry === '.git') continue
    const st = statSync(full)
    if (st.isDirectory()) walk(full, files)
    else if (EXTENSIONS.has(extname(entry))) files.push(full)
  }
  return files
}

const violations = []

for (const dir of SCAN_DIRS) {
  const base = join(root, dir)
  for (const file of walk(base)) {
    if (file.endsWith('brand.json') || file.includes('verify-brand')) continue
    const text = readFileSync(file, 'utf8')
    for (const pattern of FORBIDDEN) {
      if (pattern.test(text)) {
        violations.push({ file: file.replace(root + '/', ''), pattern: pattern.source })
      }
    }
  }
}

if (violations.length > 0) {
  console.error('Forbidden third-party brand references found:')
  for (const v of violations) {
    console.error(`  - ${v.file} (matched ${v.pattern})`)
  }
  process.exit(1)
}

console.log('Brand verification passed — no Xava references found.')
