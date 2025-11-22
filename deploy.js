#!/usr/bin/env node

import { publish } from 'gh-pages';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import os from 'os';
import { mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Asegurar que las variables de entorno estén definidas
const homeDir = os.homedir();
const tmpDir = os.tmpdir();

if (!process.env.HOME) {
  process.env.HOME = homeDir;
}
if (!process.env.TMPDIR) {
  process.env.TMPDIR = tmpDir;
}

// Establecer directorio de cache explícitamente
const cacheDir = join(homeDir, '.cache', 'gh-pages');
if (!process.env.CACHE_DIR) {
  process.env.CACHE_DIR = cacheDir;
}
if (!process.env.XDG_CACHE_HOME) {
  process.env.XDG_CACHE_HOME = join(homeDir, '.cache');
}

// Crear el directorio de cache si no existe
try {
  mkdirSync(cacheDir, { recursive: true });
} catch (e) {
  // Ignorar si ya existe
}

const dir = join(__dirname, 'public');

publish(dir, {
  dotfiles: true
}, (err) => {
  if (err) {
    console.error('Error al hacer deploy:', err);
    process.exit(1);
  } else {
    console.log('Deploy completado exitosamente!');
  }
});

