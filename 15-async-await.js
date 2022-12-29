const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  const first = await readFile("./content/first.txt", "utf-8");
  const second = await readFile("./content/second.txt", "utf-8");

  await writeFile(
    "./content/result-mind-grenade.txt",
    `This is awesome: ${first}, ${second}`
  );

  console.log(first, second);
};
start();
