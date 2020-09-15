"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const github = require("@actions/github");
const rest_1 = require("@octokit/rest");
const auth = core.getInput('authentication');
const octokit = auth ? new rest_1.Octokit({ auth }) : new rest_1.Octokit();
(async () => {
    try {
        await octokit.pulls.create({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            head: core.getInput('head-branch'),
            base: core.getInput('base-branch'),
            title: core.getInput('pr-title'),
            body: core.getInput('pr-body'),
        });
    }
    catch (error) {
        console.log(error);
        core.setFailed(error.message);
    }
})();
//# sourceMappingURL=index.js.map