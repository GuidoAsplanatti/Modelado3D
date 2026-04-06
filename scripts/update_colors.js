const fs = require('fs');
const path = require('path');

const DIRECTORY = path.join(__dirname, '../apps/web/src'); // use proper relative path

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace specific Hex Strings
    content = content.replace(/#0369a1/gi, '#8BC756'); // Base blue -> new Green
    content = content.replace(/#0284c7/gi, '#6A9941'); // Hover blue -> Hover dark Green
    
    // Accessibility check: bg-[#8BC756] with text-white is hard to read.
    // So let's replace text-white with text-slate-900 when used alongside bg-[#8BC756]
    // We'll run a regex that captures className="..." and replaces text-white if it contains bg-[#8BC756]
    content = content.replace(/className=["'\`][^"'\`]*["'\`]/g, (match) => {
        if (match.includes('bg-[#8BC756]')) {
             return match.replace(/text-white/g, 'text-slate-900');
        }
        return match;
    });

    // Custom tailwind classes found
    content = content.replace(/bg-blue-50/g, 'bg-[#8BC756]/10');
    
    // CSS Variables naming
    content = content.replace(/arch-blue/g, 'arch-green');
    
    // RGBA shadow fix
    content = content.replace(/rgba\(3,\s*105,\s*161/g, 'rgba(139, 199, 86');

    // HSL variable fixes over index.css globally
    if (filePath.endsWith('index.css')) {
        // Light mode
        content = content.replace(/--primary: 199 89% 38%;/g, '--primary: 92 50% 56%;');
        content = content.replace(/--primary-foreground: 0 0% 100%;/g, '--primary-foreground: 222 47% 11%;'); // Dark text on light green
        content = content.replace(/--ring: 199 89% 38%;/g, '--ring: 92 50% 56%;');
        content = content.replace(/--accent: 199 100% 39%;/g, '--accent: 92 50% 56%;');
        content = content.replace(/--accent-foreground: 0 0% 100%;/g, '--accent-foreground: 222 47% 11%;');
        content = content.replace(/--arch-green: 199 89% 38%;/g, '--arch-green: 92 50% 56%;'); // After arch-blue replacement
        content = content.replace(/--arch-green-light: 199 98% 48%;/g, '--arch-green-light: 92 45% 45%;');

        // Dark mode overrides
        content = content.replace(/--primary: 199 98% 48%;/g, '--primary: 92 50% 56%;');
        content = content.replace(/--ring: 199 98% 48%;/g, '--ring: 92 50% 56%;');
        content = content.replace(/--accent: 199 89% 38%;/g, '--accent: 92 50% 56%;');
        content = content.replace(/--sidebar-primary: 199 76.3% 48%;/g, '--sidebar-primary: 92 50% 56%;');
        
        // Also any remaining occurrences of primary blue HSL in index.css
        content = content.replace(/199 89% 38%/g, '92 50% 56%');
        content = content.replace(/199 98% 48%/g, '92 50% 56%');
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated:', filePath);
    }
}

function traverse(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverse(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
            replaceInFile(fullPath);
        }
    }
}

traverse(DIRECTORY);
console.log('Color updates completed.');
