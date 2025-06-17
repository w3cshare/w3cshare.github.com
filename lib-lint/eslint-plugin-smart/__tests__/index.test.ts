/// <reference types="jest" />

import { ESLint } from 'eslint'
import config from '../src/index'
import type { ESLint as ESLintType } from 'eslint'

describe('ESLint Config Tests', () => {
  let eslint: ESLint

  beforeEach(() => {
    eslint = new ESLint({
      baseConfig: config,
      useEslintrc: false as const,
      ignore: false,
    } as ESLintType.Options)
  })

  test('loads config correctly', () => {
    expect(Array.isArray(config)).toBe(true)
    expect(config.length).toBeGreaterThan(0)
  })

  test('validates TypeScript code', async () => {
    const code = `
      interface User {
        name: string;
        age: number;
      }
      
      const user: User = {
        name: 'John',
        age: 30
      };
      
      console.log(user);
    `
    const results = await eslint.lintText(code, {
      filePath: 'test.ts',
    })
    expect(results[0].errorCount).toBe(0)
  })

  test('validates Vue component', async () => {
    const code = `
      <template>
        <div>{{ message }}</div>
      </template>
      
      <script lang="ts">
      import { defineComponent } from 'vue'
      
      export default defineComponent({
        name: 'HelloWorld',
        props: {
          message: {
            type: String,
            required: true
          }
        }
      })
      </script>
    `
    const results = await eslint.lintText(code, {
      filePath: 'test.vue',
    })
    expect(results[0].errorCount).toBe(0)
  })

  test('validates React component', async () => {
    const code = `
      import React from 'react';
      
      interface Props {
        name: string;
      }
      
      export const Greeting: React.FC<Props> = ({ name }) => {
        return <h1>Hello, {name}!</h1>;
      };
    `
    const results = await eslint.lintText(code, {
      filePath: 'test.tsx',
    })
    expect(results[0].errorCount).toBe(0)
  })

  test('enforces import sorting', async () => {
    const code = `
      import { z } from 'zod';
      import { a } from 'a';
      import { b } from 'b';
    `
    const results = await eslint.lintText(code, {
      filePath: 'test.ts',
    })
    expect(results[0].messages.some(m => m.ruleId === 'sort-imports')).toBe(true)
  })

  test('detects unused imports', async () => {
    const code = `
      import { useState } from 'react';
      import { z } from 'zod';
      
      export const Component = () => {
        return <div>Hello</div>;
      };
    `
    const results = await eslint.lintText(code, {
      filePath: 'test.tsx',
    })
    expect(results[0].messages.some(m => m.ruleId === 'no-unused-vars')).toBe(true)
  })

  test('validates NestJS code', async () => {
    const code = `
      import { Controller, Get } from '@nestjs/common';
      
      @Controller('users')
      export class UsersController {
        @Get()
        findAll() {
          return [];
        }
      }
    `
    const results = await eslint.lintText(code, {
      filePath: 'test.ts',
    })
    expect(results[0].errorCount).toBe(0)
  })
})
