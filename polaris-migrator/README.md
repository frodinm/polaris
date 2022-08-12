# [Polaris Migrator](https://polaris.shopify.com/docs/advanced-features)

[![npm version](https://img.shields.io/npm/v/@shopify/polaris-migrator.svg?style=flat)](https://www.npmjs.com/package/@shopify/polaris-migrator)

Codemod transformations to help upgrade your Polaris codebase.

## Usage

```sh
npx @shopify/polaris-migrator <transform> <path>
```

- `transform` - name of migration, see available migrations on the docs site below.
- `path` - files or directory to perform migration
- `--dry` Do a dry-run, no code will be edited
- `--print` Prints the changed output for comparison
- `--force` Ignores the safety check for a clean git status

## Documentation

Visit [polaris.shopify.com/docs/advanced-features/migrations](https://polaris.shopify.com/docs/migrations) to view available migrations.
