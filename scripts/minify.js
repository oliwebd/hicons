#!/usr/bin/env node
import { promises as fs } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { optimize } from "svgo";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Source and destination folders
const SRC_DIR = join(__dirname, "./public/lucide/icons");
const DEST_DIR = join(__dirname, "./lucide/icons");

async function copyAndMinify() {
  // Ensure destination exists
  await fs.mkdir(DEST_DIR, { recursive: true });

  // Read all SVG files
  const files = await fs.readdir(SRC_DIR);
  const svgFiles = files.filter(f => f.endsWith(".svg"));

  for (const file of svgFiles) {
    const srcPath = join(SRC_DIR, file);
    const destPath = join(DEST_DIR, file);

    // Read SVG
    const content = await fs.readFile(srcPath, "utf-8");

    // Minify
    const result = optimize(content, {
      path: srcPath,
      multipass: true,
      plugins: [
        "removeDoctype",
        "removeComments",
        "removeMetadata",
        "removeTitle",
        "removeDesc",
        "removeDimensions",
        "removeXMLNS",
      ],
    });

    // Write minified SVG
    await fs.writeFile(destPath, result.data, "utf-8");
    console.log(`✅ ${file} copied & minified`);
  }

  console.log(`✨ All SVGs copied to ${DEST_DIR}`);
}

await copyAndMinify();
