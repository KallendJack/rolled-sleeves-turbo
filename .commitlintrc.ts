import type { UserConfig } from '@commitlint/types/lib'

const commitlintConfig: UserConfig = {
    extends: ['@commitlint/config-conventional'],
}

module.exports = commitlintConfig
