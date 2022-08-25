const fs = require("fs");
const path = require("path");
const glob = require("glob");
const esbuild = require("esbuild");
const { nodeExternalsPlugin } = require("esbuild-node-externals");
const pkg = require("./package.json");

const FILES = glob.sync("src/Styled-Components/**/*.js", {
  ignore: ["src/**/*.stories.js"],
});

// Take out unneeded keys of package.json to create build package.json
const { scripts, devDependencies, ...buildPkg } = pkg;
buildPkg.main = "index.js";

// Copy build package.json

fs.mkdir(path.resolve(__dirname, 'dist'), (err) => {
  if (err) {
    console.log(err, 'mkdir');
    process.exit(1);
  }

  fs.writeFile(
    path.resolve(__dirname, "dist", "package.json"),
    JSON.stringify(buildPkg, null, "\t"),
    (err) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log("package.json was created at dist/package.json");
    }
  );
});


esbuild.build({
  entryPoints: FILES,
  outdir: "dist",
  splitting: true,
  format: "esm",
  logLevel: "info",
  loader: { ".js": "jsx" },
  sourcemap: true,
  plugins: [nodeExternalsPlugin()],
})
.catch(() => process.exit(1));
