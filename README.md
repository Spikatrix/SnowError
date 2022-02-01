# Snowpack dev error

Snowpack fails to build on running `snowpack dev` with a `ParseError` but works just fine with `snowpack build`

# Usage

    git clone git@github.com:Spikatrix/SnowError.git
    cd SnowError
    yarn install
    yarn start  # Fails

Output after visiting [`http://localhost:8080`](http://localhost:8080):

    yarn run v1.22.10
    $ snowpack dev
    [11:57:54] [snowpack] Ready!
    [11:57:54] [snowpack] Server started in 17ms.
    [11:57:54] [snowpack] Local: http://localhost:8080
    [11:57:54] [snowpack] Network: http://192.168.1.200:8080
    [11:57:54] [@snowpack/plugin-typescript] 10:56:54 AM - Starting compilation in watch mode...
    [11:57:56] [@snowpack/plugin-typescript] 10:56:56 AM - Found 0 errors. Watching for file changes.
    [11:57:56] [snowpack] @apollo/client/core: Unscannable package import found.
    Snowpack scans source files for package imports at startup, and on every change.
    But, sometimes an import gets added during the build process, invisible to our file scanner.
    We'll prepare this package for you now, but should add "@apollo/client/core" to "knownEntrypoints"
    in your config file so that this gets prepared with the rest of your imports during startup.
    [11:57:56] [snowpack] @apollo/client/link/http: Unscannable package import found.
    Snowpack scans source files for package imports at startup, and on every change.
    But, sometimes an import gets added during the build process, invisible to our file scanner.
    We'll prepare this package for you now, but should add "@apollo/client/link/http" to "knownEntrypoints"
    in your config file so that this gets prepared with the rest of your imports during startup.
    [11:57:56] [snowpack] + @apollo/client/core@3.5.8
    [11:57:56] [snowpack] + @apollo/client/link/http@3.5.8
    [11:57:56] [snowpack] Error: Parse error @:2173:486
        at parse (/home/jas/Documents/Code/SnowError/node_modules/es-module-lexer/dist/lexer.cjs:1:402)
        at Object.scanCodeImportsExports (/home/jas/Documents/Code/SnowError/node_modules/snowpack/lib/cjs/rewrite-imports.js:21:29)
        at /home/jas/Documents/Code/SnowError/node_modules/snowpack/lib/cjs/sources/local.js:587:59
        at async PackageSourceLocal.buildPackageImport (/home/jas/Documents/Code/SnowError/node_modules/snowpack/lib/cjs/sources/local.js:454:30)
        at async PackageSourceLocal.resolvePackageImport (/home/jas/Documents/Code/SnowError/node_modules/snowpack/lib/cjs/sources/local.js:691:9)
        at async resolveImport (/home/jas/Documents/Code/SnowError/node_modules/snowpack/lib/cjs/sources/local.js:303:20)
        at async /home/jas/Documents/Code/SnowError/node_modules/snowpack/lib/cjs/sources/local.js:306:37
        at async /home/jas/Documents/Code/SnowError/node_modules/snowpack/lib/cjs/rewrite-imports.js:47:31
        at async Promise.all (index 0)
        at async transformEsmImports (/home/jas/Documents/Code/SnowError/node_modules/snowpack/lib/cjs/rewrite-imports.js:39:5) {
    idx: 102024
    }
    [11:57:56] [snowpack] Error: Parse error @:2173:486
    [11:57:56] [snowpack] [500] /_snowpack/pkg/apollo-upload-client.v17.0.0.js
    ⠼ watching for file changes...

Running `yarn build` and running the built application works just fine without any issues
