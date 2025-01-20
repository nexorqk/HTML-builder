const fs = require('node:fs/promises');
const { join } = require('node:path');

async function copyFiles() {
  try {
    await fs.mkdir(join(__dirname, 'files-copy'), { recursive: true });

    const filesCopy = await fs.readdir(join(__dirname, 'files-copy'));
    filesCopy.forEach(async (fileCopy) => {
      await fs.unlink(join(__dirname, 'files-copy', fileCopy));
    });

    const files = await fs.readdir(join(__dirname, 'files'));
    files.forEach(async (file) => {
      await fs.copyFile(
        join(__dirname, 'files', file),
        join(__dirname, 'files-copy', file),
      );
    });
  } catch (err) {
    console.log(err);
  }
}

copyFiles();
