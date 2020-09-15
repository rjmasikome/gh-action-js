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
            head: core.getInput('head-branch'),
            base: core.getInput('base-branch'),
            title: core.getInput('pr-title'),
            body: core.getInput('pr-body'),
        });
    } catch (error) {
        console.log("Owner:", github.context.repo.owner);
        console.log("Repo:", github.context.repo.repo);
        console.log("Head:", core.getInput('head-branch'));
        console.log("Base:", core.getInput('base-branch'));
        console.log("Body:", core.getInput('pr-body'));
        console.log(error);
        core.setFailed(error.message);
    }
})();