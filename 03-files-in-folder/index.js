const { readdir, stat } = require('node:fs/promises');
const path = require('node:path');

async function filesInDir() {
  try {
    const files = await readdir(path.join(__dirname, 'secret-folder'), {
      withFileTypes: true,
    });

    files.forEach(async (file) => {
      if (file.isFile()) {
        const fileStat = await stat(
          path.join(__dirname, 'secret-folder', file.name),
        )
          .then((stat) => stat)
          .catch((err) => console.error(err.message));

        const extName = path.extname(file.name);
        console.log(
          `${path.basename(file.name, extName)} - ${extName.slice(1)} - ${
            fileStat.size / 1000
          }kb`,
        );
      }
    });
  } catch (err) {
    console.error(err.message);
  }
}

filesInDir();
