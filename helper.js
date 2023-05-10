fs = require("fs");

let repos = [
  "pt-ruby",
  "pt-kubernetes",
  "pt-rust",
  "pt-vscode",
  "pt-tensorflow",
  "pt-terraform",
  "pt-rails",
  "pt-discourse",
  "pt-symfony",
  "pt-Sylius",
  "pt-elasticsearch",
  "pt-gatsby",
  "pt-yii2",
  "pt-grafana",
  "pt-sentry",
  "pt-django",
  "pt-node",
  "pt-ccxt",
  "pt-aspnetcore",
  "pt-flutter",
  "pt-react",
  "pt-storybook",
  "pt-material-ui",
  "pt-bolt",
  "pt-spree",
  "pt-playframework",
  "pt-nopCommerce",
  "pt-fastlane",
  "pt-generator-jhipster",
  "pt-monica",
  "pt-diaspora",
  "pt-django-oscar",
  "pt-minio",
  "pt-hugo",
  "pt-october",
  "pt-curl",
  "pt-deno",
  "pt-gitbucket",
  "pt-wagtail",
  "pt-vapor",
  "pt-eladmin",
  "pt-spring-boot-demo",
  "pt-actix-web",
  "pt-Rocket",
  "pt-CocoaPods",
  "pt-yew",
  "pt-bat",
  "pt-administrate",
  "pt-devise",
  "pt-IdentityServer4",
  "pt-grav",
  "pt-Slim",
  "pt-laravel",
  "pt-flarum",
  "pt-saleor",
  "pt-solidity",
  "pt-django-cms",
  "pt-ReactiveUI",
  "pt-T-MVP",
  "pt-caddy",
  "pt-truffle",
  "pt-guava",
  "pt-flask",
  "pt-gin",
  "pt-django-rest-framework",
  "pt-next.js",
  "pt-core",
  "pt-ueberauth",
  "pt-phoenix",
  "pt-guardian",
  "pt-Ocelot",
  "pt-django-shop",
  "pt-OnlineJudge",
  "pt-cabot",
  "pt-SmartStoreNET",
  "pt-flatbuffers",
  "pt-server",
  "pt-glide",
  "pt-okhttp",
  "pt-griddb"
];

let circleCiConfigFile = `version: 2.1

executors:
  ruby:
    docker:
      - image: circleci/ruby:2.5.1
    working_directory: ~/load-tests

jobs:
  build:
    executor: ruby
    steps:
      - checkout
      - restore_cache:
          keys:
            - v2-dependencies-{{ checksum "Gemfile.lock" }}
            - v2-dependencies-
      - run:
          name: install dependencies
          command: bundle install --jobs=4 --retry=3 --path vendor/bundle
      - save_cache:
          paths:
            - vendor/bundle
          key: v2-dependencies-{{ checksum "Gemfile.lock" }}
      - persist_to_workspace:
          root: ~/
          paths:
            - load-tests
`;

let circleCiConfigFileWorkFlows = `

workflows:
  version: 2
  run-all-load-tests:
    jobs:
      - build`;

function createGitHubSpec(i, repo) {
  let content = `require 'spec_helper'
require 'git'
require 'octokit'
require 'pry'
require 'logger'

describe 'Opening a PR' do
    def log(msg)
        puts "> #{msg}"
    end

    def setup_variables
        @sleep_time = 30
        @attempts = 40
        @repo_under_test = '${repo}'
        @gh_organization = 'guardrails-test'
        if ENV["GR_ENV"] == 'production'
            @guard_rails_bot_name = 'guardrails[bot]'
        else
            @guard_rails_bot_name = 'guardrails-staging-k8s[bot]'
        end
        @github_client = Octokit::Client.new(access_token: ENV['GH_ACCESS_TOKEN'])
        @git_repo_uri = "https://#{ENV['GH_ACCESS_TOKEN']}@github.com/#{@gh_organization}/#{@repo_under_test}.git"
        @gh_slug = "#{@gh_organization}/#{@repo_under_test}"
        @branch_name = "load-test"
        @repo_path_checkout_path = "/tmp/checkout/#{Time.now.to_i}"
        @repo_path = "#{@repo_path_checkout_path}/#{@repo_under_test}"
    end

    def clean_up_github
      begin
        @github_client.delete_branch(@gh_slug, @branch_name)
      rescue
      end
    end

    before(:all) do
        setup_variables
        clean_up_github
        @git = Git.clone(@git_repo_uri, @repo_under_test, path: @repo_path_checkout_path, log: Logger.new(STDOUT))
        @git.config('user.name', 'GuardRails Load Tester')
        @git.config('user.email', 'test@guardrails.io')
        @git.branch(@branch_name).checkout
        delete_workflows(@repo_path)
        create_file("#{@repo_path}/test.file", '// nothing to see here')
        @git.add(all: true)
        @git.commit('test(run): trigger load test run [ci skip]')
        @git.push(@git.remote.name, @branch_name)
        @default_branch = @github_client.repo(@gh_slug.to_s).default_branch;
        @pull_request = @github_client.create_pull_request(@gh_slug.to_s, @default_branch, @branch_name, 'Load testing ', "Automated load test.\n https://github.com/guardrailsio/guardrails-load-tests")
    end

    after(:all) do
        setup_variables
        clean_up_github
    end

    it 'completes the scan' do
      for i in 1..@attempts
        log("Sleeping for #{@sleep_time}s ##{i}/#{@attempts}")
        sleep(@sleep_time)
        @statuses = @github_client.statuses(@gh_slug, "load-test");
        @status = @statuses.find { |s| s[:creator][:login] == @guard_rails_bot_name}
        @pending = false
        if (@status && @status.state == "pending" && @status.description.include?("task queued"))
            log("Scan Status: #{@status.description}. --> Resetting timeout counter");
            @pending = true
        else
            log("Scan Status: #{@status.description}.");
        end
        redo if @pending
        break if (@status.state == "success" || @status.state == "failure" )
      end
      expect(@status.state).to eq("success").or eq ("failure")
    end
end`;

  try {
    repo = repo.replace(/\./gi, "-");
    fs.writeFileSync(`spec/${i}_gh_${repo}_pull_request_spec.rb`, content);
  } catch (e) {
    console.log("Error has ocurred,", e);
  }
}

function createGitLabSpec(i, repo) {
  let content = `require 'spec_helper'
require 'git'
require 'gitlab'
require 'pry'
require 'logger'

describe 'Opening a PR' do
    def log(msg)
        puts "> #{msg}"
    end

    def setup_variables
        @sleep_time = 30
        @attempts = 40
        @gitlab_client = Gitlab.client(endpoint: 'https://gitlab.com/api/v4', private_token: ENV['GL_ACCESS_TOKEN'])

        @gl_organization = 'gr-integration-testing'
        @repo_under_test = '${repo}'
        @git_repo_uri = "https://oauth2:#{ENV['GL_ACCESS_TOKEN']}@gitlab.com/#{@gl_organization}/#{@repo_under_test}.git"

        @gl_slug = "#{@gl_organization}/#{@repo_under_test}"
        @branch_name = "load-test"
        @repo_path_checkout_path = "/tmp/checkout/#{Time.now.to_i}"
        @repo_path = "#{@repo_path_checkout_path}/#{@repo_under_test}"
    end

    def clean_up_gitlab
        current_branches = @gitlab_client.branches(@gl_slug).auto_paginate.map { |b| b.name }
        @gitlab_client.delete_branch(@gl_slug, @branch_name) if current_branches.include?(@branch_name)
    end

    before(:all) do
        setup_variables
        clean_up_gitlab
        @git = Git.clone(@git_repo_uri, @repo_under_test, path: @repo_path_checkout_path, log: Logger.new(STDOUT))
        @git.config('user.name', 'Mister S')
        @git.config('user.email', 'stefan@omg.lol')
        @git.branch(@branch_name).checkout
        create_file("#{@repo_path}/src/test.js", '// nothing to see here')
        @git.add(all: true)
        @git.commit('test(run): trigger load test run [ci skip]')
        @git.push(@git.remote.name, @branch_name)

        @merge_request = @gitlab_client.create_merge_request(@gl_slug.to_s, 'Load testing', { 'source_branch': @branch_name, 'target_branch': 'master'})
    end

    after(:all) do
        setup_variables
        clean_up_gitlab
    end

    xit 'creates a comment with the result' do
        (1..@attempts).each do |i|
            log("Sleeping for #{@sleep_time}s ##{i}")
            sleep(@sleep_time)
            # https://docs.gitlab.com/ee/api/commits.html#list-the-statuses-of-a-commit
        end
        expect(true).to be true
    end
end`;

  try {
    repo = repo.replace(/\./gi, "-");
    fs.writeFileSync(`spec/${i}_gl_${repo}_pull_request_spec.rb`, content);
  } catch (e) {
    console.log("Error has ocurred,", e);
  }
}

function createCircleCiConfig(i, provider, repo) {
  repo = repo.replace(/\./gi, "-");
  let repoJob = `  run-${i}-${provider}-${repo}:
    executor: ruby
    steps:
      - attach_workspace:
          at: ~/
      - run: gem install bundler -v 1.17.3
      - run: bundle --path vendor/bundle
      - run: bash test.sh ${i}_${provider}_${repo}
`;

  circleCiConfigFile = circleCiConfigFile + repoJob;
  let workflowJob = `
      - run-${i}-${provider}-${repo}:
          requires:
            - build`;
  circleCiConfigFileWorkFlows = circleCiConfigFileWorkFlows + workflowJob;
}

let i = 1;

repos.map((repo) => {
  createGitHubSpec(i, repo);
  // Todo: add repos to gitlab and uncomment
  // createGitLabSpec(i, repo);
  createCircleCiConfig(i, "gh", repo);
  i++;
});
try {
  fs.writeFileSync(
    `.circleci/config.yml`,
    circleCiConfigFile + circleCiConfigFileWorkFlows
  );
} catch (e) {
  console.log("Error has ocurred,", e);
}
