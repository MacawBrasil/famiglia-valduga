import fs from "fs/promises";
import path from "path";

export type Entry<T> = {
  data: T;
  slug: string;
};

export async function getContentFromFolder(
  folder: string
): Promise<Entry<any>[]> {
  const files = (await fs.readdir(path.resolve(process.cwd(), folder))).filter(
    (filename) => filename.includes(".")
  );

  const responseFiles = [];

  for (const filename of files) {
    const file = await fs.readFile(
      path.resolve(process.cwd(), `${folder}/${filename}`),
      "utf8"
    );
    const matterData = JSON.parse(file);

    responseFiles.push({
      data: matterData,
      slug: filename.slice(
        filename.lastIndexOf("/") + 1,
        filename.indexOf(".")
      ),
    });
  }

  return responseFiles;
}

export async function getContentFromFile(
  filepath: string
): Promise<Entry<any>> {
  const file = await fs.readFile(path.resolve(process.cwd(), filepath), "utf8");
  const matterData = JSON.parse(file);

  return {
    data: matterData,
    slug: filepath.slice(filepath.lastIndexOf("/") + 1, filepath.indexOf(".")),
  };
}

export async function getCmsEntry(filepath: string) {
  return await getContentFromFile(
    `content/${filepath.replace(/^\/+|\/+$/g, "")}.json`
  );
}

export async function getCmsCollection(path: string) {
  return await getContentFromFolder(
    `content/${path.replace(/^\/+|\/+$/g, "")}`
  );
}