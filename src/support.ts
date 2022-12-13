/// <reference types="cypress" />

// shortcuts to a few Lodash methods
const { get, filter, map, uniq } = Cypress._

const { SidekickApi, SidekickTestApi } = require('@runsidekick/sidekick-client');

let sidekickApiClient: any;
let sidekickTestModeClient: any;

const initSidekickApiClient = () => {
    // @ts-ignore
    const sidekickApiKey = Cypress.config('sidekickApiKey');
    // @ts-ignore
    const sidekickApiToken = Cypress.config('sidekickApiToken');
    sidekickApiClient = new SidekickApi({ apiKey: sidekickApiKey, apiToken: sidekickApiToken }, 'https://api.service.runsidekick.me');
}

const initSidekickTestModeClient = () => {
    // @ts-ignore
    const apiKey = Cypress.config('sidekickTestModeApiKey');
    // @ts-ignore
    const sidekickTestModeHost = Cypress.config('sidekickTestModeHost');
    // @ts-ignore
    const sidekickTestModePort = Cypress.config('sidekickTestModePort');
    sidekickTestModeClient = new SidekickTestApi({ apiKey: apiKey }, sidekickTestModeHost, sidekickTestModePort);
}

Cypress.on('test:before:run', () => {
    initSidekickApiClient();
    initSidekickTestModeClient();
});

Cypress.Commands.add('getAllApplications', (params) => {
    return sidekickApiClient.getAllApplications(params);
});

Cypress.Commands.add('getAllTracepoints', () => {
    return sidekickApiClient.getAllTracepoints();
});

Cypress.Commands.add('putTracepoint', (params) => {
    return sidekickApiClient.putTracepoint(params);
});

Cypress.Commands.add('removeTracepoint', (tracepointLocation) => {
    return sidekickApiClient.removeTracepoint(tracepointLocation);
});

Cypress.Commands.add('disableTracepoint', (tracepointLocation) => {
    return sidekickApiClient.disableTracepoint(tracepointLocation);
});

Cypress.Commands.add('enableTracepoint', (tracepointLocation) => {
    return sidekickApiClient.enableTracepoint(tracepointLocation);
});

Cypress.Commands.add('getAllLogpoints', () => {
    return sidekickApiClient.getAllLogpoints();
});

Cypress.Commands.add('putLogpoint', (params) => {
    return sidekickApiClient.putLogpoint(params);
});

Cypress.Commands.add('removeLogpoint', (logpointLocation) => {
    return sidekickApiClient.removeLogpoint(logpointLocation);
});

Cypress.Commands.add('disableLogpoint', (logpointLocation) => {
    return sidekickApiClient.disableLogpoint(logpointLocation);
});

Cypress.Commands.add('enableLogpoint', (logpointLocation) => {
    return sidekickApiClient.enableLogpoint(logpointLocation);
});

Cypress.Commands.add('getAllProbeTags', () => {
    return sidekickApiClient.getAllProbeTags();
});

Cypress.Commands.add('disableProbeTag', (tag) => {
    return sidekickApiClient.disableProbeTag(tag);
});

Cypress.Commands.add('enableProbeTag', (tag) => {
    return sidekickApiClient.enableProbeTag(tag);
});

Cypress.Commands.add('tracepointReferenceEvent', (params) => {
    return sidekickApiClient.tracepointReferenceEvent(params);
});

Cypress.Commands.add('logpointReferenceEvent', (params) => {
    return sidekickApiClient.logpointReferenceEvent(params);
});

Cypress.Commands.add('listEventHistory', (page, size, params) => {
    return sidekickApiClient.listEventHistory(page, size, params);
});

Cypress.Commands.add('getTracePointEvents', (params) => {
    return sidekickTestModeClient.getTracePointEvents(params);
});

Cypress.Commands.add('getTracePointEventsByTag', (tag, params) => {
    return sidekickTestModeClient.getTracePointEventsByTag(tag, params);
});

Cypress.Commands.add('getLogPointEvents', (params) => {
    return sidekickTestModeClient.getLogPointEvents(params);
});

Cypress.Commands.add('getLogPointEventsByTag', (tag, params) => {
    return sidekickTestModeClient.getLogPointEventsByTag(tag, params);
});

Cypress.Commands.add('getErrorSnapshots', (appName) => {
    return sidekickTestModeClient.getErrorSnapshots(appName);
});

Cypress.Commands.add('flush', (eventType) => {
    return sidekickTestModeClient.flush(eventType);
});

Cypress.Commands.add('flushAll', () => {
    return sidekickTestModeClient.flushAll();
});

Cypress.Commands.add('getReferenceEvent', (probeName, params) => {
    return sidekickTestModeClient.getReferenceEvent(probeName, params);
});