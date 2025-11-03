# Math Kangaroo Lessons - Organization Guide

This directory contains Math Kangaroo lesson materials organized by lesson number.

## Directory Structure

Each lesson should be organized in its own subdirectory following this pattern:

```
math-kangaroo/
├── index.html              # Main page linking to all lessons
├── lesson1/
│   ├── index.html         # Lesson 1 page with links to materials
│   └── [lesson files]     # PDFs, PPTXs, and other materials
├── lesson2/
│   ├── index.html         # Lesson 2 page with links to materials
│   └── [lesson files]
├── lesson3/
│   ├── index.html         # Lesson 3 page with links to materials
│   └── [lesson files]
└── README.md              # This file
```

## Adding a New Lesson

When new lesson materials are added to the `math-kangaroo` directory, follow these steps:

### 1. Create a Lesson Directory
```bash
mkdir -p math-kangaroo/lessonN
```
Replace `N` with the lesson number.

### 2. Move Lesson Files
Move all PDFs, presentations, and other materials for that lesson into the new directory:
```bash
mv "Lesson N - [Title].pdf" lessonN/
```

### 3. Create Lesson Index Page
Create an `index.html` file inside the lesson directory with this pattern:

```html
<h1>Lesson N</h1>
<a href="/math-kangaroo/lessonN/[filename1].pdf" target="_blank">[filename1].pdf</a><br><br>
<a href="/math-kangaroo/lessonN/[filename2].pptx" target="_blank">[filename2].pptx</a><br><br>
```

**Important**: 
- List each file with its full name
- Use absolute paths starting with `/math-kangaroo/`
- Add `target="_blank"` to open files in new tabs
- Add `<br><br>` after each link for spacing

### 4. Update Main Index
Add a link to the new lesson in `/math-kangaroo/index.html`:

```html
<a target="_blank" href="/math-kangaroo/lessonN/index.html">Lesson N</a><br><br>
```

## File Naming Conventions

- Lesson materials typically follow patterns like:
  - `Lesson N - [Topic] - Grade X-Y - Presentation.pdf`
  - `LN - [Topic] - Grade X-Y Presentation.pdf`
  - Keep original filenames intact when creating links

## Example

See `lesson1/`, `lesson2/`, or `lesson3/` directories for reference implementations of this structure.

