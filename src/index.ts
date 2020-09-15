import * as core from '@actions/core';
import * as github from '@actions/github';
import { Octokit } from '@octokit/rest';

const auth = core.getInput('authentication');
const octokit = auth ? new Octokit({auth}) : new Octokit();

(async () => {
    try {
        await octokit.pulls.create({
            owner: github.context.repo.owner,
            repo: github.context.repo.repo,
            head: core.getInput('head'),
            base: core.getInput('base'),
            title: core.getInput('title'),
            body: core.getInput('body'),
        });
    } catch (error) {
        console.log(error);
        core.setFailed(error.message);
    }
})();