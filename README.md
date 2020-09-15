# Simple PR Create Github Action
GH Action based on NodeJS to create a Pull Request based on octokit. 

In order to run GH Action based on NodeJS `node_modules` needs to be included in the repository. Since this is a TypeScript based Action, the output of transpiling also needs to be included.

## How to use it
On your action, you just need to include this in the steps
```
# Test GH Action JS
    -   uses: rjmasikome/simple-pr-create@v1
        with:
            authentication: ${{ secrets.GITHUB_TOKEN }}
            head: head-branch
            title: PR Create from GH Action
            body: This Pull Request is created by BOT
```