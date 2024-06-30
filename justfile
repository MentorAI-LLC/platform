alias r := run

setup:
    pre-commit install
    pnpm install

run:
    pnpm dev
