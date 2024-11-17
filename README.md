# JavaScript to Typed JavaScript Conversion

This repository demonstrates the process of converting plain JavaScript code into typed JavaScript without using TypeScript or changing the file extension. The project includes multiple branches to organize the workflow.

## Repository Structure

- Main Branch (`main`): Stable branch with the finalized content.
- Development Branch (`develop`): Branch for ongoing development and integration.
- Feature Branch (`feature/js-to-ts`): Contains the main implementation of JavaScript code with added types.

## Project Workflow

1. Create Branches:
   - main: Stable branch.
   - develop: Integration branch.
   - feature/js-to-ts: Branch to work on the implementation of types in JavaScript.

2. Initial Setup:
   - A basic README.md file was created to describe the project.

3. Feature Implementation:
   - The file index.js was added in the feature/js-to-ts branch containing 200 lines of JavaScript code.
   - Types (number, string, boolean) were added to this JavaScript code using JSDoc comments.

4. Pull Request & Merge:
   - A Pull Request (PR) was created to merge the feature/js-to-ts branch into the develop branch.
   - Once reviewed and approved, the PR was merged into develop.

## File Overview

### index.js
This file contains:
- Original JavaScript code with added JSDoc annotations for type definitions.
- Examples include functions, arrays, and objects with explicit type declarations.

### README.md
The current file, explaining the structure and purpose of the repository.

## Example Code Snippet

```javascript
/
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/
 * @param {string} name
 * @returns {void}
 */
function greet(name) {
  console.log(Hello, ${name}!);
}
```

# Author: Sergei Shap1k