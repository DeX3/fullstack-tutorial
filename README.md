# Forked version of the apollo tutorial to showcase an issue with `apollo codegen:generate`

To reproduce:

1. Go to the client directory:

``` bash
$ cd final/client
```

3. Install dependencies:

``` bash
$ yarn # or npm install
```

4. Run `apollo codegen:generate`:

``` bash
 $ npx apollo codegen:generate --target flow --includes src/sample-queries.js --localSchemaFile schema.json
  ✔ Loading Apollo Project
  ✔ Generating query files with 'flow' target - wrote 1 files
```

There are two queries defined in `src/sample-queries.js`, a valid one
(which is correctly picked up by apollo-cli) and one with a syntax
error, which is silently ignored - which might be a problem.
